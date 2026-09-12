import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-10">
          {/* Brand - 40% */}
          <div className="md:col-span-4">
            <div className="mb-4 flex items-center gap-2">
              <img src={Logo} alt="Dev Stack" />
            </div>

            <p className="max-w-xs text-xs leading-5 text-[#64748B]">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-xs font-semibold text-gray-600">
              <a href="#" className="transition hover:text-[#db2777]">
                GitHub
              </a>

              <a href="#" className="transition hover:text-[#db2777]">
                Twitter
              </a>

              <a href="#" className="transition hover:text-[#db2777]">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product - 20% */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-gray-900">Product</h3>

            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company - 20% */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-gray-900">Company</h3>

            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal - 20% */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-gray-900">Legal</h3>

            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#db2777]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-[#64748b] sm:flex-row sm:items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#db2777]">
              Privacy
            </a>

            <a href="#" className="transition hover:text-[#db2777]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
