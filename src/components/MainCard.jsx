import React, { useEffect } from "react";
import ProjectCard from "./BlogCard";
import BlogCard from "./ProjectCard";
const MainCard = () => {
  useEffect(() => {
    window.addEventListener("scroll", navHighlighter);
    return () => window.removeEventListener("scroll", navHighlighter);
  });

  function navHighlighter() {
    let scrollY = window.pageYOffset;
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section");

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 90;
      const sectionId = current.getAttribute("class");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.getElementById(sectionId).classList.add("active");
      } else {
        document.getElementById(sectionId).classList.remove("active");
      }
    });
  }
  const blogsData = [
    {
      description: "Guide to Event Bubbling and Capturing",
      title: "JavaScript: Event propagation",
      link: "https://shbhuvnesh.hashnode.dev/javascript-guide-to-event-bubbling-and-capturing",
    },
    {
      description: "Most common usecases of useeffect hook",
      title: "React: useEffect hook",
      link: "https://shbhuvnesh.hashnode.dev/5-most-common-usage-of-react-useeffect-hook",
    },
    {
      description: "A Guide to String Manipulation Techniques",
      title: "JavaScript: String methods",
      link: "https://shbhuvnesh.hashnode.dev/mastering-javascript-a-guide-to-string-manipulation-techniques",
    },
    {
      description: "How to get started with unit testing?",
      title: "Unit Testing: React",
      link: "https://manorinfinity.com/2022/10/04/unit-testing-in-react-introduction/",
    },
  ];
  const projectsData = [
    {
      link: "https://romantic-leavitt-6d985c.netlify.app/",
      topic: "Covid Tracker",
      description:
        "Created this project while I was learning React which shows covid stats world wide",
      github: "https://github.com/bhuvneshsharmaa/covid-19-tracker",
    },
    {
      link: "https://lucid-gates-465934.netlify.app/",
      topic: "Image Compression",
      description:
        "Compresses the image significantly while optimizing the image quality and size. Better results compared to whatsapp compression alogrithm",
      github: "https://github.com/bhuvneshsharmaa/Image-compression",
    },
    {
      topic: "Mobile Design System",
      description:
        "Created reusable and customizable widgets in flutter for mobile apps to build faster and consistent.",
      github: "https://github.com/innovaccer/mobile-design-system",
    },
    {
      topic: "Acute Infection Management System",
      description:
        "Created critical patients real time monitoring system which has patient listing and patient 360 view for visualizing the EHR data.",
    },
    {
      topic: "Conversation SDK",
      description:
        "Created reusable, tech-agnostic, and independently running SDK(micro frontend architecture) which is easy to plug in into any web application.",
    },
  ];
  return (
    <div className="maincard">
      <h2>Blogs</h2>
      <section className="projects" id="projects">
        {blogsData.map((item) => (
          <BlogCard {...item} />
        ))}
      </section>
      <h2>Projects</h2>
      <section className="blogs" id="blogs">
        {projectsData.map((item) => (
          <ProjectCard {...item} key={item.topic} />
        ))}
      </section>
      <footer>Living, learning, & improving one day at a time.</footer>
    </div>
  );
};

export default MainCard;
