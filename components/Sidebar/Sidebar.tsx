"use client";
import { Icon } from "@iconify/react";
import Button from "../Button/Button";

const Sidebar = () => {
  return (
    <div className="w-[100px] h-full">
      <div className="relative group h-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-gray-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-2 bg-dark-hard ring-1 ring-gray-900/5 leading-none flex flex-col items-center justify-center gap-2 h-full">
          <Button onClick={() => console.log("To Home")}>
            <Icon icon="majesticons:home" fontSize={"25px"} color="white" />
          </Button>
          <Button onClick={() => console.log("To Education")}>
            <Icon icon="ic:round-home-work" fontSize={"25px"} color="white" />
          </Button>
          <Button onClick={() => console.log("To Project")}>
            <Icon icon="ic:round-star" fontSize={"25px"} color="white" />
          </Button>
          <Button onClick={() => console.log("To Profile")}>
            <Icon
              icon="iconamoon:profile-circle-fill"
              fontSize={"25px"}
              color="white"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
