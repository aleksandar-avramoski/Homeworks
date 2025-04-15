# Recipe API

A simple **Node.js API** using **Express.js** and **MongoDB** for storing and managing recipes.

## Features

- **CRUD operations**: Create, Read, Update, Delete recipes.
- **Search**: Find recipes by title or filter by category, difficulty, or vegetarian status.
- **RESTful API**: Well-structured routes for easy access.

## Installation

1. Clone this repository

2. Install Dependencies

```javascript
npm install
```

3. Set up environment variables:

- Create a .env file and add the necessary configurations.

4. Run the server

```javascript
npm run start
```

## API Endpoints

1. Get All Recipes

```javascript
GET / recipes;
```

2. Get a single recipe

```javascript
GET /recipes/:id
```

3. Create a new recipe

```javascript
POST / recipes;
```

4. Update a recipe

```javascript
PUT /recipes/:id
```

5. Delete a recipe

```javascript
DELETE /recipes/:id
```

6. Search recipes by title

```javascript
GET /recipes/search?title=Avocado Toast
```

7. Filter by difficulty

```javascript
GET /recipes?difficulty=easy
```

8. Filter by category

```javascript
GET /recipes?category=lunch
```

9. Get vegetarian recipes

```javascript
GET / recipes / vegetarian;
```

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)

## Have fun using the API!
