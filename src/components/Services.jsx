"use client";
import ServiceData from "@/data/Services";
import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 my-10 px-5">
      <h1 className="font-bold  md:text-5xl text-3xl text-center my-10">
        Services
      </h1>
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 py-10 grid-cols-1">
        {ServiceData.map((item, i) => (
          <div className="flex flex-col  gap-5" key={i}>
            <img src={item.imageurl} alt="" />
            <h5 className="text-xl font-semibold text-center">
              {item.heading}
            </h5>
            <p className="text-wrap">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
