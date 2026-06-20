import { journeys } from "@/utils/data";
import Image from "next/image";
import JourneyCard from "../ui/JourneyCard";






const Journey = () => {
    return (
        <section id="my-journey" className="bg-bg">
            <div className="container mx-auto px-6 xl:px-24 py-20">
                <h2 className="mb-12 text-5xl font-bold">
                    My <span className="text-primary">Journey</span>
                </h2>
                <p className="mb-12 max-w-2xl text-lg text-fg/70">
                    My journey in web development started with learning the fundamentals
                    of frontend technologies and gradually evolved into building modern
                    web applications using React.js and Next.js. Each step has helped me
                    grow as a developer and deliver better digital experiences.
                </p>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        {journeys.map((item, index) => (
                            <JourneyCard {...item} index={index} key={index} />
                        ))}
                    </div>

                    <div className="items-center justify-center hidden lg:flex">
                        <Image
                            src="/imgs/illustration_4.png"
                            alt="journey"
                            width={500}
                            height={500}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey