import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCallback = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleSubmit = () => {
    setIdFromButtonClick(id);
    {
      <ul>
        {posts.map((post) => {
          <div>
            <li key={post.id}>{post.title}</li>
            <li key={post.id}>{post.body}</li>
          </div>;
        })}
      </ul>;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default ApiCallback;
