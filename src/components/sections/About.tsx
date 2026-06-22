import Image from "next/image";

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto px-6 xl:px-24 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-5xl font-bold mb-4">
                            About <span className="text-[#00ADB5]">me</span>
                        </h2>

                        <p className="text-fg/70 leading-8">
                            I’m a passionate Frontend Developer specializing in React.js and
                            Next.js, with a strong focus on building modern, responsive, and
                            user-friendly web applications. I enjoy transforming ideas and designs
                            into seamless digital experiences through clean, maintainable, and
                            scalable code.

                            <br />
                            <br />

                            My expertise includes React, Next.js, TypeScript, Tailwind CSS, API
                            integration, and performance optimization. I continuously explore new
                            technologies and best practices to create fast, accessible, and
                            high-quality applications that deliver real value to users and
                            businesses.
                        </p>
                    </div>

                    <div>
                        <Image
                            className="w-full"
                            src="/imgs/illustration_2.png"
                            alt="illustration_2"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;