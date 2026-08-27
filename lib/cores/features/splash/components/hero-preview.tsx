import Image from "next/image";

export default function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-3xl" />

      <Image
        src="/images/jpg/splash-photo.jpg"
        alt="Preview ilustrasi website Scaleweb"
        width={1440}
        height={1024}
        priority
        className="h-auto w-full shadow-2xl"
      />
    </div>
  );
}
