import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    const data = {
        teams: [
            {id: 1, title: 'COB Lady Shockers HS', body: 'this is a test post'},
            {id: 2, title: 'COB Lady Shockers 09', body: 'this is a test post'}
        ]
    }
    return data
}

function TeamItems() {
    const { teams } = useLoaderData()

  return (
    <div>
      <h1>Teams</h1>
      <ul className="teams-list">
      {teams.map((team) => (
            <li key={team.id}>
                <Link to={team.id}>    
                    <h3>{team.title}</h3>
                </Link>
            </li>
      ))}
      </ul>
    </div>
  )
}

export default TeamItems