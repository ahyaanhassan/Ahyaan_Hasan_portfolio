"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { OrbitingCirclesDemo } from "./OrbitingCircle";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Languages: </b>Python, R, SQL, Scala, MATLAB</li>
        <li><b>Data Analysis & Visualization:</b> Pandas, NumPy, Matplotlib, Seaborn, Plotly, Tableau, Power BI</li>
        <li><b>Machine Learning & AI</b> Scikit-Learn, TensorFlow, Keras, PyTorch, XGBoost, LightGBM, OpenCV</li>
        <li><b>Statistics & Mathematics:</b> Probability, Statistics, Linear Algebra, Calculus, Hypothesis Testing, Statistical Modeling</li>
        <li><b>Databases:</b> SQL,MangoDB & MySql </li>
        <li><b>Additional Skills:</b> Data Cleaning and Preprocessing, Feature Engineering, Model Evaluation and Tuning, A/B Testing, Experimentation, Data Storytelling, Communication, Problem-Solving, Team Collaboration, Adaptability</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p>
            <b>Mangalmay Institute of Engineering & Technology</b>
          </p>
          <p>
            <i>B.Tech in Computer Science and Technology</i>
          </p>
          <i>Dec 2021 - July 2025(Expected)</i>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><b>Udemy-</b> The Complete 2024 Python Bootcamp by <b className="font-semibold">Angela Yu</b></li>
        <li><b>Udemy-</b> Complete Data Science Bootcamp 2024
        by <b className="font-semibold">365 Careers</b></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image alt="" src="/images/about-image.png" width={500} height={500} /> */}
        <OrbitingCirclesDemo />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a data scientist with a strong foundation in data analysis, machine learning, and statistical modeling. I am passionate about uncovering insights from complex datasets and using data to drive informed business decisions. With expertise in Python, R, SQL, and popular machine learning frameworks like TensorFlow and Scikit-Learn, I have experience in building predictive models, performing data wrangling, and creating visualizations to communicate findings effectively.

I am a quick learner who is always eager to stay on top of the latest advancements in data science and AI. I enjoy working collaboratively with cross-functional teams to tackle challenging problems and leverage data in impactful ways. My goal is to continue developing innovative, data-driven solutions that can make a real difference.


          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find(t => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;