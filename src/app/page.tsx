import { Hero } from "@/components";
import Image from "next/image";
import "./page.css";
import SearchBar from "@/components/searchBar/SearchBar";
import CustomFilter from "@/components/customFilter/CustomFilter";
import { fuels, yearsOfProduction } from "@/constant";
import CarCard from "@/components/carCards/CarCards";
import CarGroups from "@/components/carGroups/CarGroups";
import ShowMore from "@/components/showMore/ShowMore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ShowToast } from "@/components/showMore/ShowToast";
import { fetchCar } from "@/util";
export default async function Home() {
  const allCars = await fetchCar();

  return (
    <main className="overflow-hidden">
      <ShowToast />
      <Hero />
      <div className="discover">
        <div className="dicover-head">
          <h1 className="head-title text-white">About me</h1>
        </div>
        <div className="dicover-head">
          <h1 className="head-title text-white">My Experience</h1>
        </div>
        <div className="dicover-head">
          <h1 className="head-title text-white">My Projects</h1>
        </div>
        <div className="flex flex-col       xs:flex-col">
          <div className="search py-5  ">
            {/* <SearchBar /> */}
            <div className="flex flex-row gap-14">
              <CustomFilter title="Project" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>
          {allCars ? (
            <section className="w-full my-5">
              <CarGroups allcar={allCars} />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p></p>
            </div>
          )}
        </div>
        <div className="dicover-head">
          <h1 className="head-title text-white">Awards & Certificate</h1>
        </div>
        <div className="dicover-head">
          <h1 className="head-title text-white">Education</h1>
        </div>
        <div className="dicover-head">
          <h1 className="head-title text-white">My Skills</h1>
        </div>
        <div className="dicover-head">
          <h1 className="head-title text-white">Contact me</h1>
        </div>
      </div>
    </main>
  );
}
