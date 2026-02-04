# Ecommerce Supabase API

A lightweight RESTful API built with Express.js and integrated with Supabase (PostgreSQL) for managing an e-commerce product catalog.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** Supabase (PostgreSQL)
- **Environment:** dotenv

## Prerequisites

- Node.js (v18 or higher)
- npm
- Supabase account and project

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/reinaldoriant/ecommerce-supabase-api.git
   cd ecommerce-supabase-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```

4. Fill in your `.env` file with your Supabase credentials:
   ```
   PORT=3000
   DATABASE_URL=your_supabase_url
   DATABASE_KEY=your_supabase_anon_key
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/product` | Get all products |
| GET | `/product/:id` | Get product by ID |
| POST | `/product` | Create a new product |
| PATCH | `/product/:id` | Update a product |
| DELETE | `/product/:id` | Delete a product |

## Request & Response Examples

### Get All Products
```bash
GET /product
```
Response:
```json
[
  {
    "id": 1,
    "name": "Xiaomi Redmi A5",
    "description": "Smartphone with 32MP camera",
    "stock": 10,
    "category": "phone",
    "price": 1429000,
    "image_url": "https://example.com/image.jpg",
    "is_active": true,
    "created_at": "2026-02-04T10:40:00+00"
  }
]
```

### Create Product
```bash
POST /product
Content-Type: application/json

{
  "name": "Laptop ASUS",
  "description": "Gaming laptop",
  "stock": 5,
  "category": "laptop",
  "price": 8000000,
  "is_active": true
}
```

### Update Product
```bash
PATCH /product/1
Content-Type: application/json

{
  "price": 1500000,
  "stock": 15
}
```

### Delete Product
```bash
DELETE /product/1
```

## Database Schema

### Product Table

| Column | Type | Description |
|--------|------|-------------|
| id | int8 | Primary key (auto-increment) |
| created_at | timestamptz | Timestamp of creation |
| name | varchar | Product name |
| description | text | Product description (optional) |
| stock | int4 | Stock quantity |
| category | varchar | Product category |
| price | numeric | Product price |
| image_url | varchar | Product image URL (optional) |
| is_active | boolean | Product availability status |

## License

ISC
