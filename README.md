# Fullstack Example with Next.js (GraphQL API)

This example shows how to implement a **fullstack app in TypeScript with [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/), [Apollo Client](https://www.apollographql.com/docs/react/) (frontend), [Nexus Schema](https://nxs.li/components/standalone/schema) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend).

## Getting started
### 1. Create and seed the database

Run the following command to create tables in your database file:

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in [`prisma/seed.ts`](./prisma/seed.ts) by running the following command:

```
npx prisma db seed --preview-feature
```

### 2. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

If you want production buld - build it with `npm run build` and start with `npm start`