import Navbar from "@/lib/cores/features/splash/components/navbar";

export default function SplashPage() {
  return (
    <div className="w-full h-full pt-8 flex flex-col items-center">
      <Navbar
        navItems={[
          { text: "Layanan", onClick: () => {} },
          { text: "Proses", onClick: () => {} },
          { text: "Karya", onClick: () => {} },
        ]}
        icons={"Scaleweb"}
      />{" "}
    </div>
  );
}
