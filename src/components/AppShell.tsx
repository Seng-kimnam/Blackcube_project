import { useEffect, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import type { Page, Lang, TranslationSet } from "@/content";
import { t } from "@/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faHouse } from "@fortawesome/free-solid-svg-icons";
type AppShellRenderProps = {
  page: Page;
  setPage: (p: Page) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  l: TranslationSet;
};

const pageToPath: Record<Page, string> = {
  home: "/",
  product: "/product",

  about: "/about",
  achievements: "/achievements",
  news: "/news",
  feedback: "/feedback",
  contact: "/contact",
};

const pathToPage = (pathname: string): Page => {
  switch (pathname) {
    case "/product":
      return "product";

    case "/about":
      return "about";
    case "/achievements":
      return "achievements";
    case "/news":
      return "news";
    case "/feedback":
      return "feedback";
    case "/contact":
      return "contact";
    default:
      return "home";
  }
};

const pageTitles: Record<Page, string> = {
  home: "Home",
  product: "Product",

  about: "About Us",
  achievements: "Achievements",
  news: "News",
  feedback: "Feedback",
  contact: "Contact",
};

const socialMediaInfo = [
  {
    icon: faFacebook,
    url: "#",
  },
  {
    icon: faInstagram,
    url: "#",
  },
  {
    icon: faLinkedin,
    url: "#",
  },
  {
    icon: faTiktok,
    url: "#",
  },
];

export function AppShell({
  children,
}: {
  children: (props: AppShellRenderProps) => ReactNode;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<Lang>("en");
  const page = pathToPage(location.pathname);
  const l = t[lang];

  useEffect(() => {
    document.title = `BLACK CUBE | ${pageTitles[page]}`;
    document.documentElement.lang = lang === "kh" ? "km" : "en";
  }, [page, lang]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  const setPage = (nextPage: Page) => {
    navigate(pageToPath[nextPage]);
  };

  return (
    <div className="min-h-screen bg-background font-[Outfit,sans-serif] text-foreground">
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} l={l} />
      <main>{children({ page, setPage, lang, setLang, l })}</main>
      <Footer l={l} setPage={setPage} />
      <ScrollToTopButton />
    </div>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-0 right-0 z-50 mb-6 mr-6 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-accent ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

function Nav({
  page,
  setPage,
  lang,
  setLang,
  l,
}: {
  page: Page;
  setPage: (p: Page) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  l: TranslationSet;
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky  top-0 z-50 border-b border-border/80 bg-[rgba(8,8,8,0.88)] backdrop-blur-xl">
      <div className="mx-auto  flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <button
          onClick={() => setPage("home")}
          className="shrink-0 cursor-pointer font-display text-xl font-bold tracking-[-0.03em] text-foreground"
        >
          BLACK <span className="text-primary">CUBE</span>
        </button>

        <div className="hidden flex-1 items-center    justify-center  md:flex">
          {l.nav.map((label, i) => (
            <button
              key={label}
              onClick={() => setPage(l.navKeys[i])}
              className={` cursor-pointer rounded-lg  px-3 py-2 font-bold  transition ${page === l.navKeys[i] ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "kh" : "en")}
            className="rounded-full cursor-pointer border border-border bg-muted px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground"
          >
            {lang === "en" ? "KH" : "EN"}
          </button>
          <button
            onClick={() => setPage("feedback")}
            className="hidden cursor-pointer  rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground md:inline-flex"
          >
            {l.giveFeedback}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg cursor-pointer p-2 text-2xl text-foreground md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-card/90 p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {l.nav.map((label, i) => (
              <button
                key={label}
                onClick={() => {
                  setPage(l.navKeys[i]);
                  setOpen(false);
                }}
                className={`rounded-lg cursor-pointer px-2 py-2 text-left text-sm font-medium ${page === l.navKeys[i] ? "text-primary" : "text-foreground"}`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setPage("feedback");
                setOpen(false);
              }}
              className="mt-2 cursor-pointer inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              {l.giveFeedback}
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

function Footer({
  l,
  setPage,
}: {
  l: TranslationSet;
  setPage: (p: Page) => void;
}) {
  return (
    <footer className="border-t mt-40 border-border bg-card/80 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-3 font-display text-2xl font-bold text-foreground">
              BLACK <span className="text-primary">CUBE</span>
            </div>
            <p className="max-w-sm  leading-7 text-muted-foreground">
              {l.footerDesc}
            </p>
            <div className="mt-5 flex gap-3">
              {socialMediaInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted "
                >
                  <FontAwesomeIcon icon={info.icon} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 underline  font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Navigate
            </div>
            <div className="flex flex-col gap-2">
              {l.nav.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setPage(l.navKeys[i])}
                  className="text-left cursor-pointer text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 underline  font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div>Email: hello@blackcube.kh</div>
              <div>Location : National University of Battambang, Battambang City, Cambodia</div>
              <div>Phone: +855 12 345 678</div>
              <button
                onClick={() => setPage("feedback")}
                className="mt-2 cursor-pointer text-left font-semibold text-primary"
              >
                👉 Give Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>{l.footerCopy}</div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} />
            <span>
              Made with{" "}
              <a
                href="https://www.linkedin.com/in/kimnam-seng-31595b2b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                BlackCube Developer
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
