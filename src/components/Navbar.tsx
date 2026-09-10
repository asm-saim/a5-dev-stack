import NavLogo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-amber-100">
      <div>
        <img src={NavLogo} alt="" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
