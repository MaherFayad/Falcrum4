import Image from "@/common/component/element/Image";
import React from "react";
import ContactForm from "./ContactForm";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CardContact = () => {
  return (
    <>
      <div className="py-10 mt-10 w-full h-auto flex gap-10 justify-center flex-row flex-wrap relative">
        <ComponentTransition delay={0.1} className="w-full md:px-10 py-5 md:basis-[40%] ">
          <h1 className="mt-6 text-lg">Head-quarters:</h1>
          <h2 className="text-neutral-500">Email:contact@fulcrumservices.com</h2>
          <h2 className="text-neutral-500">Phone Number: +1 (555) 123-4567</h2>
          <h2 className="text-neutral-500">Office Location: 123 Innovation Drive, Tech City, Futureland</h2>
          <p className="text-base mt-6">At Fulcrum Services, we're committed to empowering businesses to navigate the complexities of the Fourth Industrial Revolution with confidence and strategic foresight. Whether you're seeking to understand how 4IR technologies can transform your operations, require a detailed consultation, or have specific service inquiries, our team is here to provide you with the insights and solutions you need.
          </p>
        </ComponentTransition>
        <div className="w-full h-auto md:h-[300px] md:basis-[55%] ">
          <h1 className="text-4xl font-bold ">Get In Touch</h1>
          <p className="text-base mt-4 mb-7">Please fill out the form below for any inquiries, consultations, or service requests. A member of our team will get back to you promptly to discuss how we can support your journey through the Fourth Industrial Revolution.
          </p>
          <ContactForm />
        </div>
      </div>
      <div className="text-center max-w-[680px] w-full mx-auto">
        <h4 className="text-xl mt-10">Connect with Us on Social Media:</h4>
        <p className="text-base my-4">Stay updated on the latest trends, insights, and events by following us on social media. We invite you to join our growing community of forward-thinkers.</p>
        <div className="flex justify-center gap-5 my-5">
          <Link className="border-black border-[2px] rounded-full p-2 group hover:bg-[black] transition ease-in delay-10" target="_blank" href={"/"}>
            <FaLinkedin className="text-2xl group-hover:text-white transition ease-in delay-10" />
          </Link>
          <Link className="border-black border-[2px] rounded-full p-2 group hover:bg-[black] transition ease-in delay-10" target="blank" href={"/"}>
            <FaXTwitter className="text-2xl group-hover:text-white transition ease-in delay-10" />
          </Link>
          <Link className="border-black border-[2px] rounded-full p-2 group hover:bg-[black] transition ease-in delay-10" target="blank" href={"/"}>
            <FaFacebook className="text-2xl group-hover:text-white transition ease-in delay-10" />
          </Link>
        </div>
      </div>
      <div className="flex gap-10 justify-center mt-20">
        <ComponentTransition delay={0.2} className="w-full h-auto overflow-hidden rounded-3xl  md:basis-[47%] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65638805012!2d106.66470295433655!3d-6.229379591448096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701852183072!5m2!1sid!2sid"
            width="100%"
            height="100%"
            className="border-none h-[350px] px-0 rounded-3xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </ComponentTransition>
        <ComponentTransition delay={0.3} className="w-full h-[350px] overflow-hidden rounded-3xl  md:basis-[47%]">
          <Image
            src="https://images.unsplash.com/photo-1653745289778-bacf6d8a96e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            width={400}
            height={400}
            priority
            className="w-full h-full object-cover scale-110"
          />
        </ComponentTransition>
      </div>
    </>
  );
};

export default CardContact;
