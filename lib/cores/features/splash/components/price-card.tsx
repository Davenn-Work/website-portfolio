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
    <div className="flex flex-col p-8 bg-white border border-gray-300 rounded-xl transform duration-300 hover:-translate-y-2 shadow-gray1 hover:shadow-sm">
      <div>
        <Icon className="mb-4" color="black" size={24} />
      </div>
      <h1 className={`${textTheme.subheading1}`}>{name}</h1>
      <p className={`${textTheme.body1} mb-4`}>{description}</p>

      <h1 className={`${textTheme.subheading2} whitespace-nowrap`}>{price}</h1>

      <hr className="border-gray-300 my-8" />

      {features.map((value) => {
        return (
          <div key={value} className="w-full flex items-start gap-2">
            <Check
              color="#1D9E75"
              className="h-5 w-5 shrink-0 mt-1"
              strokeWidth={2.5}
            />
            <p className="flex-1 leading-relaxed">{value}</p>
          </div>
        );
      })}
    </div>
  );
}
