import PropTypes from "prop-types"

function ContactItem({ link = null, icon = () => {} }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="cursor-pointer py-2 hover:opacity-70">
            {icon}
        </a>
    )
}

ContactItem.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.element,
}

ContactItem.defaultProps = {
    link: null,
    icon: () => {},
}

export default ContactItem
