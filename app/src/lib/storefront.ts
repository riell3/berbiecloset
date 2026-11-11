export type Product = { id: number; name: string; category: string; price?: number; image: string; note: string; sizes?: string; instagramUrl: string };
export const products: Product[] = [
  { id: 1, name: "Everyday Statement Look", category: "Outfits", image: "/instagram-collection/look-01.jpg", note: "Outfit available in sizes 10–16", sizes: "10–16", instagramUrl: "https://www.instagram.com/reel/DdHVCugAzyx/" },
  { id: 2, name: "Printed Jacket", category: "Jackets", image: "/instagram-collection/look-02.jpg", note: "Printed jacket", sizes: "10–14", instagramUrl: "https://www.instagram.com/reel/DdHVf2BAh3R/" },
  { id: 3, name: "Denim Jeans 01", category: "Denim", image: "/instagram-collection/look-03.jpg", note: "Jeans", sizes: "10–18", instagramUrl: "https://www.instagram.com/reel/DdZKMw9AUkE/" },
  { id: 4, name: "Denim Jeans 02", category: "Denim", image: "/instagram-collection/look-04.jpg", note: "Jeans", sizes: "10–14", instagramUrl: "https://www.instagram.com/reel/DdZMQpZAGoJ/" },
  { id: 5, name: "Classic Shirt", category: "Tops", image: "/instagram-collection/look-05.jpg", note: "Shirt", sizes: "10–14", instagramUrl: "https://www.instagram.com/reel/DdZMeI-A-Kt/" },
  { id: 6, name: "Signature Outfit", category: "Outfits", image: "/instagram-collection/look-06.jpg", note: "Ready-to-wear look", sizes: "10–14", instagramUrl: "https://www.instagram.com/reel/DdZMpblAtXp/" },
  { id: 7, name: "Denim Jeans 03", category: "Denim", image: "/instagram-collection/look-07.jpg", note: "Jeans", sizes: "10–14", instagramUrl: "https://www.instagram.com/reel/DdZk4oWAT5m/" },
  { id: 8, name: "Short Set", category: "Co-ords", image: "/instagram-collection/look-08.jpg", note: "Two-piece short set", sizes: "10–14", instagramUrl: "https://www.instagram.com/reel/DdbkHY4hZt5/" },
  { id: 9, name: "Beaded Two-Piece", category: "Co-ords", price: 75000, image: "/instagram-collection/look-09.jpg", note: "Beautiful beaded two-piece", instagramUrl: "https://www.instagram.com/reel/Dev2d0DgUAp/" },
];
export const money = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;
export type CartLine = { product: Product; quantity: number };
export const readCart = (): CartLine[] => { try { return JSON.parse(localStorage.getItem("berbiecloset-cart-v1") || "[]") as CartLine[]; } catch { return []; } };
export const saveCart = (cart: CartLine[]) => localStorage.setItem("berbiecloset-cart-v1", JSON.stringify(cart));
