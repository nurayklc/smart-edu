const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Course Schema
const CourseShema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CourseShema);

module.exports = Course;
