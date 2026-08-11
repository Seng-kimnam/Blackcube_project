export type Page = 'home' | 'product' | 'about' | 'achievements' | 'news' | 'feedback' | 'contact'
export type Lang = 'en' | 'kh'

export const t = {
  en: {
    nav: ['Home', 'Product',  'About Us', 'Achievements', 'News', 'Contact'],
    navKeys: ['home', 'product', 'about', 'achievements', 'news', 'contact'] as Page[],
    giveFeedback: 'Give Feedback',
    heroTag: 'Cambodian Innovation',
    heroTitle: 'Soup, Simplified.',
    heroSub: 'BLACK CUBE is a ready-to-use black chicken soup cube — packed with local Cambodian ingredients, crafted for the modern kitchen.',
    discoverBtn: 'Discover BLACK CUBE',
    ourProductBtn: 'Our Product',
    whyTitle: 'Why BLACK CUBE?',
    whyItems: [
      { icon: '', title: 'Instant Convenience', desc: 'Ready soup in minutes — no prep, no complexity.' },
      { icon: '', title: 'Local Ingredients', desc: 'Sourced from Cambodian farms. Authentic flavor, every time.' },
      { icon: '', title: 'Affordable Premium', desc: 'Only 4,000 KHR per cube. Quality you can trust.' },
      { icon: '', title: 'Rich & Nourishing', desc: 'Black chicken essence in every bite. Deeply satisfying.' },
    ],
    howTitle: 'How to Use',
    steps: [
      { num: '01', title: 'Boil Water', desc: 'Bring 500ml of water to a boil in your pot.' },
      { num: '02', title: 'Add BLACK CUBE', desc: 'Drop one cube in. Watch it dissolve into golden broth.' },
      { num: '03', title: 'Add Ingredients', desc: 'Toss in your chicken, vegetables, or noodles.' },
      { num: '04', title: 'Enjoy Your Soup', desc: 'Simmer 10 minutes. Serve hot and savor every spoonful.' },
    ],
    benefitsTitle: 'Key Benefits',
    benefits: ['Rich black chicken broth base', 'No artificial preservatives', 'Halal-friendly ingredients', 'Compact — easy to store & carry', 'Consistent flavor every time', 'Supports local Cambodian farmers'],
    testimonialsTitle: 'What People Say',
    testimonials: [
      { name: 'Sreymom K.', role: 'Home Cook, Phnom Penh', text: '"I was skeptical at first but this cube actually tastes like my grandmother\'s soup. Incredible for how easy it is."' },
      { name: 'Dara C.', role: 'University Student', text: '"Perfect for dorm life. I just need hot water and a cube — done in 15 minutes. The taste is legit."' },
      { name: 'Sokha V.', role: 'Busy Parent', text: '"My kids love it. I love that it\'s made with real ingredients. No guilt, just good soup."' },
    ],
    achievementsTitle: 'Our Achievements',
    ctaTitle: 'Ready to taste the cube?',
    ctaSub: 'Experience the convenience of authentic Cambodian chicken soup.',
    ctaBtn: 'Order Now',
    ctaFeedback: 'Give Feedback',
    footerDesc: 'Ready-to-use black chicken soup cube. Cambodian-made, globally inspired.',
    footerCopy: '© 2026 BLACK CUBE. All rights reserved.',
  },
  kh: {
    teamInfo : [
      {
        id: 1,
        name: "Sokha Chhun",
        role: "Co-Founder & CEO",
        desc: "Sokha is a visionary entrepreneur with a passion for food innovation. He leads the team with a focus on product development and market strategy.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_3_2026-08-09_21-11-20.jpg",
      },
      {
        id: 2,
        name: "Meanrith Yurin",
        role: "Co-Founder & COO",
        desc: "Yurin is the operational backbone of BLACK CUBE. She ensures that our supply chain and production processes run smoothly.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_1_2026-08-09_21-11-20.jpg",
      },
    
      {
        id: 3,
        name: "Chanrithy Chhun",
        role: "Marketing Director",
        desc: "Chanrithy is responsible for driving brand awareness and customer engagement. She leverages digital marketing strategies to connect with our audience.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_2_2026-08-09_21-11-20.jpg",
      },
      {
        id: 4,
        name: "Vuthy Chhun",
        role: "Operations Manager",
        desc: "Vuthy oversees our day-to-day operations, ensuring efficiency and quality in every aspect of our business.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_4_2026-08-09_21-11-20.jpg",
      },
      {
        id: 5,
        name: "Sophea Chhun",
        role: "Product Development Lead",
        desc: "Sophea leads our product development team, focusing on creating innovative and high-quality food products that meet our customers' needs.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_5_2026-08-09_21-11-20.jpg",
      },
    ],
    nav: ['ទំព័រដើម', 'ផលិតផល',  'អំពីយើង', 'សិទ្ធិ​សម្រេច', 'ព័ត៌មាន', 'ទំនាក់ទំនង'],
    navKeys: ['home', 'product', 'about', 'achievements', 'news', 'contact'] as Page[],
    giveFeedback: 'ផ្តល់មតិរបស់អ្នក',
    heroTag: 'នវានុវត្តន៍កម្ពុជា',
    heroTitle: 'ស៊ុប, សាមញ្ញ។',
    heroSub: 'BLACK CUBE គឺជាគ្រឿងសម្រាប់ធ្វើស៊ុបមាន់ខ្មៅ — ផ្ទុកនូវគ្រឿងផ្សំដើមនៅកម្ពុជា សម្រាប់ផ្ទះបាយសម័យថ្មី។',
    discoverBtn: 'រកស្វែង BLACK CUBE',
    ourProductBtn: 'ផលិតផលរបស់យើង',
    whyTitle: 'ហេតុអ្វីបានជា BLACK CUBE?',
    whyItems: [
      { icon: '⚡', title: 'មានភាពងាយស្រួល', desc: 'ស៊ុបរួចរាល់ក្នងរយ:ពេលខ្លី' },
      { icon: '🌿', title: 'គ្រឿងផ្សំក្នុងស្រុក', desc: 'ចេញពីស្រែចំការកម្ពុជា។ រសជាតិពិតប្រាកដ។' },
      { icon: '💰', title: 'តម្លៃសមរម្យ', desc: 'គ្រាន់តែ ៤,០០០ រៀល ក្នុង១គ្រាប់។' },
      { icon: '🍲', title: 'ឆ្ងាញ់ ហើយមានសុខភាពល្អ', desc: 'ខ្លឹមមាន់ខ្មៅក្នុងគ្រប់ស្លាប់ - ពេញចិត្ត។' },
    ],
    howTitle: 'របៀបប្រើ',
    steps: [
      { num: '០១', title: 'ស្ងោរទឹក', desc: 'ស្ងោរទឹក ៥០០ មីលីលីត្រ ។' },
      { num: '០២', title: 'ដាក់ BLACK CUBE', desc: 'ដាក់គ្រាប់មួយ ហើយឃើញវាក្លាយជានំប៉័ង។' },
      { num: '០៣', title: 'ដាក់គ្រឿងផ្សំ', desc: 'ដាក់សាច់មាន់ បន្លែ ឬមី។' },
      { num: '០៤', title: 'រួចទទួលទានជាការស្រច', desc: 'ស្ងោររយៈពេល ១០ នាទី។ បរិភោគក្ដៅ។' },
    ],
    benefitsTitle: 'អត្ថប្រយោជន៍',
    benefits: ['ជាគ្រឿងស៊ុបមាន់ខ្មៅ', 'គ្មានថ្នាំថែទាំសិប្បនិម្មិត', 'ហាឡាល់', 'ស្តើង ងាយស្រួលដឹក', 'រសជាតិដូចគ្នា', 'គាំទ្រកសិករក្នុងស្រុក'],
    testimonialsTitle: 'មតិអ្នកប្រើប្រាស់',
    testimonials: [
      { name: 'សុខ ស្រីមុំ', role: 'ចុងភៅ ភ្នំពេញ', text: '"ខ្ញុំភ្ញាក់ផ្អើលដែលវារួចឆ្ងាញ់ដូចស៊ុបជីដូន។ ងាយស្រួលណាស់!"' },
      { name: 'ចន្ទ ដារ៉ា', role: 'និស្សិតសកលវិទ្យាល័យ', text: '"ល្អណាស់សម្រាប់ការស្នាក់នៅ។ ត្រូវការទឹកក្ដៅ ១ គ្រាប់ — ២០ នាទី!"' },
      { name: 'វង្ស សុខា', role: 'មាតាបិតា', text: '"កូនៗចូលចិត្ត។ ខ្ញុំចូលចិត្តដែលប្រើគ្រឿងផ្សំពិតប្រាកដ។"' },
    ],
    achievementsTitle: 'ស្នាដៃសម្រេច',
    ctaTitle: 'ចង់ភ្លក្ខរសជាតិ?',
    ctaSub: 'ស្ងោរស៊ុបមាន់ខ្មៅពិតប្រាកដ ងាយស្រួល ឆ្ងាញ់។',
    ctaBtn: 'បញ្ជាទិញ',
    ctaFeedback: 'ផ្តល់មតិរបស់អ្នក',
    footerDesc: 'គ្រឿងស៊ុបមាន់ខ្មៅ — ផលិតនៅក្នុងប្រទេសកម្ពុជា។',
    footerCopy: '© 2026 BLACK CUBE. រក្សាសិទ្ធិទាំងអស់។',
  },
}

