import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCallback = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {
        <ul>
          {posts.map((post, id) => {
            return (
              <div key={id}>
                <li>{post.title}</li>
              </div>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default ApiCallback;
