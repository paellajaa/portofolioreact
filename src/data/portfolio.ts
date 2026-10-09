// src/data/portfolio.ts

export const personalInfo = {
  name: "Raffael Aditya Al Fachry",
  shortName: "RAFFAEL ADITYA",
  role: "Web UI/UX Designer & Front-End Developer",
  status: "READY TO BUILD",
  bio: "Siswa RPL SMKN 4 Tangerang yang passionate dalam membangun pengalaman digital yang menarik — dari desain UI/UX yang estetik hingga kode front-end yang bersih dan fungsional.",
  location: "Tangerang, Indonesia",
  email: "raffaeladitya354@gmail.com",
  phone: "+62 858 8593 8827",
  instagram: "https://instagram.com/sipaell",
  github: "https://github.com/sipaell",
  githubPage: "https://sipaell.github.io/portofolio",
  cv: "/cv-raffael-aditya.pdf",
};

export const education = [
  {
    school: "SMKN 4 Tangerang",
    major: "Rekayasa Perangkat Lunak (RPL)",
    period: "2023 – 2026",
    status: "Current",
    icon: "🏫",
  },
  {
    school: "SMPN 20 Tangerang",
    major: "SMP / Junior High",
    period: "2020 – 2023",
    status: "Alumni",
    icon: "🎓",
  },
];

export const stats = [
  { label: "Projects", value: "3+", icon: "📦" },
  { label: "RPL Student", value: "SMK", icon: "💻" },
  { label: "Passion for Code", value: "100%", icon: "🔥" },
];

export type SkillCategory = "All" | "Development" | "Design" | "Tools";

export const skills = [
  // Development
  { name: "HTML5", category: "Development" as SkillCategory, icon: "🟠", color: "#E34F26" },
  { name: "CSS3", category: "Development" as SkillCategory, icon: "🔵", color: "#1572B6" },
  { name: "Tailwind CSS", category: "Development" as SkillCategory, icon: "🌊", color: "#06B6D4" },
  { name: "Bootstrap 5", category: "Development" as SkillCategory, icon: "💜", color: "#7952B3" },
  { name: "React.js", category: "Development" as SkillCategory, icon: "⚛️", color: "#61DAFB" },
  { name: "Laravel", category: "Development" as SkillCategory, icon: "🔴", color: "#FF2D20" },
  // Design
  { name: "Web UI/UX Design", category: "Design" as SkillCategory, icon: "🎨", color: "#0080FF" },
  { name: "Figma", category: "Design" as SkillCategory, icon: "✏️", color: "#F24E1E" },
  { name: "Canva", category: "Design" as SkillCategory, icon: "🖌️", color: "#00C4CC" },
  { name: "Desain Grafis", category: "Design" as SkillCategory, icon: "🖼️", color: "#FF6B35" },
  // Tools
  { name: "CapCut", category: "Tools" as SkillCategory, icon: "🎬", color: "#000000" },
  { name: "Video Editing", category: "Tools" as SkillCategory, icon: "🎥", color: "#E3000B" },
  { name: "Git / GitHub", category: "Tools" as SkillCategory, icon: "🐙", color: "#181717" },
  { name: "VS Code", category: "Tools" as SkillCategory, icon: "💙", color: "#007ACC" },
];

export type ProjectCategory = "All" | "Web" | "Video" | "Design";

export const projects = [
  {
    id: 1,
    title: "Landing Page Website",
    category: "Web" as ProjectCategory,
    tags: ["HTML", "CSS", "Bootstrap"],
    description:
      "Proyek landing page responsif pertama yang dibangun dengan HTML, CSS, dan Bootstrap 5. Menampilkan layout modern, hero section, dan navigasi yang smooth.",
    longDescription:
      "Proyek perdana yang menandai langkah awal di dunia web development. Dibangun dengan HTML5, CSS3, dan Bootstrap 5 untuk memastikan responsivitas di berbagai ukuran layar. Fitur utama: hero section, navigasi sticky, cards, dan footer.",
    image: "/projects/landing-page.jpg",
    link: "#",
    github: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "Editing Video FOUR FAIR",
    category: "Video" as ProjectCategory,
    tags: ["CapCut", "Video Editing", "Storytelling"],
    description:
      "Proyek video editing dinamis untuk event FOUR FAIR — vlog kreatif dengan teknik storytelling dan transisi sinematik menggunakan CapCut.",
    longDescription:
      "Editing video komprehensif untuk event FOUR FAIR sekolah. Mencakup pengambilan footage, penyuntingan dinamis, penambahan efek transisi, color grading, dan penambahan musik latar. Hasil: vlog yang engaging dan bercerita.",
    image: "/projects/video-edit.jpg",
    link: "#",
    github: null,
    year: "2024",
  },
  {
    id: 3,
    title: "Tim Desain Awards GadingPro",
    category: "Design" as ProjectCategory,
    tags: ["Canva", "Desain Poster", "Event Design"],
    description:
      "Menjadi bagian dari panitia & tim desain event Awards GadingPro — membuat poster event, koordinasi acara, dan dokumentasi kegiatan.",
    longDescription:
      "Bergabung sebagai anggota tim desain dan panitia event Awards GadingPro (PKL/Internship experience). Tugas: merancang materi desain visual (poster, banner) menggunakan Canva, koordinasi antar divisi, dan mendokumentasikan jalannya acara.",
    image: "/projects/design-event.jpg",
    link: "#",
    github: null,
    year: "2024",
  },
];

export const experience = [
  {
    id: 1,
    role: "Tim Desain Visual & Media",
    company: "GadingPro Awards 2024",
    type: "INTERNSHIP",
    period: "2024",
    description:
      "Merancang materi visual promosi, banner event, dan feed media sosial untuk acara penghargaan GadingPro. Berkolaborasi langsung dengan tim event organizer.",
    skills: ["Canva", "Desain Grafis", "Media Production"],
  },
  {
    id: 2,
    role: "Video Editor & Creative Lead",
    company: "FOUR FAIR Event - SMKN 4 Tangerang",
    type: "SEASONAL",
    period: "2024",
    description:
      "Memimpin produksi konten video recap dan teaser event sekolah FOUR FAIR. Mengelola proses editing dari storyboarding hingga final rendering.",
    skills: ["CapCut", "Video Editing", "Storytelling"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Sertifikasi Kompetensi Keahlian RPL",
    issuer: "SMKN 4 Tangerang",
    date: "2024",
    credentialId: "SMKN4-RPL-2024-089",
    image: "/projects/landing-page.jpg",
    tags: ["HTML", "CSS", "JS", "PHP"],
  },
  {
    id: 2,
    title: "Web Development & UI/UX Foundations",
    issuer: "Dicoding Indonesia / Skill Academy",
    date: "2023",
    credentialId: "DICODING-UIUX-2023",
    image: "/projects/design-event.jpg",
    tags: ["Figma", "UI/UX", "Wireframing"],
  },
  {
    id: 3,
    title: "Responsive Web Design Certification",
    issuer: "FreeCodeCamp",
    date: "2023",
    credentialId: "FCC-RWD-2023",
    image: "/projects/video-edit.jpg",
    tags: ["Flexbox", "Grid", "Responsive"],
  },
];

