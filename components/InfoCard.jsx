import Image from "next/image";
import { HeartIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

export const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const [heartColor, setHeartColor] = useState("");
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-not-allowed hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <figure className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          className="rounded-2xl"
          layout="fill"
          objectFit="cover"
          alt="InfoCardImg"
        />
      </figure>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <p>{location}</p>
          <HeartIcon className={`h-7 cursor-pointer ${heartColor}`} onClick={() => setHeartColor((color) => (color === "" ? "text-red-600" : ""))} />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-center pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div className="">
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
