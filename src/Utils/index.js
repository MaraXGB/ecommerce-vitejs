/**
 * This function calculates total price of a new order
 * @param {Array} productsCart cartProduct: array of Objects
 * @returns {number} Total Price
 */
export const totalPrice = (productsCart) =>{ 
    return productsCart.reduce((suma, product) => suma + product.price, 0);
}