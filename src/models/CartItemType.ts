export type CartItemType = {
    productId: number,
    productTitle: string,
    count: number,
    salePrice: number,
    subtotal: number,
    productImages: string[]
};

export type GetCartItemsType = {
    cartItems: [
        {
            productId: number,
            productTitle: string,
            count: number,
            salePrice: number,
            subtotal: number,
            productImages: {
                id: number,
                colorHexCode: string,
                imageFiles: string[]
            }
        }
    ]
}
