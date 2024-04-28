import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4 bg-[url('/apples.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">     
      <div className="">
       
      </div>
      <div className="py-8 px-2 md:px-6 ">
        <h1 className="text-4xl text-right font-semibold">
          Everything<br />
          is better<br />
          made&nbsp;
          <span className="text-primary">
            Fresh
          </span>
        </h1>
        <p className="my-6 text-right ml-auto text-sm w-1/2 md:w-full">
          Ingredients are harvested fresh from our garden to your plate.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="justify-center bg-primary uppercase flex items-center gap-2 px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-black font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
    </section>
  );
}