import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 py-6 text-xl border-b-2 mb-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/info/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
