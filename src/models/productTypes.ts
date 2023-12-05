export type ProductTypes = {
    id: number,
    title: string,
    subTitle: string,
    salePrice: number,
    discountPercent: number,
    discountedPrice: number,
    imageFiles: string[],
    sku: string,
    isNew: boolean,
    tags: [{
        id: number,
        tagName: string
    }],
    colors: [{
        id: number,
        colorHexCode: string
    }],
    sizes: [{
        id: number,
        sizeName: string
    }]
};