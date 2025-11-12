# Quick Start Guide 

## Prerequisites
- Node.js v18 or higher
- PostgreSQL (or MySQL/SQLite)
- npm or yarn

## Quick Setup (5 minutes)

1. **Install dependencies**
```bash
npm install
```

2. **Setup environment**
```bash
# Copy and edit .env file
cp .env.example .env
# Edit DATABASE_URL in .env
```

3. **Setup database**
```bash
# Generate Prisma Client
npm run db:generate

# Create database tables
npm run db:push
# OR run migrations
npm run db:migrate
```

4. **Start development server**
```bash
npm run dev
```

5. **Test the API**
```bash
# Check health
curl http://localhost:3000/health

# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","password":"password123"}'
```

## Project Structure Explained

```
src/
├── types/              # TypeScript interfaces & types
│   └── user.types.ts   # User data types
│
├── common/             # Shared utilities
│   ├── apiResponse.ts  # Standard API response format
│   └── httpStatus.ts   # HTTP status codes
│
├── config/             # Configuration
│   ├── database.ts     # Prisma client & DB connection
│   └── env.ts          # Environment variables
│
├── middlewares/        # Express middlewares
│   ├── errorHandler.ts # Global error handler
│   └── validateRequest.ts # Request validation
│
├── utils/              # Helper functions
│   └── asyncHandler.ts # Async error wrapper
│
├── repositories/       # Data access layer
│   └── user.repository.ts # User DB operations
│
├── services/           # Business logic layer
│   └── user.service.ts # User business logic
│
├── controllers/        # Request handlers
│   └── user.controller.ts # User endpoints
│
├── routes/             # Route definitions
│   └── user.routes.ts  # User routes
│
├── app.ts              # Express app setup
└── server.ts           # Server entry point
```


Happy Coding! 🚀
