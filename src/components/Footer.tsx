import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-zinc-900 text-zinc-200 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/68b1e253311fe5cc1a9525be/68b1e41e387563285c270651_logo.svg"
              width={40}
              height={40}
              alt="DNA BBQ logo"
              className="rounded"
            />
            <span className="text-lg font-semibold text-white">DNA BBQ</span>
          </Link>
          <p className="text-sm text-zinc-400">
            Handcrafted smoked meats & sides. Pickup and delivery available.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.98 3.66 9.11 8.44 9.94v-7.03H8.08v-2.91h2.36V9.41c0-2.33 1.38-3.62 3.5-3.62. , 0 3.5 0 3.5v2.99h-1.91c-1.88 0-2.47 1.17-2.47 2.37v1.93h3.99l-.64 2.91h-3.35V22c4.78-.83 8.44-4.96 8.44-9.93z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.6a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z" />
              </svg>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.92c-.66.29-1.37.5-2.12.59a3.67 3.67 0 0 0 1.6-2.03 7.3 7.3 0 0 1-2.33.9 3.65 3.65 0 0 0-6.22 3.33A10.36 10.36 0 0 1 3.15 4.6a3.65 3.65 0 0 0 1.13 4.87c-.54 0-1.05-.16-1.5-.4v.04a3.65 3.65 0 0 0 2.92 3.58c-.5.14-1.03.18-1.57.07a3.66 3.66 0 0 0 3.41 2.55A7.32 7.32 0 0 1 2 19.54a10.34 10.34 0 0 0 5.6 1.64c6.72 0 10.4-5.57 10.4-10.4v-.47A7.27 7.27 0 0 0 22 5.92z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation" className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <Link
            to="/menu"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Menu
          </Link>
          <Link
            to="/locations"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Locations
          </Link>
          <Link
            to="/about"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            About
          </Link>
          <a
            href="#contact"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Contact
          </a>
        </nav>

        {/* Contact */}
        <div className="flex flex-col text-sm text-zinc-400">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <a href="tel:+1234567890" className="hover:text-white transition">
            +1 (234) 567-890
          </a>
          <a
            href="mailto:hello@dnabbq.example"
            className="hover:text-white transition"
          >
            hello@dnabbq.example
          </a>
          <address className="not-italic mt-2">
            <span className="block">123 Smoke Lane</span>
            <span className="block">BBQ City, TX</span>
          </address>
        </div>

        {/* Hours / small CTA */}
        <div className="flex flex-col text-sm text-zinc-400">
          <h3 className="text-sm font-semibold text-white">Hours</h3>
          <span>Mon–Fri: 11:00 AM — 9:00 PM</span>
          <span>Sat–Sun: 10:00 AM — 10:00 PM</span>

          <Link
            to="/menu"
            className="mt-4 inline-block rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-400 transition"
          >
            Order Online
          </Link>
        </div>
      </div>

      <div className="border-t border-white/3">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
          <span>
            © {new Date().getFullYear()} DNA BBQ. All rights reserved.
          </span>
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
