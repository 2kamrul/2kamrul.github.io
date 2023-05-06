import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function IconButtonNavigation({ path = null, icon = () => {}, title = null }) {
    return (
        <Link to={path}>
            <div className="cs-icon-button-wrapper group h-14 min-w-[200px] cursor-pointer">
                <div className="cs-icon-button-background" />
                <div className="cs-icon-button flex items-center justify-center font-bold">
                    {icon}
                    <p className="pl-2">{title}</p>
                </div>
            </div>
        </Link>
    )
}

IconButtonNavigation.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.element,
}

IconButtonNavigation.defaultProps = {
    title: null,
    path: null,
    icon: () => {},
}

export default IconButtonNavigation
