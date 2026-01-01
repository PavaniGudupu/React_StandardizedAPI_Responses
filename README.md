React_StandardizedAPI_Responses

This repository provides a backend API for managing products and categories in an inventory system. It is built using Express.js and follows a modular structure with standardized API responses.

🚀 Features

Add, update, delete, and fetch products

Retrieve category listings

Filter products by category, search term, and pagination

Input validation using middleware

Consistent success/failure response format

📦 Tech Stack

Node.js with Express.js

CORS for cross-origin support

Body-parser for parsing request bodies

Custom middleware for validation

Modular models for product and category operations

📁 Folder Structure

    inventory-backend/
    ├── middleware/
    │   └── validation.js
    ├── models/
    │   ├── categoryModel.js
    │   └── productModel.js
    ├── utils/
    │   └── apiResponse.js
    ├── index.js

📌 API Endpoints

Product APIs

    POST /ProductList

Filters and returns products based on request body

    POST /AddProduct

Adds a new product (requires validation)
  
    POST /EditProduct/:id

Retrieves a product by ID

    POST /UpdateProduct/:id

Updates a product by ID (requires validation)

    POST /DeleteProduct/:id

Deletes a product by ID

Category APIs

POST /getCategories

Returns all available categories

✅ Response Format

All responses follow a standardized format defined in utils/apiResponse.js:

    success(data) => {
      success: true,
      response: data,
      failure: false,
      reason: null
    }
    
    failure(reason) => {
      success: false,
      response: null,
      failure: true,
      reason
    }

🛠 Setup Instructions

Clone the repository:

    git clone https://github.com/your-username/inventory-backend.git
    cd inventory-backend

Install dependencies:

    npm install

Start the server:

    node index.js

Server will run at:

    http://localhost:4000

📌 Notes

Ensure your database connection is configured in productModel.js and categoryModel.js.

You can extend the validation logic in middleware/validation.js.

Consider switching to RESTful methods (GET, PUT, DELETE) for better API semantics.

Built with ❤️ by Pavani Gudupu
