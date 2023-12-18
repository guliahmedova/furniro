export type BlogType = {
    id: number,
    header: string,
    text: string,
    category: {
        id: number,
        categoryName: string
    },
    adminInfo: {
        id: number,
        roleName: string
    },
    createdDate: string,
    imageUrls: string[],
};