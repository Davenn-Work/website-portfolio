import Image from "next/image";

export default function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-3xl" />

      <div className="rounded-3xl border border-border bg-card p-4 shadow-2xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface p-3">
          <Image
            src="/images/svg/Splash.svg"
            alt="Preview ilustrasi website Scaleweb"
            width={1440}
            height={1024}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
