import Link from "next/link";
import React from "react";

function ContactPage() {
  return (
    <div>
      <h1 className="text-5xl mb-10">Contact Page</h1>
      <Link href="/"  className="border bg-blue-300 text-white">Go back to home page</Link>
    </div>
  );
}

export default ContactPage;
