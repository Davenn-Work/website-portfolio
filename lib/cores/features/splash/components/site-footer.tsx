import type { NavItem } from "@/lib/cores/features/splash/content";

type SiteFooterProps = {
  navItems: NavItem[];
};

export default function SiteFooter({ navItems }: SiteFooterProps) {
  return (
    <footer id="kontak" className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-medium tracking-tight">Scaleweb</p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-background/65">
            Menciptakan pengalaman digital premium untuk brand yang menghargai
            kualitas, kejelasan, dan hasil yang terasa nyata.
          </p>
          <p className="mt-12 text-xs uppercase tracking-widest text-background/40">
            (c) 2026 Scaleweb. All rights reserved.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-background/45">
            Navigasi
          </p>
          <div className="mt-5 grid gap-3 text-sm text-background/70">
            {navItems.map((item) => (
              <button
                key={item.text}
                type="button"
                onClick={item.onClick}
                className="w-fit transition-colors hover:text-background"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-background/45">
            Kontak
          </p>
          <div className="mt-5 space-y-3 text-sm text-background/70">
            <p>halo@studiodigital.co</p>
            <p>+62 812 3456 7890</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
