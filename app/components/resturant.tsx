import Image from "next/image";
import { Button } from "@/components/ui/button";

const Restaurant = () => {
  return (
    <header className="relative bg-black text-white shadow-md py-12 w-full h-[950px] pt-36">
      {/* Wallpaper Image */}
      <Image
        src="/images/unsplash_qom5MPOER-I.png"
        alt="wallpaper"
        layout="fill"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="container mx-auto flex flex-col items-center space-y-6 relative z-10 ">
        {/* Hero Section */}
        <div className="flex justify-end right-52 w-full h-full relative hover:scale-95">
          <Image
            src="/images/Image.png"
            alt="banner"
            width={877.8}
            height={670}
            className="object-cover"
          />
        </div>

        <Image
          src="/images/Its Quick & Amusing!.png"
          alt="banner"
          width={249}
          height={40}
          className="absolute z-10 left-64 pt-32"
        />

        <h1 className="text-6xl text-white absolute z-10 left-64 pt-44 font-semibold font-inter">
          <span className="text-[#FF9F0D]">Th</span>
          <span className="text-white">e</span> Art of speed <br /> food Quality
        </h1>

        <div className="absolute z-0 pt-80 left-64">
          <p className="text-[16px] text-white font-normal">
            A restaurant is a place where people enjoy delicious
            <br />
            food and great service in a comfortable setting.
          </p>
          <div className="relative">
            <Button className="text-[#E0DFDF] text-[16px] bg-[#FF9F0D] rounded-full w-full h-16 md:w-48 md:h-14 absolute z-10 right-44 mt-8 hover:bg-white">
              See Menu
            </Button>
          </div>
        </div>

        <Image
          // src="/images/unsplash_4ycv3Ky1ZZU.png"
          src="/images/Group 1000002057.png"
          alt="social"
          width={25.28}
          height={492}
          className="absolute z-10 left-52 "
        />
      </div>
    </header>
  );
};

export default Restaurant;




