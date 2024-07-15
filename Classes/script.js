class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayproduct() {
    console.log(`Product name is : ${this.name}`);
    console.log(`product price is : ${this.price}`);
  }
}

const product1 = new product("shirt", 1200.0);

console.log(product1.name);
product1.displayproduct();