export type TranslationSet = (typeof t)['en']

export const SOUP_IMG = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_6_2026-08-11_11-36-17.jpg'
export const SOUP_BOWL = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/Team%206%20Black%20Cube.png'
export const SOUP2 = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/Screenshot%202026-08-11%20132119.png'
export const CUBE_IMG = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/Team%206%20Black%20Cube%20(1).png?auto=format,compress&fit=crop&w=1024&h=1024'

export const achievements = [
  { icon: '', title: 'Dynamic Agripreneur Bootcamp', subtitle: 'Season 2 — Top Finalist', year: '2026', desc: 'Competed against student startups nationwide. Awarded $500 seed funding.' },
  { icon: '', title: '$500 Seed Fund', subtitle: 'Official Grant', year: '2026', desc: 'Capital allocated to ingredients, packaging, labels, and logistics.' },
  { icon: '', title: 'Student Entrepreneurship Award', subtitle: 'Recognition of Excellence', year: '2026', desc: 'Recognized for innovation in food technology and local ingredient utilization.' },
  { icon: '', title: 'Cambodian Food Innovation', subtitle: 'Local Pride', year: '2026', desc: 'Featured as a model project for student-led agri-food startups in Cambodia.' },
]

export const newsItems = [
  { date: 'Nov 2026', img: SOUP2, title: 'BLACK CUBE Wins Seed Funding at Agripreneur Bootcamp', desc: 'Our team secured $500 in seed funding to bring our black chicken soup cube to market.' },
  { date: 'Oct 2026', img: SOUP_BOWL, title: 'Product Development: From Idea to Cube', desc: 'How we refined our recipe over three months of testing with local households.' },
  { date: 'Sep 2026', title: 'Partnering with Local Farms for Black Chicken Supply', img: 'https://images.unsplash.com/photo-1711010345058-442074287e06?w=700&h=500&fit=crop&auto=format', desc: 'We source our black chicken from sustainable small farms across Cambodia.' },
]

