
// Add in links to the project repo's and the deployed applications once complete.
export default function Projects({image, title, description, liveURL}) {
    return (
        <li id="project-links">
            <a href={liveURL} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title}></img>
            </a>
            <a href={liveURL} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
            </a>
            <p>{description}</p>
        </li>
    );
}