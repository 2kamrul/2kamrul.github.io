import PropTypes from "prop-types"
import ProjectTechnology from "./ProjectTechnology"

function Project({ path = null, title = null, shortDescription = null, technologies = [] }) {
    return (
        <div className="cs-project-item">
            <img src={path} alt="Project 1" className="h-auto w-full object-contain" />
            <div className="overflow-hidden bg-primary-dark p-3">
                <h5 className="pb-2">{title}</h5>
                <p className="text-sm text-gray-400">{shortDescription}</p>
            </div>
            <div className="cs-project-item-overlay flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                    {technologies?.map((item) => {
                        return <ProjectTechnology key={item} name={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
}

Project.defaultProps = {
    path: null,
    title: null,
    shortDescription: null,
    technologies: [],
}

export default Project
