//In this page we are going to talk about data feting from an API in Next.js
import React from "react";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

//Refactor and Delay
const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function TourPage() {
  const data = await fetchTours();
  // console.log(data);
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {data.map((tour) => {
        return <h2 key={tour.id}>{tour.name}</h2>;
      })}
    </section>
  );
}

export default TourPage;
