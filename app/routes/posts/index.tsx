import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    const data = {
        posts: [
            {id: 1, title: 'Post 1', body: 'this is a test post'},
            {id: 2, title: 'Post 2', body: 'this is a test post'},
            {id: 3, title: 'Post 3', body: 'this is a test post'}
        ]
    }
    return data
}

function PostItems() {
    const { posts } = useLoaderData()

  return (
    <div>
      <h1>Posts</h1>
      <ul className="posts-list">
      {posts.map((post) => (
            <li key={post.id}>
                <Link to={post.id}>    
                    <h3>{post.title}</h3>
                </Link>
            </li>
      ))}
      </ul>
    </div>
  )
}

export default PostItems