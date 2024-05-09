import { FC } from "react";
import Pricing from "..";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingCard: FC<Pricing> = (props) => {
	return (
		<div className=" gradient_footer p-6 rounded-xl flex flex-col gap-4 w-[350px] mb-5">
			<div className="flex w-full items-center justify-between">
				<div className="flex items-center gap-3">
					<Image src={props.icon} alt={props.title} width={30} height={30} />
					<h1 className="text-[24px] font-semibold">{props.title}</h1>
				</div>
				{props.popular && (
					<Badge className="bg-[#0D121F] p-2 rounded-full px-4">Popular</Badge>
				)}
			</div>
			<p>{props.subTitle}</p>
			<div className="flex items-center gap-2">
				<h1 className="text-[30px] font-semibold">
					{props.pricingUnit}
					{props.pricing}
				</h1>
				<p className="text-[16px] font-normal">
					{props.type === "both" ? null : (props.type === "monthly" ? "/month" : "/year")}
				</p>
			</div>
			<p>{props.description}</p>
			<div className="flex flex-col gap-4 my-4">
				{props.features.map((feature, index) => {
					return (
						<div className="flex items-center gap-2" key={index}>
							{feature.isIncluded ? (
								<Image
									src="/images/pricing/included.svg"
									alt="included"
									width={20}
									height={20}
								/>
							) : (
								<Image
									src="/images/pricing/not-included.svg"
									alt="included"
									width={20}
									height={20}
								/>
							)}
							<p>{feature.name}</p>
						</div>
					);
				})}
			</div>
			<button className="w-[80%] mx-auto btn_normal z-10">{props.button}</button>
		</div>
	);
};

export default PricingCard;
