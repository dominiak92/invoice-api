### INVOICE API FOR INVOICE APP

API Endpoints
-------------

### Get All Invoices

-   **URL:** `/api/invoices`
-   **Method:** `GET`
-   **Access:** Private (requires authentication)

Returns an array of all invoices associated with the authenticated user.

### Get Invoice by ID

-   **URL:** `/api/invoices/:id`
-   **Method:** `GET`
-   **Access:** Private (requires authentication)

Returns a single invoice identified by its `id` parameter, but only if it belongs to the authenticated user.

### Create Invoice

-   **URL:** `/api/invoices`
-   **Method:** `POST`
-   **Access:** Private (requires authentication)

Creates a new invoice. The invoice data should be provided in the request body.

### Update Invoice

-   **URL:** `/api/invoices/:id`
-   **Method:** `PUT`
-   **Access:** Private (requires authentication)

Updates an existing invoice identified by its `id` parameter. The updated invoice data should be provided in the request body.

### Delete Invoice

-   **URL:** `/api/invoices/:id`
-   **Method:** `DELETE`
-   **Access:** Private (requires authentication)

Deletes an invoice identified by its `id` parameter, but only if it belongs to the authenticated user.

Error Handling
--------------

If an error occurs, the API will return appropriate HTTP status codes and error messages in the response.

Authentication
--------------

Authentication is required for accessing private endpoints. Use JSON Web Tokens (JWT) for authentication. Include the JWT in the `Authorization` header of your requests.

Technologies Used
-----------------

-   Node.js
-   Express.js
-   MongoDB

* * * * *

Remember to replace `<repository_url>`, `<project_directory>`, `<your_mongodb_uri>`, and `<your_jwt_secret>` with actual values. Also, ensure you have a MongoDB database set up and running.
