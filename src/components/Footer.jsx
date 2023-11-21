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
                <h2><a href="assets/JackStendeback-Resume.pdf" download="Jack Stendeback Software Developer Resume" target="_blank">Resume</a></h2>
            </section>

            <section id="contact-links">
            <ul>
                <li>GitHub</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
            </ul>
            </section>
        </footer>
    );
}