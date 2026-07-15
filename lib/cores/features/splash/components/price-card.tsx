import { textTheme } from "@/lib/cores/constants/text-theme";
import { Check, LucideIcon } from "lucide-react";

export type PriceCardType = {
  name: string;
  description: string;
  Icon: LucideIcon;
  price: string;
  features: string[];
};

export default function PriceCard({
  name,
  price,
  features,
  description,
  Icon,
}: PriceCardType) {
  return (
    <div className="flex flex-col p-8 bg-primary-light border border border-gray-300 rounded-xl bg-white transform duration-300 hover:-translate-y-2 shadow-gray1 hover:shadow-sm">
      <div>
        <Icon className="mb-4" color="black" size={24} />
      </div>
      <h1 className={`${textTheme.subheading1}`}>{name}</h1>
      <p className={`${textTheme.body1} mb-4`}>{description}</p>

      <h1 className={`${textTheme.subheading2}`}>{price}</h1>

      <hr className="border-gray-300 my-8" />

      {features.map((value, index) => {
        return (
          <div className="w-full h-full flex flex-row">
            <Check color="#1D9E75" className="mr-2" />
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
}
