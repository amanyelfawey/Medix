import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "@/app/_components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medix",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
  <html lang="en">
  <body className={inter.className}>
    <div>
       {/* Header */}
       
      <Navbar/>
        {children}
      {/* Footer */}
      <Footer/>
      

    </div>
    </body>
</html>
  );
}







