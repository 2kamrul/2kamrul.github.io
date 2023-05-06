import { LinkGitHub, LinkGitLab, LinkLinkedIn } from "data/links"

function Contact() {
    return (
        <div className="flex h-full items-center">
            <div>
                <h2 className="pb-1 md:pb-2 lg:pb-3">Contact</h2>
                <h3 className="pb-1 md:pb-2 lg:pb-3">Where to find me</h3>
                <p className="md:pb-1 lg:pb-2">
                    Do you have an interesting project I can help with? Feel free to reach out to me by using
                    one of the following:
                </p>
                <ul className="list-disc pl-10 leading-9">
                    <li>
                        Email :{" "}
                        <a
                            className="border-b-[1px] border-secondary-light text-secondary-light"
                            href="mailto:3kamrulislam@gmail.com"
                        >
                            3kamrulislam@gmail.com
                        </a>
                    </li>
                    <li>
                        LinkedIn :{" "}
                        <a
                            href={LinkLinkedIn}
                            target="_blank"
                            rel="noreferrer"
                            className="border-b-[1px] border-secondary-light text-secondary-light"
                        >
                            3kamrul
                        </a>
                    </li>
                    <li>
                        GitHub :{" "}
                        <a
                            href={LinkGitHub}
                            target="_blank"
                            rel="noreferrer"
                            className="border-b-[1px] border-secondary-light text-secondary-light"
                        >
                            2kamrul
                        </a>
                    </li>
                    <li>
                        GitLab :{" "}
                        <a
                            href={LinkGitLab}
                            target="_blank"
                            rel="noreferrer"
                            className="border-b-[1px] border-secondary-light text-secondary-light"
                        >
                            2kamrul
                        </a>
                    </li>
                    <li>
                        What&apos;s App :{" "}
                        <a className="text-secondary-light" href="tel:3kamrulislam@gmail.com">
                            +8801677695691
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
