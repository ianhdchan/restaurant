import { ArrowBigUp, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      role="contentinfo"
      className="bg-zinc-900 text-zinc-200 border-t border-white/5"
    >
      <div className="mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
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
        </nav>

        {/* Contact */}
        <div className="flex flex-col justify-center items-center text-sm text-zinc-400 space-y-2">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <Link to="tel:+1234567890" className="hover:text-white transition">
            +1 (123) 456-7890
          </Link>
          <Link
            to="mailto:hello@dnabbq.example"
            className="hover:text-white transition"
          >
            hello@dnabbq.example
          </Link>
          <address className="not-italic mt-2">
            <span className="block">Vancouver, BC</span>
            <span className="block">Canada</span>
          </address>
          <div className="flex items-center gap-3 mt-2">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Facebook size={15} />
            </Link>

            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Instagram size={15} />
            </Link>

            <Link
              to="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter size={15} />
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col space-y-4 items-center w-full text-sm text-zinc-400">
          <Link
            to="/order"
            className="mt-4 inline-block rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-400 transition"
          >
            Order Online!
          </Link>
          <Button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex flex-col h-full items-center justify-center rounded-md bg-zinc-800 text-xs text-white hover:bg-zinc-700 transition"
          >
            <ArrowBigUp size={14} />
            Back to top
          </Button>
        </div>
      </div>

      <div className="border-t border-white/3 flex items-center justify-center gap-5">
        <div className="max-w-6xl mx-auto px-6 py-4 md:flex-row  text-xs text-zinc-500">
          <span>
            © {new Date().getFullYear()} DNA BBQ. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
