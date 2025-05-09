import React from "react";
import FlashSaleBox from "./FlashSaleBox";

const FlashSale = () => {
  return (
    <div className="mt-16 mb-10">
      <div className="bg-red-600 text-white font-bold text-center p-4 text-3xl">
        Flash Sale
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-y-2 gap-x-4 my-10">
          <FlashSaleBox />
          <FlashSaleBox />
          <FlashSaleBox />
          <FlashSaleBox />
          <FlashSaleBox />
          <FlashSaleBox />
          <FlashSaleBox />
          <FlashSaleBox />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
