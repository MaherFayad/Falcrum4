'use client'
import clsx from "clsx";
import React, { useState, useRef, FormEvent } from 'react'; // Import FormEvent type
import emailjs from '@emailjs/browser';


const ContactForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [redirecting, setRedirecting] = useState(false); // Specify boolean type

const redirectToThanks = () => {
    setRedirecting(true);
    window.location.href = '/thanks';
};

const redirectTo404 = () => {
    setRedirecting(true);
    window.location.href = '/404';
};

const form = useRef(null); // Specify the type of useRef

const sendEmail = (e) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs
        .sendForm('service_4i4430o', 'template_milrrl9', form.current, 'wADfMTOn2lm_ILNSF')
        .then(
          (result) => {
            console.log(result.text);
            redirectToThanks();
          },
          (error) => {
            console.log(error.text);
            redirectTo404();
          }
        );
    }
  };

  return (
    <form
      action="/thanks" 
      method="post"
      ref={form}
      onSubmit={sendEmail}
        >
      <div className="flex flex-col flex-grow gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="w-full py-2 px-3 dark:bg-neutral-900 bg-neutral-200 rounded-md border border-neutral-200 focus:outline-none dark:border-neutral-800"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full py-2 px-3 rounded-md border dark:bg-neutral-900 bg-neutral-200 border-neutral-200 dark:border-neutral-700 focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          className="w-full py-2 px-3 rounded-md border dark:bg-neutral-900 bg-neutral-200 border-neutral-200 focus:outline-none dark:border-neutral-700"
          rows={5}
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          className={clsx(
            "py-2.5 bg-neutral-900 text-neutral-300 dark:bg-neutral-50 dark:text-neutral-950 flex justify-center hover:dark:bg-neutral-50 hover:bg-neutral-900 hover:scale-[101%] duration-300 transition-all"
          )}
          type="submit"
        >
          Send The Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
