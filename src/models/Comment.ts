import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IComment {
  content: string;
  author: mongoose.Types.ObjectId;
  target: {
    type: 'article' | 'group';
    id: mongoose.Types.ObjectId;
  };
  parentComment?: mongoose.Types.ObjectId;
  status: 'pending' | 'approved' | 'rejected' | 'spam';
  likes: number;
  likedBy: mongoose.Types.ObjectId[];
  isEdited: boolean;
  editedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICommentDocument extends IComment, Document {}

const commentSchema = new Schema<ICommentDocument>(
  {
    content: {
      type: String,
      required: [true, 'Comment content is required'],
      trim: true,
      minlength: [3, 'Comment must be at least 3 characters'],
      maxlength: [2000, 'Comment cannot exceed 2000 characters'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    target: {
      type: {
        type: String,
        enum: ['article', 'group'],
        required: true,
      },
      id: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'target.type',
      },
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'spam'],
      default: 'pending',
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    isEdited: {
      type: Boolean,
      default: false,
    },
    editedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Mark as edited when content changes
commentSchema.pre('save', function () {
  if (this.isModified('content') && !this.isNew) {
    this.isEdited = true;
    this.editedAt = new Date();
  }

});

// Indexes
commentSchema.index({ 'target.type': 1, 'target.id': 1, status: 1 });
commentSchema.index({ author: 1 });
commentSchema.index({ parentComment: 1 });
commentSchema.index({ status: 1, createdAt: -1 });

const Comment: Model<ICommentDocument> =
  mongoose.models.Comment || mongoose.model<ICommentDocument>('Comment', commentSchema);

export default Comment;
