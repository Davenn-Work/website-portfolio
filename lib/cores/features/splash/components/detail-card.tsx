import { textTheme } from "@/lib/cores/constants/text-theme";

export type DetailCardTypes = {
  icon: string;
  iconBackgroundColor: string;
  title: string;
  description: string;
};

export default function DetailCard({
  icon,
  iconBackgroundColor,
  title,
  description,
}: DetailCardTypes) {
  return (
    <div className="flex flex-col p-8 bg-white border border-gray-300 rounded-xl transform duration-300 hover:-translate-y-2 shadow-gray1 hover:shadow-sm">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl`}
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>
      <h1 className={`mb-4 ${textTheme.subheading1} text-foreground`}>{title}</h1>
      <p className={`${textTheme.body1} text-muted-foreground`}>{description}</p>
    </div>
  );
}
