import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import StarsRating from "../StarsRating";
import HeartSolid from "../Icons/HeartSolid";
import HeartOutline from "../Icons/HeartOutline";

const ProductBox = ({ wishedProducts = false }) => {
  const [isWishList, setIsWishList] = useState(wishedProducts);

  const addToWishList = () => {
    setIsWishList(true);
  };

  return (
    <div className=" bg-gray-200 rounded-t-2xl shadow-md shadow-black/30 overflow-hidden ">
      <div className="p-2">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src={"/Product_1.png"}
            alt="Product"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div>
        <div className="mt-4 bg-gray-300 p-3">
          <div className="flex items-center justify-between mb-2">
            <Link
              href={"/"}
              className="text-md font-semibold hover:border-b-2 border-black"
            >
              Longsleeve
            </Link>
            <Button
              type="button"
              onClick={addToWishList}
              className="bg-gray-300"
            >
              {isWishList ? <HeartSolid /> : <HeartOutline />}
            </Button>
          </div>
          <p className="text-gray-500 text-xs leading-3 text-justify mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="flex items-center justify-between p-1 ">
            <div>
              <StarsRating size={"sm"} disabled={false} defaultHowMany={4} />
            </div>
            <Button className=" text-black py-1 px-2 flex items-center gap-1">
              <FontAwesomeIcon icon={faCartShopping} className="w-3 h-3" />
              <span className="text-xs font-semibold ">Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
