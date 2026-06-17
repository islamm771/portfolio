import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface IProjectCard {
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
}

const ProjectCard = ({
    title,
    category,
    image,
    description,
    tech,
    github,
    live,
}: IProjectCard) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-white/5 bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
            <div className="overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6">
                <span className="text-sm font-medium text-primary">
                    {category}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-fg">
                    {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-fg/70">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex gap-3">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition hover:opacity-90"
                    >
                        <FiGithub />
                        Code
                    </a>

                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-primary transition hover:bg-primary hover:text-white"
                    >
                        <FiExternalLink />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;