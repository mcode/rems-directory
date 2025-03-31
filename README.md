# Description

The [REMS](https://www.fda.gov/drugs/drug-safety-and-availability/risk-evaluation-and-mitigation-strategies-rems) directory  application is an app that acts as a API endpoint similar to the FDA API. It returns medication information when queried at the /drug/ndc.json endpoint. It adds the rems_endpoint that identifies the CDS Hooks server used by the REMS program. The /drugs/spl.zip returns spl information for the drugs it has spl info for, providing a zip file similar to the one from the FDA's website. The /health endpoint is a simple health check endpoint to make sure the server is live and online. 

Disclaimer: The SPL Zip file information is test data not to be representative of real world SPL information. While they are based on the actual SPL Zip from FDA, the files have been modified for the purposes of the prototype and may even be out of date. The data in these files are not intended for medical use.

# Getting Started with REMS Administrator

To get started, first clone the repository using a method that is most convenient for you. If using git, run the following command:

`git clone https://github.com/mcode/rems-directory.git`

The following technologies must be installed on your computer to continue:

- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en)

## Initialization

After cloning the repository, install the required dependencies by running the following:

### `npm install`

## Starting the server

Next, start the server with the following:

### `npm run dev`

Query the server running on http://localhost:33333/ (or whichever port it was run on)

## Routes

- `/drug/ndc.json` - The endpoint for querying the drug directory.

### Example query endpoint:

This will search for the listing for the drug with the product_ndc of 0591-2433 (Isotretinoin)

- `http://localhost:33333/drug/ndc.json?search=product_ndc=%220591-2433%22`

## Environment Variables

### How To Override Defaults

The .env file contains the default URI paths, which can be overwritten from the start command as follows:
a) `SERVER_PORT=12345 npm start` or b) by specifying the environment variables and desired values in a `.env.local`.

Following are a list of modifiable paths:

| URI Name        | Default                                    | Description                                                                                                                 |
| --------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| SERVER_PORT | 33333       | The port to run the server on. |
| SERVER_HOST | `127.0.0.1` | The hostname of the server. |
| SPL_ZIP_PATH | /src/spl/TESTDATA_rems_document_and_rems_indexing_spl_files.zip | the path to the spl zip |
| REMS_ADMIN_1_URL | http://localhost:8090/ | the base url for the first rems admin |
| REMS_ADMIN_2_URL | http://localhost:8095/ | the base url for the second rems admin |