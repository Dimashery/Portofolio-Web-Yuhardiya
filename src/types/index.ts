export type Project = {
    id: string;
    title: string;
    description: string;
    techstack: string[];
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