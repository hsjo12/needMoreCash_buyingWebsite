import FirstSection from "./firstSection";
import SecondSection from "./secondSection";

const Structure = () => {
  return (
    <main className="container flex flex-col items-center justify-center w-full gap-10 mx-auto overflow-y-hidden ">
      <FirstSection />
      <SecondSection />
    </main>
  );
};

export default Structure;
