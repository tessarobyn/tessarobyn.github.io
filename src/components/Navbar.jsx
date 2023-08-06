import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <ul>
        <li>]</li>
        <li>
          <HashLink to="/#websitesSvg">websites</HashLink>
        </li>
        <li>,</li>
        <li>
          <HashLink to="/#gamesSvg">games</HashLink>
        </li>
        <li>,</li>
        <li>
          <HashLink to="/#languagesSvg">languages</HashLink>
        </li>
        <li>,</li>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>[</li>
      </ul>
    </div>
  );
};

export default Navbar;
