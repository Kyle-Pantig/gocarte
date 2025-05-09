import Link from "next/link"
import Center from "./Center"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductGrid from "./Home/ProductGrid"

const PopularProducts = () => {
  return (
    <Center>
      <div className="py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold my-6">Popular Products</h2>
          <Link
            href={"/"}
            className=" hover:border-b-2 border-black/40 flex items-center gap-1"
          >
            <span>View All</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <ProductGrid />
      </div>
    </Center>
  )
}

export default PopularProducts