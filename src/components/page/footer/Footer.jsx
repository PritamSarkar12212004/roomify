import React from "react";
import { Link } from "react-router-dom";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
function Footer() {
  return (
    <div className="w-full bg-[#F3F3F3] flex  justify-center mt-10 ">
      <footer className="w-10/12 px-5 flex items-center justify-center flex-col ">
        <img className="h-20" src="/logo/mainLogo copy.png" alt="" />
        <div className="flex w-1/2 mt-5 justify-between">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl">Contact</h1>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link className="flex gap-2 items-center">
                  <i className="ri-whatsapp-line"></i>
                  <span className="text-sm">Whatsapp</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <i class="ri-instagram-line"></i>{" "}
                  <span className="text-sm">Instagram</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <i class="ri-phone-line"></i>{" "}
                  <span className="text-sm">Phone</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl">Follow us</h1>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link className="flex gap-2 items-center">
                  <i class="ri-github-line"></i>{" "}
                  <span className="text-sm">Github</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <i class="ri-gitlab-line"></i>{" "}
                  <span className="text-sm">Gitla</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl">Follow us</h1>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link className="flex gap-2 items-center">
                  <InfoRoundedIcon />
                  <span className="text-sm">About</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <i class="ri-gitlab-line"></i>{" "}
                  <span className="text-sm">Contact</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <PolicyRoundedIcon />
                  <span className="text-sm">Policy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
