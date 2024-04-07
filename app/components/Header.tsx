import Image from "next/image";
import {
  BellIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import HeaderIcons from "./HeaderIcons";
import { ViewColumnsIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex gap-6 items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          alt="facebook logo"
          width={40}
          height={40}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 g-2 p-1">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="">
          <HeaderIcons />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* <Image 
      src=""
      alt="profile picture"
      /> */}
        <p className="whitespace-nowrap font-semibold pr-3 ">christien</p>
        <ViewColumnsIcon className="icon"/>
        <ChatBubbleOvalLeftEllipsisIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>
    </div>
  );
};

export default Header;
