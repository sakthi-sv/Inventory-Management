const productModel = require("../models/Product");

class ProductController {
  static async getAllProducts() {
    try {
      const result = await productModel.find();
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async getProduct(id) {
    try {
      const result = await productModel.findOne({ id });
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async createProduct({ id, quantity, ...rest }) {
    try {
      var product = await this.getProduct(id);
      var result;
      // if (!product) {
      //   result = await productModel.create({
      //     id,
      //     quantity,
      //     ...rest,
      //   });
      // } else {
      result = await this.updateProduct(id, {
        id,
        quantity: quantity + (product ? product.quantity : 0),
        ...rest,
      });
      // }
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async updateProduct(id, product) {
    try {
      const result = await productModel.findOneAndUpdate({ id }, product, {
        returnDocument: "after",
        lean: true,
        upsert: true,
      });
      console.log(result);
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static async deleteProduct(id) {
    try {
      const result = await productModel.deleteOne({ id });
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = ProductController;
