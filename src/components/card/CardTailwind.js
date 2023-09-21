import React from "react";

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text bg-primary-gradiant ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  }`;
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px] ">
        <img
          className="block w-full rounded-lg h-[400pcx] object-cover "
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1200x900"
          alt="img"
        />
      </div>
      <div className="absolute left-2/4 rounded-lg -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full object-cover flex-shrink-0 "
              src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1200x900"
              alt="avatar"
            />
            <span className="font-light text-base text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/coolicon.svg" alt="icon_heart" />
            <span className="text-[#333] font-normal font-poppins">256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className={`font-medium  ${props.fontSize || "text-lg"}`}>
            Cosmic Perspective
          </h3>
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
