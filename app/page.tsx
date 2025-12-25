import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div className="bg-pka-dark min-h-screen">
      <div className="max-w-3xl bg-pka-primary mx-auto p-7 pb-10 rounded-b-4xl text-pka-dark">
        <div className="">
          <h1 className="font-pka text-2xl md:text-3xl">Parthka.</h1>
        </div>
        <div className="mt-10">
          <h2 className="font-pka-new-edge italic text-3xl md:text-4xl md:text-5xl">A Software Engineer.</h2>
        </div>
        <div className="flex flex-wrap md:flex-row gap-2 mt-3">
          <HeaderButtons path="mailto:parthka@gmail.com" label="Email" icon={<i className="hn hn-envelope"></i>} />
          <HeaderButtons path="https://github.com/parthka" label="Github" icon={<i className="hn hn-github"></i>} />
          <HeaderButtons path="https://linkedin.com/in/parthka" label="LinkedIn" icon={<i className="hn hn-linkedin"></i>} />
          <HeaderButtons path="https://x.com/parthka" label="X.com" icon={<i className="hn hn-x"></i>} />
        </div>
      </div>
    </div>
  );
}

const HeaderButtons = ({ path, label, icon }: { path: string, label: string, icon: React.ReactNode }) => {
  return (
    <a href={path} className="w-fit font-pka flex items-center gap-2 rounded-full px-4 py-2 bg-pka-dark text-pka-primary">
      {icon}
      {label}
    </a>
  )
}
