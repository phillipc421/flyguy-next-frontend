import Link from "next/link";
export default function NavBar({ links }) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <Link key={link} href={link.href}>
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
