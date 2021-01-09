import React, { useState, useEffect } from "react";
import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";
import { Spinner } from "@wordpress/components";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);

    apiFetch({
      path: "/wp/v2/posts",
    }).then((resp) => {
      console.log(resp);
      setIsFetching(false);
      setPosts(resp);
    });
  }, []);

  if (isFetching) {
    return (
      <div>
        <Spinner /> Loading posts...
      </div>
    );
  }

  return (
    <div>
      <h2>{__("Blog Posts")}</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title.rendered} -{" "}
            <a href={post.link} target="_blank">
              View Post
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
