import Button from "../Button";
function GetStarted() {
  return (
    <div className="bg-[#49286f] relative -mt-20">
      <div className="footer-with-overlay rounded-2xl">
        <div className="content">
          <div className="flex  py-[20px] items-center flex-col">
            <h1 className="lg:text-3xl text-xl font-[700] text-center">
              Boost your links today
            </h1>
            <Button
              text={"Get Started"}
              className="text-white bg-cyan-400 py-3 px-10 rounded-full font-bold lg:mb-0 mb-4 mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
