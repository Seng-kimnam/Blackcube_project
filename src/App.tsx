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
        

          <Route path="/about" element={<AboutPage l={l} />} />
          <Route path="/achievements" element={<AchievementsPage l={l} />} />
          <Route path="/news" element={<NewsPage l={l} />} />
          <Route path="/feedback" element={<FeedbackPage l={l} />} />
          <Route path="/contact" element={<ContactPage l={l} />} />
          <Route
            path="*"
            element={<HomePage l={l} setPage={setPage as (p: Page) => void} />}
          />
        </Routes>
      )}
    </AppShell>
  );
}
