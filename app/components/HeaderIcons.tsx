"use client";

import { useState } from "react";
import { UserGroupIcon, HomeIcon } from "@heroicons/react/24/solid";
import {
  PlayIcon,
  FlagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const HeaderIcons = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const iconStyles = `h-5 text-gray-500 text-center sm:7 mx-auto  group-hover:text-blue-500 ${
    activeIndex === 0 && "text-blue-500"
  }`;
  const iconContainerStyles =
    "flex items-center cursor-pointer md:px-8 hover:bg-gray-100 rounded-2xl sm:h-14 active:border-b-2 active:border-blue-500 group";

  const icons = [
    {
      icon: <HomeIcon className={`${iconStyles}`} />,
      containerStyles: iconContainerStyles,
    },
    {
      icon: <FlagIcon className={`${iconStyles}`} />,
      containerStyles: iconContainerStyles,
    },
    {
      icon: <PlayIcon className={`${iconStyles}`} />,
      containerStyles: iconContainerStyles,
    },
    {
      icon: <ShoppingCartIcon className={`${iconStyles}`} />,
      containerStyles: iconContainerStyles,
    },
    {
      icon: <UserGroupIcon className={`${iconStyles}`} />,
      containerStyles: iconContainerStyles,
    },
  ];

  return (
    <div className="flex gap-6 md:gap-2">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`${icon.containerStyles}`}
          onClick={() => setActiveIndex(index)}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default HeaderIcons;
