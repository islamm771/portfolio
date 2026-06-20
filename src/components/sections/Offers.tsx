"use client";
import { services } from "@/utils/data";
import ServiceCard from "../ui/ServiceCard";

import { motion } from "framer-motion";

const Offers = () => {
    return (
        <section id="what-i-offer">
            <div className="container mx-auto px-6 xl:px-24 py-20">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="mb-12 text-5xl font-bold">
                        What I <span className="text-primary">Offer</span>
                    </h2>
                    <p className="mb-12 max-w-2xl text-lg text-fg/70">
                        I help businesses and individuals build modern, responsive, and
                        high-performance web applications with React.js and Next.js.
                    </p>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, idx) => (
                            <ServiceCard service={service} key={idx} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Offers;