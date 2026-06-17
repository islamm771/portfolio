import Image from "next/image";
import { FiSend } from "react-icons/fi";

const Contact = () => {
    return (
        <section id="contact" className="bg-bg">
            <div className="container mx-auto px-6 xl:px-24 py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Side */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl font-bold leading-tight">
                            Got a project in
                            <br />
                            <span className="text-primary">mind?</span>
                        </h2>

                        <div className="mt-8">
                            <Image
                                src="/imgs/illustration_6.png"
                                alt="contact"
                                width={350}
                                height={350}
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <form className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Your name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-xl bg-surface px-4 py-3 outline-none border border-transparent focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Your email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-xl bg-surface px-4 py-3 outline-none border border-transparent focus:border-primary"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Your Message
                            </label>

                            <textarea
                                rows={8}
                                placeholder="Message"
                                className="w-full resize-none rounded-xl bg-surface px-4 py-3 outline-none border border-transparent focus:border-primary"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90 cursor-pointer"
                        >
                            Send Message
                            <FiSend />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;