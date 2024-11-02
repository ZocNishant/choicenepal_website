import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h2>Your Company</h2>
          <p>
            Dedicated to empowering communities and fostering self-reliance
            through our mission-driven programs. Join us in making a difference!
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>1234 Street Name, City, Country</p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Email: info@yourcompany.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">🔵</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#instagram" aria-label="Instagram">📸</a>
            <a href="#linkedin" aria-label="LinkedIn">🔗</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Developed by Nishant Joshi</p>
      </div>
    </footer>
  );
};

export default Footer;
