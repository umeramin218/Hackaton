import Image from "next/image"
import FeaturedProductsOne from "@/app/images/FeaturedProductsOne.png"
import FeaturedProductsTwo from "@/app/images/FeaturedProductsTwo.png"
import FeaturedProductsThree from "@/app/images/FeaturedProductsThree.png"
import newsletterInstagram from "@/app/images/newsletterInstagram.png"


export default function Frames(){
    return(
        <div>
        <div>
        <Image src={FeaturedProductsOne} alt="Thsi is an image"/>
        </div>
        <div>
        <Image src={FeaturedProductsTwo} alt="Thsi is an image"/>
        </div>
        <div>
        <Image src={FeaturedProductsThree} alt="Thsi is an image"/>
        </div>
        <div>
        <Image src={newsletterInstagram} alt="Thsi is an image"/>
        </div>
        </div>
    
    )
}