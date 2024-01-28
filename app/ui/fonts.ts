import { Inter, Poppins, Lusitana } from "next/font/google";

export const inter = Inter({subsets: ['latin']});
export const poppins = Poppins({subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});