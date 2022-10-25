import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{position: "fixed", bottom: "0", backgroundColor: "lightgray", color: "white", width: "100%", height: "100px"}}>
      <NavLink to="/" end>Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
