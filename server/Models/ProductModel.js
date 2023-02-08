const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const ProductSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCat: {
      type: String,
      required: true,
    },

    type: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
