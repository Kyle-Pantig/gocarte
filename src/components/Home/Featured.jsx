"use client";
import Image from "next/image";
import Button from "../Buttons/Button";

const Featured = () => {
  return (
    <div className="bg-gray-300 shadow-lg shadow-black/30 rounded-lg py-16 px-10 grid grid-cols-2 gap-20 relative mb-12">
      <div>
        <h1 className="text-4xl font-bold mb-8">Nike Flex Run</h1>
        <p className="text-gray-400 leading-4 text-xs text-justify mb-10">
          Do you love running and triathlon? Get your Nike Flex Contact Running
          Shoes and enjoy your leisure activities with the security and
          confidence which Nike gives you.
        </p>
        <div className="max-w-40 mb-8">
          <div className="flex justify-between gap-10 ">
            <div>
              <h3 className="text-xs mb-1">Colors</h3>
              <div className="flex items-center gap-6">
                <div className="colors"></div>
                <div className="colors"></div>
                <div className="colors"></div>
                <div className="colors"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xs mb-1">Sizes</h3>
              <div className="flex items-center gap-1 text-sm cursor-pointer ">
                <div className="border border-black/60 px-1 rounded-md">7</div>
                <div className="border border-black/60 px-1 rounded-md">8</div>
                <div className="border border-black/60 px-1 rounded-md">
                  9.5
                </div>
                <div className="border border-black/60 px-1 rounded-md">10</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Button className={"py-1 px-4 text-sm"}>Buy now</Button>
          <h2 className="text-xl font-semibold text-gray-500">$200</h2>
        </div>
      </div>
      <div className="flex flex-col">
        <Image src={"/Featured.png"} alt="Featured" width={400} height={400} />
        <div className="image-shadow"></div>
      </div>
      <div className="absolute bottom-8 right-12">
        <Image
          src={"/nike-icon.png"}
          alt="Nike logo"
          width={50}
          height={50}
          className="w-full h-full p-4"
        />
      </div>
    </div>
  );
};

export default Featured;
