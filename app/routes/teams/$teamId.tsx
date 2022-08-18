import {useParams} from "@remix-run/react";

function team() {
    const params = useParams()

  return (
    <div>
      <h1>Teams {params.teamsId}</h1>
    </div>)
}

export default team

