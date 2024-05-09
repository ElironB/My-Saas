"use client"
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Benefits from "@/sections/Benefits";
import Header from "@/sections/Header";
import { HowItWorks } from "@/sections/HowItWorks";
import Image from "next/image";
import Pricing from "@/sections/Pricing";
import Pline from "@/components/ui/pline";
import Faq from "@/sections/Faq";



export default function Home() {
	return (
		<main className="bg-black" id="root">
			
			<Pline scene="https://prod.spline.design/fzSufNAWJhBeV0wa/scene.splinecode" className="absolute h-full w-full"/>
			<div className="px-[100px]">
				<Navbar />
				<Header />
			</div>
			<div className="w-full z-10 bg-black">
			<Benefits />
			</div>
			<Pline scene="https://prod.spline.design/uvm6ubpk8O3kvIPx/scene.splinecode" className="absolute translate-y-[80%] -translate-x-[565px] h-full w-full pointer-events-none"/>
			<Faq/>
			{/* <Pricing/> */}
			<Image src="/bg.svg" width={1920} height={720} alt="Background" className="absolute max-w-full h-auto -translate-y-36"/>
			<HowItWorks />
			

			<Footer />
			
		</main>
	);
}
