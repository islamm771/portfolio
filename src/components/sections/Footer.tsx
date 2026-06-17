import Link from "next/link"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa"
import { FiHome, FiPhone } from "react-icons/fi"
import { IoMdMail } from "react-icons/io"
import { IoPersonOutline } from "react-icons/io5"
import { RiWhatsappFill } from "react-icons/ri"

const footerLinks = [
    {
        id: 1,
        label: "Home",
        href: "#home",
        icon: FiHome
    },
    {
        id: 2,
        label: "About", href: "#about",
        icon: IoPersonOutline
    },
    {
        id: 3,
        label: "Contact", href: "#contact",
        icon: FiPhone
    },
]


const myLinks = [
    {
        id: 1,
        href: "#",
        icon: FaFacebookF,
    },
    {
        id: 2,
        href: "#",
        icon: FaLinkedin,
    },
    {
        id: 3,
        href: "#",
        icon: FaGithub,
    },
    {
        id: 4,
        href: "#",
        icon: RiWhatsappFill,
    },
    {
        id: 5,
        href: "#",
        icon: IoMdMail,
    },
]


const Footer = () => {
    return (
        <section id="contact" className="bg-bg border-t border-t-border">
            <div className="container mx-auto px-6 xl:px-24 py-20">
                <div className="flex flex-col items-center">
                    <ul className="flex items-center gap-10">
                        {footerLinks.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className="font-medium text-fg flex items-center gap-1.5"
                                >
                                    <item.icon />
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="grid grid-cols-5 gap-6 mt-12">
                        {myLinks.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className="bg-surface size-12 rounded-full flex items-center justify-center"
                                >
                                    <item.icon size={20} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer