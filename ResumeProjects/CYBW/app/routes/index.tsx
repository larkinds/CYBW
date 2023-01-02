// import { useLoaderData } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { useOptionalUser } from "~/utils";
import ShowCard from "./shows/$showCard";
// import "/index.scss"
export const loader = async () => {
  let request = new Request("https://imdb-api.com/en/API/SearchSeries/k_h9bvrict/fleabag")
  const res = await fetch(request).then((response) => {
    if (!response.ok) {
      throw new Error(`Error status:  ${response.status}`);
    }
    return response.json()
  });;
  console.log({res})
  return json(res);
}


export default function Index() {
  const data = useLoaderData();
  console.log({data})

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

      <ul className="shows">
        {shows.map((show) => (
          <ShowCard show={show} key={show.title} />
        ))}
      </ul>
    </main>
  );
}
