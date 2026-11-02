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
    summary: string;
    about: string;
    email: string;
    socials: SocialLink[];
}