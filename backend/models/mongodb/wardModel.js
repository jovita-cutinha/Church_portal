const mongoose = require("mongoose");

const wardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Details is required"],
  },
  image: {
    type: String,
  },
  place: {
    type: String,
    required: true,
  },
  gurkarName: {
    type: String,
    required: true,
  },
  gurkarImage: {
    type: String,
    required: true,
  },
  noOfFamilies: {
    type: Number,
    required: true,
  },
  noOfMembers: {
    type: Number,
    required: true,
  },
});

const ward = new mongoose.model("Ward", wardSchema);

module.exports = ward;
