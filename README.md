# MetaMask Login

A demo of MetaMask login using web3.js.


## Backend API

All API addresses need to have `/api` in front.


### POST /auth

Get token for a public address.

* Request Body JSON
```json
{
  "publicAddress": "string",
  "nonce": "string",
  "signature": "string"
}
```

* Response JSON
```json
{
  "token": "string"
}
```
