import { skillList } from "data/skills"
import { jobs } from "data/job"
import Job from "components/Job"
import { TbBriefcase, TbMail } from "react-icons/tb"
import IconButtonNavigation from "components/IconButtonNavigation"
import Footer from "components/Footer"

function About() {
    return (
        <>
            <section className="ct-section">
                <div className="inline-block p-2">
                    <div className="cs-tooltip-arrow relative z-10 bg-white px-6 py-4 text-xl font-bold text-gray-700 text-opacity-75">
                        It&rsquo;s Me
                    </div>
                </div>
                <h3 className="pb-1 sm:pb-2 lg:pb-4">Kamrul islam</h3>
                <p className="pb-4 lg:text-justify">
                    As a professional software engineer, I have an impressive track record of developing
                    high-quality software solutions that meet client expectations. I have experience working
                    on a variety of projects across different industries, from small startups to large
                    enterprise organizations. My ability to quickly learn new technologies and adapt to new
                    challenges has been key to my success in the field. In addition, my strong communication
                    and collaboration skills allow me to work effectively with team members and stakeholders,
                    ensuring that projects are delivered on time and within budget. With my passion for
                    learning and dedication to excellence, I am confident that I can make a valuable
                    contribution to any software development team.
                </p>
                <p className="lg:text-justify">
                    Right now I work as a {jobs[0].position} at{" "}
                    <a
                        href={jobs[0].companyWebSite}
                        target="_blank"
                        rel="noreferrer"
                        className="font-extrabold text-secondary-main"
                    >
                        {jobs[0].company}.
                    </a>
                </p>
            </section>

            <section className="ct-section">
                <h3 className="text-gray-200">SKILLS</h3>
                <div className="p-5">
                    {skillList?.map(({ title, skills }) => (
                        <div key={title} className="[&:not(:last-child)]:pb-8">
                            <h4 className="border-b-2 pb-2 text-gray-300">{title}</h4>
                            <div className="mt-2 grid grid-cols-4 gap-2 md:grid-cols-5 lg:grid-cols-7">
                                {skills?.map((item) => (
                                    <div key={item?.name} className="flex flex-col items-center p-2">
                                        <img
                                            className={
                                                item?.style
                                                    ? `mb-2 h-8 w-8 md:h-10 md:w-10 ${item?.style}`
                                                    : "mb-2 h-8 w-8 md:h-10 md:w-10"
                                            }
                                            src={item?.src}
                                            alt={`img-${item?.name}`}
                                        />
                                        <p className="text-gray-300">{item?.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ct-section">
                <h3 className="text-gray-200">Work Experience</h3>
                <div className="p-5">
                    {jobs?.map((item) => (
                        <Job
                            key={item?.id}
                            duration={item?.duration}
                            city={item?.city}
                            country={item?.country}
                            position={item?.position}
                            company={item?.company}
                            companyWebSite={item?.companyWebSite}
                            works={item?.works}
                            currentJob={item?.currentJob}
                        />
                    ))}
                </div>
            </section>

            <Footer>
                <IconButtonNavigation
                    title="My Portfolio"
                    path="/portfolio"
                    icon={<TbBriefcase fontSize={21} />}
                />

                <IconButtonNavigation title="Get In Touch" path="/contact" icon={<TbMail fontSize={21} />} />
            </Footer>
        </>
    )
}

export default About
