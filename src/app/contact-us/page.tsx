import Image from "next/image"
import GroupA from "@/app/images/GroupA.png"
import Frame161 from "@/app/images/Frame161.png"


export default function Frames(){
    return(
        <div>
        <div>
        <Image src={GroupA} alt="Thsi is an image"/>
        </div>
        <div>
        <Image src={Frame161} alt="Thsi is an image"/>
        </div>
        </div>
    
    )
}