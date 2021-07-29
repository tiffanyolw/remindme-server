## Steps to run locally
1. `npm install`
2. Update DB config in `config.js`
3. Ensure MySQL service is started
4. Create the database on MySQL
5. `npm start` to start the server
6. Open at `http://localhost:3000`

## API Documentation
[Product](#product)
- [GET](#get-product)
- [POST](#post-productadd)
- [PUT](#put-productupdateidid)
- [DELETE](#delete-productdeleteidid)

[Grocery](#grocery)
- [GET](#get-grocery)
- [POST](#post-groceryadd)
- [PUT](#put-groceryupdateidid)
- [DELETE](#delete-grocerydeleteidid)

### Product
#### GET `/product`
Example Query:
```
?expired=true&category=seafood&locationStored=fridge&status=ready&orderBy=id&ordering=desc
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
[Back to top](#api-documentation)

#### POST `/product/add`
Example Request Body:
```
{
    "name": "shrimp",
    "quantity": 3,
    "unit": "piece",
    "purchaseDate": "2022-02-11T21:31:50.000Z",
    "expiryDate": "2022-04-30T21:31:50.000Z",
    "category": "seafood",
    "locationStored": "freezer",
    "notes": null,
    "daysBeforeNotify": 3,
    "status": "ready"
}
```
Example Response:
```
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
```
[Back to top](#api-documentation)

#### PUT `/product/update/id/:id`
Example Request Body:
```
{
    "name": "shrimp",
    "quantity": 3,
    "unit": "piece",
    "purchaseDate": "2022-02-11T21:31:50.000Z",
    "expiryDate": "2022-04-30T21:31:50.000Z",
    "category": "seafood",
    "locationStored": "freezer",
    "notes": null,
    "daysBeforeNotify": 3,
    "status": "ready"
}
```
Example Response:
```
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
```
[Back to top](#api-documentation)

#### DELETE `/product/delete/id/:id`
Example Response:
```
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
```
[Back to top](#api-documentation)

### Grocery
#### GET `/grocery`
Example Query:
```
?bought=true&storeName=Food Basics&storeName=Nofrills&category=seafood&orderBy=id&ordering=desc
```
Example Response:
```
[
    {
        "id": 9,
        "name": "frozen lasagna",
        "quantity": "10",
        "unit": "pack,",
        "price": "1",
        "storeName": "Orci Tincidunt Adipiscing Corp.",
        "category": "seafood",
        "notes": "orci. Phasellus dapibus quam",
        "bought": true,
        "createdAt": "2022-01-21T15:46:31.000Z",
        "updatedAt": "2022-04-14T06:49:22.000Z"
    }
]
```
[Back to top](#api-documentation)

#### POST `/grocery/add`
Example Request Body:
```
{
    "name": "frozen lasagna",
    "quantity": 10,
    "unit": "pack",
    "price": 1,
    "storeName": "Nofrills",
    "category": "seafood",
    "notes": "no notes",
    "bought": false
}
```
Example Response:
```
{
    "id": 9,
    "name": "frozen lasagna",
    "quantity": "10",
    "unit": "pack,",
    "price": "1",
    "storeName": "Nofrills",
    "category": "seafood",
    "notes": "no notes",
    "bought": false,
    "createdAt": "2022-01-21T15:46:31.000Z",
    "updatedAt": "2022-04-14T06:49:22.000Z"
}
```
[Back to top](#api-documentation)


#### PUT `/grocery/update/id/:id`
Example Request Body:
```
{
    "name": "frozen lasagna",
    "quantity": 10,
    "unit": "pack",
    "price": 1,
    "storeName": "Nofrills",
    "category": "seafood",
    "notes": "no notes",
    "bought": false
}
```
Example Response:
```
{
    "id": 9,
    "name": "frozen lasagna",
    "quantity": "10",
    "unit": "pack,",
    "price": "1",
    "storeName": "Nofrills",
    "category": "seafood",
    "notes": "no notes",
    "bought": false,
    "createdAt": "2022-01-21T15:46:31.000Z",
    "updatedAt": "2022-04-14T06:49:22.000Z"
}
```
[Back to top](#api-documentation)

#### DELETE `/grocery/delete/id/:id`
Example Response:
```
{
    "id": 9,
    "name": "frozen lasagna",
    "quantity": "10",
    "unit": "pack,",
    "price": "1",
    "storeName": "Nofrills",
    "category": "seafood",
    "notes": "no notes",
    "bought": false,
    "createdAt": "2022-01-21T15:46:31.000Z",
    "updatedAt": "2022-04-14T06:49:22.000Z"
}
```
[Back to top](#api-documentation)
