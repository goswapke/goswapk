import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const url = req.nextUrl.pathname;
      // Public routes
      const publicRoutes = ['/', '/lease', '/swap', '/vehicle', '/contact', '/how-it-works'];
      if (publicRoutes.some(p => url === p || url.startsWith('/vehicle/'))) return true;
      // Guarded
      if (!token) return false;
      // Role-based gates
      if (url.startsWith('/dashboard')) return token.role === 'TRAVELER' || token.role === 'PARTNER';
      if (url.startsWith('/partner')) return token.role === 'PARTNER';
      if (url.startsWith('/admin')) return token.isAdmin === true || token.role === 'ADMIN';
      return !!token;
    }
  }
});

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
