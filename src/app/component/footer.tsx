import Image from "next/image"
import footer from "@/app/images/Footer.png"


export default function Footer(){
    return(
        <div>
        <Image src={footer} alt="Thsi is an image"/>
        </div>

    )
}