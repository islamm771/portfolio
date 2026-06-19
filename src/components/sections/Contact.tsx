"use client";

import { contactSchema } from "@/lib/validation/contact";
import Image from "next/image";
import { ChangeEvent, SubmitEvent, useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import z from "zod";
import AlertMessage from "../ui/AlertMessage";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        message?: string;
    }>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const submitHandler = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validation = contactSchema.safeParse(form)

        if (!validation.success) {
            const errors = z.flattenError(validation.error).fieldErrors
            setErrors({
                name: errors.name?.[0] || "",
                email: errors.email?.[0] || "",
                message: errors.message?.[0] || "",
            });
        }

        toast.success("Message is sent successfully")
    }


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
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Your name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-xl bg-surface px-4 py-3 outline-none border border-transparent focus:border-primary"
                                    name="name"
                                    value={form.name}
                                    onChange={handleInputChange}
                                />

                                {errors.name && (
                                    <AlertMessage msg={errors.name} />
                                )}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Your email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-xl bg-surface px-4 py-3 outline-none border border-transparent focus:border-primary"
                                    name="email"
                                    value={form.email}
                                    onChange={handleInputChange}
                                />

                                {errors.email && (
                                    <AlertMessage msg={errors.email} />
                                )}
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
                                name="message"
                                value={form.message}
                                onChange={handleInputChange}
                            />

                            {errors.message && (
                                <AlertMessage msg={errors.message} />
                            )}
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