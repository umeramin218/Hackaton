import Image from "next/image";
import header from "@/app/images/Header.png"

const HeroSection = () => {
   return (
     <div className="m-auto lg:h-[750px] lg:w-[1000px] sm:w-full sm:h-auto">
        
       <Image
         className="rounded-br-[40px]"
         src={header}
         alt="Hero Image"
         width={1321}
         height={850}
       />
     </div>
   );
 };
 
 export default HeroSection;