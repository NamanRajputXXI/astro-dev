import React from "react";

const YoutubeVideos = () => {
  return (
    <section className="max-w-7xl mx-auto flex px-5 flex-col my-20 gap-10">
      <h1 className="font-bold md:text-5xl text-3xl text-center my-10">
        Youtube Videos
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-10">
        <div className="flex items-center justify-center">
          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/WrK4m0fwXaE"
            title="See this Video Before Vastu Otherwise, You Will be Ruined | Vastu expert acharya Kalki krishnan ji"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/7J9UuDu1ZHY"
            title="The Incredible Benefits of Vastu in the New Parliament Building for Development of India in English"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/8xQ7QESvjlw"
            title="Biggest Effects of Vastu Dosh | Reason of Big Project Failure | Vastu Shastra tips in English"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideos;
