import { useState } from "react";
import { Menu, X, Code2, Mail, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTalkOptions, setShowTalkOptions] = useState(false);

  const whatsappNumber = "919767196869";
  const email = "pravinbendke0@gmail.com";
  const whatsappMessage =
    "Hi Pravin, I came across your portfolio and would like to connect with you.";

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const openTalkOptions = () => {
    setIsOpen(false);
    setShowTalkOptions(true);
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
        <div className="section-container">
          <div className="flex min-h-16 items-center justify-between py-2 sm:min-h-18">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="flex shrink-0 items-center gap-2 text-base font-bold sm:text-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 sm:h-9 sm:w-9">
                <Code2 size={18} className="sm:hidden" />
                <Code2 size={20} className="hidden sm:block" />
              </div>

              <span className="whitespace-nowrap">
                Pravin<span className="text-blue-400">.dev</span>
              </span>
            </a>

            <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="whitespace-nowrap text-sm text-slate-300 transition duration-200 hover:text-blue-400"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setShowTalkOptions(true)}
              className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-500 lg:block"
            >
              Let's Talk
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-blue-500 hover:text-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-slate-800 py-3 lg:hidden">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={openTalkOptions}
                  className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-3 text-left text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Let's Talk
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {showTalkOptions && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setShowTalkOptions(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowTalkOptions(false)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white sm:right-4 sm:top-4"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="mb-5 pr-10 sm:mb-6">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Let's Talk
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                Choose how you'd like to get in touch with me.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowTalkOptions(false)}
                className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 transition duration-200 hover:border-green-500/50 hover:bg-green-500/5 sm:min-h-[100px] sm:flex-col sm:justify-center sm:text-center"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition group-hover:bg-green-500/20">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Chat with me
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  "Portfolio Inquiry"
                )}`}
                onClick={() => setShowTalkOptions(false)}
                className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 transition duration-200 hover:border-blue-500/50 hover:bg-blue-500/5 sm:min-h-[100px] sm:flex-col sm:justify-center sm:text-center"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
                  <Mail size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Send me an email
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;