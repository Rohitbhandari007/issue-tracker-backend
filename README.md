# Issue Tracker Backend

This backend project is structured for clarity, maintainability, and scalability. Below is an overview of the project layout and instructions for setting up and running the development environment.

---

## 📁 Project Structure
```

prisma/
├─ schema.prisma 
└─ migrations/ 

src/
├─ index.ts 
├─ config/ # App & database configuration
├─ repositories/ # Data access layer (e.g., IssueRepository)
├─ routers/ # API routes (e.g., issues router)
├─ schemas/ # Validation schemas (Zod)
├─ scripts/ # Utility scripts (e.g., test data generation)
├─ services/ # Business logic (e.g., IssueService)
├─types/ # Shared type definitions
└─ utils/ # (logging, validation, JSON formatting)


```


---

## 🚀 Getting Started

### 1. Clone the project
```
git clone https://github.com/Rohitbhandari007/issue-tracker-backend.git
cd issue-tracker-backend
```
### 2. Create .env file with
```
DATABASE_URL="file:./tasks.db"
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run database migrations
```
npx prisma migrate dev --name init
```

### 4. Start the development server
```
npm run dev
```
Visit http://localhost:3000
 in your browser.

---

## ⚖️ Trade-offs

- **Framework Choice (Hono):**
	- Chose Hono for its lightweight nature, ideal for serverless environments (e.g., AWS Lambda).
	- Trade-off: While Hono is fast and minimal, more mature frameworks (like Express, Fastify, or NestJS) offer richer ecosystems, built-in features, and community support.

- **ORM (Prisma):**
	- Prisma provides type safety, easy migrations, and a modern developer experience.
	- Trade-off: Prisma can be heavier than query builders like Drizzle or direct SQL, but it balances productivity and maintainability.

- **Serverless Assumptions:**
	- Designed for serverless deployment, prioritizing statelessness and fast cold starts.
	- Trade-off: Some features (like persistent connections, advanced caching, or background jobs) may be harder to implement or require additional services.

- **Testing & Validation:**
	- Basic validation with Zod schemas; no mention of automated tests.
	- Trade-off: Quick to implement, but comprehensive testing would improve reliability and confidence in future changes.

- **Databse SQLlite:**
	- Basic databse no additional setups.
	- Trade-off: Quick to implement, but later move to more better options like mySQL or posgreSQL .

---

## 🛠️ Future Improvements ( With more time )

- Add authentication layer (e.g., JWT, OAuth)
- Add automated testing (unit/integration)
- Add more advanced business logic and features
- Choose better relational database.

 
### Frontend URL : https://github.com/Rohitbhandari007/issue-tracker-frontend.git