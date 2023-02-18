import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-full z-0 backdrop-blur-lg relative flex justify-center items-center">
      <SyncLoader color="#3B82F6" />
    </div>
  );
};

export default Loading;
