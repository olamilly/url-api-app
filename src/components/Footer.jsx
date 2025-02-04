import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className="bg-[#211D26] py-10 lg:px-30 px-10 flex text-white lg:gap-40 gap-20 lg:flex-row flex-col items-center lg:items-start">
      <h1 className="text-4xl font-bold">Shortly</h1>
      <div>
        <div className="flex lg:gap-20 gap-10 lg:flex-row flex-col lg:text-start text-center">
          <ul>
            <li className="font-semibold mb-6">Features</li>
            <li className="text-[#9D99A4] mb-2 hover:text-cyan-400">
              Link Shortening
            </li>
            <li className="text-[#9D99A4] mb-2 hover:text-cyan-400">
              Branded Links
            </li>
            <li className="text-[#9D99A4] hover:text-cyan-400">Analytics</li>
          </ul>
          <ul>
            <li className="font-semibold  mb-6">Resources</li>
            <li className="text-[#9D99A4] mb-2 hover:text-cyan-400">Blog</li>
            <li className="text-[#9D99A4] mb-2 hover:text-cyan-400">
              Developers
            </li>
            <li className="text-[#9D99A4] hover:text-cyan-400">Support</li>
          </ul>
          <ul>
            <li className="font-semibold  mb-6">Company</li>
            <li className="text-[#9D99A4] mb-2 hover:text-cyan-400">About</li>
            <li className="text-[#9D99A4] mb-2 hover:text-cyan-400">
              Our Team
            </li>
            <li className="text-[#9D99A4] mb-2 hover:text-cyan-400">Careers</li>
            <li className="text-[#9D99A4] hover:text-cyan-400">Contact</li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <img src={facebook} alt="facebook logo" />
            </li>
            <li>
              <img src={instagram} alt="instagram logo" />
            </li>
            <li>
              <img src={pinterest} alt="pinterest logo" />
            </li>
            <li>
              <img src={twitter} alt="twitterlogo" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
