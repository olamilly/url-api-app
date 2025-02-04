import Button from "../Button";
import illustration from "../assets/images/illustration-working.svg";

function Hero() {
  return (
    <section className="mb-40 lg:px-30 px-5">
      <div className="my-6 flex lg:flex-row flex-col-reverse items-center lg:gap-0 gap-10">
        <div className="flex flex-col lg:w-[50%] w-[100%] text-center lg:text-left">
          <h1 className="lg:text-6xl text-3xl text-[#201E26] font-[700] mb-2">
            More than just shorter links
          </h1>
          <p className=" text-[#9D99A4] items-center font-[500] mb-6 lg:text-lg">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <div>
            <Button
              text={"Get Started"}
              className="text-white bg-cyan-400 lg:py-2 py-4 lg:px-8 px-14 rounded-full "
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-[100%] ml-10">
          <img src={illustration} alt="illustration working" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
