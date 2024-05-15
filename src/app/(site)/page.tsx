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
		<main className="bg-gray-900 bg-dot-white/[0.3] w-[75vw] mx-auto w" id="root" >
			{/* <Pline scene="https://prod.spline.design/OLvdSNZnmJMHd3wq/scene.splinecode" className="absolute h-[66vh] w-[75vw] translate-y-80 pointer-events-none"/> */}
			<div className="px-[100px]">
				<Navbar />
				<Header />
			</div>
			<div className="mx-auto w-[75vw] z-10">
			<Benefits />
			</div>
			<Pline scene="https://prod.spline.design/uvm6ubpk8O3kvIPx/scene.splinecode" className="absolute translate-y-[80%] -translate-x-[565px] h-full w-full pointer-events-none"/>
			<Faq/>
			{/* <Pricing/> */}

			<HowItWorks />
			

			<Footer />
			
		</main>
	);
}
