import { services } from "@/utils/data";
import ServiceCard from "../ui/ServiceCard";


const Offers = () => {
    return (
        <section id="what-i-offer" className="bg-bg">
            <div className="container mx-auto px-6 xl:px-24 py-20">
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
            </div>
        </section>
    );
};

export default Offers;