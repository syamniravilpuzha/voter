const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Item = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number
    },
    votes: {
        type: Number,
        default:0
    }
  },
  { collection: "Items" }
);

module.exports = mongoose.model("Items", Item);