import React from "react";

const BlogCard = ({ topic, description, link, github }) => {
  return (
    <div className="blog-card">
      <h1>{topic}</h1>
      <span>{description}</span>
      <div className="buttons">
        {link && (
          <a role={"button"} href={link} target="_blank">
            Live
            <span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 12 12"
                aria-hidden="true"
                class="flex-none mt-2 stroke-current"
              >
                <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
              </svg>
            </span>
          </a>
        )}
        {github && (
          <a role={"button"} href={github} target="_blank">
            Github
            <span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 12 12"
                aria-hidden="true"
                class="flex-none mt-2 stroke-current"
              >
                <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
                <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
              </svg>
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
