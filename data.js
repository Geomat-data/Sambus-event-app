// ─── SAMBUS GEOSPATIAL EVENT DATA ───────────────────────────────────────────
const APP_DATA = {

  // Current event details
  currentEvent: {
    id: "sge2026",
    name: "Sambus Geospatial Summit 2026",
    tagline: "Mapping the Future of Africa",
    startDate: "2026-04-15",
    endDate: "2026-04-17",
    venue: "Transcorp Hilton Abuja",
    address: "1 Aguiyi Ironsi Street, Maitama, Abuja, FCT",
    lat: 9.0782,
    lng: 7.4891,
    registration: "https://sambus.co.ke/events",
    hashtag: "#SGS2026",
    attendees: 450,
    speakers: 24,
    sessions: 36
  },

  // Venue rooms
  rooms: [
    { id: "r1", name: "Main Hall",       capacity: 450, floor: "Ground" },
    { id: "r2", name: "Workshop Room A", capacity: 60,  floor: "1st Floor" },
    { id: "r3", name: "Workshop Room B", capacity: 60,  floor: "1st Floor" },
    { id: "r4", name: "Innovation Lab",  capacity: 40,  floor: "2nd Floor" },
    { id: "r5", name: "Exhibition Area", capacity: 300, floor: "Ground" }
  ],

  // Event tracks
  tracks: [
    { id: "all",      label: "All Tracks", color: "#6b7280" },
    { id: "gis",      label: "GIS & Mapping",   color: "#003087" },
    { id: "remote",   label: "Remote Sensing",  color: "#00873C" },
    { id: "uav",      label: "UAV & Drone",     color: "#f97316" },
    { id: "survey",   label: "Surveying",       color: "#8b5cf6" },
    { id: "keynote",  label: "Keynote",         color: "#0ea5e9" }
  ],

  // 3-day schedule
  days: [
    { id: "day1", label: "Day 1", date: "2026-04-15", theme: "Foundations & Strategy" },
    { id: "day2", label: "Day 2", date: "2026-04-16", theme: "Tools & Technologies" },
    { id: "day3", label: "Day 3", date: "2026-04-17", theme: "Fieldwork & Futures" }
  ],

  sessions: [
    // ── DAY 1 ──
    {
      id: "s01", day: "day1", track: "keynote", room: "r1",
      start: "09:00", end: "09:45",
      title: "Opening Keynote: Geospatial Intelligence in Africa's Digital Decade",
      speakers: ["spk1"],
      description: "A vision for how geospatial data is shaping infrastructure, agriculture, and urban planning across the continent.",
      type: "keynote"
    },
    {
      id: "s02", day: "day1", track: "gis", room: "r1",
      start: "10:00", end: "10:50",
      title: "ArcGIS Pro: Advanced Cartography and Spatial Analysis",
      speakers: ["spk2"],
      description: "Deep dive into ArcGIS Pro's latest tools for professional cartography, geoprocessing automation, and 3D visualization.",
      type: "session"
    },
    {
      id: "s03", day: "day1", track: "gis", room: "r2",
      start: "10:00", end: "10:50",
      title: "ArcGIS Enterprise: Deployment Best Practices for Organizations",
      speakers: ["spk3"],
      description: "Practical guidance for IT managers and GIS administrators deploying ArcGIS Enterprise at scale.",
      type: "workshop"
    },
    {
      id: "s04", day: "day1", track: "remote", room: "r1",
      start: "11:00", end: "11:50",
      title: "ENVI for Hyperspectral Analysis: From Imagery to Insight",
      speakers: ["spk4"],
      description: "How ENVI's spectral analysis tools are transforming mineral exploration and vegetation mapping across Africa.",
      type: "session"
    },
    {
      id: "s05", day: "day1", track: "survey", room: "r3",
      start: "11:00", end: "11:50",
      title: "Trimble in the Field: Modern Survey Workflows",
      speakers: ["spk5"],
      description: "Trimble GNSS and total station workflows that connect fieldwork directly to GIS platforms.",
      type: "workshop"
    },
    {
      id: "s06", day: "day1", track: "keynote", room: "r1",
      start: "14:00", end: "14:40",
      title: "Esri Africa Strategy: What's Next for the Platform",
      speakers: ["spk1", "spk2"],
      description: "Esri's roadmap for sub-Saharan Africa — new products, training programs, and partner network expansion.",
      type: "keynote"
    },
    // ── DAY 2 ──
    {
      id: "s07", day: "day2", track: "uav", room: "r1",
      start: "09:00", end: "09:50",
      title: "Wingtra WingtraOne: Fixed-Wing VTOL for Large-Area Surveys",
      speakers: ["spk6"],
      description: "Field results from WingtraOne deployments across East Africa — accuracy benchmarks, workflow tips, and use cases.",
      type: "session"
    },
    {
      id: "s08", day: "day2", track: "gis", room: "r2",
      start: "09:00", end: "11:00",
      title: "Hands-On: ArcGIS Online Dashboard Building",
      speakers: ["spk2", "spk3"],
      description: "Build a live operations dashboard in ArcGIS Online from scratch. Bring your laptop.",
      type: "workshop"
    },
    {
      id: "s09", day: "day2", track: "remote", room: "r1",
      start: "10:00", end: "10:50",
      title: "Land Cover Change Detection with ENVI and Google Earth Engine",
      speakers: ["spk4"],
      description: "Combining ENVI's classification tools with GEE's cloud processing for multi-year change analysis.",
      type: "session"
    },
    {
      id: "s10", day: "day2", track: "uav", room: "r3",
      start: "10:00", end: "10:50",
      title: "UAV Regulations in West Africa: Compliance and Operations",
      speakers: ["spk6"],
      description: "Current regulatory landscape for commercial UAV operations in Nigeria, Ghana, and Côte d'Ivoire.",
      type: "session"
    },
    {
      id: "s11", day: "day2", track: "survey", room: "r4",
      start: "14:00", end: "15:30",
      title: "Trimble Business Center: Processing Survey Data at Speed",
      speakers: ["spk5"],
      description: "Trimble Business Center workflows from raw field data to final deliverables — live demo included.",
      type: "workshop"
    },
    // ── DAY 3 ──
    {
      id: "s12", day: "day3", track: "keynote", room: "r1",
      start: "09:00", end: "09:45",
      title: "Closing Keynote: Building Africa's Geospatial Workforce",
      speakers: ["spk1", "spk3"],
      description: "Strategies for building the next generation of GIS professionals — training, certification, and career pathways.",
      type: "keynote"
    },
    {
      id: "s13", day: "day3", track: "gis", room: "r1",
      start: "10:00", end: "10:50",
      title: "ArcGIS StoryMaps: Communicating Geospatial Insights",
      speakers: ["spk2"],
      description: "How to use StoryMaps to communicate complex spatial analysis to non-GIS stakeholders and the public.",
      type: "session"
    },
    {
      id: "s14", day: "day3", track: "remote", room: "r2",
      start: "10:00", end: "10:50",
      title: "Agricultural Monitoring with Satellite Imagery",
      speakers: ["spk4"],
      description: "NDVI, crop stress detection, and yield prediction using freely available satellite data and ENVI tools.",
      type: "session"
    },
    {
      id: "s15", day: "day3", track: "uav", room: "r3",
      start: "11:00", end: "12:00",
      title: "Flight Demo & Q&A: Wingtra WingtraOne Live",
      speakers: ["spk6"],
      description: "Live outdoor flight demonstration of the WingtraOne with real-time data capture and Q&A session.",
      type: "demo"
    }
  ],

  speakers: [
    {
      id: "spk1",
      name: "Dr. Amina Osei",
      title: "Regional Director, Esri East Africa",
      org: "Esri",
      photo: "https://api.dicebear.com/7.x/initials/svg?seed=AO&backgroundColor=003087&textColor=ffffff",
      bio: "Dr. Amina Osei leads Esri's operations across East Africa, overseeing technology deployment for government, utilities, and NGO clients in 12 countries. She holds a PhD in Geoinformatics from ITC Netherlands and has 18 years of GIS experience. She is a passionate advocate for geospatial education in African universities.",
      linkedin: "https://linkedin.com",
      sessions: ["s01", "s06", "s12"]
    },
    {
      id: "spk2",
      name: "Chukwuemeka Nwachukwu",
      title: "Senior GIS Solutions Engineer",
      org: "Sambus Geospatial",
      photo: "https://api.dicebear.com/7.x/initials/svg?seed=CN&backgroundColor=003087&textColor=ffffff",
      bio: "Emeka specialises in ArcGIS Pro, ArcGIS Online, and enterprise GIS deployments. He has trained over 300 professionals across Nigeria and Ghana in the past 3 years, and is a certified Esri instructor with deep expertise in cartography and spatial analytics.",
      linkedin: "https://linkedin.com",
      sessions: ["s02", "s06", "s08", "s13"]
    },
    {
      id: "spk3",
      name: "Fatima Al-Rashid",
      title: "GIS Systems Architect",
      org: "Sambus Geospatial",
      photo: "https://api.dicebear.com/7.x/initials/svg?seed=FA&backgroundColor=00873C&textColor=ffffff",
      bio: "Fatima designs and deploys ArcGIS Enterprise environments for large organisations, including federal agencies and multinational energy companies. She specialises in federated architectures, high-availability deployments, and enterprise security compliance.",
      linkedin: "https://linkedin.com",
      sessions: ["s03", "s08", "s12"]
    },
    {
      id: "spk4",
      name: "Dr. Emmanuel Boateng",
      title: "Remote Sensing Specialist",
      org: "University of Ghana / Sambus Partner",
      photo: "https://api.dicebear.com/7.x/initials/svg?seed=EB&backgroundColor=00873C&textColor=ffffff",
      bio: "Dr. Boateng's research focuses on land cover change, agricultural remote sensing, and climate impact analysis using hyperspectral imagery. He collaborates with Sambus to bridge academic remote sensing research and commercial ENVI deployments.",
      linkedin: "https://linkedin.com",
      sessions: ["s04", "s09", "s14"]
    },
    {
      id: "spk5",
      name: "James Kariuki",
      title: "Survey Technology Manager",
      org: "Sambus Geospatial",
      photo: "https://api.dicebear.com/7.x/initials/svg?seed=JK&backgroundColor=8b5cf6&textColor=ffffff",
      bio: "James manages Trimble hardware sales and technical support for East and West Africa. He has led survey equipment deployments for major infrastructure projects across Nigeria, Kenya, and Tanzania, including oil pipeline surveys and urban cadastral mapping.",
      linkedin: "https://linkedin.com",
      sessions: ["s05", "s11"]
    },
    {
      id: "spk6",
      name: "Sophie van der Berg",
      title: "UAV Applications Engineer",
      org: "Wingtra / Sambus Partner",
      photo: "https://api.dicebear.com/7.x/initials/svg?seed=SV&backgroundColor=f97316&textColor=ffffff",
      bio: "Sophie is Wingtra's Africa applications lead, supporting WingtraOne deployments across mining, agriculture, and infrastructure sectors. Based in Nairobi, she has conducted over 200 commercial survey missions and is a qualified UAV instructor.",
      linkedin: "https://linkedin.com",
      sessions: ["s07", "s10", "s15"]
    }
  ],

  products: [
    {
      id: "p1",
      name: "ArcGIS Pro",
      vendor: "Esri",
      category: "GIS Platform",
      logo: "🗺️",
      color: "#003087",
      tagline: "Professional desktop GIS for analysis, cartography, and 3D visualization.",
      description: "ArcGIS Pro is Esri's flagship desktop application — a 64-bit professional tool for spatial analysis, map production, 3D modelling, and advanced geoprocessing. Used by thousands of organizations across Africa for everything from utility network management to national mapping projects.",
      features: ["Spatial Analysis", "3D Visualization", "Cartography", "Python Scripting", "Real-Time Data"],
      link: "https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview",
      sambusLink: "https://sambus.co.ke/products"
    },
    {
      id: "p2",
      name: "ArcGIS Enterprise",
      vendor: "Esri",
      category: "Enterprise Platform",
      logo: "🏢",
      color: "#003087",
      tagline: "The complete web GIS platform for organizations at scale.",
      description: "ArcGIS Enterprise lets organizations host, manage, and share geospatial data, maps, and apps on their own infrastructure or cloud. It powers Sambus's clients across government, utilities, oil & gas, and NGOs — handling everything from field data collection to executive dashboards.",
      features: ["Web GIS", "Data Management", "REST APIs", "Portal", "Field Apps"],
      link: "https://www.esri.com/en-us/arcgis/products/arcgis-enterprise/overview",
      sambusLink: "https://sambus.co.ke/products"
    },
    {
      id: "p3",
      name: "ENVI",
      vendor: "NV5 Geospatial",
      category: "Remote Sensing",
      logo: "🛰️",
      color: "#1e40af",
      tagline: "Industry-standard remote sensing and image analysis software.",
      description: "ENVI is the world's most-used remote sensing platform for hyperspectral and multispectral image analysis. Sambus deploys ENVI for clients in mining exploration, agriculture, forestry, and environmental monitoring — turning raw satellite and aerial imagery into actionable intelligence.",
      features: ["Hyperspectral Analysis", "Change Detection", "Classification", "NDVI", "Image Processing"],
      link: "https://www.nv5geospatialsoftware.com/Products/ENVI",
      sambusLink: "https://sambus.co.ke/products"
    },
    {
      id: "p4",
      name: "WingtraOne",
      vendor: "Wingtra",
      category: "UAV Survey",
      logo: "✈️",
      color: "#f97316",
      tagline: "Fixed-wing VTOL drone for large-area precision surveying.",
      description: "The WingtraOne combines the coverage of a fixed-wing aircraft with the vertical takeoff of a multirotor — no runway needed. It captures survey-grade photogrammetry data over areas up to 1000 ha per flight, making it the tool of choice for Sambus clients in infrastructure, agriculture, and mining.",
      features: ["VTOL Takeoff", "PPK Accuracy", "1000 ha/flight", "Automated Flight", "Point Cloud Output"],
      link: "https://wingtra.com/drone-photogrammetry-uav/",
      sambusLink: "https://sambus.co.ke/products"
    },
    {
      id: "p5",
      name: "Trimble GNSS",
      vendor: "Trimble",
      category: "Survey Equipment",
      logo: "📡",
      color: "#0ea5e9",
      tagline: "Survey-grade GNSS receivers for centimetre-level accuracy.",
      description: "Trimble's GNSS receivers and total stations are the backbone of precise surveying across Sambus's client base in West and East Africa. From urban cadastral surveys to large-scale infrastructure corridor mapping, Trimble hardware delivers the accuracy that professional surveyors require.",
      features: ["Sub-centimetre GNSS", "Total Stations", "CORS Network", "Trimble Access", "Cloud Connectivity"],
      link: "https://geospatial.trimble.com/surveying",
      sambusLink: "https://sambus.co.ke/products"
    }
  ],

  events: [
    {
      id: "ev1",
      name: "Sambus GIS Day 2023",
      date: "2023-11-15",
      location: "Lagos, Nigeria",
      status: "past",
      attendees: 280,
      sessions: 18,
      highlights: ["First major Sambus event in West Africa", "Launched ArcGIS Enterprise training program", "200+ professionals certified"],
      recap: "https://sambus.co.ke/events"
    },
    {
      id: "ev2",
      name: "Sambus Geospatial Forum 2024",
      date: "2024-06-20",
      location: "Nairobi, Kenya",
      status: "past",
      attendees: 350,
      sessions: 26,
      highlights: ["ENVI product launch for Africa", "Wingtra flight demonstration", "Record attendance"],
      recap: "https://sambus.co.ke/events"
    },
    {
      id: "ev3",
      name: "Sambus Geospatial Summit 2026",
      date: "2026-04-15",
      location: "Abuja, Nigeria",
      status: "current",
      attendees: 450,
      sessions: 36,
      highlights: ["Largest summit to date", "Live UAV demonstration", "New Trimble GNSS showcase"],
      recap: null
    },
    {
      id: "ev4",
      name: "Sambus Innovation Forum 2027",
      date: "2027-03-10",
      location: "Accra, Ghana",
      status: "upcoming",
      attendees: null,
      sessions: null,
      highlights: ["AI + GIS theme announced", "Call for speakers open Q3 2026"],
      recap: null
    }
  ],

  thingsToKnow: [
    { icon: "🚌", title: "Getting There", body: "Transcorp Hilton is 15 mins from Abuja Airport. Shuttle service available on all event days from 7:30am. Parking available on-site." },
    { icon: "🍽️", title: "Meals", body: "Lunch and refreshments provided on all 3 days. Dietary requirements can be submitted via the registration form. Halal and vegetarian options available." },
    { icon: "📶", title: "WiFi", body: "Event WiFi: <strong>SGS2026</strong> | Password: <strong>Sambus2026</strong>. Dedicated high-speed connection for workshop participants." },
    { icon: "👗", title: "Dress Code", body: "Smart casual. The outdoor UAV demonstration on Day 3 requires closed-toe shoes and sun protection." },
    { icon: "🏨", title: "Accommodation", body: "Preferential room rates available at Transcorp Hilton. Use code <strong>SGS2026</strong> when booking. Limited rooms remaining." },
    { icon: "📸", title: "Photography", body: "Photography and videography will take place throughout the event. Please inform organisers if you wish to opt out." }
  ]
};
