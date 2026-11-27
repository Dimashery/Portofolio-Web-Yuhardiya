export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    repoUrl?: string; // tanda ? = boleh tidak diisi
    liveUrl?: string;
}

export type SkillGroup = {
    category: string;
    items: string[];
}

export type InfoGroup = {
    label: string;
    items: string[];
}

export type Stat = {
    value: string;
    description: string;
}

export type HomeIntro = {
    label: string;
    statement: string;
    infoGroups: InfoGroup[];
    stats: Stat;
}

export type SocialLink = {
    label: string;
    url: string;
}

export type NavItem = {
    label: string;
    href: string;
}

export type Profile = {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    summary: string;
    about: string;
    email: string;
    socials: SocialLink[];
}

export type ProjectsHero = {
    intro: string;
    services: string[];
    title: string;
    aboutLabel: string;
    statement: string;
}

export type AboutMeStat = {
  value: string;
  label: string;
};

export type AboutMeHero = {
  topLabel: string;
  availability: string;
  bigTitle: string;
  greeting: string;
  description: string;
  location: string;
  tagline: string;
  stats: AboutMeStat[];
};

export type EducationItem = {
  period: string;
  school: string;
  major: string;
};

export type ExperienceItem = {
  period: string;
  place: string;
  description: string;
};

export type LanguageSkill = {
  name: string;
  level: number; // 0 sampai 100
};

export type AboutMeDetail = {
  about: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  languages: LanguageSkill[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  thumbnail: string; // gambar preview, contoh: "/images/certificates/itcb.jpg"
  pdf: string; // file PDF, contoh: "/pdf/nama-file.pdf"
};

export type Contact = {
  phoneNumber: string;
  address: string[];
  officeHours: {
    days: string;
    time: string;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};
