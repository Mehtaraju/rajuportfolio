import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="relative group cursor-none text-3xl font-medium capitalize mb-8 text-center w-23">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-5 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative ring-1 ring-gray-900/5 rounded-3xl flex items-top justify-center">
        <p className="text-slate-100">{children}</p>
      </div>
    </div>
  );
}
