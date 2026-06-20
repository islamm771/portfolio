"use client";
import Image from "next/image";
import Link from "next/link";
import { GoDownload } from "react-icons/go";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="" id="home">
            <div className="container mx-auto px-6 xl:px-24 py-16">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="mb-5">
                            <h2 className="text-5xl font-bold mb-4 flex items-center gap-2 flex-wrap">
                                Hi, I’m
                                <Typewriter
                                    options={{
                                        strings: ["Islam Ibrahim", "Frontend Developer"],
                                        autoStart: true,
                                        loop: true,
                                        wrapperClassName: "text-primary font-bold",
                                        cursorClassName: "text-primary",
                                    }}
                                />
                            </h2>
                            <p className="text-xl font-medium text-fg mb-4">
                                Frontend Developer | React.js & Next.js
                            </p>
                            <p className="max-w-xl leading-8 text-fg/70">
                                I specialize in building fast, scalable, and user-friendly web
                                applications with React.js, Next.js, and TypeScript. From turning Figma
                                designs into responsive interfaces to optimizing performance and SEO, I
                                focus on delivering exceptional digital experiences.
                            </p>
                        </div>
                        <div className="flex items-center flex-wrap gap-4">
                            <Link href="#contact" className="btn bg-primary text-white font-medium rounded-4xl">
                                Hire me
                            </Link>
                            <a
                                href="/Islam_Ibrahim.pdf"
                                download="Islam_Ibrahim_CV.pdf"
                                className="btn bg-surface text-fg font-medium rounded-4xl"
                            >
                                Download CV
                                <GoDownload />
                            </a>
                        </div>
                    </div>
                    <div>
                        <Image
                            className="w-full"
                            src={"/imgs/illustration_1.png"} alt="illustration_1"
                            width={500} height={500} loading="eager" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home