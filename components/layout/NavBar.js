import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "@mui/material/Link";
import styles from "./NavBar.module.css";
export default function NavBar({ links }) {
  const { user, isLoading, error } = useUser();
  const diplayLinks = links.map((link) => (
    <Link href={link.href} variant="body1">
      {link.title}
    </Link>
  ));
  // admin functionality
  // protect routes to admins functions
  return (
    <nav className={styles.container}>
      <ul>
        {user
          ? diplayLinks
          : diplayLinks.filter((link) => link.key !== "Profile")}
      </ul>
    </nav>
  );
}
