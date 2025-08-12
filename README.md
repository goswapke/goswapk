# GoSwap Starter (Next.js + Prisma + NextAuth + Tailwind)

Elegant marketplace skeleton for leasing/swapping vehicles.

## Quickstart
```bash
pnpm i # or npm i / yarn
cp .env.example .env
# set DATABASE_URL etc.
npx prisma db push
pnpm dev
```

## What’s included
- Next.js App Router + Tailwind + brand theme
- Auth (email/password) via NextAuth Credentials + Prisma
- Prisma schema for users, vehicles, bookings, swaps, payments
- Guarded routes via middleware (role-based)
- Stripe checkout session route (stub)
- Pages: home, lease, swap, vehicle/[id], how-it-works, contact, auth

## Next steps
- Implement vehicle CRUD + Cloudinary uploads
- Build lease listing grid + filters, swap flows
- Connect Stripe webhooks, calculate commission and earnings
- Add partner/admin dashboards
- Add availability calendar & validations
- Harden security (rate limits, input validation with Zod)
