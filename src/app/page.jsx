import Center from "@/components/Center";
import GoCarte from "@/components/GoCarte";
import Brands from "@/components/Home/Brands";
import Featured from "@/components/Home/Featured";
import FlashSale from "@/components/Home/FlashSale";
import Products from "@/components/Home/Products";

export default function Home() {
  return (
    <main>
      <section>
        <Center>
          <Featured />
          <Products />
          <Brands />
          <FlashSale />
          <GoCarte />
        </Center>
      </section>
    </main>
  );
}
