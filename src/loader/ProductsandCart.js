import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  //   console.log(products);
  const savedCart = getStoredCart();
  const initailCart = [];
  //   console.log(savedCart);
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    // console.log(id, addedProducts);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initailCart.push(addedProduct);
    }
  }

  return { products: products, initailCart: initailCart };
};
