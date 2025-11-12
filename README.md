# Node.js Express TypeScript Prisma Boilerplate

---

## English

### Features

- **Express.js** - Fast, unopinionated web framework
- **TypeScript** - Type safety and modern JavaScript features
- **Prisma ORM** - Modern database toolkit
- **Layered Architecture** - Clean separation of concerns (Controllers, Services, Repositories)
- **Middleware Support** - Authentication, validation, error handling
- **Environment Variables** - Configuration management with dotenv
- **Code Quality** - ESLint, Prettier, Husky pre-commit hooks
- **Security** - Helmet, CORS, rate limiting
- **Logging** - Morgan HTTP request logger

### Project Structure

```
src/
├── app.ts              # Express app configuration
├── server.ts           # Server entry point
├── common/             # Shared constants, enums, responses
├── config/             # Configuration files (database, env)
├── controllers/        # Request handlers
├── middlewares/        # Custom middleware (auth, validation, error)
├── repositories/       # Database access layer
├── routes/             # API route definitions
├── services/           # Business logic layer
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Learning_TS_EXPRESS
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
# Create .env file
cp .env.example .env

# Edit .env with your configuration
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
PORT=3000
NODE_ENV=development
```

4. **Setup Prisma**
```bash
# Generate Prisma Client
npm run db:generate

# Run migrations
npm run db:migrate

# (Optional) Open Prisma Studio
npm run db:studio
```

### Usage

**Development mode**
```bash
npm run dev
```

**Build for production**
```bash
npm run build
npm start
```

**Linting and formatting**
```bash
npm run lint
npm run lint:fix
npm run format
```

### Example API Structure

This boilerplate includes a simple User API example:

**Endpoints:**
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

**Architecture Flow:**
```
Request → Route → Middleware → Controller → Service → Repository → Database
                                                 ↓
Response ← Controller ← Service ← Repository ← Database
```

### Adding New Features

1. **Define types** in `src/types/`
2. **Create repository** in `src/repositories/` for database operations
3. **Create service** in `src/services/` for business logic
4. **Create controller** in `src/controllers/` for request handling
5. **Define routes** in `src/routes/`
6. **Add middleware** if needed in `src/middlewares/`
7. **Register routes** in `src/app.ts`

### Technologies

- Node.js v18+
- Express.js v5
- TypeScript v5
- Prisma ORM v5
- Zod (Validation)
- JWT (Authentication)
- Helmet (Security)
- Morgan (Logging)



**Happy Coding! **
