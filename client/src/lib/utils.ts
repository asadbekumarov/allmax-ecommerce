/**
 * Safely format numbers into Uzbek sum format with standard spaces (e.g. 149 000).
 * Avoids locale-based hydration mismatches between Server (Node.js) and Client (Browser).
 */
export const formatPrice = (price: number): string => {
  if (typeof price !== "number" || isNaN(price)) return "0";
  return Math.round(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
