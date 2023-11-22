export interface ISecondaryHeroTypes {
    title: string,
    logo?: string,
    isSearch?: boolean,
    addSearchText?: (text: string) => void,
    searchText?: string
};