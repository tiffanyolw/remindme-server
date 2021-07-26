# Steps to run locally
1. `npm install`
2. Update DB config in `config.js`
3. Ensure MySQL service is started
4. Create the database on MySQL
5. `npm start` to start the server
6. Open at `http://localhost:3000`

# API Documentation
## Product
### GET /product
Example Request Body:
```
{
    "expired": true,
    "categories": ["seafood"],
    "locations": ["fridge"],
    "status": "ready",
    "order": [["id", "desc"]]
}
```
Example Response:
```
[
    {
        "id": 10,
        "name": "shrimp",
        "quantity": "5",
        "unit": "piece",
        "purchaseDate": "2021-06-27T20:58:41.000Z",
        "expiryDate": "2021-05-25T06:58:05.000Z",
        "category": "seafood",
        "locationStored": "fridge",
        "notes": "molestie pharetra nibh. Aliquam",
        "daysBeforeNotify": 3,
        "status": "ready",
        "createdAt": "2021-02-23T17:16:33.000Z",
        "updatedAt": "2021-03-14T05:27:27.000Z"
    }
]
```