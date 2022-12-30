import { Link } from "@remix-run/react";
// import '/showCard.scss';

export default function ShowCard({ show }) {
  let { title, creator, seasons, episodes, minutes } = show;
  //figure out accessibility of using spans vs using multiple <a> or <links>
  return (
    <li className="marquee">
      <Link to="fleabag" className="marquee-content show-card">
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
      </Link>
      <Link to="fleabag" className="marquee-content show-card">
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
      </Link>
    </li>
  );
}
