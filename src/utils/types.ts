import { IconType } from "react-icons";

export interface IService {
    title: string,
    icon: IconType,
    description: string
}


export interface ISkill {
    id: number,
    name: string,
    icon: IconType,
}

export interface IJourney {
    year: string,
    title: string,
    company: string,
    description: string
}

export interface IProject {
    id: number,
    title: string,
    category: string,
    image: string,
    description: string,
    tech: string[],
    github: string,
    live: string,
}