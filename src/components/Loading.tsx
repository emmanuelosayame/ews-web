import React from "react";
import { MoonLoader } from "react-spinners";

interface Props {
  position?: "fixed" | "absolute";
}

export const Loading = ({ position = "fixed" }: Props) => {
  return (
    <div
      className={`flex justify-center items-center ${
        position === "fixed" ? "fixed" : "absolute"
      } inset-0 bg-white w-screen h-screen`}>
      <MoonLoader />
    </div>
  );
};

export const LoadingBlur = ({ position = "fixed" }: Props) => {
  return (
    <div
      className={`${position} inset-0 flex justify-center items-center  bg-black/20 backdrop-blur-[1px] z-30`}>
      <MoonLoader />
    </div>
  );
};
