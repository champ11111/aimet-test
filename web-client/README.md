# AIMET Frontend Technical Test

This is a frontend using Next.js for the AIMET technical test.

</br>

## Table of Contents

- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Testing](#testing)
- [Usage](#usage)

</br>

## Installation

1. Clone the repository or download the zip file and extract it.

2. Open a terminal and navigate to the root of the project.

3. Install the dependencies with the following command:

   ```bash
   pnpm install
   ```

## Running the Server

1. Run the server on port 3000 with the following command:

   ```bash
    pnpm dev
   ```

2. The server should now be running and accessible at `http://localhost:3000`

</br>

## Testing

Before running the tests, ensure both the frontend and backend servers are running.

1. Run the unit tests with the following command:

   ```bash
   pnpm test-unit
   ```

2. Run the end-to-end tests with the following command:

   ```bash
    pnpm test-e2e
   ```

   This will open Cypress. Click on "e2e testing" and then click "Start E2E Testing in Chrome" to run the tests and select the `home.cy.ts` file.

</br>

## Usage

The frontend has a single page:

### Home

You can access the home page at `http://localhost:3000/`.

Please wait approximately 10 seconds to receive the severity level result.

The severity level result will then be displayed on the screen.

Feedback can be provided by clicking on the "ให้คะแนนความพึงพอใจ" button.
