import React from "react";
import Image from "next/image";

export default function CardUser({ name }) {
  return (
    <>
      <div className="m-2 cursor-pointer border rounded-lg drop-shadow-md">
        <Image
          loader={({ src }) => `https://api.lorem.space${src}`}
          src={"/image/face?w=300&h=300"}
          alt="User Picture"
          width={300}
          height={300}
        />
        <div className="flex justify-between px-4 my-2">
          <h2 className="text-xl font-semibold my-2">{name}</h2>
          <button className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
