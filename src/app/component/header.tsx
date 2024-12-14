import Image from "next/image"
import header from "@/app/images/Header.png"
import Companylogo from "@/app/images/CompanLogo.png"

export default function Header(){
    return(
        <div>
        <div className="header">
            <Image src={header} alt="Thsi is an image"/>
        </div>
        <div className="company-logo">
        <Image src={Companylogo} alt="Thsi is an image"/>
    </div>
    </div>


    )
}