import mongoose, { Schema } from 'mongoose';

const EpisodeSchema = new Schema({
  id: { type: Number, unique: true },
  url: String,
  name: String,
  season: Number,
  number: Number,
  airdatetime: Date,
  runtime: Number,
  image: {
    medium: String,
    original: String,
  },
  summary: String,
});

export default mongoose.model('Episode', EpisodeSchema);
