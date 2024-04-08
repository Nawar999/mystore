import Image from "next/image";
import Hero from "./component/Hero";
import ProductList from "./component/ProductList";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  );
}
