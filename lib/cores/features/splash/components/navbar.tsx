import { Button } from "@/components/ui/button";
import { textTheme } from "@/lib/cores/constants/text-theme";

export type NavItems = {
  text: String;
  onClick?: () => void;
};

export type NavbarTypes = {
  icons: String;
  navItems: NavItems[];
};

export default function Navbar({ icons, navItems }: NavbarTypes) {
  return (
    <div className="w-full fixed py-4 px-8 mx-4 max-w-5xl border border-gray-300 rounded-full shadow-md shadow-gray1 backdrop-blur-md z-20">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="flex justify-between items-center">
          <div className="w-3 h-3 bg-secondary mr-2 rounded-full"></div>
          <p className={`${textTheme.icon}`}>{icons}</p>
        </div>
        <div className="w-50 flex flex-row items-center justify-between">
          {navItems.map((value, index) => {
            return (
              <div
                key={index}
                className="group relative cursor-pointer px-4 py-2"
              >
                <span className="text-gray-500 transition-colors duration-300 group-hover:text-black">
                  {value.text}
                </span>
                <span className="absolute left-1/2 bottom-0 h-1 w-0 -translate-x-1/2 bg-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </div>
            );
          })}
        </div>
        <Button className="bg-gray-950 rounded-2xl text-white px-4 py-5 hidden xl:inline-flex duration-300 hover:-translate-y-1">
          Diskusi Sekarang
        </Button>
      </div>
    </div>
  );
}
