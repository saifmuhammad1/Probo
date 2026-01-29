import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-2 py-2 align-middle text-2xl text-black">
      <span className="text-3xl text-orange-500">Probo</span>
      <div className="flex flex-row gap-5 text-black">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
