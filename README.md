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

This will search for the listing for the drug with the package_ndc of 0245-0571-01 (Isotretinoin)

- `http://localhost:33333/drug/ndc.json?search=package_ndc=%220591-2433%22`

## Environment Variables

### How To Override Defaults

The .env file contains the default URI paths, which can be overwritten from the start command as follows:
a) `SERVER_PORT=12345 npm start` or b) by specifying the environment variables and desired values in a `.env.local`.

Following are a list of modifiable paths:

| URI Name        | Default                                    | Description                                                                                                                 |
| --------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| SERVER_PORT | 3323       | The port to run the server on. |
| SERVER_HOST | `0.0.0.0` | The hostname of the server. Docker deployments use `0.0.0.0`; use `127.0.0.1` only for a host-local process. |
| SPL_ZIP_PATH | /src/spl/TESTDATA_rems_document_and_rems_indexing_spl_files.zip | the path to the spl zip |
| REMS_ADMIN_1_CDS_URL | http://localhost:8090/ | the CDS base url for the first rems admin |
| REMS_ADMIN_1_FHIR_URL | http://localhost:8090/ | the FHIR base url for the first rems admin |
| REMS_ADMIN_2_CDS_URL | http://localhost:8095/ | the CDS base url for the second rems admin |
| REMS_ADMIN_2_FHIR_URL | http://localhost:8095/ | the FHIR base url for the second rems admin |

# Data Rights

<div style="text-align:center">
<b>NOTICE</b>
</div>

This (software/technical data) was produced for the U. S. Government under Contract Number 75FCMC18D0047/75FCMC23D0004, and is subject to Federal Acquisition Regulation Clause 52.227-14, Rights in Data-General.


No other use other than that granted to the U. S. Government, or to those acting on behalf of the U. S. Government under that Clause is authorized without the express written permission of The MITRE Corporation.


For further information, please contact The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive, McLean, VA 22102-7539, (703) 983-6000.

<div style="text-align:center">
<b>&copy;2025 The MITRE Corporation.</b>
</div>

<br />

Licensed under the Apache License, Version 2.0 (the "License"); use of this repository is permitted in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
