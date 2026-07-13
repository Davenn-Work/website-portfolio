import { Button } from "@/components/ui/button";
import { textTheme } from "@/lib/cores/constants/text-theme";
import DetailCard from "@/lib/cores/features/splash/components/detail-card";
import Navbar from "@/lib/cores/features/splash/components/navbar";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";

const steps = [
  {
    title: "Ngobrol & kenali bisnismu",
    description:
      "Kami tanya soal target pelanggan, gaya yang kamu suka, dan hasil yang kamu harapkan dari website ini.",
  },
  {
    title: "Rancang tampilan",
    description:
      "Kami buat rancangan visual untuk kamu tinjau dan revisi sebelum masuk ke pengembangan.",
  },
  {
    title: "Bangun & uji coba",
    description:
      "Website dibangun, diuji di berbagai perangkat, dan dipastikan berjalan mulus sebelum tayang.",
  },
  {
    title: "Luncurkan & dampingi",
    description:
      "Website tayang, dan kami tetap mendampingi jika ada yang perlu disesuaikan setelah rilis.",
  },
];

export default function SplashPage() {
  return (
    <div>
      <div className="w-full h-full pt-8 flex flex-col items-center px-8">
        <Navbar
          navItems={[
            { text: "Layanan", onClick: () => {} },
            { text: "Proses", onClick: () => {} },
            { text: "Karya", onClick: () => {} },
          ]}
          icons={"Scaleweb"}
        />{" "}
        <div className="w-full h-full pt-24 pb-16 flex flex-row items-center justify-between">
          <section className="flex-5">
            <p className={`${textTheme.heading4} pb-2`}>
              Halo, senang bertemu 👋
            </p>
            <h1 className={`${textTheme.heading1} pb-4`}>
              Website yang bikin pengunjung{" "}
              <span className="text-primary italic">percaya</span> sejak detik
              pertama
            </h1>
            <p className={`${textTheme.body1} pb-4`}>
              Scaleweb membantu bisnis kecil dan menengah punya website yang
              cepat, indah, dan benar-benar mendatangkan pelanggan — bukan cuma
              katalog online yang diam.
            </p>
          </section>
          <section className="flex-5 flex items-center justify-center">
            <Image
              src="/images/svg/Splash.svg"
              width={650}
              height={650}
              alt="Splash Image"
            />
          </section>
        </div>
        <div className="w-full h-full flex mb-8">
          <div className="flex-2">
            <p className={`${textTheme.heading4} pb-2`}>
              Apa yang kami kerjakan
            </p>
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
        <div className="w-full max-w-8xl h-full grid grid-cols-3 gap-4 mb-16">
          <DetailCard
            title="Desain yang Berkesan"
            description="Setiap website dirancang khusus mengikuti karakter bisnismu, bukan template yang dipakai semua orang."
            icon="🎨"
            iconBackgroundColor="#F1EDFB"
          />
          <DetailCard
            title="Cepat & Nyaman Dipakai"
            description="Website ringan, mudah dinavigasi, dan tetap nyaman diakses lewat HP — karena di sanalah kebanyakan pengunjungmu berada."
            icon="⚡"
            iconBackgroundColor="#FFEDE9"
          />
          <DetailCard
            title="Berorientasi Hasil"
            description="Kami merancang setiap halaman supaya mengarahkan pengunjung untuk menghubungi, membeli, atau mendaftar — bukan sekadar terlihat bagus."
            icon="📈"
            iconBackgroundColor="#E7F8F0"
          />
        </div>
        <div className="w-full h-full bg-[#f1edfb] rounded-[48px] px-12 py-20 mb-16">
          <div className="w-full h-full flex flex-row">
            <div className="flex-5">
              <h1 className={`${textTheme.subheading1} mb-4`}>
                Empat langkah, tanpa kejutan di tengah jalan.
              </h1>
              <p className={`${textTheme.body1} mb-8`}>
                Kamu akan tahu persis apa yang terjadi di setiap tahap — dan
                bisa memberi masukan sebelum kami lanjut ke langkah berikutnya.
              </p>
            </div>
            <div className="flex-5"></div>
          </div>

          <div className="relative mt-8">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-500" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex gap-10">
                  {/* Circle */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-indigo-500 bg-[#f1edfb]">
                    <span className="font-fraunces text-3xl font-semibold text-indigo-600">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h3 className={`${textTheme.subheading1}`}>{step.title}</h3>

                    <p className={`mt-4 ${textTheme.body2}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row justify-between items-start">
          <div className="flex-3">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-secondary mr-2 rounded-full"></div>
              <p className={`${textTheme.icon}`}>Scaleweb</p>
            </div>
            <p className={`${textTheme.body1} mb-4`}>
              Studio desain & pengembangan website untuk bisnis yang ingin
              dipercaya sejak kunjungan pertama.
            </p>
          </div>
          <div className="w-100"></div>
          <div>
            <p className={`${textTheme.body1} mb-4`}>Hubungi</p>
            <p className={`${textTheme.body1} mb-4`}>davenn.work@gmail.com</p>
            <p className={`${textTheme.body1} mb-4`}>+62 811830116</p>
          </div>
        </div>
      </div>
    </div>
  );
}
