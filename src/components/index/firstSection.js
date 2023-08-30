import Link from "next/link";
const FirstSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto text-4xl h-[80vh] gap-10 ">
      <div className="w-full text-center font-[700] font-cinzel bannerText  ">
        Abstract ART
      </div>
      <div className="w-full text-center font-cinzel font-[700] bannerText">
        By AI
      </div>
      {/* This will be shown after xl */}
      <div className="hidden xl:grid font-roboto_Slab  w-full grid-cols-5  pt-32">
        <button className="col-start-2 btn2 ">
          <Link href="/about">ABOUT</Link>
        </button>
        <button className="col-start-4 btn ">MINT</button>
      </div>
      {/* This will be shown before xl */}
      <div className="xl:hidden  font-roboto_Slab flex flex-col items-center justify-center w-full mx-auto pt-32 gap-10">
        <div className=" grid w-full md:grid-cols-5 grid-cols-3 ">
          <button className="col-start-2 md:col-start-3 btn2 btnSize ">
            <Link href="/about">ABOUT</Link>
          </button>
        </div>
        <div className=" grid w-full md:grid-cols-5 grid-cols-3 ">
          <button className="col-start-2 md:col-start-3 btn btnSize">
            MINT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
