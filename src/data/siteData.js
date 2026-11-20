// All website content and confirmed practice details live in this file.
// Leaving any optional field empty ("") or [] automatically hides it on the site.

export const siteData = {
  practiceName: "Mdaka G A Physiotherapy",
  practitioner: "Miss Gugu Angely Mdaka",
  profession: "Physiotherapist",
  town: "Bethal, Mpumalanga, South Africa",
  postalCode: "2309",
  municipality: "Govan Mbeki Local Municipality",

  phoneMobileDisplay: "076 232 5034",
  phoneMobileTel: "+27762325034",
  phoneLandlineDisplay: "017 647 6341",
  phoneLandlineTel: "+27176476341",
  whatsappNumber: "27762325034",
  mapQuery: "Bethal, 2309, Mpumalanga, South Africa",

  // Unconfirmed fields — leave empty to keep completely hidden
  streetAddress: "",
  email: "",
  facebookUrl: "",
  medicalAid: "",
  accessibility: [],

  navigation: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "What to Expect", id: "what-to-expect" },
    { label: "Gallery", id: "gallery" },
    { label: "Health Tips", id: "health-tips" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ],

  hero: {
    topWord: "MDAKA",
    bottomWord: "PHYSIO",
    title: "Mdaka G A Physiotherapy",
    subline: "Physiotherapy in Bethal, Mpumalanga.",
    cutoutImage: "/images/hero-cutout.webp",
    cutoutAlt: "Physiotherapist in teal clinical uniform",
    primaryCtaLabel: "Call to Book an Appointment",
    whatsappCtaLabel: "Book on WhatsApp",
    directionsCtaLabel: "Get Directions",
  },

  quickInfo: [
    {
      id: "location",
      label: "Location",
      value: "Bethal, Mpumalanga",
      icon: "MapPin",
      href: "#contact",
    },
    {
      id: "phone",
      label: "Telephone",
      value: "Call: 076 232 5034",
      icon: "Phone",
      href: "tel:+27762325034",
    },
    {
      id: "booking",
      label: "Booking",
      value: "Appointments by phone",
      icon: "CalendarClock",
      href: "#contact",
    },
    {
      id: "practitioner",
      label: "Practitioner",
      value: "Physiotherapist: Miss Gugu Angely Mdaka",
      icon: "UserCheck",
      href: "#about",
    },
  ],

  about: {
    heading: "About the Practice",
    intro:
      "Mdaka G A Physiotherapy is a physiotherapy practice in Bethal, Mpumalanga, run by physiotherapist Miss Gugu Angely Mdaka.",
    paragraphs: [
      "Physiotherapy focuses on how the body moves and functions. It uses physical assessment, guided movement, hands-on techniques, and structured exercise to help people manage discomfort, stiffness, or movement difficulties linked to daily activities, work, or recovery.",
      "Care is tailored to each person's needs and comfort level. Every visit begins with listening carefully to your concerns, explaining what is observed during the assessment, and agreeing on practical steps for your sessions and home routine.",
    ],
    image: "/images/about.jpg",
    imageAlt: "Bright and calm physiotherapy treatment space with natural daylight",
    values: [
      {
        title: "Patient care",
        description: "Respectful, attentive care centred around your comfort and individual goals.",
        icon: "HeartHandshake",
      },
      {
        title: "Clear communication",
        description: "Plain explanations of your assessment and each step of your session.",
        icon: "MessageSquareText",
      },
      {
        title: "Comfort",
        description: "A calm, welcoming environment where you can move without feeling rushed.",
        icon: "Smile",
      },
      {
        title: "Progress at your pace",
        description: "Exercises and guidance adjusted sensibly as your body adapts over time.",
        icon: "Footprints",
      },
    ],
  },

  services: {
    heading: "How Physiotherapy Can Help",
    intro:
      "Physiotherapy supports everyday movement, strength, and comfort across a range of physical concerns.",
    note: "Please call the practice to ask about the treatments offered.",
    items: [
      {
        id: "assessment",
        title: "Physiotherapy assessment",
        description: "A structured look at movement, joint range, and daily physical challenges.",
        icon: "ClipboardCheck",
        image: "",
      },
      {
        id: "back-neck",
        title: "Back and neck pain",
        description: "Support for stiffness, muscular tension, and discomfort in the spine.",
        icon: "Activity",
        image: "",
      },
      {
        id: "joint-muscle",
        title: "Joint and muscle pain",
        description: "Care aimed at easing movement around sore shoulders, knees, hips, and muscles.",
        icon: "Accessibility",
        image: "",
      },
      {
        id: "sports-injuries",
        title: "Sports and exercise injuries",
        description: "Guidance for strains, sprains, and returning safely to physical activity.",
        icon: "Dumbbell",
        image: "",
      },
      {
        id: "rehabilitation",
        title: "Rehabilitation after injury or surgery",
        description: "Gradual, supervised movement work to rebuild confidence and function.",
        icon: "ShieldCheck",
        image: "",
      },
      {
        id: "mobility-balance",
        title: "Mobility and balance",
        description: "Practical exercises to support steady walking and everyday independence.",
        icon: "Move",
        image: "",
      },
      {
        id: "posture-advice",
        title: "Posture and movement advice",
        description: "Simple adjustments for sitting, standing, lifting, and daily work habits.",
        icon: "Compass",
        image: "",
      },
      {
        id: "exercise-programmes",
        title: "Exercise programmes",
        description: "Clear, manageable routines designed for you to practise between visits.",
        icon: "ListChecks",
        image: "",
      },
    ],
  },

  whatToExpect: {
    heading: "What to Expect",
    intro: "A straightforward overview of how a typical visit and follow-up process works.",
    steps: [
      {
        step: 1,
        title: "Call to book",
        description:
          "Phone the practice on 076 232 5034 or 017 647 6341 to arrange a suitable appointment time and ask any initial questions.",
      },
      {
        step: 2,
        title: "First visit and assessment",
        description:
          "Your physiotherapist discusses your health history, daily routine, and main concerns, then checks how you move.",
      },
      {
        step: 3,
        title: "Treatment plan discussion",
        description:
          "Findings are explained in clear, everyday language so you understand what is planned before starting.",
      },
      {
        step: 4,
        title: "Treatment sessions",
        description:
          "Sessions combine appropriate physiotherapy techniques and guided exercises at a pace that suits your comfort.",
      },
      {
        step: 5,
        title: "Home exercises and follow-up",
        description:
          "You receive practical movement guidance to continue at home, with follow-up visits arranged as needed.",
      },
    ],
  },

  whyVisitUs: {
    heading: "Why Visit Us",
    intro: "Practical, attentive physiotherapy care available right in your community.",
    items: [
      {
        title: "Local practice in Bethal",
        description:
          "Conveniently situated in Bethal within the Govan Mbeki Local Municipality, Mpumalanga.",
        icon: "MapPin",
      },
      {
        title: "One-on-one attention",
        description:
          "Dedicated appointment time focused on listening to your needs and guiding your movement.",
        icon: "UserCheck",
      },
      {
        title: "Clear explanations",
        description:
          "Straightforward, jargon-free guidance so you know what each assessment and exercise involves.",
        icon: "BookOpenCheck",
      },
      {
        title: "Easy to reach by phone",
        description:
          "Reach the practice directly on mobile or landline to enquire about availability and appointments.",
        icon: "PhoneCall",
      },
    ],
  },

  gallery: {
    heading: "Moving Well",
    intro:
      "Visual themes representing gentle movement, mobility, stretching, and balanced daily activity.",
    items: [
      {
        id: "gal-1",
        src: "/images/gallery-1.jpg",
        alt: "Person performing guided upper back and shoulder stretching",
        caption: "Movement and recovery",
        aspect: "landscape",
      },
      {
        id: "gal-2",
        src: "/images/gallery-2.jpg",
        alt: "Person practising single-leg balance stability exercise",
        caption: "Balance and mobility",
        aspect: "portrait",
      },
      {
        id: "gal-3",
        src: "/images/gallery-3.jpg",
        alt: "Seated knee mobility exercise with a resistance band",
        caption: "Stretching and strength",
        aspect: "landscape",
      },
      {
        id: "gal-4",
        src: "/images/gallery-4.jpg",
        alt: "Mindful upright posture and neck alignment practice",
        caption: "Posture and alignment",
        aspect: "portrait",
      },
      {
        id: "gal-5",
        src: "/images/gallery-5.jpg",
        alt: "Exercise mat, resistance bands, and light weights in daylight",
        caption: "Everyday movement tools",
        aspect: "landscape",
      },
      {
        id: "gal-6",
        src: "/images/gallery-6.jpg",
        alt: "Active adult walking steadily with upright posture",
        caption: "Steady everyday walking",
        aspect: "portrait",
      },
      {
        id: "gal-7",
        src: "/images/gallery-7.jpg",
        alt: "Gentle wrist and forearm mobility stretch on a wooden table",
        caption: "Gentle joint mobility",
        aspect: "landscape",
      },
      {
        id: "gal-8",
        src: "/images/gallery-8.jpg",
        alt: "Restorative lower back stretching on an exercise mat",
        caption: "Restorative stretching",
        aspect: "square",
      },
    ],
  },

  healthTips: {
    heading: "Everyday Health Tips",
    intro: "Simple habits to keep in mind for comfortable daily movement.",
    disclaimer: "General information only, not medical advice.",
    items: [
      {
        title: "Move often during the day",
        description:
          "Take short breaks to stand up, walk around, and change positions if you sit for long periods.",
        icon: "Clock",
      },
      {
        title: "Check your posture",
        description:
          "Keep your shoulders relaxed, screens at eye level, and feet supported flat on the floor.",
        icon: "User",
      },
      {
        title: "Warm up before exercise",
        description:
          "Start physical activity with gentle movements to prepare your muscles and joints gradually.",
        icon: "Flame",
      },
      {
        title: "Stay hydrated",
        description:
          "Drink water regularly throughout the day, especially during warm weather or physical activity.",
        icon: "Droplets",
      },
      {
        title: "Rest and recover",
        description:
          "Allow adequate rest and sleep between demanding activities so your body can recharge.",
        icon: "Moon",
      },
      {
        title: "Ask for help when pain continues",
        description:
          "If stiffness or discomfort lingers or worsens, consult a qualified healthcare professional.",
        icon: "Stethoscope",
      },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions",
    intro: "Answers to common questions before calling to arrange your appointment.",
    items: [
      {
        question: "How do I book an appointment?",
        answer: "Call the practice on 076 232 5034 or 017 647 6341.",
      },
      {
        question: "What should I bring?",
        answer:
          "Comfortable clothing and any relevant medical information. Please call the practice to confirm.",
      },
      {
        question: "Do you accept medical aid?",
        answer: "Please call the practice to ask.",
      },
      {
        question: "How long is a session?",
        answer: "Please call the practice to ask.",
      },
      {
        question: "What are your opening hours?",
        answer: "Please call the practice to confirm opening hours and book your appointment.",
      },
      {
        question: "Where is the practice?",
        answer: "Bethal, Mpumalanga, 2309.",
      },
    ],
  },

  ctaBand: {
    heading: "Ready to book? Call the practice today.",
    subtext:
      "Speak directly with the practice to ask questions or arrange a convenient time for your visit.",
  },

  contact: {
    heading: "Contact & Location",
    intro:
      "Get in touch by phone to book an appointment, or send an enquiry message via WhatsApp.",
    formHeading: "Request an Appointment via WhatsApp",
    formNote: "Please do not send sensitive medical details through this form.",
    formThankYouTitle: "Thank you for your appointment request",
    formThankYouBody:
      "Your details have been prepared for WhatsApp. If WhatsApp did not open automatically, click the button below to send your message directly.",
  },

  footer: {
    copyright: "© 2026 Mdaka G A Physiotherapy",
    disclaimer: "This website gives general information and is not medical advice.",
  },

  privacy: {
    title: "Privacy Policy",
    updated: "Effective 2026",
    intro:
      "This Privacy Policy explains how Mdaka G A Physiotherapy handles personal information in line with the Protection of Personal Information Act (POPIA) of South Africa.",
    sections: [
      {
        heading: "1. Who We Are",
        body: "Mdaka G A Physiotherapy is a physiotherapy practice located in Bethal, Mpumalanga, South Africa (postal code 2309), run by physiotherapist Miss Gugu Angely Mdaka.",
      },
      {
        heading: "2. What Information the Contact Form Collects",
        body: "When you use the appointment-request form on this website, you enter your name, phone number, preferred day and time, and a brief message. This website does not store your form submission in a background database; instead, it prepares a message that you choose to send directly to the practice via WhatsApp.",
      },
      {
        heading: "3. Why We Use Your Information",
        body: "The information you send is used solely to respond to your appointment enquiry, confirm availability, and communicate with you regarding your visit. Please do not include sensitive medical details in the website form.",
      },
      {
        heading: "4. Information Sharing",
        body: "Your personal information is never sold, rented, or shared with third parties for marketing purposes.",
      },
      {
        heading: "5. Your Rights Under POPIA",
        body: "You have the right to ask what personal information we hold about you, request that inaccurate information be corrected or deleted, or withdraw consent for communication, subject to applicable South African healthcare record-keeping laws.",
      },
      {
        heading: "6. Contact Us",
        body: "If you have questions about this Privacy Policy or wish to update your details, please call the practice on 076 232 5034 or 017 647 6341.",
      },
    ],
  },
};
