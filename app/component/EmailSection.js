"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GithubIcon from "../.././public/images/github-icon.svg";
import LinkedIcon from "../.././public/images/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      description: e.target.subject.value,
    };
    const jsonData = JSON.stringify(data);
    const endPoint = "/api/send";

    const options = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };
    console.log(data);
    setEmailSubmitted(true);

    /*const response = fetch(endPoint, options);
    const resData = response.json();
    if (resData.status === 200) {
      setEmailSubmitted(true);
    }*/
  };

  return (
    <section className="grid md:grid-cols-2 md:my-12 py-12 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&#8216;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am currently looking for new opportunities, my inbox is always open,
          whether you have a question or just want to say hi,I&#8216;ll try my
          best to get back to you
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedIcon} alt="Linked Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email Sent successfully</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                type="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="hello@gmail.com"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="text"
                id="subject"
                required
                placeholder="Hello world"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="text-white block mb-2 text-sm font-medium"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                required
                placeholder="Hi, How are you....."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <button
              type="submit"
              className="bg-[#292e39] hover:bg-[#757f85] text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
