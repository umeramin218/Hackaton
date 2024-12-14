import Image from "next/image"
import UserLink from "@/app/images/UserLinks.png"
import logo from "@/app/images/Logo.png"
import Shipping from "@/app/images/Shipping.png"
import links from "@/app/images/links.png"
import Link from "next/link"


export default function Navigation() {
    return (

        <div>


        <div className="top">
            <div className="shipping"><Image src={Shipping} alt="Thsi is an image"/></div>
            {/* <div className="link"><Image src={links} alt="Thsi is an image"/></div> */}
            <div className=" link">
                <p>Eng</p>
                <Link href="/faq"><p>Faq</p></Link>
                <p>Need help</p>
            </div>
        </div>


         <div className="middle">

            <div className="logo">
            <Image src={logo} alt="Thsi is an image"/>
            </div>
            <div className="cart">
            <Link href="/Cart">
            <Image src={UserLink} alt="Thsi is an image"/>
            </Link>
            </div>
        </div>
        




        <div className="link">

            <ul className="naviation-botton">

                <Link href="/"><li>Home</li></Link>
                <li>Shop</li>
                <Link href="/product"><li>Product</li></Link>
                <li>Pages</li>
                <Link href="/about"><li>About</li></Link>
            </ul>

            <ul className="contact">

            <Link href="/contact-us"><li> Contact : +923492067752</li></Link>

            </ul>

        </div>
        </div>
    )
}