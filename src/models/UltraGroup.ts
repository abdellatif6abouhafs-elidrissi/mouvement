import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUltraGroup {
  name: string;
  slug: string;
  club: string;
  city: string;
  country: string;
  countryCode: string;
  yearFounded: number;
  isActive: boolean;

  // Cultural & Historical
  history: string;
  values: string[];
  motto?: string;

  // Visual Identity
  colors: string[];
  symbols: string[];
  logo?: string;
  coverImage?: string;

  // Tifos & Choreography
  tifos: {
    title: string;
    description: string;
    image: string;
    date?: Date;
    match?: string;
  }[];

  // Media Gallery
  gallery: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
    date?: Date;
  }[];

  // Social & Stats
  membersEstimate?: string;
  stadium?: string;
  socialLinks: {
    website?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };

  // Relations
  rivals: mongoose.Types.ObjectId[];
  friends: mongoose.Types.ObjectId[];

  // Metadata
  views: number;
  likes: number;
  isVerified: boolean;
  isFeatured: boolean;
  author: mongoose.Types.ObjectId;

  // Coordinates for map
  coordinates: {
    lat: number;
    lng: number;
  };

  createdAt: Date;
  updatedAt: Date;
}

export interface IUltraGroupDocument extends IUltraGroup, Document {}

const ultraGroupSchema = new Schema<IUltraGroupDocument>(
  {
    name: {
      type: String,
      required: [true, 'Group name is required'],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    club: {
      type: String,
      required: [true, 'Club name is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
    },
    countryCode: {
      type: String,
      required: true,
      uppercase: true,
      minlength: 2,
      maxlength: 3,
    },
    yearFounded: {
      type: Number,
      required: [true, 'Year founded is required'],
      min: [1900, 'Year must be after 1900'],
      max: [new Date().getFullYear(), 'Year cannot be in the future'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    // Cultural & Historical
    history: {
      type: String,
      required: [true, 'History is required'],
      minlength: [100, 'History must be at least 100 characters'],
    },
    values: [{
      type: String,
      trim: true,
    }],
    motto: {
      type: String,
      trim: true,
    },

    // Visual Identity
    colors: [{
      type: String,
      trim: true,
    }],
    symbols: [{
      type: String,
      trim: true,
    }],
    logo: String,
    coverImage: String,

    // Tifos
    tifos: [{
      title: { type: String, required: true },
      description: { type: String },
      image: { type: String, required: true },
      date: Date,
      match: String,
    }],

    // Gallery
    gallery: [{
      type: { type: String, enum: ['image', 'video'], required: true },
      url: { type: String, required: true },
      caption: String,
      date: Date,
    }],

    // Social & Stats
    membersEstimate: String,
    stadium: String,
    socialLinks: {
      website: String,
      facebook: String,
      instagram: String,
      twitter: String,
      youtube: String,
    },

    // Relations
    rivals: [{
      type: Schema.Types.ObjectId,
      ref: 'UltraGroup',
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'UltraGroup',
    }],

    // Metadata
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // Coordinates
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
  },
  {
    timestamps: true,
  }
);

// Generate slug before saving
ultraGroupSchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  next();
});

// Indexes
ultraGroupSchema.index({ slug: 1 });
ultraGroupSchema.index({ country: 1 });
ultraGroupSchema.index({ countryCode: 1 });
ultraGroupSchema.index({ club: 1 });
ultraGroupSchema.index({ city: 1 });
ultraGroupSchema.index({ isFeatured: 1 });
ultraGroupSchema.index({ views: -1 });
ultraGroupSchema.index({ 'coordinates.lat': 1, 'coordinates.lng': 1 });

// Text search index
ultraGroupSchema.index({
  name: 'text',
  club: 'text',
  city: 'text',
  country: 'text',
  history: 'text',
});

const UltraGroup: Model<IUltraGroupDocument> =
  mongoose.models.UltraGroup || mongoose.model<IUltraGroupDocument>('UltraGroup', ultraGroupSchema);

export default UltraGroup;
