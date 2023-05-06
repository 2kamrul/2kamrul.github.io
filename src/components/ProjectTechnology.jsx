import PropTypes from "prop-types"

function ProjectTechnology({ name = null }) {
    return (
        <p className="cs-technology rounded-sm bg-secondary-main p-2 text-center text-sm font-bold">{name}</p>
    )
}

ProjectTechnology.propTypes = {
    name: PropTypes.string,
}

ProjectTechnology.defaultProps = {
    name: null,
}

export default ProjectTechnology
