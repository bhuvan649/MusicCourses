import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto">
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      
      <div className="relative z-10 w-full text-center px-4">
       
        <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
          Master the art of music
        </h1>

        
        <p className="mt-8 font-normal text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          Dive into our comprehensive music courses and transform your musical journey today. 
          Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>

        
        <div className="mt-10">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="cursor-pointer bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
