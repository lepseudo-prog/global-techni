# Global Techni

Full-stack e-commerce platform for selling electronics, mobile repair services, and LOA (Lease with Option to Buy) with identity verification and contract generation.  
Built as a **Next.js monorepo** with **Supabase** for backend, auth, and file storage(maybe, not sure yet).

---

## 🚀 Features (planned)
- Sell electronics with online payments (Stripe integration planned)
- Mobile repair request with order tracking
- LOA system: upload documents, generate contracts, approve or reject requests
- Secure file storage for sensitive documents
- Authentication (email/password)
- Admin panel for managing products/orders (later)

---

## 🛠 Tech Stack
**Frontend & API**: Next.js 15 (App Router) + TypeScript  
**Backend**: Next.js API Routes  
**Database**: PostgreSQL (Supabase) + Prisma ORM  
**Auth**: NextAuth.js (credentials provider)  
**Storage**: Supabase Storage (not sure yet) 
**PDF Generation**: pdfkit (planned)  

---

## 📦 Installation & Setup

### 1 Clone repository
```bash
git clone https://github.com/YOUR_USERNAME/global-techni.git
cd global-techni
```
### 2 Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.