import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useState, useEffect } from "react";
import data from "./pricing.json";
import PricingCard from "./card";

interface Pricing {
  type: string;
  icon: string;
  title: string;
  subTitle: string;
  pricing: string;
  pricingUnit: string;
  description: string;
  popular?: boolean;
  features: Feature[];
  button: string;
}

interface Feature {
  name: string;
  isIncluded: boolean;
}

const Pricing = () => {
  const [pricingData, setPricingData] = useState<Pricing[]>([]);
  const [isYearly, setIsYearly] = useState(true);

  useEffect(() => {
    filterPricingData(isYearly);
  }, [isYearly]);

  const filterPricingData = (isYearly: boolean) => {
    if (isYearly) {
      setPricingData(data.filter(item => item.type === "yearly" || item.type === "both"));
    } else {
      setPricingData(data.filter(item => item.type === "monthly" || item.type === "both"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2" id="pricing">
      <h1 className="text-3xl font-semibold">Ready to Get Started?</h1>
      <p className="text-[20px]"> Choose a plan that suits your business needs </p>
      <div className="flex items-center gap-4 mt-6">
        <p className="text-[16px] font-medium">Monthly </p>
        <Switch
          checked={isYearly}
          onCheckedChange={(value) => setIsYearly(value)}
        />
        <p className="text-[16px] font-medium">Yearly 16% Discount!</p>
      </div>
      <div className="flex items-start gap-6 mt-8 justify-center flex-wrap">
        {pricingData.map((pricing, index) => (
          <PricingCard key={index} {...pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
