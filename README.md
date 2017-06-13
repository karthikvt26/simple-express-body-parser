To install
  npm install

To run
  node server.js

To test:
  GET request on http://localhost:8080/ should give you { "Hello": "World " } response
  POST request on 
    http://localhost:8080/apply_coupon 
    with post data as 
    {
      "coupon_code": "ABCDEF"
    }
  should give you the same body as the response
  
