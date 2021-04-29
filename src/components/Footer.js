import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>CopyRight &copy;{`${currentYear}`}</p>
      <Link to='/about'>About</Link>
    </footer>
  );
}

export default Footer;
