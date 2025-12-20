import mongoose from 'mongoose';

export interface ITifo {
  translations: {
    locale: string;
    title: string;
    description: string;
  }[];
  group: string;
  groupSlug?: string;
  club: string;
  country: string;
  countryCode: string;
  date: Date;
  match?: string;
  stadium?: string;
  image?: string;
  video?: string;
  views: number;
  likes: number;
  isFeatured: boolean;
  isSpotlight: boolean;
  dimensions?: {
    width: number;
    height: number;
  };
  materials?: string[];
  participantsCount?: number;
}

const tifoSchema = new mongoose.Schema<ITifo>({
  translations: [{
    locale: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  group: { type: String, required: true },
  groupSlug: String,
  club: { type: String, required: true },
  country: { type: String, required: true },
  countryCode: { type: String, required: true },
  date: { type: Date, required: true },
  match: String,
  stadium: String,
  image: String,
  video: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isSpotlight: { type: Boolean, default: false },
  dimensions: {
    width: Number,
    height: Number
  },
  materials: [String],
  participantsCount: Number
}, { timestamps: true });

tifoSchema.index({ group: 1 });
tifoSchema.index({ isFeatured: 1 });
tifoSchema.index({ isSpotlight: 1 });

export default mongoose.models.Tifo || mongoose.model<ITifo>('Tifo', tifoSchema);
