export const fetchUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch ${err}`);
  }
};
