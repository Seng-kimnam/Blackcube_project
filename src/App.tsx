import { lazy, Suspense } from "react";
import { AppShell } from "@/components/AppShell";
import { HomePage } from "@/components/pages/HomePage";
import { ProductPage } from "@/components/pages/ProductPage";
import { IngredientsPage } from "@/components/pages/IngredientsPage";
import { HowToUsePage } from "@/components/pages/HowToUsePage";
import { AboutPage } from "@/components/pages/AboutPage";
import { AchievementsPage } from "@/components/pages/AchievementsPage";
import { NewsPage } from "@/components/pages/NewsPage";
import { FeedbackPage } from "@/components/pages/FeedbackPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { Routes, Route } from "react-router";
import type { Page } from "@/content";

const Product3DPage = lazy(() =>
  import("@/components/pages/Product3DPage").then((m) => ({
    default: m.Product3DPage,
  })),
);

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <AppShell>
      {({ setPage, l }) => (
        <Routes>
          <Route
            path="/"
            element={<HomePage l={l} setPage={setPage as (p: Page) => void} />}
          />
          <Route
            path="/product"
            element={
              <ProductPage l={l} setPage={setPage as (p: Page) => void} />
            }
          />  
          
          <Route
            path="/3d"
            element={
              <Suspense fallback={<PageFallback />}>
                <Product3DPage />
              </Suspense>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/achievements" element={<AchievementsPage l={l} />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={<HomePage l={l} setPage={setPage as (p: Page) => void} />}
          />
        </Routes>
      )}
    </AppShell>
  );
}
