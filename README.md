# Description

The [REMS](https://www.fda.gov/drugs/drug-safety-and-availability/risk-evaluation-and-mitigation-strategies-rems) directory  application is an app that acts as a API endpoint similar to the FDA API. It returns medication information when queried at the /drug/ndc.json endpoint. It adds the rems_endpoint that identifies the CDS Hooks server used by the REMS program.

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