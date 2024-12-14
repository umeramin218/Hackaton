import Image from "next/image"
import FeaturedProducts from "@/app/images/FeaturedProducts.png"
import TopCategotires from "@/app/images/TopCategotires.png"
import hotCategory from "@/app/images/hotCategory.png"
import OurProducts from "@/app/images/OurProducts.png"



export default function Product(){
    return(
        <div>
<div>
<Image src={FeaturedProducts} alt="Thsi is an image"/>
</div>

<div className="topCatagory">
<Image src={TopCategotires} alt="Thsi is an image"/>
</div>

<div className="hotCatagory">
<Image src={hotCategory} alt="Thsi is an image"/>
</div>

<div className=" ourPraduct">
<Image src={OurProducts} alt="Thsi is an image"/>
</div>

</div>

    )
}