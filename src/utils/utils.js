export const nextId = (products) => {
    const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
    return maxId + 1;
};