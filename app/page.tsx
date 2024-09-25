import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl mb-10">HomePage</h1>
      <div className="flex gap-4">
        <Link href="about" className="text-blue-500">About page</Link>
        <Link href="info/contact" className="text-blue-500">Contact page</Link>
      </div>
    </div>
  );
}

export default HomePage;
