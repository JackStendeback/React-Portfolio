// Add in links to the project repo's and the deployed applications once complete.
export default function Projects({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}