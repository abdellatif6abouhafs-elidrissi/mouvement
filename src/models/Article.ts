import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IArticle {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: 'history' | 'culture' | 'tifo' | 'interview' | 'documentary' | 'event' | 'analysis';
  tags: string[];
  author: mongoose.Types.ObjectId;
  relatedGroups: mongoose.Types.ObjectId[];
  status: 'draft' | 'pending' | 'published' | 'archived';
  publishedAt?: Date;
  views: number;
  likes: number;
  readTime: number;
  isFeatured: boolean;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IArticleDocument extends IArticle, Document {}

const articleSchema = new Schema<IArticleDocument>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      maxlength: [500, 'Excerpt cannot exceed 500 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    coverImage: {
      type: String,
      required: [true, 'Cover image is required'],
    },
    category: {
      type: String,
      required: true,
      enum: ['history', 'culture', 'tifo', 'interview', 'documentary', 'event', 'analysis'],
    },
    tags: [{
      type: String,
      trim: true,
    }],
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    relatedGroups: [{
      type: Schema.Types.ObjectId,
      ref: 'UltraGroup',
    }],
    status: {
      type: String,
      enum: ['draft', 'pending', 'published', 'archived'],
      default: 'draft',
    },
    publishedAt: Date,
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    readTime: {
      type: Number,
      default: 5,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },
  },
  {
    timestamps: true,
  }
);

// Generate slug and calculate read time before saving
articleSchema.pre('save', function () {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // Calculate read time (200 words per minute)
  if (this.isModified('content')) {
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }

  // Set publishedAt when publishing
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }


});

// Indexes
articleSchema.index({ slug: 1 });
articleSchema.index({ status: 1, publishedAt: -1 });
articleSchema.index({ category: 1 });
articleSchema.index({ author: 1 });
articleSchema.index({ tags: 1 });
articleSchema.index({ isFeatured: 1, publishedAt: -1 });

// Text search
articleSchema.index({
  title: 'text',
  excerpt: 'text',
  content: 'text',
  tags: 'text',
});

const Article: Model<IArticleDocument> =
  mongoose.models.Article || mongoose.model<IArticleDocument>('Article', articleSchema);

export default Article;
