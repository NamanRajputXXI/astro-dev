import React from "react";
import Form from "./Form";

const ConsultancySection = () => {
  return (
    <section class="flex my-20 h-fit md:flex-row  px-5 md:items-start items-center flex-col justify-center   gap-5 max-w-7xl  mx-auto">
      <img
        src="https://www.astrodevam.com/media/wysiwyg/Get_the_Best_Vastu_Services_No_Demolition_The_Most_Result-Oriented.gif"
        className=" xl:w-full lg:w-[700px] md:w-[550px] w-[90%] "
      />
      <Form />
    </section>
  );
};

export default ConsultancySection;
