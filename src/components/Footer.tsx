import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Han Creation</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Orchestrated, Coded, and Created by Han 2024
          </p>
          <div className="m-4">
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Built using React + Tailwind CSS
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
