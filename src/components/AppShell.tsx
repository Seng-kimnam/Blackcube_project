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
import { faHouse } from "@fortawesome/free-solid-svg-icons";
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
    url: "https://www.facebook.com/blackcube.kh",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/blackcube.kh",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/company/blackcube-kh",
  },
  {
    icon: faTiktok,
    url: "https://www.tiktok.com/@blackcube.kh",
  }
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

  const setPage = (nextPage: Page) => {
    navigate(pageToPath[nextPage]);
  };

  return (
    <div className="min-h-screen bg-background font-[Outfit,sans-serif] text-foreground">
      <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} l={l} />
      <main>{children({ page, setPage, lang, setLang, l })}</main>
      <Footer l={l} setPage={setPage} />
    </div>
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
          className="shrink-0 font-display text-xl font-bold tracking-[-0.03em] text-foreground"
        >
          BLACK <span className="text-primary">CUBE</span>
        </button>

        <div className="hidden flex-1 items-center     justify-center  md:flex">
          {l.nav.map((label, i) => (
            <button
              key={label}
              onClick={() => setPage(l.navKeys[i])}
              className={` cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition ${page === l.navKeys[i] ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "kh" : "en")}
            className="rounded-full border border-border bg-muted px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground"
          >
            {lang === "en" ? "KH" : "EN"}
          </button>
          <button
            onClick={() => setPage("feedback")}
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground md:inline-flex"
          >
            {l.giveFeedback}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-2xl text-foreground md:hidden"
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
                className={`rounded-lg px-2 py-2 text-left text-sm font-medium ${page === l.navKeys[i] ? "text-primary" : "text-foreground"}`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setPage("feedback");
                setOpen(false);
              }}
              className="mt-2 inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
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
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              {l.footerDesc}
            </p>
            <div className="mt-5 flex gap-3">
              {socialMediaInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-base"
                >
                  <FontAwesomeIcon icon={info.icon} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Navigate
            </div>
            <div className="flex flex-col gap-2">
              {l.nav.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setPage(l.navKeys[i])}
                  className="text-left text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div>hello@blackcube.kh</div>
              <div>Phnom Penh, Cambodia</div>
              <div>@blackcube.kh</div>
              <button
                onClick={() => setPage("feedback")}
                className="mt-2 text-left font-semibold text-primary"
              >
                → Give Feedback
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>{l.footerCopy}</div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} />
            <span>Made with BlackCube Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
