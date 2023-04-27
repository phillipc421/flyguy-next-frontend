import { useUser } from "@auth0/nextjs-auth0/client";
export default function NavBar({ links }) {
  const { user, isLoading, error } = useUser();
  console.log(user);
  const diplayLinks = links.map((link) => (
    <a key={link.title} href={link.href}>
      {link.title}
    </a>
  ));
  console.log(diplayLinks.filter((link) => link.title !== "Profile"));
  return (
    <nav>
      <ul>
        {user
          ? diplayLinks
          : diplayLinks.filter((link) => link.key !== "Profile")}
      </ul>
    </nav>
  );
}
