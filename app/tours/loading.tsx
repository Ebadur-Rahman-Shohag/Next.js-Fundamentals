//In this page we are going to talk about next.js loading component
//loading needs to be a client component
"use client";
import React from "react";

function loading() {
  return <span className="text-xl capitalize">loading tours...</span>;
}

export default loading;

//The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.