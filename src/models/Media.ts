import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IMedia {
  filename: string;
  originalName: string;
  url: string;
  type: 'image' | 'video' | 'document';
  mimeType: string;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  alt?: string;
  caption?: string;
  uploadedBy: mongoose.Types.ObjectId;
  usedIn: {
    type: 'group' | 'article' | 'user';
    id: mongoose.Types.ObjectId;
  }[];
  folder?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IMediaDocument extends IMedia, Document {}

const mediaSchema = new Schema<IMediaDocument>(
  {
    filename: {
      type: String,
      required: true,
      unique: true,
    },
    originalName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['image', 'video', 'document'],
      required: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    dimensions: {
      width: Number,
      height: Number,
    },
    alt: {
      type: String,
      trim: true,
    },
    caption: {
      type: String,
      trim: true,
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    usedIn: [{
      type: {
        type: String,
        enum: ['group', 'article', 'user'],
      },
      id: {
        type: Schema.Types.ObjectId,
      },
    }],
    folder: {
      type: String,
      default: 'general',
    },
    tags: [{
      type: String,
      trim: true,
    }],
  },
  {
    timestamps: true,
  }
);

// Indexes
mediaSchema.index({ uploadedBy: 1 });
mediaSchema.index({ type: 1 });
mediaSchema.index({ folder: 1 });
mediaSchema.index({ tags: 1 });
mediaSchema.index({ createdAt: -1 });

const Media: Model<IMediaDocument> =
  mongoose.models.Media || mongoose.model<IMediaDocument>('Media', mediaSchema);

export default Media;
