import Banner from "@/components/contact/Banner";
import Form from "@/components/contact/form";
import React from "react";

export const metadata = {
  title: "Contact us",
  description: "Cyethack Solution : Contact us Get in Touch We'd love to hear from you. Reach out for audits, VAPT services, or general inquiries.",
};

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Form />
    </div>
  );
};

export default page;
