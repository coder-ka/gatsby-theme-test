import React from "react";
import Icon from "./icon";

export default function Dimmer({
  className,
  showCloseIcon,
  onCloseRequested,
  children,
}) {
  return (
    <div className={`absolute top-0 left-0 w-full h-full ${className}`}>
      {showCloseIcon ? (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <span
          className="absolute top-0 right-0 mr-4 mt-4 text-gray-100 text-4xl font-bold cursor-pointer"
          onClick={onCloseRequested}
        >
          <Icon name="times"></Icon>
        </span>
      ) : null}
      <div className="w-full h-full flex justify-center items-center">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events  */}
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}
