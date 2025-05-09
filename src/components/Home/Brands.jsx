"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Buttons/Button";
import Center from "../Center";
import LogoBrands from "./LogoBrands";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";

const Brands = () => {
  return (
    <Center>
      <div className="my-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Brands</h2>
        <div className="flex justify-between items-center gap-2">
          <Button className="bg-transparent text-black/60">
            <FontAwesomeIcon icon={faAngleLeft} className="w-3 h-3" />
          </Button>
          <div className="grid grid-cols-6 gap-6 text-center mt-2">
            <LogoBrands />
            <LogoBrands />
            <LogoBrands />
            <LogoBrands />
            <LogoBrands />
            <LogoBrands />
          </div>
          <Button className="bg-transparent text-black/60">
            <FontAwesomeIcon icon={faAngleRight} className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </Center>
  );
};

export default Brands;