export const ingredients = [
  { emoji: '', name: 'Black Chicken', kh: 'មាន់ខ្មៅ', benefit: 'Rich collagen, iron, and deep umami broth base.' },
  { emoji: '', name: 'Shallots', kh: 'ខ្ទឹម', benefit: 'Aromatic depth and natural sweetness.' },
  { emoji: '', name: 'Lemongrass', kh: 'ស្លឹក', benefit: 'Bright citrus fragrance. Signature Cambodian note.' },
  { emoji: '', name: 'Galangal', kh: 'រំដេង', benefit: 'Earthy warmth and digestive benefits.' },
  { emoji: '', name: 'Sea Salt', kh: 'អំបិល', benefit: 'Clean, mineral seasoning. No MSG.' },
  { emoji: '', name: 'Palm Sugar', kh: 'ស្ករត្នោត', benefit: 'Subtle Cambodian sweetness to balance the broth.' },
]

export const teamMembers = [
  { name: 'Sophea Lim', role: 'Founder & CEO', desc: 'Visionary behind the BLACK CUBE concept. Passionate about Cambodian food culture and entrepreneurship.' , image : "" },
  { name: 'Dara Meas', role: 'Product Developer', desc: 'Led recipe testing and ingredient sourcing. Ensures consistency in every cube.' },
  { name: 'Sreymom Chan', role: 'Marketing Lead', desc: 'Crafts the BLACK CUBE brand story and drives community engagement.' },
  { name: 'Kosal Ung', role: 'Operations & Finance', desc: 'Manages seed fund allocation, supply chain, and production logistics.' },
]
