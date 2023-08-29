const FirstSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto text-4xl h-[80vh] gap-10 ">
      <div className="w-full text-center font-cinzel bannerText">
        Abstract ART
      </div>
      <div className="w-full text-center font-cinzel bannerText">By AI</div>
      <div className="grid w-full grid-cols-5 pt-32">
        <button className="col-start-2 btn ">ABOUT</button>
        <button className="col-start-4 btn ">MINT</button>
      </div>
    </div>
  );
};

export default FirstSection;
