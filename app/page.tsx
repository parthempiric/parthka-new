import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-pka-dark min-h-screen">
      <div className="max-w-3xl bg-pka-primary mx-auto p-7 pb-10 rounded-b-4xl text-pka-dark">
        <div className="">
          <h1 className="font-pka text-2xl md:text-3xl">Parthka.</h1>
        </div>
        <div className="mt-6">
          <h2 className="font-pka-new-edge italic text-4xl md:text-5xl">A Software Engineer.</h2>
        </div>
        <div>
          <Button className="bg-pka-light text-pka-dark">Hire Me</Button>
        </div>
      </div>
    </div>
  );
}
