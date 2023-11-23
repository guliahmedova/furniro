export type ProductTypes = {
    id: string,
    Title: string,
    SubTitle: string,
    Introduction: string,
    SalePrice: number,
    CostPrice: number,
    DiscountPercent: number,
    Sku: string,
    IsNew: boolean,
    CategoryId: number,
    DescriptionId: number,
    CreatedAt: Date,
    ProductImages: string[],
    ProductTags: [],
    ProductSizes: string[],
    ProductColors: string[],
    Reviews: []
};