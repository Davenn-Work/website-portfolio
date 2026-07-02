import { Button } from "@/components/ui/button";

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
    <div className="w-full py-4 px-8 mx-4 max-w-5xl border-1 border-gray-100 border rounded-full shadow-md shadow-gray1">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div>
          <p>{icons}</p>
        </div>
        <div className="w-50 flex flex-row items-center justify-between">
          {navItems.map((value, index) => {
            return <div key={index}>{value.text}</div>;
          })}
        </div>
        <Button className="bg-gray-950 rounded-2xl text-white px-4 py-5">
          Diskusi Sekarang
        </Button>
      </div>
    </div>
  );
}
