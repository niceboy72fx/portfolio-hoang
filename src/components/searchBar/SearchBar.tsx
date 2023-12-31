"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "../searchManufacture/SearchManufacturer";
import ModelIcon from "../../public/model-icon.png";
import "./searchBar.css";
import SearchIcon from "../../public/magnifying-glass.svg";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={SearchIcon}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");

  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={ModelIcon}
          width={25}
          height={25}
          className="item-image"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          placeholder="Tiguan..."
          className="searchbar__input "
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
