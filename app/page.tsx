import { Button } from "@/components/ui/button";
import { textTheme } from "@/lib/cores/constants/text-theme";
import Navbar from "@/lib/cores/features/splash/components/navbar";

export default function SplashPage() {
  return (
    <div className="w-full h-full pt-8 flex flex-col items-center px-8">
      <Navbar
        navItems={[
          { text: "Layanan", onClick: () => {} },
          { text: "Proses", onClick: () => {} },
          { text: "Karya", onClick: () => {} },
        ]}
        icons={"Scaleweb"}
      />{" "}
      <div className="w-full h-full pt-8 pb-8 flex flex-col items-center">
        <section>
          <h1 className={`${textTheme.heading1} pb-4`}>
            Website yang bikin pengunjung{" "}
            <span className="text-primary italic">percaya</span> sejak detik
            pertama
          </h1>
          <p className={`${textTheme.body1} pb-4`}>
            Studio Nara membantu bisnis kecil dan menengah punya website yang
            cepat, indah, dan benar-benar mendatangkan pelanggan — bukan cuma
            katalog online yang diam.
          </p>
        </section>
        <section>
          <img src="" />
        </section>
      </div>
      <div className="w-full h-full flex mb-8">
        <div className="flex-2">
          <h1 className={`${textTheme.subheading1} pb-4`}>
            Tiga hal yang selalu kami perhatikan di setiap proyek.
          </h1>
          <p className={`${textTheme.body1} pb-4`}>
            Bukan sekadar tampilan cantik — tapi website yang mudah dipakai,
            cepat dibuka, dan mendorong orang untuk mengambil tindakan.
          </p>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
