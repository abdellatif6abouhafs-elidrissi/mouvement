import mongoose from 'mongoose';

export interface IChant {
  translations: {
    locale: string;
    title: string;
    lyrics: string;
    origin: string;
  }[];
  group: string;
  groupSlug?: string;
  club: string;
  country: string;
  countryCode: string;
  duration?: string;
  audio?: string;
  video?: string;
  views: number;
  likes: number;
  isFeatured: boolean;
  yearCreated?: number;
  originalMelody?: string;
}

const chantSchema = new mongoose.Schema<IChant>({
  translations: [{
    locale: { type: String, required: true },
    title: { type: String, required: true },
    lyrics: { type: String, required: true },
    origin: { type: String, required: true }
  }],
  group: { type: String, required: true },
  groupSlug: String,
  club: { type: String, required: true },
  country: { type: String, required: true },
  countryCode: { type: String, required: true },
  duration: String,
  audio: String,
  video: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  yearCreated: Number,
  originalMelody: String
}, { timestamps: true });

chantSchema.index({ group: 1 });
chantSchema.index({ isFeatured: 1 });

export default mongoose.models.Chant || mongoose.model<IChant>('Chant', chantSchema);
