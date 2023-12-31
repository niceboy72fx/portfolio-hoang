import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import "./searchManufacture.css";
import { manufacturers } from "@/constant";
import { SearchManuFacturerProps } from "@/types";
import carLogo from "../../public/car-logo.svg";

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className=" manufactural-box">
          <Combobox.Button className=" box-button">
            <Image
              src={carLogo}
              width={20}
              height={20}
              className="item-image"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="box-input"
            displayValue={(item: string) => item}
            placeholder="Volkswagen..."
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="toast_search"></Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
