// All website content and confirmed practice details live in this file.
// Leaving any optional field empty ("") or [] automatically hides it on the site.

export const siteData = {
  practiceName: "Mdaka G A Physiotherapy",
  practitioner: "Gugu Mdaka",
  practitionerTitle: "Gugu Mdaka, Physiotherapist",
  profession: "Physiotherapist",
  practiceNumber: "Pr. Nr 0491292",
  town: "Bethal, Mpumalanga (RSA)",
  postalCode: "2310",

  logoImage: "/images/logo.png",
  logoAlt: "Gugu Mdaka Physiotherapist logo",

  phoneLandlineDisplay: "017 647 1161",
  phoneLandlineTel: "+27176471161",
  phoneWhatsappDisplay: "076 232 5034",
  phoneWhatsappTel: "+27762325034",
  whatsappNumber: "27762325034",

  saturdayVenueName: "Dr B Mosia",
  saturdayVenueAddress: "Dr B Mosia, 22a Clerq Street, Bethal, 2310",
  mapQuery: "22a Clerq Street, Bethal, 2310, South Africa",

  // Empty fields stay hidden on the site
  streetAddress: "",
  email: "",
  facebookUrl: "",

  taglines: {
    primary: "Move Better • Feel Better • Live Better",
    priority: "Your Movement, Our Priority",
    healing: "Movement Heals Lives",
    pillars: "Health • Mobility • Independence",
    cta: "Let's get you moving!",
  },

  navigation: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Hours", id: "hours" },
    { label: "Physio@home", id: "physio-at-home" },
    { label: "Health Tips", id: "health-tips" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ],

  hero: {
    topWord: "MDAKA",
    bottomWord: "PHYSIO",
    title: "Mdaka G A Physiotherapy",
    practitionerLine: "Gugu Mdaka, Physiotherapist",
    intro:
      "Professional physiotherapy care to help you recover, regain function and live a healthier, more active life.",
    cutoutImage: "/images/hero-cutout.png",
    cutoutAlt: "Gugu Mdaka, Physiotherapist",
    whatsappCtaLabel: "WhatsApp Us",
    callCtaLabel: "Call Us",
    directionsCtaLabel: "Get Directions",
  },

  quickInfo: [
    {
      id: "location",
      label: "Location",
      value: "Bethal, Mpumalanga (RSA)",
      icon: "MapPin",
      href: "#contact",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: "076 232 5034",
      icon: "MessageCircle",
      href: "https://wa.me/27762325034",
    },
    {
      id: "landline",
      label: "Landline",
      value: "017 647 1161",
      icon: "Phone",
      href: "tel:+27176471161",
    },
    {
      id: "payment",
      label: "Payment",
      value: "Cash and medical aids accepted",
      icon: "CreditCard",
      href: "#hours",
    },
  ],

  about: {
    heading: "About the Practice",
    intro:
      "Professional physiotherapy care to help you recover, regain function and live a healthier, more active life.",
    paragraphs: [
      "Led by Gugu Mdaka, Physiotherapist (Pr. Nr 0491292), Mdaka G A Physiotherapy serves patients in Bethal, Mpumalanga (RSA) with attentive, goal-oriented rehabilitation and physical care.",
      "Sessions range from 30 minutes to 1 hour, giving you focused time for thorough assessment, guided treatment, and practical movement support.",
    ],
    values: [
      {
        title: "Your Movement, Our Priority",
        description: "Care focused on restoring comfortable, confident everyday movement.",
        icon: "Activity",
      },
      {
        title: "Movement Heals Lives",
        description: "Structured physiotherapy techniques and exercise tailored to your needs.",
        icon: "HeartHandshake",
      },
      {
        title: "Health • Mobility • Independence",
        description: "Supporting recovery, joint function, and long-term daily independence.",
        icon: "ShieldCheck",
      },
      {
        title: "Let's get you moving!",
        description: "Cash and medical aids accepted, with sessions from 30 minutes to 1 hour.",
        icon: "Footprints",
      },
    ],
  },

  services: {
    heading: "How Physiotherapy Can Help",
    intro:
      "Focused physiotherapy support for pain relief, rehabilitation, posture, and everyday mobility.",
    checklistHeading: "Your Health is Our Priority",
    items: [
      {
        id: "back-neck",
        title: "Back & Neck Pain",
        description: "Targeted care for spinal stiffness, muscular strain, and neck or back discomfort.",
        icon: "Activity",
      },
      {
        id: "joint-muscle",
        title: "Joint & Muscle Injuries",
        description: "Assessment and rehabilitation for sprains, strains, and sore joints or muscles.",
        icon: "Accessibility",
      },
      {
        id: "sports-rehab",
        title: "Sports Rehabilitation",
        description: "Structured recovery programmes to help you return safely to sport and exercise.",
        icon: "Dumbbell",
      },
      {
        id: "post-surgery",
        title: "Post-Surgery Rehabilitation",
        description: "Guided movement and strengthening after orthopaedic or surgical procedures.",
        icon: "ShieldCheck",
      },
      {
        id: "posture-ergonomics",
        title: "Posture & Ergonomics",
        description: "Practical posture guidance and workstation habits to reduce daily physical strain.",
        icon: "Compass",
      },
      {
        id: "mobility-independence",
        title: "General Mobility & Functional Independence",
        description: "Exercise and balance work to support steady walking and daily independence.",
        icon: "Move",
      },
    ],
    checklist: [
      "Pain relief",
      "Injury rehabilitation",
      "Musculoskeletal conditions",
      "Post-surgical rehabilitation",
      "Improved mobility & function",
      "Better quality of life",
    ],
  },

  operatingTimes: {
    heading: "Operating Times",
    intro: "Scheduled practice hours and weekday in-house calls in Bethal, Mpumalanga (RSA).",
    inHouseBadge: "IN-HOUSE CALLS – Available on weekdays only (Monday – Friday)",
    paymentHighlight: "Cash and medical aids accepted",
    sessionDuration: "Sessions range from 30 minutes to 1 hour",
    schedule: [
      { day: "Monday", hours: "16:30 – 18:00", closed: false, note: "" },
      { day: "Tuesday", hours: "16:30 – 17:30", closed: false, note: "" },
      { day: "Wednesday", hours: "Closed", closed: true, note: "" },
      { day: "Thursday", hours: "16:30 – 17:30", closed: false, note: "" },
      { day: "Friday", hours: "Closed", closed: true, note: "" },
      {
        day: "Saturday",
        hours: "09:00 – 12:00",
        closed: false,
        note: "Available at Dr B Mosia, 22a Clerq Street, Bethal 2310",
      },
    ],
  },

  physioAtHome: {
    sectionHeading: "In-Home Visits",
    brandTitle: "Physio@home",
    intro: "Convenient physiotherapy visits delivered in the comfort of your own home.",
    points: [
      "In-home visits",
      "Personalised care",
      "Better movement, better living",
    ],
    ctaLabel: "WhatsApp to book a home visit",
    whatsappPrefill:
      "Hello, I would like to book a Physio@home in-home physiotherapy visit with Mdaka G A Physiotherapy.",
  },

  whatToExpect: {
    heading: "What to Expect",
    intro: "A straightforward overview of your visit, from booking to follow-up.",
    steps: [
      {
        step: 1,
        title: "Book by WhatsApp or Phone",
        description:
          "Message us on WhatsApp (076 232 5034) or call 017 647 1161 to arrange your clinic or weekday in-house visit.",
      },
      {
        step: 2,
        title: "Assessment",
        description:
          "We discuss your medical history, daily routine, and movement concerns during a thorough assessment.",
      },
      {
        step: 3,
        title: "Clear Treatment Plan",
        description:
          "Findings and goals are explained clearly so you know what each session involves.",
      },
      {
        step: 4,
        title: "Focused Session (30 min – 1 hr)",
        description:
          "Sessions range from 30 minutes to 1 hour, combining appropriate treatment and guided movement.",
      },
      {
        step: 5,
        title: "Home Routine & Follow-Up",
        description:
          "Receive practical exercises to continue between visits as you build better movement and independence.",
      },
    ],
  },

  gallery: {
    heading: "",
    intro: "",
    items: [],
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
    intro: "Answers to common questions about appointments, hours, and payment.",
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          "Send a WhatsApp message to 076 232 5034 or call the landline on 017 647 1161.",
      },
      {
        question: "What are your operating hours?",
        answer:
          "Monday 16:30 – 18:00, Tuesday 16:30 – 17:30, Wednesday Closed, Thursday 16:30 – 17:30, Friday Closed, and Saturday 09:00 – 12:00 at Dr B Mosia, 22a Clerq Street, Bethal 2310. In-house calls are available on weekdays only (Monday – Friday).",
      },
      {
        question: "Where are Saturday appointments held?",
        answer:
          "Saturday sessions (09:00 – 12:00) are available at Dr B Mosia, 22a Clerq Street, Bethal, 2310.",
      },
      {
        question: "Do you accept medical aid and cash?",
        answer: "Yes, cash and medical aids are accepted.",
      },
      {
        question: "How long is a physiotherapy session?",
        answer: "Sessions range from 30 minutes to 1 hour.",
      },
      {
        question: "Do you offer in-home visits?",
        answer:
          "Yes, Physio@home offers in-home visits and weekday in-house calls (Monday – Friday). Message us on WhatsApp at 076 232 5034 to book a home visit.",
      },
    ],
  },

  ctaBand: {
    heading: "Let's get you moving!",
    subtext: "Your Movement, Our Priority — reach out by WhatsApp or phone to arrange your visit.",
  },

  contact: {
    heading: "Contact & Location",
    intro:
      "Reach out on WhatsApp or call our landline to book an appointment, or send a quick request below.",
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
        body: "Mdaka G A Physiotherapy (Pr. Nr 0491292) is a physiotherapy practice in Bethal, Mpumalanga (RSA), run by Gugu Mdaka, Physiotherapist.",
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
        body: "If you have questions about this Privacy Policy or wish to update your details, please WhatsApp 076 232 5034 or call 017 647 1161.",
      },
    ],
  },
};
