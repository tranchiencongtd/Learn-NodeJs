const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.plugin(slug);

const courseSchema = new Schema({
  id: ObjectId,
  name: String,
  content: String,
  slug: { type: String, slug: "name", unique: true },
  videoId: String
},{ timestamps: true });

module.exports = mongoose.model('Course', courseSchema);