"use client";
import Image from "next/image";
import "./ShowMore.css";
import car from "../../assets/car.png";
import close from "../../assets/close.svg";
import { useDispatch } from "react-redux";
import { setToast } from "@/redux/setToastWindows";
import { ReactNode } from "react";

interface CarDetails {
  [key: string]: string;
  item: any;
}

const ShowMore: React.FC<CarDetails> = ({ item }) => {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(setToast({ value: {}, open: false }));
  };

  return (
    <div className="show">
      <div className="show-win">
        <button type="button" className="close" onClick={closeButton}>
          <Image
            src={close}
            alt="close"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
        <Image className="win-image" src={car} alt="car" />
        <div className="win-content">
          <h1 className="content-header">Toyota </h1>
          <div className="max-w-lg">
            <h2 className="font-semibold text-xl capitalize">{item?.model}</h2>
            <div className="mt-3 flex flex-wrap gap-4">
              {Object.entries(item).map(([key, value]) => (
                <div className="flex justify-between  w-full " key={key}>
                  <h4 className="text-grey capitalize">
                    {key.split("_").join(" ")}
                  </h4>
                  <p className="text-black-100 font-semibold">
                    {value as ReactNode}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMore;
