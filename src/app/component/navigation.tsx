// import Image from "next/image"
// import UserLink from "@/app/images/UserLinks.png"
// import logo from "@/app/images/Logo.png"
// import Shipping from "@/app/images/Shipping.png"
// import links from "@/app/images/links.png"
// import Link from "next/link"


// export default function Navigation() {
//     return (

//         <div>


//         <div className="top">
//             <div className="shipping"><Image src={Shipping} alt="Thsi is an image"/></div>
//             {/* <div className="link"><Image src={links} alt="Thsi is an image"/></div> */}
//             <div className=" link">
//                 <p>Eng</p>
//                 <Link href="/faq"><p>Faq</p></Link>
//                 <p>Need help</p>
//             </div>
//         </div>


//          <div className="middle">

//             <div className="logo">
//             <Image src={logo} alt="Thsi is an image"/>
//             </div>
//             <div className="cart">
//             <Link href="/Cart">
//             <Image src={UserLink} alt="Thsi is an image"/>
//             </Link>
//             </div>
//         </div>
        




//         <div className="link">

//             <ul className="naviation-botton">

//                 <Link href="/"><li>Home</li></Link>
//                 <li>Shop</li>
//                 <Link href="/product"><li>Product</li></Link>
//                 <li>Pages</li>
//                 <Link href="/about"><li>About</li></Link>
//             </ul>

//             <ul className="contact">

//             <Link href="/contact-us"><li> Contact : +923492067752</li></Link>

//             </ul>

//         </div>
//         </div>
//     )
// }

'use client';

import Image from "next/image";
// import SearchBar from "./search-bar/Search";
// import Login from "./Login";
import Link from "next/link";
import logo from "@/app/images/Logo.png"


export default function Header() {
   return (
      <header>
         {/* Navigation Top */}
         <div className="flex items-center gap-2 sm:gap-[200px] md:gap-[340px] lg:gap-[550px] justify-around text-sm bg-[#272343] text-gray-400 h-[45px]">
            {/* Navigation Top Shipping */}
            <div className="flex">
               <div>
                  <i className="bi bi-check-lg"></i>
               </div>
               <div>Free Shipping on all Orders Over &#36;50</div>
            </div>
            {/* Navigation Top Link */}
            <div className="flex gap-1 md:gap-5">
               <ul>Eng <i className="bi bi-arrow-down-short"></i></ul>
               <ul>Faqs</ul>
               <ul>
                  <i className="bi bi-exclamation-circle"></i> Need Help
               </ul>
            </div>
         </div>

         {/* Navigation Middle */}
         <div className="flex h-[84px] items-center justify-around bg-[#f0f2f3]">
            {/* Navigation Middle Image */}
            <div>
               <Link href="/">
                  <Image src= {logo} alt="Logo" width={166} height={40} />
               </Link>
            </div>
            {/* Search box */}
            <div className="justify-center items-center">
               {/* <SearchBar /> */}
            </div>
            {/* Navigation Middle Cart */}
            <div className="snipcart-checkout cursor-pointer bg-white text-black w-[120px] h-[44px] flex flex-row gap-5 items-center justify-center rounded-sm">
               <i className="bi bi-cart"></i>
               <Link href="#" className="snipcart-items-count">
                  Cart
               </Link>
               {/* Snipcart will automatically update the cart count */}
               <div
                  data-item-count="true"
               >
                  {/* Snipcart will dynamically populate this with cart items */}
               </div>
            </div>
         </div>

         {/* Navigation Links Bottom */}
         <div className="h-[74px] bg-white flex items-center justify-around text-sm  border-b-[1px] border-gray-300">
            <div className="flex gap-4">
               <Link href="/" className="text-[#007580] cursor-pointer">
                  Home
               </Link>
               <Link href="/all-product">
                  <ul className="text-gray-400">Products</ul>
               </Link>
               <Link href="/faq">
                  <ul className="text-gray-400">FAQ</ul>
               </Link>
               <Link href="/contact-us">
                  <ul className="text-gray-400">Contact</ul>
               </Link>
               <Link href="/about">
                  <ul className="text-gray-400">About</ul>
               </Link>
            </div>
            {/* Navigation Text Bottom */}
            <div className="text-gray-400">
               Contact&#58; <span className="text-black">(808) 555-0111</span>
            </div>
            {/* Login / Signup */}
            <div className="gap-2 flex">
               {/* <Login /> */}
            </div>
         </div>
      </header>
   );
}