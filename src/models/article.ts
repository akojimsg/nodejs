const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Article = mongoose.model('Article', articleSchema);
