import * as env from 'env-var';

export type Medication = {
    brand_name: string;
    generic_name: string,
    package_ndc: string,
    rems_administrator: string,
    rems_cds_endpoint: string | undefined,
    rems_fhir_base_url: string | undefined,
    rems_approval_date: string,
    rems_spl_date?: string
    rems_modification_date: string
}

export const medications : Medication[] = [
    {
        brand_name: "ADDYI",
        generic_name: "FLIBANSERINE",
        package_ndc: "58604-214-30",
        rems_administrator: "REMS Prototype Admin 1",
        rems_cds_endpoint: env.get('REMS_ADMIN_1_CDS_URL').asString(),
        rems_fhir_base_url: env.get('REMS_ADMIN_1_FHIR_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    }, {
        brand_name: "Isotretinoin",
        generic_name: "ISOTRETINOIN",
        package_ndc: "0245-0571-01",
        rems_administrator: "REMS Prototype Admin 2",
        rems_cds_endpoint: env.get('REMS_ADMIN_2_CDS_URL').asString(),
        rems_fhir_base_url: env.get('REMS_ADMIN_2_FHIR_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906",
        rems_spl_date: "20230912"
    }, {
        brand_name: "Fentanyl Citrate",
        generic_name: "FENTANYL CITRATE",
        package_ndc: "63459-502-30",
        rems_administrator: "REMS Prototype Admin 1",
        rems_cds_endpoint: env.get('REMS_ADMIN_1_CDS_URL').asString(),
        rems_fhir_base_url: env.get('REMS_ADMIN_1_FHIR_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906",
        rems_spl_date: "20230401"
    }, {
        brand_name: "Turalio",
        generic_name: "PEXIDARTINIB HYDROCHLORIDE",
        package_ndc: "65597-407-20",
        rems_administrator: "REMS Prototype Admin 1",
        rems_cds_endpoint: env.get('REMS_ADMIN_1_CDS_URL').asString(),
        rems_fhir_base_url: env.get('REMS_ADMIN_1_FHIR_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    }, {
        brand_name: "Pexidartinib Hydrochloride",
        generic_name: "PEXIDARTINIB HYDROCHLORIDE",
        package_ndc: "99999-407-20",
        rems_administrator: "REMS Prototype Admin 2",
        rems_cds_endpoint: env.get('REMS_ADMIN_2_CDS_URL').asString(),
        rems_fhir_base_url: env.get('REMS_ADMIN_2_FHIR_URL').asString(),
        rems_approval_date: "20240906",
        rems_modification_date: "20240906"
    } 
];
