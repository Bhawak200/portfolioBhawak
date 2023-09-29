"use client";

import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li className="mb-1">C++</li>
        <li className="mb-1">Java</li>
        <li className="mb-1">SpringBoot</li>
        <li className="mb-1">React JS</li>
        <li className="mb-1">Next JS</li>
        <li>CSS3</li>
      </ul>
    ),
  },
  {
    title: "Educations",
    id: "educations",
    content: (
      <ul className="pl-2">
        <li className="mb-2">
          IIT BHU Varanasi
          <ol className="list-disc mx-5">
            <li>CGPA-9.23</li>
            <li>Smt.Bimla Aggrawal Gold Medalist</li>
          </ol>
        </li>
        <li className="mb-2">
          Modern Vidya Niketan Senior Secondary School
          <ol className="list-disc mx-5">
            <li>12th Percentage - 94.4%</li>
          </ol>
        </li>
        <li>
          Tagore Academy Public School
          <ol className="list-disc mx-5">
            <li>10th CGPA - 10</li>
            <li>
              Awarded with Scholarship from Haryana Government for qualification
              of NTSE criteria
            </li>
          </ol>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/about-me.png"
          width={500}
          height={500}
          alt="about me"
          className="border border-solid border-black rounded-md"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handTabChange("skills")}
              active={tab == "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handTabChange("educations")}
              active={tab == "educations"}
            >
              Educations
            </TabButton>
          </div>
          <div className="mt-8">
            {tabData.find((data) => data.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
