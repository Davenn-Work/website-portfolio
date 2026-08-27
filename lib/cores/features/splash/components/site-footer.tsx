import { textTheme } from "@/lib/cores/constants/text-theme";
import type { NavItem } from "@/lib/cores/features/splash/content";

type SiteFooterProps = {
  navItems: NavItem[];
};

export default function SiteFooter({ navItems }: SiteFooterProps) {
  return (
    <footer id="kontak" className="bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className={`${textTheme.subheading2}`}>Scaleweb</p>
          <p className={`mt-4 max-w-lg ${textTheme.body2} text-background/65`}>
            Menciptakan pengalaman digital premium untuk brand yang menghargai
            kualitas, kejelasan, dan hasil yang terasa nyata.
          </p>
          <p className={`mt-12 ${textTheme.caption1} text-background/40`}>
            (c) 2026 Scaleweb. All rights reserved.
          </p>
        </div>

        <div>
          <p className={`text-background/45 ${textTheme.caption1}`}>
            Navigasi
          </p>
          <div className={`mt-5 grid gap-3 ${textTheme.body2} text-background/70`}>
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
          <p className={`text-background/45 ${textTheme.caption1}`}>
            Kontak
          </p>
          <div className={`mt-5 space-y-3 ${textTheme.body2} text-background/70`}>
            <p>halo@studiodigital.co</p>
            <p>+62 812 3456 7890</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
