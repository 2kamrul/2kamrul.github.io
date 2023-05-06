import IconButtonNavigation from "components/IconButtonNavigation"
import { TbBriefcase, TbMail } from "react-icons/tb"
import { Link } from "react-router-dom"
import getExperince from "utilities/Utilities"
import { SiTypescript, SiNestjs, SiExpress } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { GrReactjs } from "react-icons/gr"
import { ReactComponent as Typeorm } from "assets/typeorm.svg"

function Home() {
    return (
        <div className="grid h-full grid-cols-3 gap-2">
            <section className="order-2 col-span-3 lg:order-1 lg:col-span-2">
                <h2 className="pb-1 text-secondary-main md:pb-2 lg:pb-3">Hey there,</h2>
                <h3 className="pb-1 md:pb-2 lg:pb-3">My name is Kamrul Islam.</h3>
                <h4 className="pb-1 md:pb-2 lg:pb-3">
                    I am a<span className="font-bold text-secondary-main"> Fullstack Web Developer </span>{" "}
                    based in Dhaka, Bangladesh.
                </h4>
                <p className="pb-1 md:pb-2 lg:pb-3">
                    Experienced Full-Stack developer with a focus on web development, adept at creating
                    efficient and scalable solutions with over{" "}
                    <span className="text-secondary-light">{` ${getExperince()} `}</span> years of industry
                    experience.
                </p>

                <div className="mt-3 inline-grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <IconButtonNavigation
                        title="My Portfolio"
                        path="/portfolio"
                        icon={<TbBriefcase fontSize={21} />}
                    />

                    <IconButtonNavigation
                        title="Get In Touch"
                        path="/contact"
                        icon={<TbMail fontSize={21} />}
                    />

                    <p className="w-full md:self-center">
                        or more
                        <Link
                            to="/about"
                            className="ml-2 cursor-pointer border-b-[1px] border-b-secondary-light text-secondary-light"
                        >
                            about me
                        </Link>
                    </p>
                </div>
            </section>

            <section className="order-1 col-span-3 flex items-center justify-center pb-28 pt-20 lg:order-2 lg:col-span-1">
                <div className="cubespinner mb-20 mr-28">
                    <div className="face1">
                        <SiNestjs color="#F06529" />
                        <p>NestJS</p>
                    </div>
                    <div className="face2">
                        <FaNodeJs color="#3C873A" />
                        <p>NodeJS</p>
                    </div>
                    <div className="face3">
                        <SiExpress color="#000000" />
                        <p>ExpressJS</p>
                    </div>
                    <div className="face4">
                        <Typeorm color="#4DB33D" height={60} width={60} />
                        <p>TypeORM</p>
                    </div>
                    <div className="face5">
                        <GrReactjs color="#61DBFB" />
                        <p>ReactJS</p>
                    </div>
                    <div className="face6">
                        <SiTypescript color="#007ACC" />
                        <p>TypeScript</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
