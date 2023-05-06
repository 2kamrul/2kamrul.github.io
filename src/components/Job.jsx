import { memo } from "react"
import { GoPrimitiveDot } from "react-icons/go"
import PropTypes from "prop-types"

const Job = memo(
    ({
        duration = null,
        city = null,
        country = null,
        position = null,
        company = null,
        companyWebSite = null,
        works = [],
        currentJob = false,
    }) => (
        <div className="flex">
            <p
                className={`hidden shrink-0 grow-0 basis-52 text-right text-gray-400 lg:block ${
                    currentJob ? "pt-0" : "pt-10"
                }`}
            >
                {duration}
                <span className="block text-secondary-light">{city}</span>
                <span className="block text-secondary-light">{country}</span>
            </p>
            <div className={`relative mx-6 w-[1px] bg-gray-400 ${currentJob ? "mt-2" : "mt-0"}`}>
                <span
                    className={`absolute rounded-full ${
                        currentJob ? "-left-4 -top-3" : "-left-3 top-5 lg:top-10"
                    }`}
                >
                    <GoPrimitiveDot
                        className={`${
                            currentJob ? "text-[33px] text-secondary-main" : "text-[26px] text-gray-400"
                        }`}
                    />
                </span>
            </div>
            <div className={`flex-1 ${currentJob ? "pt-0" : "pt-5 lg:pt-10"}`}>
                <h3>
                    {position} -
                    <a href={companyWebSite} target="_blank" rel="noreferrer" className="text-secondary-main">
                        {" "}
                        {company}
                    </a>
                </h3>
                <p className="mt-1 block pl-6 text-gray-400 lg:hidden">
                    {duration}
                    <span className="text-secondary-light">
                        {" "}
                        - {city}, {country}
                    </span>
                </p>
                <ul className="mt-2 pl-4 lg:mt-4">
                    {works?.map((option) => (
                        <li key={option}>{option}</li>
                    ))}
                </ul>
            </div>
        </div>
    ),
)

Job.propTypes = {
    duration: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    position: PropTypes.string,
    company: PropTypes.string,
    companyWebSite: PropTypes.string,
    works: PropTypes.arrayOf(PropTypes.string),
    currentJob: PropTypes.bool,
}

Job.defaultProps = {
    duration: null,
    city: null,
    country: null,
    position: null,
    company: null,
    companyWebSite: null,
    works: [],
    currentJob: false,
}

export default Job
