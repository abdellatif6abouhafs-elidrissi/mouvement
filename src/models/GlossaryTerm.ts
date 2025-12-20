import mongoose from 'mongoose';

export interface IGlossaryTerm {
  term: string;
  translations: {
    locale: string;
    definition: string;
    example?: string;
  }[];
  origin?: string;
  category: 'general' | 'tifo' | 'chant' | 'organization' | 'matchday';
  relatedTerms?: string[];
}

const glossaryTermSchema = new mongoose.Schema<IGlossaryTerm>({
  term: { type: String, required: true, unique: true },
  translations: [{
    locale: { type: String, required: true },
    definition: { type: String, required: true },
    example: String
  }],
  origin: String,
  category: {
    type: String,
    enum: ['general', 'tifo', 'chant', 'organization', 'matchday'],
    default: 'general'
  },
  relatedTerms: [String]
}, { timestamps: true });

glossaryTermSchema.index({ term: 1 });
glossaryTermSchema.index({ category: 1 });

export default mongoose.models.GlossaryTerm || mongoose.model<IGlossaryTerm>('GlossaryTerm', glossaryTermSchema);
