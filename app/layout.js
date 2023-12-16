import { Inter, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MotionDiv } from "./components/MotionDiv";

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
      {/* <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      </head> */}
      <body className={`${poppins.className} flex flex-col`}>
        <div className="z-50">
          <Navbar />
        </div>
        <MotionDiv>
          <div className="">{children}</div>
          <Footer />
        </MotionDiv>
      </body>
    </html>
  );
}
