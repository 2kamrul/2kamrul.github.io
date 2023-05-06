import Project from "components/Project"
import { projectList } from "data/projects"
import { TbMail } from "react-icons/tb"
import IconButtonNavigation from "components/IconButtonNavigation"
import Footer from "components/Footer"
import { BsPersonFill } from "react-icons/bs"

function Portfolio() {
    return (
        <>
            <div className="ct-section min-h-[250px] bg-primary-light">
                <h3 className="pb-1 md:pb-2 lg:pb-3">Fullstack Web Developer Portfolio</h3>
                <p className="font-semibold text-gray-300">Just some of the projects I worked on.</p>
                <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projectList?.map((item) => {
                        return (
                            <Project
                                key={item?.id}
                                path={item?.path}
                                title={item?.title}
                                shortDescription={item?.shortDescription}
                                technologies={item?.technologies}
                            />
                        )
                    })}
                </div>
            </div>

            <Footer>
                <IconButtonNavigation title="About Me" path="/about" icon={<BsPersonFill fontSize={21} />} />
                <IconButtonNavigation title="Get In Touch" path="/contact" icon={<TbMail fontSize={21} />} />
            </Footer>
        </>
    )
}

export default Portfolio
