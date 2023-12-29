export type CheckoutFormTypes = {
    firstName: string,
    lastName: string,
    companyName: string,
    country: string,
    streetAddress: string,
    town: string,
    province: string,
    zipCode: string,
    phone: string,
    emailAddress: string,
    note: string
};

export type CheckoutType = {
    appUserId: number,
    firstName: string,
    lastName: string,
    companyName: string,
    countryId: number,
    streetAddress: string,
    city: string,
    provinceId: number,
    zipcode: string,
    phone: string,
    emailAddress: string,
    additionalInfo: string
};