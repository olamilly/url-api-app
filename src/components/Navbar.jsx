import { AlignJustify, Bold } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import Button from "../Button";
import shorten from "../assets/images/logo.svg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((is) => !is);
  }
  return (
    <nav className="flex justify-between items-center lg:py-10 py-4 cursor-pointer lg:px-30 px-5">
      <div className="flex items-center gap-6">
        <img src={shorten} alt="" />

        <ul className="hidden lg:flex gap-4 text-[#9D99A4] items-center font-[500] ">
          <li className="hover:text-[#201E26]  ">Features</li>
          <li className="hover:text-[#201E26]">Pricing</li>
          <li className="hover:text-[#201E26]">Resources</li>
        </ul>
      </div>

      <div className="lg:flex hidden gap-8 text-[#9D99A4] ">
        <Button text={"Login"} className="font-[500]" />
        <Button
          text={"Sign Up"}
          className=" bg-cyan-400 py-2 px-6 rounded-full font-[500] text-slate-50"
        />
      </div>
      {/* mobile view */}
      <div className="lg:hidden visible relative" onClick={handleToggle}>
        {isOpen ? (
          <X size={40} color="#BFBFBF" fontWeight={Bold} />
        ) : (
          <AlignJustify size={40} color="#BFBFBF" fontWeight={Bold} />
        )}
      </div>
      {isOpen && (
        <div className="absolute right-0 top-18 w-full px-5 text-slate-50 font-[700]">
          <div className="bg-[#362E4D] flex lg:hidden flex-col gap-4 rounded-2xl p-6">
            <ul className="items-center  flex flex-col text-lg border-b">
              <li className="mb-6  hover:text-[#201E26] ">Features</li>
              <li className="mb-6  hover:text-[#201E26]">Pricing</li>
              <li className="mb-6  hover:text-[#201E26]">Resources</li>
            </ul>
            <div className="flex flex-col my-4">
              <Button className="mb-6" text={"Login"} />

              <Button
                text={"Sign Up"}
                className="text-white bg-cyan-400 py-4 px-6 rounded-full "
              ></Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
