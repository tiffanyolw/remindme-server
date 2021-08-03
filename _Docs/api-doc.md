# API Documentation
[Product](#product-product)
- [GET](#get-useruserId)
- [GET](#get-idid)
- [POST](#post-add)
- [PUT](#put-updateidid)
- [DELETE](#delete-deleteidid)

[Shopping](#shopping-shopping)
- [GET](#get-useruserId)
- [GET](#get-idid)
- [POST](#post-add)
- [PUT](#put-updateidid)
- [DELETE](#delete-deleteidid)

[User](#user-user)
- [POST](#post-register)
- [POST](#post-login)
- [PATCH](#patch-updateuserid)
- [PATCH](#patch-update-useruserid)

## Product `/product`
### GET `/user/:userId`
Example Query Params:
```
expired: "false"
categoryId: "1"
locationId: "1"
status: { "ready", "consumed", "trashed" }
orderBy: "expiryDate"
ordering: "desc"
```
Example Response: 200
```
[
    {
        "id": 10,
        "userId": 1,
        "name": "oranges",
        "unitId": 1,
        "quantity": 1,
        "quantityConsumed": 1,
        "quantityTrashed": 0,
        "purchaseDate": null,
        "expiryDate": null,
        "categoryId": 1,
        "locationStoredId": 1,
        "notes": null,
        "daysBeforeNotify": null,
        "status": "ready",
        "createdAt": "2021-08-02T02:14:01.000Z",
        "updatedAt": "2021-08-02T22:57:20.000Z",
        "category": {
            "id": 1,
            "name": "No Category"
        },
        "locationStored": {
            "id": 1,
            "name": "Not Stored"
        },
        "unit": {
            "id": 1,
            "name": "No Unit",
            "pluralName": null
        }
    }
]
```
[Back to top](#api-documentation)

### GET `/id/:id`
Example Response: 200
```
{
    "id": 10,
    "userId": 1,
    "name": "oranges",
    "unitId": 1,
    "quantity": 1,
    "quantityConsumed": 1,
    "quantityTrashed": 0,
    "purchaseDate": null,
    "expiryDate": null,
    "categoryId": 1,
    "locationStoredId": 1,
    "notes": null,
    "daysBeforeNotify": null,
    "status": "ready",
    "createdAt": "2021-08-02T02:14:01.000Z",
    "updatedAt": "2021-08-02T22:57:20.000Z",
    "category": {
        "id": 1,
        "name": "No Category"
    },
    "locationStored": {
        "id": 1,
        "name": "Not Stored"
    },
    "unit": {
        "id": 1,
        "name": "No Unit",
        "pluralName": null
    }
}
```
[Back to top](#api-documentation)

### GET `/expiring/user/:userId`
Example Query Params:
```
expiryIn: "3"
```
Example Response: 200
```
[
    {
        "id": 10,
        "userId": 1,
        "name": "oranges",
        "unitId": 1,
        "quantity": 1,
        "quantityConsumed": 1,
        "quantityTrashed": 0,
        "purchaseDate": null,
        "expiryDate": null,
        "categoryId": 1,
        "locationStoredId": 1,
        "notes": null,
        "daysBeforeNotify": null,
        "status": "ready",
        "createdAt": "2021-08-02T02:14:01.000Z",
        "updatedAt": "2021-08-02T22:57:20.000Z",
        "category": {
            "id": 1,
            "name": "No Category"
        },
        "locationStored": {
            "id": 1,
            "name": "Not Stored"
        },
        "unit": {
            "id": 1,
            "name": "No Unit",
            "pluralName": null
        }
    }
]
```
[Back to top](#api-documentation)

### POST `/product/add`
Example Request Body:
```
{
    "userId": 1,
    "name": "oranges",
    "unitId": 1,
    "quantity": 3,
    "quantityConsumed": 0,
    "quantityTrashed": 0,
    "purchaseDate": null,
    "expiryDate": null,
    "categoryId": 1,
    "locationStoredId": 1,
    "notes": null,
    "daysBeforeNotify": null,
    "status": "ready"
}
```
Example Response: 200
```
{
    "id": 10,
    "userId": 1,
    "name": "oranges",
    "unitId": 1,
    "quantity": 3,
    "quantityConsumed": 0,
    "quantityTrashed": 0,
    "purchaseDate": null,
    "expiryDate": null,
    "categoryId": 1,
    "locationStoredId": 1,
    "notes": null,
    "daysBeforeNotify": null,
    "status": "ready",
    "createdAt": "2021-08-02T02:14:01.000Z",
    "updatedAt": "2021-08-02T22:57:20.000Z",
    "category": {
        "id": 1,
        "name": "No Category"
    },
    "locationStored": {
        "id": 1,
        "name": "Not Stored"
    },
    "unit": {
        "id": 1,
        "name": "No Unit",
        "pluralName": null
    }
}
```
[Back to top](#api-documentation)

### PUT `/product/update/id/:id`
Example Request Body:
```
{
    "userId": 1,
    "name": "oranges",
    "unitId": 1,
    "quantity": 3,
    "quantityConsumed": 1,
    "quantityTrashed": 1,
    "purchaseDate": null,
    "expiryDate": null,
    "categoryId": 2,
    "locationStoredId": 2,
    "notes": null,
    "daysBeforeNotify": null,
    "status": "ready"
}
```
Example Response: 200
```
{
    "id": 10,
    "userId": 1,
    "name": "oranges",
    "unitId": 1,
    "quantity": 3,
    "quantityConsumed": 1,
    "quantityTrashed": 1,
    "purchaseDate": null,
    "expiryDate": null,
    "categoryId": 2,
    "locationStoredId": 2,
    "notes": null,
    "daysBeforeNotify": null,
    "status": "ready",
    "createdAt": "2021-08-02T02:14:01.000Z",
    "updatedAt": "2021-08-02T22:57:20.000Z",
    "category": {
        "id": 2,
        "name": "Fruit"
    },
    "locationStored": {
        "id": 2,
        "name": "Refrigerator"
    },
    "unit": {
        "id": 1,
        "name": "No Unit",
        "pluralName": null
    }
}
```
[Back to top](#api-documentation)

### DELETE `/product/delete/id/:id`
Example Response: 200
```
{
    "id": 10,
    "userId": 1,
    "name": "oranges",
    "unitId": 1,
    "quantity": 3,
    "quantityConsumed": 1,
    "quantityTrashed": 1,
    "purchaseDate": null,
    "expiryDate": null,
    "categoryId": 2,
    "locationStoredId": 2,
    "notes": null,
    "daysBeforeNotify": null,
    "status": "ready",
    "createdAt": "2021-08-02T02:14:01.000Z",
    "updatedAt": "2021-08-02T22:57:20.000Z",
    "category": {
        "id": 2,
        "name": "Fruit"
    },
    "locationStored": {
        "id": 2,
        "name": "Refrigerator"
    },
    "unit": {
        "id": 1,
        "name": "No Unit",
        "pluralName": null
    }
}
```
[Back to top](#api-documentation)


## Shopping `/shopping`
### GET `/user/:userId`
Example Query Params:
```
bought: "false"
cleared: "false"
storeName: "Loblaws"
categoryId: "5"
orderBy: "createdAt"
ordering: "desc"
```
Example Response: 200
```
[
    {
        "id": 2,
        "userId": 1,
        "name": "Beef",
        "quantity": 2,
        "unitId": 3,
        "price": 2.1,
        "storeName": "Loblaws",
        "categoryId": 5,
        "notes": "notes",
        "bought": false,
        "cleared": false,
        "createdAt": "2021-08-02T02:17:47.000Z",
        "updatedAt": "2021-08-02T02:20:58.000Z",
        "itemCategory": {
            "id": 5,
            "name": "Meat"
        },
        "itemUnit": {
            "id": 3,
            "name": "Pack",
            "pluralName": "Packs"
        }
    }
]
```

### GET `/id/:id`
Example Response: 200
```
{
    "id": 2,
    "userId": 1,
    "name": "Beef",
    "quantity": 2,
    "unitId": 3,
    "price": 2.1,
    "storeName": "Loblaws",
    "categoryId": 5,
    "notes": "notes",
    "bought": false,
    "cleared": false,
    "createdAt": "2021-08-02T02:17:47.000Z",
    "updatedAt": "2021-08-02T02:20:58.000Z",
    "itemCategory": {
        "id": 5,
        "name": "Meat"
    },
    "itemUnit": {
        "id": 3,
        "name": "Pack",
        "pluralName": "Packs"
    }
}
```

### POST `/add`
Example Request Body:
```
{
    "userId": 1,
    "name": "Beef",
    "quantity": 2,
    "unitId": 3,
    "price": 2.1,
    "storeName": "Loblaws",
    "categoryId": 5,
    "notes": "notes",
    "bought": false,
    "cleared": false,
}
```
Example Response: 200
```
{
    "id": 2,
    "userId": 1,
    "name": "Beef",
    "quantity": 2,
    "unitId": 3,
    "price": 2.1,
    "storeName": "Loblaws",
    "categoryId": 5,
    "notes": "notes",
    "bought": false,
    "cleared": false,
    "createdAt": "2021-08-02T02:17:47.000Z",
    "updatedAt": "2021-08-02T02:20:58.000Z",
    "itemCategory": {
        "id": 5,
        "name": "Meat"
    },
    "itemUnit": {
        "id": 3,
        "name": "Pack",
        "pluralName": "Packs"
    }
}
```

### PUT `/update/id/:id`
Example Request Body:
```
{
    "id": 2,
    "userId": 1,
    "name": "Beef",
    "quantity": 2,
    "unitId": 3,
    "price": 2.1,
    "storeName": "Loblaws",
    "categoryId": 5,
    "notes": "notes",
    "bought": false,
    "cleared": false,
}
```
Example Response: 200
```
{
    "id": 2,
    "userId": 1,
    "name": "Beef",
    "quantity": 2,
    "unitId": 3,
    "price": 2.1,
    "storeName": "Loblaws",
    "categoryId": 5,
    "notes": "notes",
    "bought": false,
    "cleared": false,
    "createdAt": "2021-08-02T02:17:47.000Z",
    "updatedAt": "2021-08-02T02:20:58.000Z",
    "itemCategory": {
        "id": 5,
        "name": "Meat"
    },
    "itemUnit": {
        "id": 3,
        "name": "Pack",
        "pluralName": "Packs"
    }
}
```

### DELETE `/delete/id/:id`
Example Response: 200
```
{
    "id": 2,
    "userId": 1,
    "name": "Beef",
    "quantity": 2,
    "unitId": 3,
    "price": 2.1,
    "storeName": "Loblaws",
    "categoryId": 5,
    "notes": "notes",
    "bought": false,
    "cleared": false,
    "createdAt": "2021-08-02T02:17:47.000Z",
    "updatedAt": "2021-08-02T02:20:58.000Z",
    "itemCategory": {
        "id": 5,
        "name": "Meat"
    },
    "itemUnit": {
        "id": 3,
        "name": "Pack",
        "pluralName": "Packs"
    }
}
```

## User `/user`
### POST `register`
Example Request Body:
```
{
    "firstName": "Lisa",
    "lastName": "Red",
    "email": "lisa@email.com",
    "password": "password"
}
```
Example Response: 200
```
{
    "id": 9,
    "firstName": "Lisa",
    "lastName": "Red",
    "email": "lisa@email.com",
    "password": "$2b$10$I8Zp6g6VzAjcRK8Cc6E/QOEUbD1SfbH0lEpB4n/d7e2ibnEW.CfR6",
    "updatedAt": "2021-08-03T02:09:49.643Z",
    "createdAt": "2021-08-03T02:09:49.643Z"
}
```

### POST `/login`
Example Request Body:
```
{
    "email": "lisa@email.com",
    "password": "password"
}
```
Example Response: 200
```
{
    "id": 9,
    "email": "lisa@email.com",
    "password": "$2b$10$I8Zp6g6VzAjcRK8Cc6E/QOEUbD1SfbH0lEpB4n/d7e2ibnEW.CfR6",
    "firstName": "Lisa",
    "lastName": "Red",
    "createdAt": "2021-08-03T02:09:49.000Z",
    "updatedAt": "2021-08-03T02:09:49.000Z"
}
```


### PATCH `update/user/:id`
Example Request Body:
```
{
    "firstName": "Tony",
    "lastName": "Blue",
    "email": "tony@email.com"
}
```
Example Response: 200
```
{
    "id": 9,
    "firstName": "Tony",
    "lastName": "Blue",
    "email": "tony@email.com",
    "password": "$2b$10$I8Zp6g6VzAjcRK8Cc6E/QOEUbD1SfbH0lEpB4n/d7e2ibnEW.CfR6",
    "updatedAt": "2021-08-03T02:09:49.643Z",
    "createdAt": "2021-08-03T02:09:49.643Z"
}
```

### PATCH `update-password/user/:id`
Example Request Body:
```
{
    "newPassword": "password",
    "currentPassword": "oldpass"
}
```
Example Response: 200
```
{
    "id": 9,
    "firstName": "Tony",
    "lastName": "Blue",
    "email": "tony@email.com",
    "password": "$2b$10$I8Zp6g6VzAjcRK8Cc6E/QOEUbD1SfbH0lEpB4n/d7e2ibnEW.CfR6",
    "updatedAt": "2021-08-03T02:09:49.643Z",
    "createdAt": "2021-08-03T02:09:49.643Z"
}