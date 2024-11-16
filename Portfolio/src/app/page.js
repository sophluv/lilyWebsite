import Image from "next/image";
import Flower from "@/components/models/Flower";
import RenderModel from "@/components/RenderModel";
import bg from "../../public/background/background-image.png";


export default function Home() {
  return (
      <main className="relative flex min-h-screen flex-col items-center justify-between">
        <div className="absolute inset-0 -z-10">
          <Image 
            src={bg} 
            alt="background-image" 
            fill 
            className="w-full h-full object-cover object-center opacity-100" 
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-8xl font-bold">Sofia Yankova</h1>
        </div>
      
        <div className="w-full h-screen relative">
          <RenderModel>
            <Flower/>
          </RenderModel>
        </div>
      </main>
    );
}
