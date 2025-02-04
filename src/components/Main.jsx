import Button from "../Button";
import clock from "../assets/images/icon-detailed-records.svg";
import brand from "../assets/images/icon-brand-recognition.svg";
import customizable from "../assets/images/icon-fully-customizable.svg";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

const track = [
  {
    heading: "Brand Recognition",
    text: `Boost your brand
  recognition with each click. Generic links don’t mean a thing. Branded links
  help instil confidence in your content.`,
    icon: brand,
    className: "lg:mt-6",
  },
  {
    heading: "Detailed Records",
    text: `Gain insights into
  who is clicking your links. Knowing when and where people engage with your
  content helps inform better decisions.`,
    icon: clock,
    className: "lg:mt-16",
  },
  {
    heading: "Fully Customizable",
    text: `Improve brand
  awareness and content discoverability through customizable links,
  supercharging audience engagement.`,
    icon: customizable,
    className: "lg:mt-26",
  },
];

function Main() {
  // const [userlink, setLink] = useState([]);

  // local storage to retrieve stored data
  const [userlink, setLink] = useState(function () {
    const storedLink = localStorage.getItem("links");
    return JSON.parse(storedLink);
  });
  const [value, setValue] = useState("");
  const [buttonTextId, setButtonTextId] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState({
    value: false,
  });

  function handleButtonText(id, shortLink) {
    navigator.clipboard.writeText(shortLink);
    setButtonTextId(id);

    setTimeout(() => setButtonTextId(null), 4000);
  }

  function handleAddLink(newLink) {
    setLink((newlinks) => [...newlinks, newLink]);
  }

  function handleDelete(id) {
    setLink((links) => links.filter((link) => link.id !== id));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);

    if (!value) {
      setError({ value: true });
      return;
    }

    setError({ value: false });

    try {
      const res = await fetch(`/api/api/v1/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url: value }).toString(),
      });
      const data = await res.json();
      const newLink = {
        id: userlink.length + 1,
        longLink: value,
        shortLink: data.result_url,
      };
      handleAddLink(newLink);
      setHasSubmitted(false);

      setValue("");
    } catch (err) {
      console.error("Error shortening URL:", err);
      return null;
    }
  }

  // local storage to store value
  useEffect(
    function () {
      localStorage.setItem("links", JSON.stringify(userlink));
    },
    [userlink]
  );

  return (
    <section className="lg:px-30 px-5 bg-slate-100 pb-40">
      <div className="bg-[#49286f] rounded-2xl relative lg:bottom-14 bottom-24">
        <div className="background-with-overlay rounded-2xl ">
          <div className="content lg:px-[60px] px-[20px] py-[30px]">
            <form
              className="flex gap-4 w-full  lg:flex-row flex-col"
              onSubmit={handleSubmit}
            >
              <div
                className={`${
                  error.value && hasSubmitted ? "border-2 border-red-500" : ""
                } bg-white text-[#9D99A4] lg:w-[80%] w-[100%] rounded-lg outline-0 p-4`}
              >
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className={`lg:w-[80%] w-[100%] outline-0`}
                  placeholder="Shorten a link here"
                />
              </div>

              <Button
                text={"Shorten it!"}
                className="text-white bg-cyan-400 lg:py-2 py-3 text-2xl lg:text-xl rounded-lg lg:w-[20%] w-[100%] font-bold "
                onClick={handleSubmit}
              />
            </form>
            {error.value && hasSubmitted ? (
              <small className="text-red-500 mt-10">
                This field is required
              </small>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="lg:-mt-5 -mt-10 mb-10">
        {userlink.map((link) => (
          <div
            key={link.id}
            className="bg-white mb-4 rounded-xl py-4 lg:px-8 px-2 relative"
          >
            <button
              onClick={() => handleDelete(link.id)}
              className="bg-cyan-500 absolute right-1.5 top-0.5  rounded-full mt-1"
            >
              <X size={18} color="#ffffff" />
            </button>
            <div className="flex lg:flex-row flex-col  lg:items-center   justify-between lg:gap-0 gap-2">
              <p className="text-gray-700">{link.longLink}</p>
              <div className="flex lg:flex-row flex-col lg:items-center lg:gap-6 gap-2">
                <p className="text-cyan-500 ">{link.shortLink}</p>

                <button
                  className={`${
                    buttonTextId === link.id ? "bg-[#211D26]" : "bg-cyan-400"
                  } text-white py-2 px-6 rounded-lg font-bold `}
                  onClick={() => handleButtonText(link.id, link.shortLink)}
                >
                  {buttonTextId === link.id ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex text-center flex-col">
        <h1 className="text-3xl font-bold text-[#201E26] mb-2">
          Advanced Statistics{" "}
        </h1>
        <p className="text-[#9D99A4]  font-[500] lg:text-lg hidden lg:block">
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard.
        </p>
        <p className="text-[#9D99A4] font-[500]  lg:hidden block">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="lg:mt-60 md:mt-60 mt-80 relative lg:min-h-[200px]">
        <div className="bg-cyan-500 h-2 w-[100%] absolute top-1/2 lg:top-40 transform  lg:rotate-0 md:rotate-0 rotate-90"></div>
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-6 gap-16 lg:-mt-40 md:-mt-40 -mt-60 relative">
          {track.map((track) => (
            <div
              key={track.heading}
              className={`bg-white px-6 rounded-xl ${track.className} lg:h-[80%] h-[100%] pb-10 flex flex-col lg:items-start items-center relative`}
            >
              <img
                src={track.icon}
                alt="icons"
                className="bg-[#201E26] p-4 rounded-full relative bottom-10 w-16 h-16"
              />
              <h1 className="font-bold text-xl text-[#201E26] mb-2 -mt-4">
                {track.heading}
              </h1>
              <p className="text-[#9D99A4] font-[500]">{track.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
