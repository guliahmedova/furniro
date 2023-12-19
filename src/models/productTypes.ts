export type ProductTypes = {
    id: number,
    title: string,
    subTitle: string,
    introduction: string,
    imageFiles: string[],
    salePrice: number,
    discountPercent: number,
    discountedPrice: number,
    sku: string,
    isNew: boolean,
    tags: [{
        id: number,
        tagName: string
    }],
    colors: [{
        id: number,
        colorHexCode: string,
        imageFiles: string[]
    }],
    sizes: [{
        id: number,
        sizeName: string
    }],
    category: {
        id: number,
        categoryName: string
    }
};