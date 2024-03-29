export interface IPersonalInfo {
    name: string;
    designation: string;
}

export type ISummary = string;

export interface ISocialLinks {
    website?: {
        name: string;
        url: string;
    };
    mailId?: string;
    mobile?: number;
    linkedin?: string;
    github?: string;
    npm?: string;
}

export type ISkills = string[];

export interface ISectionContent {
    name: string;
    url?: string;
    source?: string;
    description?: string;
    list: string[];
    from?: Date | 'present';
    to?: Date | 'present';
}

export interface ISectionInfo {
    title: string;
    content: ISectionContent[];
}

export interface Academics {
    name: string;
    institite: {
        name: string;
        url?: string;
    };
    url?: string;
    description?: string;
    from: Date | 'present';
    to: Date | 'present';
}

export interface IResumeDetails {
    personalInfo: IPersonalInfo;
    summary: ISummary;
    socialLinks: ISocialLinks;
    educationInfo: Academics[];
    skills: ISkills;
    sectionInfo: ISectionInfo[];
    certifications: Academics[];
}

export default IResumeDetails;
