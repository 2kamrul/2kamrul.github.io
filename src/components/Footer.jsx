import PropTypes from "prop-types"

function Footer({ children = () => {} }) {
    return (
        <section name="about-footer" className="ct-section-without-margin">
            <h2 className="pb-2 md:pb-4 lg:pb-6">Let&apos;s get in touch</h2>
            <p className="pb-1 md:pb-2 lg:pb-3">
                Do you have an interesting project I can help with? Feel free to reach out to me!
            </p>
            <div className="inline-grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
        </section>
    )
}

Footer.propTypes = {
    children: PropTypes.node,
}

Footer.defaultProps = {
    children: () => {},
}
export default Footer
