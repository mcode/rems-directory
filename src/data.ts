export type Medication = {
    brand_name: string;
    generic_name: string,
    product_ndc: string,
    rems_administrator: string,
    rems_endpoint: string,
    rems_approval_date: string,
    rems_modification_date: string
}

export const medications : Medication[] = [
    {
        brand_name: "ADDYI",
        generic_name: "FLIBANSERINE",
        product_ndc: "58604-214",
        rems_administrator: "REMS Prototype",
        rems_endpoint: "http://localhost:3003/",
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    }, {
        brand_name: "Isotretinoin",
        generic_name: "ISOTRETINOIN",
        product_ndc: "0591-2433",
        rems_administrator: "REMS Prototype",
        rems_endpoint: "http://localhost:3003/",
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    }, {
        brand_name: "Fentanyl Citrate",
        generic_name: "FENTANYL CITRATE",
        product_ndc: "0093-7865",
        rems_administrator: "REMS Prototype",
        rems_endpoint: "http://localhost:3003/",
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    }, {
        brand_name: "Turalio",
        generic_name: "PEXIDARTINIB HYDROCHLORIDE",
        product_ndc: "65597-407",
        rems_administrator: "REMS Prototype",
        rems_endpoint: "http://localhost:3003/",
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    } 
];
