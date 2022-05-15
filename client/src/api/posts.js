const getPosts = async (params) => {
  try {
    const res = await fetch("http://localhost:4000/api/posts");
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getPost = async (params) => {
  try {
    const { id } = params;

    const res = await fetch("http://localhost:4000/api/posts/" + id);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const createPost = async (post, user) => {
  console.log(post);
  try {
    const res = await fetch("http://localhost:4000/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(post),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const updatePost = async (postId, user, data) => {
  console.log(data);
  try {
    const res = await fetch("http://localhost:4000/api/posts/" + postId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (postId, user) => {
  try {
    const res = await fetch("http://localhost:4000/api/posts/" + postId, {
      method: "DELETE",
      headers: {
        "x-access-token": user.token,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const likePost = async () => {
  try {
    const res = await fetch("/api/posts");
  } catch (err) {
    console.log(err);
  }
};

const unlikePost = async () => {
  try {
    const res = await fetch("/api/posts");
  } catch (err) {
    console.log(err);
  }
};

const getComments = async (params) => {
  try {
    const { id } = params;
    const res = await fetch(
      "http://localhost:4000/api/comments/post_comments/" + id
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const createComment = async (comment, params, user) => {
  try {
    const { id } = params;
    const res = await fetch("http://localhost:4000/api/comments/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(comment),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPosts,
  likePost,
  unlikePost,
  getComments,
  createComment,
};
