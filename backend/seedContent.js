// backend/seedContent.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Content from "./models/Content.js";

dotenv.config();

const seedData = [
  {
    section: "home",
    data: {
      navbar: {
        title: "ATARYO",
        links: [
          { label: "ModeNeu™", href: "/spasticity" },
          { label: "Sustainex™", href: "/textile" },
        ],
      },
      hero: {
        title: "Innovating Textiles for a Healthier, Safer, Smarter World",
        subtitle: "Where advanced material science meets human-centered design.",
        description:
          "Ataryo Private Limited is a next-generation smart textile innovation company developing solutions that enhance human mobility, safety, and overall well-being.",
        backgroundImage:
          "/banner-home.png",
        ctaText1: "Explore Our Solutions",
        ctaText2: "Become Partner",
      },
      about: {
        title: "About Us",
        vision: "To build a future where textiles empower, protect, and elevate human life.",
        mission: "To engineer intelligent, sustainable, and high-performance textile technologies that create a measurable positive impact on people and the planet.",
        statement:
          "We believe textiles should do more than serve a function — they should enhance life. Every innovation at Ataryo is driven by empathy, research, and the pursuit of meaningful transformation.",
        image: "https://images.pexels.com/photos/31321061/pexels-photo-31321061.jpeg",
      },
      coreValues: {
        title: "Core Values",
        values: [
          { title: "Purpose-Led Innovation", description: "Creating technology that improves life in measurable ways." },
          { title: "Human First", description: "Comfort, safety, and accessibility in every product." },
          { title: "Integrity", description: "Ethical development, transparent processes, and responsible sourcing." },
          { title: "Collaboration", description: "Driving breakthroughs through partnerships and interdisciplinary expertise." },
          { title: "Sustainability", description: "Engineered for long-lasting impact and minimal environmental footprint." },
        ],
      },
      whyWeExist: {
        title: "Why We Exist",
        description:
          "Millions struggle with mobility limitations, hygiene challenges, and exposure to unsafe textile environments. Industries demand solutions that are smarter, more durable, and environmentally responsible. Ataryo exists to bridge this gap.",
        highlights: [
          "Support people with movement challenges",
          "Protect workers and communities",
          "Improve hygiene and safety",
          "Enable sustainable, long-term use",
        ],
        image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
      },
      partnershipsAndInvestors: {
        partnership: {
          title: "Partnerships & Collaborators",
          description: "We collaborate with institutions, research labs, material manufacturers, sensor technology specialists, sustainability bodies, and hospitals to accelerate breakthroughs.",
          partners: [
            "Institutions & Organizations",
            "Research labs & innovation centers",
            "Advanced material manufacturers",
            "Sensor technology specialists",
            "Sustainability and regulatory bodies",
            "Hospitals",
          ],
          image: "https://images.pexels.com/photos/7580751/pexels-photo-7580751.jpeg",
        },
        investment: {
          title: "Investment",
          description: "Ataryo welcomes investors and strategic partners who believe in the future of wearable health technology, smart textile systems, sustainable antimicrobial fibers, and high-growth industrial textile applications.",
          focus: [
            "Wearable health technology",
            "Smart textile systems",
            "Sustainable antimicrobial fibers",
            "High-growth industrial textile applications",
          ],
          image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
        },
      },
      team: {
        title: "Our Founders",
        description: "Ataryo is led by visionary founders with expertise in design innovation and advanced technology, committed to creating solutions that enhance human life through intelligent textiles.",
        members: [
          { 
            name: "Kirti Kushwaha", 
            role: "Founder", 
            education: "Masters in Design",
            experience: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
            image: "/founder-2.jpg",
            social: {
              twitter: "#",
              dribbble: "#",
              linkedin: "#"
            }
          },
          { 
            name: "Ranjan Kumar Shukla", 
            role: "Co-founder", 
            education: "Master in Information Technology",
            experience: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
            image: "/founder-1.jpg",
            social: {
              twitter: "#",
              github: "#",
              linkedin: "#"
            }
          },
        ],
      },
      footer: {
        email: "ataryo.info@gmail.com",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "Join Us / Careers", href: "#careers" },
          { label: "Privacy & Terms", href: "/privacy" },
        ],
        copyright: "© Ataryo Private Limited 2025",
      },
    },
  },
  {
    section: "textile",
    data: {
      navbar: {
        title: "Sustainex™",
        links: [
          { label: "Home", href: "/", internal: true },
          { label: "ModeNeu™", href: "/spasticity", internal: true },
          { label: "Sustainex™", href: "/textile", internal: true },
          { label: "Contact", href: "#contact", internal: false },
        ],
      },
      hero: {
        title: "Clean. Safe. Sustainable.",
        subtitle:
          "Advanced antimicrobial textiles engineered for a healthier, more responsible world.",
        backgroundImage: "https://images.pexels.com/photos/6634604/pexels-photo-6634604.jpeg?auto=compress&cs=tinysrgb&w=1920",
        ctaText: "Explore Innovation",
      },
      about: {
        title: "About Sustainex™",
        vision: "To set new global standards in hygiene-focused, eco-conscious textile engineering.",
        mission: "To create sustainable, skin-safe, and high-performance antibacterial fabrics and fibers that protect users across healthcare, hospitality, industry, and everyday environments.",
        text:
          "Our antibacterial sustainable textiles feature built-in antimicrobial technology, sustainable & eco-friendly fiber development, long-lasting bacterial resistance, durable washable performance, comfortable breathable texture, and non-toxic skin-safe treatments.",
        image: "https://images.pexels.com/photos/26956871/pexels-photo-26956871.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      products: {
        title: "Product & Application",
        description: "Our antibacterial sustainable textiles feature advanced technology and deliver safety, comfort, and environmental responsibility in equal measure.",
        features: [
          "Built-in antimicrobial technology",
          "Sustainable & Eco-friendly fiber development",
          "Long-lasting bacterial resistance",
          "Durable, washable performance",
          "Comfortable, breathable texture",
          "Non-toxic, skin-safe treatments",
        ],
        items: [
          {
            title: "Healthcare Textiles",
            desc:
              "Advanced antibacterial fabrics for hospitals & clinics ensuring hygienic patient care environments.",
            image: "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg",
          },
          {
            title: "Hospitality & Travel",
            desc:
              "Premium antibacterial linens and fabrics for hotels, airlines, and travel industry applications.",
            image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
          },
          {
            title: "Protective Workwear",
            desc:
              "Industrial-grade antibacterial textiles for protective work clothing and safety equipment.",
            image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
          },
          {
            title: "Public Institutions",
            desc:
              "Durable antibacterial fabrics for schools, offices, and public spaces ensuring safe environments.",
            image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
          },
          {
            title: "Home Textiles",
            desc:
              "Comfortable antibacterial fabrics for bedding, curtains, and everyday home use with lasting protection.",
            image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
          },
          {
            title: "Sportswear",
            desc:
              "High-performance antibacterial athletic fabrics that resist odor and bacteria during intense activities.",
            image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
          },
        ],
        applications: [
          "Hospitals & clinics",
          "Hospitality & travel",
          "Protective work wear",
          "Public institutions",
          "Home textiles",
          "Sportswear",
          "Industrial hygiene products",
        ],
      },
      sustainability: {
        title: "Sustainability & Impact",
        description: "Our textiles contribute to global sustainability by delivering benefits for people and the planet.",
        points: [
          "Reducing water and detergent usage",
          "Minimizing textile waste through durability",
          "Applying low-impact antimicrobial treatments",
          "Supporting safer, healthier environments",
        ],
        tagline: "Better for people. Better for the planet.",
      },
      research: {
        title: "Research & Development",
        summary:
          "Exploring bio-based polymers, advanced fiber spinning, and smart fabric integrations for next-generation sustainable textiles.",
        image: "/research-lab-team.png",
      },
      press: {
        title: "Press & Media",
        description: "Stay updated on our latest innovations, partnerships, and industry recognition.",
        items: [
          { title: "Sustainex™ Featured in TechTextile", link: "#" },
          { title: "Innovation in Sustainable Antimicrobial Textiles", link: "#" },
          { title: "Industry Awards & Recognition", link: "#" },
        ],
      },
      footer: {
        email: "ataryo.info@gmail.com",
        note: "Contact Us | Careers | Social Media Handles",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "Careers", href: "#careers" },
        ],
      },
    },
  },
  {
    section: "spasticity",
    data: {
      navbar: {
        title: "ModeNeu™",
        links: [
          { label: "Home", href: "/", internal: true },
          { label: "ModeNeu™", href: "/spasticity", internal: true },
          { label: "Sustainex™", href: "/textile", internal: true },
          { label: "Contact", href: "#contact", internal: false },
        ],
      },
      hero: {
        title: "Wearables That Support Movement, Mobility & Independence",
        subtitle:
          "Engineered for comfort. Designed for daily life. Backed by science.",
        backgroundImage: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      },
      about: {
        title: "About ModeNeu™",
        vision: "To empower individuals with neuromuscular and movement challenges through intelligent, supportive, and accessible wearable solutions.",
        mission: "To integrate adaptive textile engineering with smart sensing systems, creating wearables that monitor, assist, and enhance daily mobility and rehabilitation.",
        description:
          "Our smart adaptive wearables incorporate embedded textile sensors, muscle & movement monitoring, adaptive compression and support mapping, real-time mobility analytics, skin-friendly breathable materials, and day-long usability and comfort.",
        image: "https://images.pexels.com/photos/8436624/pexels-photo-8436624.jpeg",
      },
      innovation: {
        title: "Our Innovation — Products & Applications",
        description: "Our smart adaptive wearables incorporate advanced technology to support movement and mobility.",
        items: [
          { name: "Smart Rehabilitation Fabrics", description: "Advanced sensing technology integrated into fabric with real-time muscle and movement monitoring.", image: "https://images.pexels.com/photos/6110968/pexels-photo-6110968.jpeg" },
          { name: "Assistive Technology Devices", description: "Intelligent wearables enhancing mobility and muscle control through adaptive compression and support.", image: "https://images.pexels.com/photos/8436624/pexels-photo-8436624.jpeg" },
          { name: "Data-Driven Insights", description: "Real-time mobility analytics and patient feedback for personalized therapy and rehabilitation.", image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg" },
        ],
        applications: [
          "Neuromuscular disorders",
          "Post-injury or post-stroke rehabilitation",
          "Balance and mobility support",
          "Gait training",
          "Posture correction",
          "Motion monitoring for clinicians",
        ],
      },
      whoItHelps: {
        title: "Who It Helps",
        description: "Our wearable solutions are designed for a wide range of users seeking mobility support and independence.",
        people: [
          { name: "Individuals with movement disorders", role: "Enhanced mobility and daily independence." },
          { name: "Physiotherapy and rehabilitation patients", role: "Accelerated recovery with data-driven insights." },
          { name: "Elderly individuals with stability challenges", role: "Improved balance and confidence in movement." },
          { name: "Clinicians seeking data-driven insights", role: "Real-time monitoring and treatment optimization." },
          { name: "Care centers and hospitals", role: "Better patient outcomes and efficient care delivery." },
          { name: "Athletes recovering from injuries", role: "Performance tracking and safe rehabilitation." },
        ],
      },
      research: {
        title: "Research",
        items: [
          { heading: "Clinical Studies", details: "Ongoing research in collaboration with leading healthcare institutions." },
          { heading: "Technology Innovation", details: "Continuous development of next-generation sensing and support systems." },
        ],
        image: "/research-lab-team.png",
      },
      press: {
        title: "Press & Media",
        description: "Explore updates on:",
        articles: [
          { headline: "Technology features", link: "#" },
          { headline: "Innovation awards", link: "#" },
          { headline: "Scientific publications", link: "#" },
        ],
      },
      footer: {
        email: "ataryo.info@gmail.com",
        note: "Contact Us | Careers | Social Media Handles",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "Careers", href: "#careers" },
        ],
      },
    },
  },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    for (const item of seedData) {
      await Content.findOneAndUpdate(
        { section: item.section },
        item,
        { upsert: true, new: true }
      );
      console.log(`✅ Seeded section: ${item.section}`);
    }

    console.log("🌱 All sections seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
})();
