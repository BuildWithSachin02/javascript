-------------------------------------------------------------------
# 🔌 API - Application Programming Interface

<div align="center">

![API](https://img.shields.io/badge/Topic-API-blue?style=for-the-badge)
![Learning](https://img.shields.io/badge/Status-Learning-green?style=for-the-badge)
![Projects](https://img.shields.io/badge/Projects-Multiple-orange?style=for-the-badge)

**A comprehensive collection of API projects and documentation**

*Understanding APIs through practical implementation*

</div>

--

## 📚 About This Repository

Ye repository **API (Application Programming Interface)** ke concept ko samajhne aur implement karne ke liye banaya gaya hai. Isme different types ke API projects hain jo API development aur integration ko explain karte hain.

---

## 🎯 What is API?

### **Simple Definition**

**API** matlab **Application Programming Interface** - Ye ek set of rules aur protocols hai jo define karta hai ki different software applications kaise ek dusre ke saath communicate karengi.

### **Real-World Analogy**

Imagine karo ek **Restaurant**:

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│   Customer   │  →    │    Waiter    │  →    │   Kitchen    │
│    (You)     │       │     (API)    │       │   (Server)   │
└──────────────┘  ←    └──────────────┘  ←    └──────────────┘
   Order/Request         Communication          Process/Response
```

- **Customer (Client)** - Aap jo khana order karte ho
- **Waiter (API)** - Jo tumhara order kitchen tak le jata hai
- **Kitchen (Server)** - Jo khana prepare karta hai
- **Waiter wapas khana lata hai (Response)**

**API exactly waiter ki tarah kaam karta hai** - beech mein communication handle karta hai.

---

## 🔍 How Does API Work?

### **Basic Flow**

```
1. Client Request bhejta hai
         ↓
2. API Request ko process karta hai
         ↓
3. Server data fetch/process karta hai
         ↓
4. API Response wapas bhejta hai
         ↓
5. Client data receive karta hai
```

### **Technical Flow**

```
┌─────────────────────────────────────────────────────────┐
│                     API WORKFLOW                        │
└─────────────────────────────────────────────────────────┘

Frontend/Client Application
         │
         │ HTTP Request
         │ (GET, POST, PUT, DELETE)
         ↓
    API Endpoint
         │
         │ Authentication Check
         │ Validate Request
         ↓
    Business Logic
         │
         │ Process Data
         │ Apply Rules
         ↓
    Database Layer
         │
         │ CRUD Operations
         │ (Create, Read, Update, Delete)
         ↓
    Response Formation
         │
         │ Format Data (JSON/XML)
         │ Add Status Codes
         ↓
    Return to Client
```

---

## 🌟 Why Use APIs?

### **1. Separation of Concerns**
Frontend aur Backend alag-alag kaam kar sakte hain

### **2. Reusability**
Ek hi API multiple applications use kar sakti hain

### **3. Scalability**
Backend ko independently scale kar sakte ho

### **4. Security**
Sensitive data direct expose nahi hota

### **5. Platform Independence**
Kisi bhi language/platform se use kar sakte ho

---

## 📝 Types of APIs

### **1. REST API (Representational State Transfer)**

**Most Popular & Widely Used**

**Characteristics:**
- Uses HTTP methods (GET, POST, PUT, DELETE)
- Stateless (har request independent)
- JSON/XML format
- Resource-based URLs

**Example:**
```
GET    /api/users          → Get all users
GET    /api/users/123      → Get user with ID 123
POST   /api/users          → Create new user
PUT    /api/users/123      → Update user 123
DELETE /api/users/123      → Delete user 123
```

**Pros:**
✅ Simple aur easy to understand  
✅ Scalable  
✅ Stateless  
✅ Caching support  

**Cons:**
❌ Over-fetching/Under-fetching of data  
❌ Multiple requests for related data  

---

### **2. GraphQL API**

**Modern Alternative to REST**

**Characteristics:**
- Single endpoint
- Client decides what data to fetch
- Strongly typed
- Real-time updates with subscriptions

**Example:**
```graphql
query {
  user(id: 123) {
    name
    email
    posts {
      title
      content
    }
  }
}
```

**Pros:**
✅ No over-fetching  
✅ Single request for multiple resources  
✅ Strongly typed  
✅ Self-documenting  

**Cons:**
❌ Complex to implement  
❌ Caching difficult  
❌ Learning curve  

---

### **3. SOAP API (Simple Object Access Protocol)**

**Enterprise-level Protocol**

**Characteristics:**
- XML-based
- Strict standards
- Built-in security (WS-Security)
- ACID compliance

**Example:**
```xml
<soap:Envelope>
  <soap:Body>
    <GetUser>
      <UserId>123</UserId>
    </GetUser>
  </soap:Body>
</soap:Envelope>
```

**Pros:**
✅ High security  
✅ ACID compliance  
✅ Built-in error handling  

**Cons:**
❌ Complex  
❌ Slower than REST  
❌ Heavy (XML)  

---

### **4. WebSocket API**

**Real-time Bi-directional Communication**

**Characteristics:**
- Two-way communication
- Persistent connection
- Low latency
- Real-time updates

**Use Cases:**
- Chat applications
- Live sports scores
- Stock trading platforms
- Multiplayer games

**Pros:**
✅ Real-time  
✅ Low latency  
✅ Bi-directional  

**Cons:**
❌ Complex to scale  
❌ More resource-intensive  

---

## 🔧 HTTP Methods (REST API)

| Method | Purpose | Example | Safe | Idempotent |
|--------|---------|---------|------|------------|
| **GET** | Read/Fetch data | Get user list | ✅ Yes | ✅ Yes |
| **POST** | Create new resource | Create user | ❌ No | ❌ No |
| **PUT** | Update entire resource | Update user | ❌ No | ✅ Yes |
| **PATCH** | Partial update | Update email only | ❌ No | ✅ Yes |
| **DELETE** | Remove resource | Delete user | ❌ No | ✅ Yes |

### **What is Idempotent?**

**Idempotent** matlab agar aap same request multiple times bhejo, result same rahega.

**Example:**
```
DELETE /users/123  → First time: User deleted
DELETE /users/123  → Second time: Already deleted (same result)
✅ Idempotent

POST /users  → First time: User created (ID: 1)
POST /users  → Second time: New user created (ID: 2)
❌ Not Idempotent
```

---

## 📊 HTTP Status Codes

### **Success Codes (2xx)**

| Code | Status | Meaning |
|------|--------|---------|
| 200 | OK | Request successful |
| 201 | Created | New resource created |
| 204 | No Content | Success but no data to return |

### **Client Error Codes (4xx)**

| Code | Status | Meaning |
|------|--------|---------|
| 400 | Bad Request | Invalid request data |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | No permission |
| 404 | Not Found | Resource doesn't exist |
| 422 | Unprocessable Entity | Validation error |
| 429 | Too Many Requests | Rate limit exceeded |

### **Server Error Codes (5xx)**

| Code | Status | Meaning |
|------|--------|---------|
| 500 | Internal Server Error | Server-side error |
| 502 | Bad Gateway | Invalid response from upstream |
| 503 | Service Unavailable | Server temporarily down |
| 504 | Gateway Timeout | Server didn't respond in time |

---

## 🔐 API Authentication

### **1. API Key**

**Simplest Method**

```
GET /api/data?apikey=abc123xyz789
```

**Pros:** Simple to implement  
**Cons:** Less secure, keys can be stolen

---

### **2. Bearer Token (JWT)**

**Most Common Method**

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**How it works:**
1. User logs in with username/password
2. Server generates JWT token
3. Client stores token
4. Client sends token with every request
5. Server verifies token

**Pros:** Stateless, secure, scalable  
**Cons:** Token can be stolen if not handled properly

---

### **3. OAuth 2.0**

**Industry Standard**

**Use Cases:**
- Login with Google
- Login with Facebook
- Login with GitHub

**Flow:**
```
1. User clicks "Login with Google"
2. Redirect to Google login
3. User authenticates
4. Google returns authorization code
5. Exchange code for access token
6. Use token to access user data
```

**Pros:** Most secure, standard protocol  
**Cons:** Complex to implement

---

### **4. Basic Authentication**

**Simple but Less Secure**

```http
Authorization: Basic base64(username:password)
```

**Pros:** Simple  
**Cons:** Not secure (credentials in every request)

---

## 📦 API Request & Response

### **Request Structure**

```http
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer your_token_here

{
  "name": "Sachin Yadav",
  "email": "sachin@example.com",
  "age": 25
}
```

**Components:**
1. **Method** - POST
2. **Endpoint** - /api/users
3. **Headers** - Content-Type, Authorization
4. **Body** - JSON data

---

### **Response Structure**

```json
{
  "success": true,
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 123,
    "name": "Sachin Yadav",
    "email": "sachin@example.com",
    "age": 25,
    "created_at": "2024-12-30T10:00:00Z"
  }
}
```

**Components:**
1. **success** - Boolean (true/false)
2. **status** - HTTP status code
3. **message** - Human-readable message
4. **data** - Actual response data

---

### **Error Response**

```json
{
  "success": false,
  "status": 400,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

---

## 🎯 API Design Best Practices

### **1. Use Nouns, Not Verbs**

```
✅ Good
GET    /users
POST   /users
GET    /users/123

❌ Bad
GET    /getUsers
POST   /createUser
GET    /getUserById?id=123
```

---

### **2. Use Plural Nouns**

```
✅ Good
/users
/products
/orders

❌ Bad
/user
/product
/order
```

---

### **3. Use HTTP Methods Properly**

```
✅ Good
GET    /users       → Fetch users
POST   /users       → Create user
PUT    /users/123   → Update user
DELETE /users/123   → Delete user

❌ Bad
GET    /createUser
POST   /getUsers
```

---

### **4. Version Your API**

```
✅ Good
/api/v1/users
/api/v2/users

❌ Bad
/api/users  (What if you need to change structure?)
```

---

### **5. Use Pagination**

```
GET /api/users?page=1&limit=20
```

**Why?** Imagine you have 10,000 users. Sending all at once will crash the app!

---

### **6. Use Filtering, Sorting, Searching**

```
GET /api/users?status=active&sort=created_at&order=desc&search=sachin
```

---

### **7. Return Proper Status Codes**

```
✅ Good
201 when creating resource
404 when not found
400 for bad request

❌ Bad
Always returning 200 (even for errors)
```

---

### **8. Use HTTPS**

```
✅ https://api.example.com
❌ http://api.example.com
```

**Why?** Data encryption, security

---

### **9. Rate Limiting**

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1704024000
```

**Why?** Prevent abuse, ensure fair usage

---

### **10. Documentation**

Always provide clear API documentation with:
- Endpoints
- Request/Response examples
- Authentication methods
- Error codes

---

## 🛠️ Tools for API Development

### **Testing Tools**

| Tool | Description | Use Case |
|------|-------------|----------|
| **Postman** | Most popular API testing tool | Testing, Documentation |
| **Insomnia** | Lightweight alternative to Postman | API testing |
| **Thunder Client** | VS Code extension | Quick testing in IDE |
| **cURL** | Command-line tool | Scripting, automation |
| **HTTPie** | User-friendly cURL alternative | Terminal testing |

---

### **Documentation Tools**

| Tool | Description |
|------|-------------|
| **Swagger/OpenAPI** | API specification standard |
| **Postman Docs** | Auto-generate from Postman |
| **Readme.io** | Beautiful API docs |
| **GitBook** | Documentation platform |

---

### **Development Frameworks**

**Node.js:**
- Express.js
- Fastify
- NestJS
- Koa

**Python:**
- Flask
- FastAPI
- Django REST Framework

**PHP:**
- Laravel
- Symfony

---

## 📖 Common API Terms

### **Endpoint**
Specific URL where API can be accessed
```
Example: https://api.example.com/users
```

### **Request**
Data sent from client to server
```
GET /api/users
```

### **Response**
Data returned from server to client
```json
{ "users": [...] }
```

### **JSON (JavaScript Object Notation)**
Most common data format for APIs
```json
{
  "name": "Sachin",
  "age": 25
}
```

### **Header**
Metadata sent with request/response
```
Content-Type: application/json
Authorization: Bearer token123
```

### **Query Parameters**
Additional data in URL
```
?page=1&limit=10&sort=name
```

### **Path Parameters**
Dynamic values in URL path
```
/users/{id}
/users/123
```

### **Body**
Data sent in request (usually POST/PUT)
```json
{
  "name": "Sachin",
  "email": "sachin@example.com"
}
```

### **CRUD Operations**
- **C**reate - POST
- **R**ead - GET
- **U**pdate - PUT/PATCH
- **D**elete - DELETE

---

## 🌐 Real-World API Examples

### **1. Weather API**
```
GET https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_KEY

Response:
{
  "temp": 25,
  "humidity": 60,
  "weather": "Clear"
}
```

### **2. GitHub API**
```
GET https://api.github.com/users/BuildWithSachin02

Response:
{
  "name": "Sachin Yadav",
  "public_repos": 20,
  "followers": 50
}
```

### **3. JSONPlaceholder (Fake API for Testing)**
```
GET https://jsonplaceholder.typicode.com/users

Response: List of 10 fake users
```

---

## 💡 Learning Path

### **Beginner (Week 1-2)**
- [ ] Understand what is API
- [ ] Learn HTTP methods
- [ ] Practice with Postman
- [ ] Use public APIs (JSONPlaceholder, Dog API)

### **Intermediate (Week 3-4)**
- [ ] Build simple REST API (Node.js/Python)
- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Implement authentication (JWT)
- [ ] Handle errors properly

### **Advanced (Week 5+)**
- [ ] Build production-ready API
- [ ] Add rate limiting
- [ ] Write API documentation
- [ ] Deploy to cloud (Heroku/AWS)
- [ ] Add monitoring and logging

---

## 🎓 Resources

### **Free APIs for Practice**
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API
- [OpenWeather API](https://openweathermap.org/api) - Weather data
- [Dog API](https://dog.ceo/dog-api/) - Random dog images
- [GitHub API](https://api.github.com/) - GitHub data
- [Public APIs List](https://github.com/public-apis/public-apis) - 1000+ free APIs

### **Documentation**
- [MDN - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [REST API Tutorial](https://restfulapi.net/)
- [OpenAPI Specification](https://swagger.io/specification/)

### **Video Tutorials**
- FreeCodeCamp - APIs for Beginners
- TraversyMedia - REST API Crash Course
- CodeWithHarry - API Tutorial (Hindi)

---

## 📂 Projects in This Repository

*This section will contain links to your API projects*

1. **Weather API** - OpenWeather integration
2. **Todo API** - CRUD operations
3. **Authentication API** - JWT implementation
4. **E-commerce API** - Product management
5. **Social Media API** - Posts and comments

---

## 🤝 Contributing

Contributions are welcome! If you have:
- Better examples
- More explanations
- New project ideas
- Bug fixes

Feel free to open an issue or pull request!

---

## 📧 Contact

**Author:** Sachin Yadav  
**GitHub:** [@BuildWithSachin02](https://github.com/BuildWithSachin02)  
**Email:** yadavsachin3166@gmail.com

---

## 📄 License

This repository is for educational purposes. Feel free to use and learn!

---

<div align="center">

**Made with ❤️ for learning APIs**

⭐ Star this repo if you find it helpful!

*Keep learning, keep building! 🚀*

</div>
























