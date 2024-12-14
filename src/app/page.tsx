import Image from "next/image";
import Navigation from "./component/navigation";
import Header from "./component/header";
import Product from "./component/products";
import Footer from "./component/footer";


export default function Home() {
  return (
    <div>
    
    <div>
      <Header/>
    </div>
    <div>
      <Product/>
    </div>
    
    </div>
  );
  
}
