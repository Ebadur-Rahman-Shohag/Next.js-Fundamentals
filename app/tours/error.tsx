//In this page we are going to code an error component
"use client";

function error({ error }: { error: Error }) {
  console.log(error);

  return <div>There was an error...</div>;
}

export default error;
