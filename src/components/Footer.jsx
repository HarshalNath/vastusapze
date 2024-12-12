import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between mx-10 mt-8 mb-5">
        <div className="flex gap-4 ">
          <RiFacebookBoxFill className="" />
          <RiTwitterFill />
          <RiInstagramFill />
        </div>
        <p className="mt-4">@ 2024 Vastuspaze rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
