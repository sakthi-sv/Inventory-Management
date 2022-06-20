class Product {
  static productexist(id) {
    let result = getProduct(id);
    if (result == null) {
      return false;
    }
    return true;
  }
}
