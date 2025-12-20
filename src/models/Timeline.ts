import mongoose from 'mongoose';

export interface ITimeline {
  year: number;
  region: 'europe' | 'southAmerica' | 'northAfrica' | 'asia' | 'middleEast';
  translations: {
    locale: string;
    title: string;
    description: string;
  }[];
  location: string;
  countryCode: string;
  group?: string;
  groupSlug?: string;
  image?: string;
  isHighlight?: boolean;
  order?: number;
}

const timelineSchema = new mongoose.Schema<ITimeline>({
  year: { type: Number, required: true },
  region: {
    type: String,
    enum: ['europe', 'southAmerica', 'northAfrica', 'asia', 'middleEast'],
    required: true
  },
  translations: [{
    locale: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  location: { type: String, required: true },
  countryCode: { type: String, required: true },
  group: String,
  groupSlug: String,
  image: String,
  isHighlight: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, { timestamps: true });

timelineSchema.index({ year: 1 });
timelineSchema.index({ region: 1 });

export default mongoose.models.Timeline || mongoose.model<ITimeline>('Timeline', timelineSchema);
