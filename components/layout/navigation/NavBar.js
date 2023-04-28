import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CartIcon from "../cart/CartIcon";
import IconButton from "@mui/material/IconButton";

const authLinks = [
  { title: "Login", href: "/api/auth/login" },
  { title: "Logout", href: "/api/auth/logout" },
  { title: "Profile", href: "profile" },
  { title: "Cart", href: "" },
];
export default function NavBar() {
  const [anchor, setAnchor] = useState(null);
  const { user, isLoading, error } = useUser();
  // admin functionality
  // protect routes to admins functions
  return (
    <div>
      <IconButton color="primary" onClick={(e) => setAnchor(e.currentTarget)}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>
        {authLinks.map((link) => {
          if (link.title === "Cart")
            return (
              <MenuItem key={link.title}>
                <CartIcon></CartIcon>
              </MenuItem>
            );
          return <MenuItem key={link.title}>{link.title}</MenuItem>;
        })}
      </Menu>
    </div>
  );
}
