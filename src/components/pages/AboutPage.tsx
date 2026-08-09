import { Card, Section, SectionHeading } from "@/components/Section";
import { SOUP_IMG, teamMembers } from "@/content";
import yurin from "@/imports/team/photo_1_2026-08-09_21-11-20.jpg";
import a from "@/imports/team/photo_2_2026-08-09_21-11-20.jpg";
import b from "@/imports/team/photo_3_2026-08-09_21-11-20.jpg";
import c from "@/imports/team/photo_4_2026-08-09_21-11-20.jpg";
import d from "@/imports/team/photo_5_2026-08-09_21-11-20.jpg";

const teamInfo = [
  {
    id: 1,
    name: "Sokha Chhun",
    role: "Co-Founder & CEO",
    desc: "Sokha is a visionary entrepreneur with a passion for food innovation. He leads the team with a focus on product development and market strategy.",
    image: yurin,
  },
  {
    id: 2,
    name: "Sreymom Chhun",
    role: "Co-Founder & COO",
    desc: "Sreymom is the operational backbone of BLACK CUBE. She ensures that our supply chain and production processes run smoothly.",
    image: a,
  },

  {
    id: 3,
    name: "Chanrithy Chhun",
    role: "Marketing Director",
    desc: "Chanrithy is responsible for driving brand awareness and customer engagement. She leverages digital marketing strategies to connect with our audience.",
    image: b,
  },
  {
    id: 4,
    name: "Vuthy Chhun",
    role: "Operations Manager",
    desc: "Vuthy oversees our day-to-day operations, ensuring efficiency and quality in every aspect of our business.",
    image: c,
  },
  {
    id: 5,
    name: "Sophea Chhun",
    role: "Product Development Lead",
    desc: "Sophea leads our product development team, focusing on creating innovative and high-quality food products that meet our customers' needs.",
    image: d,
  },
];
export function AboutPage() {
  return (
    <Section className="pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Our Story
          </p>
          <h1 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
            Born in Cambodia.
            <br />
            Built by students.
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            BLACK CUBE began as a student project at the Dynamic Agripreneur
            Bootcamp Season 2. Our team of four university students saw a gap:
            authentic Cambodian chicken soup took hours to make. We asked — what
            if it took 15 minutes?
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            After months of recipe testing, sourcing from local Cambodian farms,
            and iterating on packaging, we created the BLACK CUBE — a
            ready-to-use soup cube that brings the full depth of black chicken
            soup to any kitchen, anywhere.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            We were awarded $500 in seed funding to bring our vision to life.
            That investment fueled our ingredients, packaging, and the beginning
            of something real.
          </p>
        </div>
        <img
          src={SOUP_IMG}
          alt="About BLACK CUBE"
          className="aspect-4/5 w-full rounded-3xl object-cover"
        />
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {[
          {
            label: "Vision",
            text: "To become Cambodia's leading convenience food brand — one that honors local flavors and supports local farmers.",
          },
          {
            label: "Mission",
            text: "To make authentic Cambodian soup accessible to every household through innovative, natural food products.",
          },
        ].map((item) => (
          <Card key={item.label}>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              {item.label}
            </div>
            <p className="text-sm leading-8 text-foreground">{item.text}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading title="Our Team" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teamInfo.map((member) => (
            <Card
              key={member.name}
              className="text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
            >
              <div className="mx-auto mb-4 flex  items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-2xl">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="text-base font-semibold text-foreground">
                {member.name}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {member.role}
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {member.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
