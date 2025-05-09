"use client";
import { useEffect, useState } from "react";
import Center from "../Center";
import Tabs from "./Tabs";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SaleProducts from "../SaleProducts";
import NewProducts from "../NewProducts";
import { usePathname } from "next/navigation";
import PopularProducts from "../PopularProducts";


const Products = () => {
  const [activeTab, setActiveTab] = useState("");
  const path = usePathname();

  useEffect(() => {
    if ((path === "/" || path === "") && activeTab === "") {
      setActiveTab("Apparel");
    }
  }, [activeTab, path]);

  return (
    <Center>
      <div className="flex items-center gap-4">
        <div>
          <Tabs
            tabs={[
              "Apparel",
              "Electronics",
              "Health and Beauty",
              "Books",
              "Instrument",
            ]}
            active={activeTab}
            onChange={setActiveTab}
          />
        </div>
        <div className="grow flex items-center relative">
          <Input
            placeholder="Search"
            className={"shadow bg-gray-300 p-2 grow rounded-md "}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="w-4 h-4 absolute right-0 p-2"
          />
        </div>
      </div>
      <div>
        {activeTab === "Apparel" && (
          <>
            <SaleProducts />
            <NewProducts />
            <PopularProducts />
          </>
        )}

        {activeTab === "Electronics" && <p>Electronics products content</p>}
        {activeTab === "Health and Beauty" && (
          <p>Health and Beauty products content</p>
        )}
        {activeTab === "Books" && <p>Books products content</p>}
        {activeTab === "Instrument" && <p>Instrument products content</p>}
      </div>
    </Center>
  );
};

export default Products;
