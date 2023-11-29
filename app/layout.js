import { Inter, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const nunito = Nunito({
  subsets: ["cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BloodPlus",
  description: "Donate with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col`}>
        <div className="z-50">
          <Navbar />
        </div>
        <div className="mt-[75px] lg:mt-[115px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
