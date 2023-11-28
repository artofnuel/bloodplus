import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
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
      <body className={`${nunito.className} flex flex-col`}>
        <div className="z-50">
          <Navbar />
        </div>
        <div className="mt-[75px] lg:mt-[115px]">{children}</div>
      </body>
    </html>
  );
}
