const signup = async (user) => {
  try {
    const res = await fetch("/api/posts");
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const login = async () => {
  try {
    const res = await fetch("/api/posts");
  } catch (err) {
    console.log(err);
  }
};

export { signup };
