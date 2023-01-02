import { Link } from "@remix-run/react";
// import '/showCard.scss';

export default function ShowCard({ show }) {
  let { title, creator, seasons, episodes, minutes } = show;
  //figure out accessibility of using spans vs using multiple <a> or <links>
  return (
    <li className="marquee" role="marquee">
      <Link to="fleabag" className="marquee-content" aria-label="fleabag">
        <span>{title}</span>
        <span aria-hidden="true">{title}</span>
        <span aria-hidden="true">{title}</span>
      </Link>
      <Link to="fleabag" className="marquee-content" aria-hidden="true">
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
      </Link>
    </li>
  );
}
