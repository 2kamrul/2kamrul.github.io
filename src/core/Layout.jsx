import { useState } from "react"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { AiOutlineClose, AiFillLinkedin, AiFillGitlab } from "react-icons/ai"
import { VscGithub } from "react-icons/vsc"
import { Link, Outlet } from "react-router-dom"
import { LinkGitHub, LinkGitLab, LinkLinkedIn } from "data/links"
import ContactItem from "components/ContactItem"

function Layout() {
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const navOptions = [
        {
            id: 1,
            title: "Home",
            subTitle: "Introduction",
            path: "/",
        },
        {
            id: 2,
            title: "About",
            subTitle: "Skills And Experience",
            path: "/about",
        },
        {
            id: 3,
            title: "Portfolio",
            subTitle: "Projects I Worked On",
            path: "/portfolio",
        },
        {
            id: 4,
            title: "Contact",
            subTitle: "Get In Touch",
            path: "/contact",
        },
    ]

    const variants = {
        initial: { opacity: 0, translateX: -50 },
        animate: { opacity: 1, translateX: 0 },
        transition: { duration: 2 },
    }

    return (
        <div className="overflow-hidden">
            {/**
             * sidebar_width = 80px
             * drawer_width = 300px
             * Main container left-padding = sidebar_width
             * For invisibling drawer, main container negative left-margin = drawer_width
             * For visibling drawer, main container left margin = 0
             */}

            {/* Sidebar */}
            <header
                name="side"
                className={`fixed inset-x-0 z-[999] flex h-[80px] w-full flex-row 
                    items-center justify-between bg-gradient-to-b from-primary-dark to-primary-main px-4 shadow-2xl md:inset-y-0 md:min-h-screen md:w-[80px] md:flex-col`}
            >
                <div
                    role="presentation"
                    onMouseDown={() => setDrawerOpen((state) => !state)}
                    className="group flex h-20 w-full cursor-pointer items-center justify-start md:order-2 md:justify-center"
                >
                    <span className="group-hover:animation-pause animate-pulse-heartbeat">
                        {isDrawerOpen ? (
                            <AiOutlineClose fontSize={32} />
                        ) : (
                            <HiOutlineMenuAlt2 fontSize={38} />
                        )}
                    </span>
                </div>
                <div className="flex h-full min-w-[80px] cursor-pointer items-center justify-center text-secondary-main hover:opacity-90 md:order-1 md:h-20 md:w-full md:bg-secondary-dark md:text-white">
                    <Link to="/" className="text-6xl font-extrabold">
                        K
                    </Link>
                </div>
                <div className="flex w-full flex-row items-center justify-end gap-2 sm:pr-2 md:order-3 md:flex-col md:justify-center md:pb-2">
                    <ContactItem link={LinkLinkedIn} icon={<AiFillLinkedin fontSize={30} />} />
                    <ContactItem link={LinkGitHub} icon={<VscGithub fontSize={30} />} />
                    <ContactItem link={LinkGitLab} icon={<AiFillGitlab fontSize={30} />} />
                </div>
            </header>

            <nav
                name="nav"
                className={`fixed bottom-0 left-[-300px] top-0 z-[998] flex h-full w-[300px] flex-col justify-between bg-primary-main pt-[80px] 
             shadow-2xl md:left-[-220px] md:p-0 md:pt-0 ${
                 isDrawerOpen ? "cs-drawer-open" : "cs-drawer-close"
             }`}
            >
                {navOptions?.map(({ id, title, subTitle, path }) => (
                    <Link
                        key={id}
                        to={path}
                        onMouseDown={() => setDrawerOpen(false)}
                        className="cs-drawer-item group z-10 flex-1"
                        variants={variants}
                    >
                        <div
                            className="flex h-full cursor-pointer flex-col justify-center pl-8"
                            onMouseDown={() => setDrawerOpen(false)}
                            role="presentation"
                        >
                            <h4>{title}</h4>
                            <p className="text-gray-400">{subTitle}</p>
                        </div>
                        <div className="cs-drawer-item-overlay" />
                        <div className="cs-drawer-item-bottom-border" />
                    </Link>
                ))}
            </nav>

            <main
                name="main-container"
                className="cs-main min-h-screen bg-primary-main pt-[80px] md:pt-0"
                role="presentation"
                onMouseDown={() => setDrawerOpen(false)}
            >
                <div
                    className={`cs-main-container min-h-screen overflow-y-auto md:pl-[80px] ${
                        isDrawerOpen && "cs-main-container-push"
                    } 
                flex flex-col items-center justify-center bg-primary-dark`}
                >
                    <div className="max-w-[1180px] p-5">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout
