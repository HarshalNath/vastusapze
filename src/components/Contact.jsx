import {
  RiMailAddFill,
  RiMapPin2Fill,
  RiMapPin2Line,
  RiPhoneFill,
} from "@remixicon/react";
import { CONTACT_INFO } from "../constants";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 " id="contact">
      <h1
        className="text-xl uppercase text-center mt-20
      lg:text-3xl mb-12"
      >
        Contact us
      </h1>
      <p className="text-center max-w-2xl mx-auto mb-12">{CONTACT_INFO.text}</p>

      <div className="mx-4 flex flex-col lg:flex-row lg:justify-around lg:mb-12 ">
        <div className="flex mb-8 lg:mb-0">
          <RiPhoneFill className="text-3xl mr-4" />
          <div className="">
            <p className="font-semibold text-xl">{CONTACT_INFO.phone.label}</p>
            <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
          </div>
        </div>
        <div className="flex mb-8 lg:mb-0">
          <RiMailAddFill className="text-3xl mr-4" />
          <div className="">
            <p className="font-semibold text-xl">{CONTACT_INFO.email.label}</p>
            <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
          </div>
        </div>
        <div className="flex mb-8 lg:mb-0">
          <RiMapPin2Fill className="text-3xl mr-4" />
          <div className="">
            <p className="font-semibold text-xl">
              {CONTACT_INFO.address.label}
            </p>
            <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
