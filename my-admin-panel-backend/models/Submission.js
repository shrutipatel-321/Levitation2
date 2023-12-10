// models/Submission.js
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
