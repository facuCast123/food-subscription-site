import {
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__link__container">
          <span>Product</span>
          <p>Main dish</p>
          <p>Soup</p>
          <p>Salad</p>
          <p>Smoothie</p>
        </div>

        <div className="footer__link__container">
          <span>About</span>
          <p>Our story</p>
          <p>Green promise</p>
          <p>News</p>
        </div>

        <div className="footer__link__container">
          <span>Store</span>
          <p>Subscription</p>
          <p>Gift</p>
        </div>

        <div className="footer__link__container">
          <span>Help</span>
          <p>Faq</p>
          <p>Contact</p>
        </div>

        <div className="footer__link__container">
          <span>Follow us</span>
          <div className="footer__socials">
            <FaInstagram />
            <FaXTwitter />
            <FaTiktok />
            <FaPinterestP />
          </div>
        </div>
      </div>

      <span className="footer__brand">Tasteful</span>
    </footer>
  );
};

export default Footer;
