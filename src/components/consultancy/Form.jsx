import React from "react";

const Form = () => {
  return (
    <div className="flex relative justify-center flex-col md:w-fit w-[90%] h-full ">
      <div className="w-full h-12 flex justify-center items-center bg-[#032f6b] text-white">
        <h5 className="text-xl font-medium">Consultancy Form</h5>
      </div>

      <form
        action=""
        className="flex gap-6 mt-3  flex-col justify-center md:items-center items-start w-full"
      >
        <div className="flex flex-col gap-2 px-5">
          <label htmlFor="name"> Full Name</label>
          <input
            type="text"
            className="border-[1px] px-2 py-1"
            placeholder="Enter Name"
          />
        </div>
        <div className="flex  flex-col gap-2 px-5">
          <label htmlFor="email">E-mail</label>
          <input
            className="border-[1px] px-2 py-1"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="flex flex-col gap-2 px-5">
          <label htmlFor="name">Phone no.</label>
          <input
            className="border-[1px] px-2 py-1"
            type="number"
            placeholder="Enter mobile"
          />
        </div>
        <div className="flex  flex-col gap-2 px-5">
          <label htmlFor="name"> Message</label>
          <input
            type="text"
            className="border-[1px] px-2 py-1"
            placeholder="Enter Name"
          />
        </div>
      </form>
      <button className="px-4 w-44 mx-5 text-start flex items-center justify-center mt-6 py-2 text-xl font-semibold border-[2px] border-[#032f6b]">
        Submit
      </button>
    </div>
  );
};

export default Form;
