"use client";
import { projects } from "@/utils/data";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

const Works = () => {
    return (
        <section id="my-work" style={{ backgroundImage: "url('/imgs/my-works-bg.png')" }}>
            <div className="container mx-auto px-6 xl:px-24 py-20">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="mb-12 text-5xl font-bold text-white">
                        My <span className="text-primary">Work</span>
                    </h2>
                    <p className="mb-12 max-w-2xl text-lg leading-8 text-fg/70">
                        Explore some of my recent projects, where I transformed ideas and
                        designs into modern digital experiences with a focus on performance,
                        usability, and clean code.
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Works