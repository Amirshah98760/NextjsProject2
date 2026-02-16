import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Navbar />
        {/* <h1 className="text-3xl font-bold">Hello world! This is Root Layout</h1>  */}
       <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
