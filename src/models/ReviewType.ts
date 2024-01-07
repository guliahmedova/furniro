export type ReviewType = {
    id?: number,
    productId: number,
    appUserId: number,
    rate: number,
    text: string
};

export type ReviewDeleteBody = {
    id: number,
    productId: number,
    appUserId: number
};