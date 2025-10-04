export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Margaret Mungai</h3>
          <p>
            Helping you reset, reclaim and rise with clarity, confidence, and
            purpose.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li>
              <a href="https://www.margaretmungai.com/" target="_blank">
                Margaret Mungai
              </a>
            </li>
            <li><a href="/#testimonials">Testimonials</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/madgemungai/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/madgemungai/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.tiktok.com/@madgemungai" target="_blank">
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mindsetcoachmargaretmungai"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; <span id="year"></span> Margaret Mungai. All rights reserved.
        </p>
        <p className="dev-credit small">
          Developed with ❤️ by
          <a
            href="https://www.instagram.com/art_your_dreams_designs?igsh=MWt6aDZqOG9nZzA2bg=="
            target="_blank"
          >
            Art Your Dreams
          </a>
        </p>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById("year").textContent = new Date().getFullYear();
        `
      }} />
    </footer>
  );
}
