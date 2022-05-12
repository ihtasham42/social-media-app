const signup = async (user) => {
  try {
    const res = await fetch("/api/register", {
      method: "GET",
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const login = async (user) => {
  try {
    const res = await fetch("/api/login", {
      method: "GET",
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export { signup, login };
