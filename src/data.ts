import * as env from 'env-var';

export type Medication = {
    brand_name: string;
    generic_name: string,
    product_ndc: string,
    rems_administrator: string,
    rems_endpoint: string | undefined,
    rems_approval_date: string,
    rems_spl_date?: string
    rems_modification_date: string
}

export const medications : Medication[] = [
    {
        brand_name: "ADDYI",
        generic_name: "FLIBANSERINE",
        product_ndc: "58604-214",
        rems_administrator: "REMS Prototype Admin 1",
        rems_endpoint: env.get('REMS_ADMIN_1_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    }, {
        brand_name: "Isotretinoin",
        generic_name: "ISOTRETINOIN",
        product_ndc: "70771-1557-4",
        rems_administrator: "REMS Prototype Admin 2",
        rems_endpoint: env.get('REMS_ADMIN_2_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906",
        rems_spl_date: "20230912"
    }, {
        brand_name: "Fentanyl Citrate",
        generic_name: "FENTANYL CITRATE",
        product_ndc: "63459-502-01",
        rems_administrator: "REMS Prototype Admin 1",
        rems_endpoint: env.get('REMS_ADMIN_1_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906",
        rems_spl_date: "20230401"
    }, {
        brand_name: "Turalio",
        generic_name: "PEXIDARTINIB HYDROCHLORIDE",
        product_ndc: "65597-407-20",
        rems_administrator: "REMS Prototype Admin 2",
        rems_endpoint: env.get('REMS_ADMIN_2_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    } 
];
