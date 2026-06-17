import { skills } from "@/utils/data"






const Skills = () => {
    return (
        <section id="my-skills" className="bg-bg">
            <div className="container mx-auto px-6 xl:px-24 py-20">
                <h2 className="mb-12 text-5xl font-bold">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="mb-12 max-w-2xl text-lg text-fg/70">
                    Technologies and tools I use to build modern, scalable, and
                    high-performance web applications.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="group flex flex-col items-center rounded-xl bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <skill.icon
                                size={50}
                                className="mb-4 text-primary transition-transform group-hover:scale-110"
                            />

                            <h3 className="font-medium text-fg">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills