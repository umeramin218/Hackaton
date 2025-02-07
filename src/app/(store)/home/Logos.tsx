import Image from "next/image";
import Companylogo from "@/app/images/CompanLogo.png"

const CompanyLogos = () => {
   return (
     <div className="grid grid-cols-4 sm:flex sm:flex-wrap justify-evenly">
       {['home-logo-1'].map((logo, index) => (
         <Image key={index} src={Companylogo} alt={`Logo ${index + 1}`} width={1000} height={1000} />
       ))}
     </div>
   );
 };
 
 export default CompanyLogos;