import { Card, Section, SectionHeading } from "@/components/Section";
import { ThreeCube } from "@/components/ThreeCube";

export function Product3DPage() {
  return (
    <Section className="pt-24">
      <SectionHeading
        eyebrow="Interactive 3D"
        title="Explore BLACK CUBE in 3D"
        centered
      />
      <p className="mx-auto -mt-6 mb-12 max-w-xl text-center text-sm leading-7 text-muted-foreground">
        A real 3D model of the BLACK CUBE. Drag to orbit the camera around the
        product — scroll to zoom in and out.
      </p>

      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-[0_0_90px_rgba(240,180,41,0.14)]">
          <ThreeCube className="aspect-4/5 w-full sm:aspect-16/10" />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["⟲ Drag to orbit", "⇅ Scroll to zoom", "⟳ Auto-rotates"].map(
            (hint) => (
              <span
                key={hint}
                className="rounded-full border border-border bg-muted px-4 py-1.5 text-[11px] font-semibold text-muted-foreground"
              >
                {hint}
              </span>
            ),
          )}
        </div>
      </div>

      <Card className="mx-auto mt-12 max-w-3xl">
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
          About this preview
        </div>
        <p className="text-sm leading-7 text-muted-foreground">
          This is a fully interactive 3D render of the BLACK CUBE, modeled in
          the browser with Three.js. The camera orbits freely around the
          product, which floats gently while lighting and shadows respond in
          real time. This same scene could later hold a scan or CAD model of
          the actual cube.
        </p>
      </Card>
    </Section>
  );
}
