API. What is it?
- Set of commands
- Functions
- Protocols
- Objects

that programmers can use to create software or interact
with an external system

API Jquery, API Bootstrap, API React Router Dom

1. Endpoints: http://localhost:5000/api/v1
2. Paths: http://localhost:5000/api/v1/user
3. Parameters: http://localhost:5000/api/v1/user/1
3.1 http://localhost:5000/api/v1/user?id=qkwhasdahda
3.1 http://localhost:5000/api/v1/user?id=askdjadjhj&&name=egi
4. Authentication
--- Butuh sesuatu yang bisa mengidentifikasi siapa yg sedang ngomong

RESTful
Representate State Transfer
What is REST? Arstitekrur yang dipakai untung membangun sebuah API

SOAP, REST, GraphQL, Falcor

REST punya rules: 
1. Use HTTP request verbs
1.1 - GET = Read
    - POST = Create
    - PUT/PATCH(new) = Update
    -- PUT = Replace whole data
    -- PATCH = Replace the needed data
    - DELETE = Delete/Destroy
2. Use specific pattern of routes/endpoint URL
Get todos data
HTTP verbs      /users               /user/1
   GET      fetches all users   fetch user with Id 1
   POST     create one user         -
  PUT/PATCH       -              update user with Id 1
  DELETE  Delete all users        delete user with Id 1
