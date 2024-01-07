export type ProvinceType = {
    id: number,
    country?: {
        id: number,
        countryName: string
    },
    provinceName: string
};