export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <h2>Contact Me!</h2>
            <form action="/submit_form_url" method="POST" className="contact-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />

                <button type="submit">Send</button>
            </form>

            <section id="resume">
                <h2><a href="https://docs.google.com/document/d/1Ktj5pnPCbSgMMqKcQZ7b-053J9KFUADHN6lOvxSYfiE/edit?usp=sharing" target="_blank">Resume</a></h2>
            </section>

            <section id="contact-links">
            <ul>
                <li><a href="https://github.com/JackStendeback" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jack-stendeback-730851281/" target="_blank">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/jack.stendeback/" target="_blank">Facebook</a></li>
            </ul>
            </section>
        </footer>
    );
}