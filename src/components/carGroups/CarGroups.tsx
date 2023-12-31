"use client";
import CarCard from "../carCards/CarCards";
import "./CarGroups.css";

const CarGroups: React.FC<{ allcar: any }> = ({ allcar }) => {
  console.log(allcar);
  return (
    <div className="group-cards">
      {allcar?.map((item: object) => (
        <CarCard item={item} />
      ))}
    </div>
  );
};

export default CarGroups;
