import Image from "next/image";
import NewProducts from "./Components/NewProducts";
import Testinomals from './Components/Testinomals';
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <main>
      <NewProducts />
      <br/>
      <Testinomals />
      <Footer />
    </main>
  );
}
