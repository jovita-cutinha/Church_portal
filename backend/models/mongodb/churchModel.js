const mongoose = require("mongoose");

const churchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  history: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
    require: true,
  },
});

const church = new mongoose.model("Church", churchSchema);

module.exports = church;