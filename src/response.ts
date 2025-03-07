import { Medication } from './data';

export type Results = {
    skip: number;
    limit: number;
    total: number;
}

export type Meta = {
    disclaimer: string;
    terms: string;
    license: string;
    last_updated: string;
    results: Results;
}

export type Response = {
    meta: Meta;
    results: (Medication|undefined)[];
}

export type ErrorResponse = {
    error: {
        code: string;
        message: string;
    }
}