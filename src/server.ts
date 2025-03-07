import { createServer } from 'node:http';
import { IncomingMessage, ServerResponse } from 'http';
import { URL } from 'node:url';

import 'dotenv/config';
import * as env from 'env-var';


import { Medication, medications } from './data';
import { Response, Meta, Results, ErrorResponse } from './response';

const hostname = env.get('SERVER_HOST').asString();
const port = env.get('SERVER_PORT').asInt();

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const { method, url, headers } = req;

    const parsedUrl = new URL(url ?? "", `http://${headers.host}`);
    let searchParams = parsedUrl.searchParams;

    // strip the end '/' from the pathname if it is there
    let pathname = parsedUrl.pathname.replace(/\/$/, '')

    if (method === "GET" && pathname === "/drug/ndc.json") {

        let response: Response | undefined;
        searchParams.forEach((value, key) => {
            console.log(`search: (key, value): (${key}, ${value})`);

            if (key === 'search') {
                const searchKey = value.split('=')[0];
                const searchValue = value.split('=')[1].replace(/\"/g, '');

                let foundElement : Medication | undefined;
                if (searchKey === 'generic_name') {
                    foundElement = medications.find(element => element.generic_name.toLowerCase() === searchValue.toLowerCase());
                } else if (searchKey === 'brand_name') {
                    foundElement = medications.find(element => element.brand_name.toLowerCase() === searchValue.toLowerCase());
                } else if (searchKey === 'product_ndc') {
                    foundElement = medications.find(element => element.product_ndc.toLowerCase() === searchValue.toLowerCase());
                }

                if (foundElement) {
                    let res: Results = {
                        skip: 0,
                        limit: 1,
                        total: 1
                    }

                    let m: Meta = {
                        disclaimer: 'disclaimer',
                        terms: 'terms',
                        license: 'license',
                        last_updated: new Date().toISOString().slice(0,10),
                        results: res
                    }

                    response = {
                        meta: m,
                        results: [ foundElement ]
                    };
                }
            }
        })

        if (response) {
            console.log(' - return: ' + response.results[0]?.brand_name);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        } else {
            console.log(' - not found');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            let errorResponse : ErrorResponse = {
                error: {
                    code: 'NOT_FOUND',
                    message: 'No matches found!'
                }
            }
            res.end(JSON.stringify(errorResponse));
        }
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('unsupported endpoint');
    }
    console.log('');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
