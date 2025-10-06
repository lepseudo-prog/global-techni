# Global Techni

Global Techni is a full-stack e-commerce web application built with **Next.js**, **Prisma**, and **Supabase**.  
It allows customers to:

1. **Buy electronic products** (with email updates and receipts).
2. **Request mobile phone repairs** (track repair steps, get receipts).
3. **Use LOA (Lease with Option to Buy)** with document upload, verification, and contract signing.

The project includes:
- A responsive frontend for customers.
- A backend API with authentication and database integration.
- (Planned) An admin dashboard for CRUD operations and order management.

---

## Tech Stack

| Layer             | Technology |
|-------------------|------------|
| Frontend          | Next.js 15 (App Router) |
| Backend API       | Next.js API Routes (monorepo style) |
| Database          | Supabase (PostgreSQL) |
| ORM               | Prisma |
| Authentication    | BetterAuth (email/password) |
| Payment Gateway   | Stripe (later) |
| File Storage      | TBD (free alternative to Supabase Storage for documents) |
| Deployment        | Vercel (frontend & backend), Supabase (DB) |

---


# Installation & Setup
## 1 Install Node.js
Download and install Node.js (which includes npm) from nodejs.org. We recommend using the latest LTS version. Verify the installation by running:
```bash
node -v
npm -v
```
## 2 Clone repository
```bash
git clone https://github.com/lepseudo-prog/global-techni.git
cd global-techni
```
## 3 Install dependencies
Install the project dependencies using one of the following package managers:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
## 4 Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 with your browser to see the result.

📋 Checkpoints

✅ Checkpoint 1 – Database & Prisma setup with Supabase.
✅ Checkpoint 2 – BetterAuth integration with Supabase via Prisma.
⬜ Checkpoint 3 – Product & order API endpoints.
⬜ Checkpoint 4 – File storage integration for LOA documents.
⬜ Checkpoint 5 – Stripe payment integration (test mode).
⬜ Checkpoint 6 – Admin dashboard (CRUD products/orders).
⬜ Checkpoint 7 – Frontend UI integration (responsive design).
⬜ Checkpoint 8 – Deployment to Vercel & final testing.

Note: might need to modify the better auth url in env file.
push test d