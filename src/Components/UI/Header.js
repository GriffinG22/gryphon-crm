import "./Header.css";
import logo from "../../imgs/gryphonLogo.png";

const Header = (props) => {
  return (
    <nav className="header">
      <div className="logo_content">
        <img className="logo" src={logo} alt="Gryphon Logo" />
        <h2 className="header_text">CRM</h2>
      </div>
    </nav>
  );
};

export default Header;
