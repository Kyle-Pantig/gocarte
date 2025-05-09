import Image from "next/image";

const GoCarte = () => {
  return (
    <div className="flex gap-12 items-center">
      <div className=" max-w-xs">
        <div className="text-center">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Go Carte</h2>
        </div>
      </div>
      <div className="max-w-6xl">
        <p className="text-justify">
          &quot;<b className="text-lg">Go Carte</b> is committed to
          revolutionizing the e-commerce experience by providing a seamless
          platform where customers can explore, discover, and purchase products
          effortlessly, while empowering businesses to thrive in the digital
          marketplace.&quot;
        </p>
      </div>
    </div>
  );
};

export default GoCarte;
