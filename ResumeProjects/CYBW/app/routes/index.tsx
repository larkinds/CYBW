import { useOptionalUser } from "~/utils";
import ShowCard from "./shows/$showCard";
// import "/index.scss"

export default function Index() {
  let shows = [
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
    {
      title: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      seasons: 2,
      episodes: 12,
      minutes: 26,
    },
  ];
  const user = useOptionalUser();
  return (
    <main className="main">
      <div className="title-area">
        <h1>Curb Your Binge Watching</h1>
      </div>

      <ul>
        {shows.map((show) => (
          <ShowCard show={show} key={show.title} />
        ))}
      </ul>
    </main>
  );
}
