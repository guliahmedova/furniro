export interface SecondaryHeroTypes {
    title: string,
    logo?: string,
    isSearch?: boolean,
    saveSearchText? : (text: string) => void,
    searchText?: string
};