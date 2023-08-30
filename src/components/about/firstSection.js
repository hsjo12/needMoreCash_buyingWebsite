import Image from "next/image";
const FirstSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto text-4xl h-[80vh] gap-10 mt-28">
      <div className="w-full text-center font-roboto_Slab  font-[500] bannerText">
        Welcome to VividPixel:
      </div>
      <div className="w-full text-center font-roboto_Slab  font-[500] bannerText">
        Where Colors Come Alive
      </div>

      <div className="w-full relative h-full">
        <Image
          src="/image/aboutImage.jpg"
          alt="profile"
          objectFit="contain"
          fill
          className="w-full h-full top-0 left-0 object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default FirstSection;
