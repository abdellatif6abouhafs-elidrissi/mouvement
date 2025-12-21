#!/usr/bin/env python3
"""
Image Organizer for Mouvement
Analyzes, optimizes, and organizes Ultra images
"""

import os
import sys
import shutil
from pathlib import Path
from PIL import Image
import re

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

# Paths
SOURCE_DIR = Path(r"C:\Users\ULTRA PC\Downloads\mouve image")
TARGET_DIR = Path(r"C:\Users\ULTRA PC\mouvement\public\images")

# Categories based on keywords
CATEGORIES = {
    'logos': [
        'logo', 'sticker', 'badge', 'emblem', 'crest', 'shield',
        'gb 05', 'green boys 05', 'ultras green boys'
    ],
    'groups': [
        'curva', 'brigade', 'ultras', 'kop', 'green boys', 'raja',
        'inter', 'napoli', 'milano', 'casablanca', 'oujda', 'mouloudia'
    ],
    'tifos': [
        'tifo', 'choreo', 'display', 'banner', 'flag'
    ],
    'heroes': [
        'stadium', 'crowd', 'atmosphere', 'match', 'world cup'
    ],
    'gallery': []  # Default category
}

# Group name mappings for proper naming
GROUP_MAPPINGS = {
    'green boys': 'green-boys-2005',
    'gb 05': 'green-boys-2005',
    'gb05': 'green-boys-2005',
    'raja': 'raja-casablanca',
    'rca': 'raja-casablanca',
    'curva sud milano': 'curva-sud-milano',
    'curva nord': 'curva-nord-inter',
    'inter': 'curva-nord-inter',
    'napoli': 'curva-napoli',
    'brigade': 'brigade-oujda',
    'mouloudia': 'mouloudia-oujda',
    'oujda': 'brigade-oujda',
}

def slugify(text):
    """Convert text to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')

def categorize_image(filename):
    """Determine category based on filename"""
    name_lower = filename.lower()

    # Check for logo/sticker indicators
    for keyword in CATEGORIES['logos']:
        if keyword in name_lower:
            return 'logos'

    # Check for tifo indicators
    for keyword in CATEGORIES['tifos']:
        if keyword in name_lower:
            return 'tifos'

    # Check for hero/stadium indicators
    for keyword in CATEGORIES['heroes']:
        if keyword in name_lower:
            return 'heroes'

    # Check for group indicators (goes to groups folder)
    for keyword in CATEGORIES['groups']:
        if keyword in name_lower:
            return 'groups'

    # Default to gallery
    return 'gallery'

def get_group_name(filename):
    """Extract group name from filename"""
    name_lower = filename.lower()

    for keyword, group_slug in GROUP_MAPPINGS.items():
        if keyword in name_lower:
            return group_slug

    return None

def optimize_image(input_path, output_path, max_size=(1920, 1080), quality=85):
    """Optimize and convert image to WebP"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')

            # Resize if too large
            if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
                img.thumbnail(max_size, Image.Resampling.LANCZOS)

            # Save as WebP
            img.save(output_path, 'WEBP', quality=quality, optimize=True)
            return True
    except Exception as e:
        print(f"Error processing {input_path}: {e}")
        return False

def process_images():
    """Main function to process all images"""

    # Create target directories
    for category in ['logos', 'groups', 'tifos', 'heroes', 'gallery']:
        (TARGET_DIR / category).mkdir(parents=True, exist_ok=True)

    # Track processed files
    processed = []
    errors = []

    # Get all images
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'}
    images = [f for f in SOURCE_DIR.iterdir()
              if f.suffix.lower() in image_extensions]

    print(f"Found {len(images)} images to process\n")

    for i, img_path in enumerate(images, 1):
        filename = img_path.name
        print(f"[{i}/{len(images)}] Processing: {filename}")

        # Determine category
        category = categorize_image(filename)
        group_name = get_group_name(filename)

        # Generate output filename
        if group_name:
            base_name = f"{group_name}-{i}"
        else:
            base_name = slugify(img_path.stem) or f"image-{i}"

        output_filename = f"{base_name}.webp"
        output_path = TARGET_DIR / category / output_filename

        # Avoid overwriting
        counter = 1
        while output_path.exists():
            output_filename = f"{base_name}-{counter}.webp"
            output_path = TARGET_DIR / category / output_filename
            counter += 1

        # Process image
        if optimize_image(img_path, output_path):
            size_before = img_path.stat().st_size / 1024
            size_after = output_path.stat().st_size / 1024
            savings = ((size_before - size_after) / size_before) * 100

            processed.append({
                'original': filename,
                'output': f"{category}/{output_filename}",
                'group': group_name,
                'size_before': f"{size_before:.1f}KB",
                'size_after': f"{size_after:.1f}KB",
                'savings': f"{savings:.1f}%"
            })
            print(f"   [OK] -> {category}/{output_filename} (saved {savings:.1f}%)")
        else:
            errors.append(filename)
            print(f"   [ERROR] Error processing")

    # Print summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"[OK] Processed: {len(processed)} images")
    print(f"[X] Errors: {len(errors)} images")

    # Group by category
    by_category = {}
    for item in processed:
        cat = item['output'].split('/')[0]
        by_category[cat] = by_category.get(cat, 0) + 1

    print("\nBy Category:")
    for cat, count in by_category.items():
        print(f"  - {cat}: {count} images")

    # Total savings
    total_before = sum(float(p['size_before'].replace('KB', '')) for p in processed)
    total_after = sum(float(p['size_after'].replace('KB', '')) for p in processed)
    total_savings = ((total_before - total_after) / total_before) * 100 if total_before > 0 else 0

    print(f"\nTotal size: {total_before:.1f}KB -> {total_after:.1f}KB")
    print(f"Total savings: {total_savings:.1f}%")

    return processed, errors

if __name__ == "__main__":
    print("="*60)
    print("MOUVEMENT Image Organizer")
    print("="*60 + "\n")

    if not SOURCE_DIR.exists():
        print(f"Error: Source directory not found: {SOURCE_DIR}")
        exit(1)

    processed, errors = process_images()

    print("\n*** Done! Images organized and optimized. ***")
