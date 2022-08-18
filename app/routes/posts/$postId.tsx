import {useParams} from "@remix-run/react";

function post() {
    const params = useParams()

  return (
    <div>
      <h1>Post {params.postId}</h1>
    </div>)
}

export default post

