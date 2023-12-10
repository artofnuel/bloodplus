import React from "react";

const Statement = ({ title, body, tertiary, primary }) => {
  return (
    <div className="w-full h-auto lg:h-[300px] flex justify-center items-center p-4 py-10 lg:p-8 bg-secondary">
      <blockquote className="text-center font-light text-white text-base lg:text-2xl">
        <span
          className={`lg:p-1 ${tertiary && "lg:bg-tertiary"} ${
            primary && "lg:bg-primary"
          } lg:rounded-md`}
        >
          {title}
        </span>{" "}
        {body}
      </blockquote>
    </div>
  );
};

export default Statement;
