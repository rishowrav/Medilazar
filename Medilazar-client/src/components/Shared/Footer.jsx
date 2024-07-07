import React from "react";
import logo from "/assets/images/Logo.svg";
import {
  MdOutlinePhone,
  MdOutlineSecurity,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { CgMail } from "react-icons/cg";
import payment_logo from "/assets/images/Footer-Bitmap.png";
import { GiReturnArrow } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        {/* first footer */}
        <div className="flex justify-between py-6">
          <div className="flex items-center gap-2">
            <div>
              <GiReturnArrow className="text-5xl" />
            </div>
            <div>
              <h5 className="font-bold text-lg">Free Easy Returns</h5>
              <p className="text-sm">Return to 7 days</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <TbTruckDelivery className="text-5xl" />
            </div>
            <div>
              <h5 className="font-bold text-lg">Free Delivery Monday</h5>
              <p className="text-sm">Orders over $499</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <MdOutlineSupportAgent className="text-5xl" />
            </div>
            <div>
              <h5 className="font-bold text-lg">All Day Support</h5>
              <p className="text-sm">24/7 Support care</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <MdOutlineSecurity className="text-5xl" />
            </div>
            <div>
              <h5 className="font-bold text-lg">Secure Checkout</h5>
              <p className="text-sm">100% Protected by paypa</p>
            </div>
          </div>
        </div>
        <hr />
        {/* second footer */}
        <footer className="footer  py-6 text-base-content ">
          <aside className="flex-1">
            <figure>
              <img src={logo} className="w-28" alt="logo" />
            </figure>
            <p className="text-xs">
              Medilazar Shop is proud of being a <br /> best Pharmacy Online
              shops in USA <br /> with high-quality medicines, <br />{" "}
              supplements, healthcare product.
            </p>
          </aside>
          <nav className="flex-1">
            <h6 className="footer-title">INFORMATION</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex-1">
            <h6 className="footer-title">CATEGORIES</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex-1">
            <h6 className="footer-title">OUR SERVICES</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <div className="flex-1">
            <h6 className="footer-title">Address</h6>
            <ul>
              <li>
                56 Glassford Street Glasgow G1 1UL, New <br /> York, USA
              </li>
              <li className="flex gap-2 items-center">
                <MdOutlinePhone /> <span>+351 910 331 000</span>
              </li>
              <li className="flex gap-2 items-center">
                <CgMail /> <span>contact@example.com</span>
              </li>
            </ul>
          </div>
        </footer>
        <hr />
        {/* bottom footer start  */}
        <footer className="footer  items-center py-4">
          <aside className="grid-flow-col items-center">
            <p>
              Copyright © {new Date().getFullYear()} Medilazar. All Rights
              Reserved.
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <img src={payment_logo} alt="payment logo" />
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
