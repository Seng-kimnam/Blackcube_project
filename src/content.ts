export type Page =
  | 'home'
  | 'product'
  | 'about'
  | 'achievements'
  | 'news'
  | 'feedback'
  | 'contact'
export type Lang = 'en' | 'kh'

export const SOUP_IMG = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_6_2026-08-11_11-36-17.jpg'
export const SOUP_BOWL = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/Team%206%20Black%20Cube.png'
export const SOUP2 = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/Screenshot%202026-08-11%20132119.png'
export const CUBE_IMG = 'https://6a79a81351198decb7534fab.imgix.net/sandbox/Team%206%20Black%20Cube%20(1).png?auto=format,compress&fit=crop&w=1024&h=1024'

export const t = {
  en: {
    nav: ['Home', 'Product', 'About Us', 'Achievements', 'News', 'Contact'],
    navKeys: ['home', 'product', 'about', 'achievements', 'news', 'contact'] as Page[],
    giveFeedback: 'Give Feedback',
    ok: 'OK',
    done: 'Done',
    tryAgain: 'Try Again',
    heroTag: 'Cambodian Innovation',
    heroTitle: 'Soup, Simplified.',
    heroSub: 'BLACK CUBE is a ready-to-use black chicken soup cube — packed with local Cambodian ingredients, crafted for the modern kitchen.',
    discoverBtn: 'Discover BLACK CUBE',
    ourProductBtn: 'Our Product',
    statCube: 'KHR / cube',
    statLocal: 'Local ingredients',
    statSeed: 'Seed funded',
    productCaption: 'Black Chicken Soup Cube · 4,000 KHR',
    orderPopupTitle: 'Coming Soon',
    orderPopupMsg:
      'The order feature is not yet available. Please contact us via Facebook or Instagram to place an order.Thank you for your interest!',
    whyTitle: 'Why BLACK CUBE?',
    whyItems: [
      { icon: '', title: 'Instant Convenience', desc: 'Ready soup in minutes — no prep, no complexity.' },
      { icon: '', title: 'Local Ingredients', desc: 'Sourced from Cambodian farms. Authentic flavor, every time.' },
      { icon: '', title: 'Affordable Premium', desc: 'Only 4,000 KHR per cube. Quality you can trust.' },
      { icon: '', title: 'Rich & Nourishing', desc: 'Black chicken essence in every bite. Deeply satisfying.' },
    ],
    howTitle: 'How to Use',
    howEyebrow: 'So Simple',
    steps: [
      { num: '01', title: 'Boil Water', desc: 'Bring 500ml of water to a boil in your pot.' },
      { num: '02', title: 'Add BLACK CUBE', desc: 'Drop one cube in. Watch it dissolve into golden broth.' },
      { num: '03', title: 'Add Ingredients', desc: 'Toss in your chicken, vegetables, or noodles.' },
      { num: '04', title: 'Enjoy Your Soup', desc: 'Simmer 10 minutes. Serve hot and savor every spoonful.' },
    ],
    proTipsTitle: 'Pro Tips',
    proTips: [
      'Add fresh ginger for extra warmth',
      'Try with rice noodles for a filling meal',
      'Squeeze lime just before serving',
      'Use one cube per 400–500ml water',
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

    productTag: 'Ready-to-use Soup Cube',
    productPrice: '4,000 KHR / cube',
    productDesc:
      'A single BLACK CUBE contains everything you need for a rich, authentic Cambodian black chicken soup. No MSG, no artificial preservatives — just real ingredients compressed into one convenient cube.',
    productIngredientsTitle: 'Ingredients',
    packagingTitle: 'Packaging',
    packagingText:
      'Each cube is individually foil-wrapped to preserve freshness. Box contains 6 cubes. Shelf life: 12 months. Store in a cool, dry place.',
    orderBtn: 'Order Now',
    qrTitle: 'Scan to Give Feedback',
    qrSub: 'Scan the QR code on your product packaging',

    ingredientsTitle: 'Our Ingredients',
    ingredientsEyebrow: "What's Inside",
    ingredientsIntro:
      'Every ingredient in BLACK CUBE is chosen for its role in authentic Cambodian flavor. Nothing artificial. Nothing hidden.',
    ingredientsCardTitle: '100% Natural. Always.',
    ingredientsCardText:
      'No MSG. No artificial preservatives. No synthetic flavoring. BLACK CUBE uses only ingredients you can pronounce.',
    ingredients: [
      { emoji: '', name: 'Black Chicken', kh: 'មាន់ខ្មៅ', benefit: 'Rich collagen, iron, and deep umami broth base.' },
      { emoji: '', name: 'Shallots', kh: 'ខ្ទឹមក្រហម', benefit: 'Aromatic depth and natural sweetness.' },
      { emoji: '', name: 'Lemongrass', kh: 'ស្លឹកគ្រៃ', benefit: 'Bright citrus fragrance. Signature Cambodian note.' },
      { emoji: '', name: 'Galangal', kh: 'រំដេង', benefit: 'Earthy warmth and digestive benefits.' },
      { emoji: '', name: 'Sea Salt', kh: 'អំបិល', benefit: 'Clean, mineral seasoning. No MSG.' },
      { emoji: '', name: 'Palm Sugar', kh: 'ស្ករត្នោត', benefit: 'Subtle Cambodian sweetness to balance the broth.' },
    ],

    aboutEyebrow: 'Our Story',
    aboutTitle: 'Born in Cambodia.\nBuilt by students.',
    aboutP1:
      'BLACK CUBE began as a student project at the Dynamic Agripreneur Bootcamp Season 2. Our team of five university students saw a gap: authentic Cambodian chicken soup took hours to make. We asked — what if it took 15 minutes?',
    aboutP2:
      'After months of recipe testing, sourcing from local Cambodian farms, and iterating on packaging, we created the BLACK CUBE — a ready-to-use soup cube that brings the full depth of black chicken soup to any kitchen, anywhere.',
    aboutP3:
      'We were awarded $500 in seed funding to bring our vision to life. That investment fueled our ingredients, packaging, and the beginning of something real.',
    visionLabel: 'Vision',
    visionText:
      "To become Cambodia's leading convenience food brand — one that honors local flavors and supports local farmers.",
    missionLabel: 'Mission',
    missionText:
      'To make authentic Cambodian soup accessible to every household through innovative, natural food products.',
    teamTitle: 'Our Team',
    teamInfo: [
      {
        id: 1,
        name: "Ms. Meanrith Yurin",
        role: "Team Lead & Operations",
        desc: "Yurin leads the BLACK CUBE team and keeps day-to-day operations running smoothly, from planning to execution.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_1_2026-08-09_21-11-20.jpg",
      },
      {
        id: 2,
        name: "Ms. Chhoeuy Reaksmey",
        role: "Finance and Marketing Manager",
        desc: "Reaksmey manages the team's finances and drives brand awareness, connecting BLACK CUBE with customers and partners.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_5_2026-08-09_21-11-20.jpg",
      },
      {
        id: 3,
        name: "Mr. Thea Sievvong",
        role: "Raw Resource Manager",
        desc: "Sievvong sources and manages the raw ingredients that go into every cube, working closely with local Cambodian farmers.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_3_2026-08-09_21-11-20.jpg",
      },
      {
        id: 4,
        name: "Ms. Yoeurp Angkor",
        role: "Production Manager",
        desc: "Angkor oversees production, ensuring every BLACK CUBE is made with consistent quality and care.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_2_2026-08-09_21-11-20.jpg",
      },
      {
        id: 5,
        name: "Mr. Ko Bunthoeun",
        role: "Product Stock and Sale Manager",
        desc: "Bunthoeun manages product stock and sales, making sure BLACK CUBE reaches customers on time.",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_2026-08-11_13-30-20.jpg",
      },
    ],

    achievementsEyebrow: 'Recognition',
    achievements: [
      { icon: '', title: 'Dynamic Agripreneur Bootcamp', subtitle: 'Season 2 — Top Finalist', year: '2026', desc: 'Competed against student startups nationwide. Awarded $500 seed funding.' },
      { icon: '', title: '$500 Seed Fund', subtitle: 'Official Grant', year: '2026', desc: 'Capital allocated to ingredients, packaging, labels, and logistics.' },
      { icon: '', title: 'Student Entrepreneurship Award', subtitle: 'Recognition of Excellence', year: '2026', desc: 'Recognized for innovation in food technology and local ingredient utilization.' },
      { icon: '', title: 'Cambodian Food Innovation', subtitle: 'Local Pride', year: '2026', desc: 'Featured as a model project for student-led agri-food startups in Cambodia.' },
    ],

    newsTitle: 'News & Stories',
    newsEyebrow: 'Updates',
    backToNews: '← Back to News',
    readMore: 'Read More →',
    newsDetail:
      'This is a significant milestone for our team as we continue to grow the BLACK CUBE brand across Cambodia and beyond. We remain committed to quality, authenticity, and supporting local communities.',
    newsItems: [
      { date: 'April 2026', img: SOUP2, title: 'BLACK CUBE Wins Seed Funding at Agripreneur Bootcamp', desc: 'Our team secured $500 in seed funding to bring our black chicken soup cube to market.' },
      { date: 'Oct 2026', img: SOUP_BOWL, title: 'Product Development: From Idea to Cube', desc: 'How we refined our recipe over three months of testing with local households.' },
      { date: 'Sep 2026', title: 'Partnering with Local Farms for Black Chicken Supply', img: 'https://images.unsplash.com/photo-1711010345058-442074287e06?w=700&h=500&fit=crop&auto=format', desc: 'We source our black chicken from sustainable small farms across Cambodia.' },
    ],

    feedbackEyebrow: 'QR Feedback',
    feedbackTitle: 'Share Your Experience',
    feedbackIntro: "Tried BLACK CUBE? We'd love to hear what you think.",
    ratingLabel: 'Rating',
    nameLabel: 'Name (optional)',
    namePlaceholder: 'Your name',
    emailLabel: 'Email (optional)',
    emailPlaceholder: 'your@email.com',
    commentLabel: 'Comment',
    commentPlaceholder: 'Tell us about your experience...',
    submitBtn: 'Submit Feedback',
    submitting: 'Submitting...',
    thanksTitle: 'Thank You!',
    thanksMsg:
      'Your feedback means the world to us. Every response helps us make BLACK CUBE better for everyone.',
    failTitle: "Couldn't Submit",
    failMsg: 'Something went wrong. Please check your connection and try again.',
    errRating: 'Please select a rating.',
    errNameShort: 'Name must be at least 2 characters.',
    errEmail: 'Enter a valid email address.',
    errCommentReq: 'Comment is required.',
    errCommentShort: 'Comment must be at least 10 characters.',

    contactEyebrow: 'Get in Touch',
    contactTitle: 'Contact Us',
    contactIntro:
      "Have a question, a collaboration idea, or want to stock BLACK CUBE in your store? We'd love to connect.",
    contactItems: [
      { icon: '1', label: 'Email', link: 'mailto:yurin2t2t2t@gmail.com' , value : "blackcube email" },
      { icon: '2', label: 'Location', link: 'https://maps.app.goo.gl/S8g6E3DgheTuZWbj8' , value : "National University of Battambang, Battambang City, Cambodia" },
      { icon: '3', label: 'TikTok', link: 'https://www.tiktok.com/@blacksoupcoup26' , value : "blacksoupcoup26" },
      { icon: '4', label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61560204866804' , value : "ដុំស៊ុបខ្មៅ - Black Soup Cube" },
    ],
    nameField: 'Name',
    emailField: 'Email',
    messageField: 'Message',
    contactNamePlaceholder: 'Your full name',
    contactEmailPlaceholder: 'your@email.com',
    contactMessagePlaceholder: 'How can we help?',
    sendBtn: 'Send Message',
    sending: 'Sending...',
    sentTitle: 'Message Sent!',
    sentMsg: "We'll get back to you within 24 hours.",
    contactFailTitle: "Couldn't Send",
    errNameReq: 'Name is required.',
    errEmailReq: 'Email is required.',
    errMessageReq: 'Message is required.',
    errMessageShort: 'Message must be at least 10 characters.',

    d3Eyebrow: 'Interactive 3D',
    d3Title: 'Explore BLACK CUBE in 3D',
    d3Intro:
      'A real 3D model of the BLACK CUBE. Drag to orbit the camera around the product — scroll to zoom in and out.',
    d3Hints: ['⟲ Drag to orbit', '⇅ Scroll to zoom', '⟳ Auto-rotates'],
    d3About: 'About this preview',
    d3Text:
      'This is a fully interactive 3D render of the BLACK CUBE, modeled in the browser with Three.js. The camera orbits freely around the product, which floats gently while lighting and shadows respond in real time. This same scene could later hold a scan or CAD model of the actual cube.',

    navTitle: 'Navigate',
    footerContactTitle: 'Contact',
    footerEmail: 'Email: yurin2t2t2t@gmail.com',
    footerLocation: 'Location : National University of Battambang, Battambang City, Cambodia',
    footerPhone: 'Phone: +855(0) 11 831 196',
    giveFeedbackArrow: '👉 Give your Feedback',
    madeWith: 'Made with',
    scrollTop: 'Scroll to top',
  },
  kh: {
    nav: ['ទំព័រដើម', 'ផលិតផល', 'អំពីយើង', 'ស្នាដៃសម្រេច', 'ព័ត៌មាន', 'ទំនាក់ទំនង'],
    navKeys: ['home', 'product', 'about', 'achievements', 'news', 'contact'] as Page[],
    giveFeedback: 'ផ្តល់មតិរបស់អ្នក',
    ok: 'យល់ព្រម',
    done: 'រួចរាល់',
    tryAgain: 'ព្យាយាមម្តងទៀត',
    heroTag: 'នវានុវត្តន៍កម្ពុជា',
    heroTitle: 'ស៊ុប, សាមញ្ញ។',
    heroSub: 'BLACK CUBE គឺជាគ្រឿងសម្រាប់ធ្វើស៊ុបមាន់ខ្មៅ — ផ្ទុកនូវគ្រឿងផ្សំដើមនៅកម្ពុជា សម្រាប់ផ្ទះបាយសម័យថ្មី។',
    discoverBtn: 'រកស្វែង BLACK CUBE',
    ourProductBtn: 'ផលិតផលរបស់យើង',
    statCube: 'រៀល / គ្រាប់',
    statLocal: 'គ្រឿងផ្សំក្នុងស្រុក',
    statSeed: 'មូលនិធិចាប់ផ្តើម',
    productCaption: 'គ្រឿងស៊ុបមាន់ខ្មៅ · ៤,០០០ រៀល',
    orderPopupTitle: 'ឆាប់ៗនេះ',
    orderPopupMsg:
      'មុខងារបញ្ជាទិញមិនទាន់មាននៅឡើយទេ។ សូមទាក់ទងមកយើងតាម Facebook ឬ Instagram ដើម្បីបញ្ជាទិញ។ សូមអរគុណសម្រាប់ការចាប់អារម្មណ៍!',
    whyTitle: 'ហេតុអ្វីបានជា BLACK CUBE?',
    whyItems: [
      { icon: '⚡', title: 'មានភាពងាយស្រួល', desc: 'ស៊ុបរួចរាល់ក្នងរយ:ពេលខ្លី' },
      { icon: '🌿', title: 'គ្រឿងផ្សំក្នុងស្រុក', desc: 'ចេញពីស្រែចំការកម្ពុជា។ រសជាតិពិតប្រាកដ។' },
      { icon: '💰', title: 'តម្លៃសមរម្យ', desc: 'គ្រាន់តែ ៤,០០០ រៀល ក្នុង១គ្រាប់។' },
      { icon: '🍲', title: 'ឆ្ងាញ់ ហើយមានសុខភាពល្អ', desc: 'ខ្លឹមមាន់ខ្មៅក្នុងគ្រប់ស្លាប់ - ពេញចិត្ត។' },
    ],
    howTitle: 'របៀបប្រើប្រាស់',
    howEyebrow: 'សាមញ្ញណាស់',
    steps: [
      { num: '០១', title: 'ស្ងោរទឹក', desc: 'ស្ងោរទឹក ៥០០ មីលីលីត្រ ។' },
      { num: '០២', title: 'ដាក់ BLACK CUBE', desc: 'ដាក់គ្រាប់មួយ ហើយឃើញវាក្លាយជានំប៉័ង។' },
      { num: '០៣', title: 'ដាក់គ្រឿងផ្សំ', desc: 'ដាក់សាច់មាន់ បន្លែ ឬមី។' },
      { num: '០៤', title: 'រួចទទួលទានជាការស្រច', desc: 'ស្ងោររយៈពេល ១០ នាទី។ បរិភោគក្ដៅ។' },
    ],
    proTipsTitle: 'គន្លឹះ',
    proTips: [
      'បន្ថែមខ្ញីស្រស់សម្រាប់ភាពកក់ក្តៅ',
      'សាកល្បងជាមួយមីស្រូវសម្រាប់អាហារឆ្អែត',
      'ច្របាច់ក្រូចឆ្មារមុនពេលទទួលទាន',
      'ប្រើ ១ គ្រាប់ក្នុងទឹក ៤០០–៥០០ មីលីលីត្រ',
    ],
    benefitsTitle: 'អត្ថប្រយោជន៍',
    benefits: ['ជាគ្រឿងស៊ុបមាន់ខ្មៅ', 'គ្មានថ្នាំថែទាំសិប្បនិម្មិត', 'ហាឡាល់', 'ស្តើង ងាយស្រួលដឹក', 'រសជាតិដូចគ្នា', 'គាំទ្រកសិករក្នុងស្រុក'],
    testimonialsTitle: 'មតិអ្នកប្រើប្រាស់',
    testimonials: [
      { name: 'សុខ ស្រីមុំ', role: 'ចុងភៅ ភ្នំពេញ', text: '"ខ្ញុំភ្ញាក់ផ្អើលដែលវារួចឆ្ងាញ់ដូចស៊ុបជីដូន។ ងាយស្រួលណាស់!"' },
      { name: 'ចន្ទ ដារ៉ា', role: 'និស្សិតសកលវិទ្យាល័យ', text: '"ល្អណាស់សម្រាប់ការស្នាក់នៅ។ ត្រូវការទឹកក្ដៅ ១ គ្រាប់ — ២០ នាទី!"' },
      { name: 'វង្ស សុខា', role: 'មាតាបិតា', text: '"កូនៗចូលចិត្ត។ ខ្ញុំចូលចិត្តដែលប្រើគ្រឿងផ្សំពិតប្រាកដ។"' },
    ],
    achievementsTitle: 'សមិទ្ធផលរបស់យើង',
    ctaTitle: 'ចង់ភ្លក្ខរសជាតិ?',
    ctaSub: 'ស្ងោរស៊ុបមាន់ខ្មៅពិតប្រាកដ ងាយស្រួល ឆ្ងាញ់។',
    ctaBtn: 'បញ្ជាទិញ',
    ctaFeedback: 'ផ្តល់មតិរបស់អ្នក',
    footerDesc: 'គ្រឿងស៊ុបមាន់ខ្មៅ — ផលិតនៅក្នុងប្រទេសកម្ពុជា។',
    footerCopy: '© 2026 BLACK CUBE. រក្សាសិទ្ធិទាំងអស់។',

    productTag: 'គ្រឿងស៊ុបរួចរាល់សម្រាប់ប្រើ',
    productPrice: '៤,០០០ រៀល / គ្រាប់',
    productDesc:
      'BLACK CUBE មួយគ្រាប់មានអ្វីគ្រប់យ៉ាងសម្រាប់ធ្វើស៊ុបមាន់ខ្មៅកម្ពុជាដ៏សម្បូររសជាតិពិតប្រាកដ។ គ្មាន MSG គ្មានសារធាតុថែរក្សាសិប្បនិម្មិត — គ្រាន់តែគ្រឿងផ្សំពិតប្រាកដដែលបង្ហាប់ក្នុងគ្រាប់ងាយស្រួលប្រើមួយ។',
    productIngredientsTitle: 'គ្រឿងផ្សំ',
    packagingTitle: 'ការវេចខ្ចប់',
    packagingText:
      'គ្រាប់នីមួយៗត្រូវបានរុំដោយសន្លឹកអាលុយមីញ៉ូមដាច់ដោយឡែក ដើម្បីរក្សាភាពស្រស់។ ក្នុងប្រអប់មាន ៦ គ្រាប់។ អាយុកាល: ១២ ខែ។ ទុកក្នុងកន្លែងត្រជាក់ និងស្ងួត។',
    orderBtn: 'បញ្ជាទិញ',
    qrTitle: 'ស្កេនដើម្បីផ្តល់មតិ',
    qrSub: 'ស្កេន QR code នៅលើវេចខ្ចប់ផលិតផលរបស់អ្នក',

    ingredientsTitle: 'គ្រឿងផ្សំរបស់យើង',
    ingredientsEyebrow: 'អ្វីដែលនៅខាងក្នុង',
    ingredientsIntro:
      'គ្រឿងផ្សំនីមួយៗក្នុង BLACK CUBE ត្រូវបានជ្រើសរើសសម្រាប់តួនាទីរបស់វាក្នុងរសជាតិកម្ពុជាពិតប្រាកដ។ គ្មានសារធាតុសិប្បនិម្មិត។ គ្មានអ្វីលាក់កំបាំង។',
    ingredientsCardTitle: 'ធម្មជាតិ ១០០% ជានិច្ច។',
    ingredientsCardText:
      'គ្មាន MSG។ គ្មានសារធាតុថែរក្សាសិប្បនិម្មិត។ គ្មានរសជាតិសំយោគ។ BLACK CUBE ប្រើតែគ្រឿងផ្សំពិតប្រាកដដែលអ្នកអាចស្គាល់បាន។',
    ingredients: [
      { emoji: '', name: 'Black Chicken', kh: 'មាន់ខ្មៅ', benefit: 'សម្បូរជាតិកូឡាជែន ជាតិដែក និងមូលដ្ឋានស៊ុប umami ដ៏ជ្រាលជ្រៅ។' },
      { emoji: '', name: 'Shallots', kh: 'ខ្ទឹមក្រហម', benefit: 'ក្លិនឈ្ងុយជ្រាលជ្រៅ និងផ្អែមធម្មជាតិ។' },
      { emoji: '', name: 'Lemongrass', kh: 'ស្លឹកគ្រៃ', benefit: 'ក្លិនក្រូចឆ្មារស្រស់។ ជាលក្ខណៈពិសេសរបស់កម្ពុជា។' },
      { emoji: '', name: 'Galangal', kh: 'រំដេង', benefit: 'ភាពកក់ក្តៅបែបធម្មជាតិ និងជួយដល់ការរំលាយអាហារ។' },
      { emoji: '', name: 'Sea Salt', kh: 'អំបិល', benefit: 'គ្រឿងទេសអំបិលរ៉ែស្អាត។ គ្មាន MSG។' },
      { emoji: '', name: 'Palm Sugar', kh: 'ស្ករត្នោត', benefit: 'ផ្អែមស្រាលបែបកម្ពុជា ដើម្បីផ្គូផ្គងស៊ុប។' },
    ],

    aboutEyebrow: 'រឿងរ៉ាវរបស់យើង',
    aboutTitle: 'ផលិតនៅកម្ពុជា។\nបង្កើតឡើងដោយនិស្សិត។',
    aboutP1:
      'BLACK CUBE បានចាប់ផ្តើមជាគម្រោងនិស្សិតនៅកម្មវិធី Dynamic Agripreneur Bootcamp រដូវកាលទី ២។ ក្រុមនិស្សិតសាកលវិទ្យាល័យទាំង ៥ នាក់របស់យើងបានឃើញគម្លាតមួយ: ស៊ុបមាន់ខ្មៅពិតប្រាកដត្រូវការពេលរាប់ម៉ោងដើម្បីធ្វើ។ យើងសួរថា — ចុះបើត្រឹមតែ ១៥ នាទីវិញ?',
    aboutP2:
      'បន្ទាប់ពីការសាកល្បងរូបមន្តរាប់ខែ ការស្វែងរកគ្រឿងផ្សំពីកសិដ្ឋានក្នុងស្រុក និងការកែលម្អការវេចខ្ចប់ យើងបានបង្កើត BLACK CUBE — គ្រឿងស៊ុបដែលផ្តល់រសជាតិស៊ុបមាន់ខ្មៅពេញលេញដល់គ្រប់ផ្ទះបាយ គ្រប់ទីកន្លែង។',
    aboutP3:
      'យើងបានទទួលមូលនិធិចាប់ផ្តើម $500 ដើម្បីបង្កើតចក្ខុវិស័យរបស់យើងឱ្យក្លាយជាការពិត។ ការវិនិយោគនេះបានផ្តល់កម្លាំងដល់គ្រឿងផ្សំ ការវេចខ្ចប់ និងការចាប់ផ្តើមនៃអ្វីដែលពិតប្រាកដ។',
    visionLabel: 'ចក្ខុវិស័យ',
    visionText:
      'ដើម្បីក្លាយជាម៉ាកអាហារងាយស្រួលប្រើឈានមុខគេរបស់កម្ពុជា — ដែលគោរពរសជាតិក្នុងស្រុក និងគាំទ្រកសិករក្នុងស្រុក។',
    missionLabel: 'បេសកកម្ម',
    missionText:
      'ដើម្បីធ្វើឱ្យស៊ុបកម្ពុជាពិតប្រាកដអាចចូលដល់គ្រប់គ្រួសារ តាមរយៈផលិតផលអាហារធម្មជាតិប្រកបដោយភាពច្នៃប្រឌិត។',
    teamTitle: 'ក្រុមការងាររបស់យើង',
    teamInfo: [
      {
        id: 1,
        name: "និសិ្សត មានរិទ្ធ យូរីន",
        role: "អ្នកដឹកនាំក្រុម & ប្រតិបត្តិការ",
        desc: "យូរីន ដឹកនាំក្រុម BLACK CUBE និងគ្រប់គ្រងប្រតិបត្តិការប្រចាំថ្ងៃឱ្យដំណើរការបានរលូន ចាប់ពីការរៀបចំផែនការរហូតដល់ការអនុវត្ត។",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_1_2026-08-09_21-11-20.jpg",
      },
      {
        id: 2,
        name: "និសិ្សត ឈើយ រស្មី",
        role: "អ្នកគ្រប់គ្រងផ្នែកហិរញ្ញវត្ថុ & ទីផ្សារ",
        desc: "រស្មី គ្រប់គ្រងហិរញ្ញវត្ថុរបស់ក្រុម និងជំរុញការស្គាល់ម៉ាកយីហោ ដោយភ្ជាប់ BLACK CUBE ជាមួយអតិថិជន និងដៃគូ។",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_5_2026-08-09_21-11-20.jpg",
      },
      {
        id: 3,
        name: "និស្សិត ធា សៀវវ៉ុង",
        role: "អ្នកគ្រប់គ្រងវត្ថុធាតុដើម",
        desc: "សៀវវ៉ុង ទទួលខុសត្រូវលើការស្វែងរក និងគ្រប់គ្រងវត្ថុធាតុដើមក្នុងគ្រឿងផ្សំនីមួយៗ ដោយសហការយ៉ាងជិតស្និទ្ធជាមួយកសិករក្នុងស្រុក។",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_3_2026-08-09_21-11-20.jpg",
      },
      {
        id: 4,
        name: "និស្សិត យឿប អង្គរ",
        role: "អ្នកគ្រប់គ្រងផ្នែកផលិតកម្ម",
        desc: "អង្គរ ត្រួតពិនិត្យផ្នែកផលិតកម្ម ដោយធានាថា BLACK CUBE នីមួយៗផលិតដោយមានគុណភាព និងភាពយកចិត្តទុកដាក់ជាប្រចាំ។",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_2_2026-08-09_21-11-20.jpg",
      },
      {
        id: 5,
        name: "និសិ្សត កូ ប៊ុនធឿន",
        role: "អ្នកគ្រប់គ្រងផ្នែកស្ដុក & ការលក់",
        desc: "ប៊ុនធឿន គ្រប់គ្រងស្ដុកផលិតផល និងការលក់ ដោយធានាថា BLACK CUBE ទៅដល់អតិថិជនទាន់ពេល។",
        image:
          "https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_2026-08-11_13-30-20.jpg",
      },
    ],

    achievementsEyebrow: 'ការទទួលស្គាល់',
    achievements: [
      { icon: '', title: 'Dynamic Agripreneur Bootcamp', subtitle: 'រដូវកាលទី ២ — វគ្គផ្តាច់ព្រ័ត្រ', year: '2026', desc: 'ប្រកួតប្រជែងជាមួយក្រុមហ៊ុនចាប់ផ្តើមរបស់និស្សិតទូទាំងប្រទេស។ ទទួលបានមូលនិធិចាប់ផ្តើម $500។' },
      { icon: '', title: '$500 Seed Fund', subtitle: 'ជំនួយផ្លូវការ', year: '2026', desc: 'ទុនត្រូវបានបែងចែកសម្រាប់គ្រឿងផ្សំ ការវេចខ្ចប់ ស្លាកសញ្ញា និងភស្តុភារ។' },
      { icon: '', title: 'Student Entrepreneurship Award', subtitle: 'ការទទួលស្គាល់ឧត្តមភាព', year: '2026', desc: 'ទទួលស្គាល់សម្រាប់ការច្នៃប្រឌិតក្នុងបច្ចេកវិទ្យាអាហារ និងការប្រើប្រាស់គ្រឿងផ្សំក្នុងស្រុក។' },
      { icon: '', title: 'Cambodian Food Innovation', subtitle: 'មោទនភាពក្នុងស្រុក', year: '2026', desc: 'ត្រូវបានជ្រើសរើសជាគម្រោងគំរូសម្រាប់ក្រុមហ៊ុនចាប់ផ្តើមអាហារដឹកនាំដោយនិស្សិតនៅកម្ពុជា។' },
    ],

    newsTitle: 'ព័ត៌មាន និងរឿងរ៉ាវ',
    newsEyebrow: 'បច្ចុប្បន្នភាព',
    backToNews: '← ត្រឡប់ទៅព័ត៌មាន',
    readMore: 'អានបន្ថែម →',
    newsDetail:
      'នេះជាព្រឹត្តិការណ៍សំខាន់សម្រាប់ក្រុមរបស់យើង ខណៈដែលយើងបន្តពង្រីកម៉ាក BLACK CUBE នៅកម្ពុជា និងលើសពីនេះ។ យើងនៅតែប្តេជ្ញាចិត្តចំពោះគុណភាព ភាពពិតប្រាកដ និងការគាំទ្រសហគមន៍ក្នុងស្រុក។',
    newsItems: [
      { date: 'មេសា 2026', img: SOUP2, title: 'BLACK CUBE ឈ្នះមូលនិធិចាប់ផ្តើមនៅ Agripreneur Bootcamp', desc: 'ក្រុមរបស់យើងទទួលបានមូលនិធិចាប់ផ្តើម $500 ដើម្បីនាំគ្រឿងស៊ុបមាន់ខ្មៅរបស់យើងទៅទីផ្សារ។' },
      { date: 'ឧសភា 2026', img: SOUP_BOWL, title: 'ការអភិវឌ្ឍផលិតផល: ពីគំនិតដល់គ្រាប់', desc: 'របៀបដែលយើងកែលម្អរូបមន្តលើសពីបីខែនៃការសាកល្បងជាមួយគ្រួសារក្នុងស្រុក។' },
      { date: 'កញ្ញា 2026', title: 'ការចាប់ដៃគូជាមួយកសិដ្ឋានក្នុងស្រុកសម្រាប់ការផ្គត់ផ្គង់មាន់ខ្មៅ', img: 'https://images.unsplash.com/photo-1711010345058-442074287e06?w=700&h=500&fit=crop&auto=format', desc: 'យើងស្វែងរកមាន់ខ្មៅពីកសិដ្ឋានតូចៗប្រកបដោយនិរន្តរភាពទូទាំងប្រទេសកម្ពុជា។' },
    ],

    feedbackEyebrow: 'មតិតាម QR',
    feedbackTitle: 'ចែករំលែកបទពិសោធន៍របស់អ្នក',
    feedbackIntro: 'បានសាក BLACK CUBE ហើយ? យើងចង់ស្តាប់យោបល់របស់អ្នក។',
    ratingLabel: 'ការវាយតម្លៃ',
    nameLabel: 'ឈ្មោះ (ស្រេចចិត្ត)',
    namePlaceholder: 'ឈ្មោះរបស់អ្នក',
    emailLabel: 'អ៊ីមែល (ស្រេចចិត្ត)',
    emailPlaceholder: 'your@email.com',
    commentLabel: 'មតិយោបល់',
    commentPlaceholder: 'ប្រាប់យើងអំពីបទពិសោធន៍របស់អ្នក...',
    submitBtn: 'ដាក់ស្នើមតិ',
    submitting: 'កំពុងដាក់ស្នើ...',
    thanksTitle: 'សូមអរគុណ!',
    thanksMsg:
      'មតិរបស់អ្នកមានតម្លៃណាស់សម្រាប់ពួកយើង។ រាល់ការឆ្លើយតបជួយឱ្យពួកយើងធ្វើឱ្យ BLACK CUBE កាន់តែប្រសើរសម្រាប់មនុស្សគ្រប់គ្នា។',
    failTitle: 'មិនអាចដាក់ស្នើបានទេ',
    failMsg: 'មានបញ្ហាអ្វីមួយ។ សូមពិនិត្យការតភ្ជាប់របស់អ្នក ហើយព្យាយាមម្តងទៀត។',
    errRating: 'សូមជ្រើសរើសការវាយតម្លៃ។',
    errNameShort: 'ឈ្មោះត្រូវមានយ៉ាងហោចណាស់ ២ តួអក្សរ។',
    errEmail: 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ។',
    errCommentReq: 'ត្រូវបញ្ចូលមតិយោបល់។',
    errCommentShort: 'មតិយោបល់ត្រូវមានយ៉ាងហោចណាស់ ១០ តួអក្សរ។',

    contactEyebrow: 'ទាក់ទងមកយើង',
    contactTitle: 'ទំនាក់ទំនង',
    contactIntro:
      'មានសំណួរ គំនិតសហការ ឬចង់ដាក់ BLACK CUBE លក់ក្នុងហាងរបស់អ្នក? យើងរីករាយក្នុងការទាក់ទង។',
    contactItems: [
      { icon: '1', label: 'អ៊ីមែល', link: 'mailto:yurin2t2t2t@gmail.com' , value: 'blackcube email' },
      { icon: '2', label: 'ទីតាំង', link: 'https://maps.app.goo.gl/S8g6E3DgheTuZWbj8' , value : "សាកលវិទ្យាល័យ​ជាតិបាត់ដំបង, ព្រះរាជាណាចក្រកម្ពុជា" },
      { icon: '3', label: 'តិកតុក', link: 'https://www.tiktok.com/@blacksoupcoup26' , value: 'blacksoupcoup26' },
      { icon: '4', label: 'ហ្វេសប៊ុក', link: 'https://www.facebook.com/profile.php?id=61560204866804' , value: 'BLACK CUBE Cambodia' },
    ],
    nameField: 'ឈ្មោះ',
    emailField: 'អ៊ីមែល',
    messageField: 'សារ',
    contactNamePlaceholder: 'ឈ្មោះពេញរបស់អ្នក',
    contactEmailPlaceholder: 'your@email.com',
    contactMessagePlaceholder: 'តើយើងអាចជួយអ្នកយ៉ាងដូចម្តេច?',
    sendBtn: 'ផ្ញើសារ',
    sending: 'កំពុងផ្ញើ...',
    sentTitle: 'ផ្ញើសារជោគជ័យ!',
    sentMsg: 'យើងនឹងឆ្លើយតបទៅអ្នកវិញក្នុងរយៈពេល ២៤ ម៉ោង។',
    contactFailTitle: 'មិនអាចផ្ញើបានទេ',
    errNameReq: 'ត្រូវបញ្ចូលឈ្មោះ។',
    errEmailReq: 'ត្រូវបញ្ចូលអ៊ីមែល។',
    errMessageReq: 'ត្រូវបញ្ចូលសារ។',
    errMessageShort: 'សារត្រូវមានយ៉ាងហោចណាស់ ១០ តួអក្សរ។',

    d3Eyebrow: '៣វិមាត្រអន្តរកម្ម',
    d3Title: 'ស្វែងយល់ BLACK CUBE ក្នុង ៣វិមាត្រ',
    d3Intro:
      'គំរូ ៣វិមាត្ររបស់ BLACK CUBE។ អូសដើម្បីបង្វិលកាមេរ៉ាជុំវិញផលិតផល — រំកិលMouseដើម្បីពង្រីក/បង្រួម។',
    d3Hints: ['⟲ អូសដើម្បីបង្វិល', '⇅ រំកិលដើម្បីពង្រីក', '⟳ បង្វិលដោយស្វ័យប្រវត្តិ'],
    d3About: 'អំពីការមើលជាមុន',
    d3Text:
      'នេះគឺជាការបង្ហាញ ៣វិមាត្រអន្តរកម្មពេញលេញរបស់ BLACK CUBE ដែលបង្កើតឡើងក្នុងកម្មវិធីរុករកជាមួយ Three.js។ កាមេរ៉ាបង្វិលដោយសេរីជុំវិញផលិតផល ដែលអណ្តែតថ្នមៗ ខណៈពេលដែលពន្លឺ និងស្រមោលឆ្លើយតបតាមពេលវេលាពិត។ កន្លែងនេះអាចផ្ទុកគំរូស្កេន ឬ CAD នៃគ្រាប់ពិតប្រាកដនៅពេលក្រោយ។',

    navTitle: 'ទំព័រនីមួយៗ',
    footerContactTitle: 'ទំនាក់ទំនង',
    footerEmail: 'អ៊ីមែល: yurin2t2t2t@gmail.com',
    footerLocation: 'ទីតាំង: សាកលវិទ្យាល័យជាតិបាត់ដំបង ក្រុងបាត់ដំបង ប្រទេសកម្ពុជា',
    footerPhone: 'ទូរស័ព្ទ: +855(0) 11 831 196',
    giveFeedbackArrow: '👉 ផ្តល់មតិយោបល់របស់អ្នក',
    madeWith: 'បង្កើតឡើងដោយ',
    scrollTop: 'ត្រឡប់ទៅកំពូល',
  },
}

export type TranslationSet = (typeof t)['en']
