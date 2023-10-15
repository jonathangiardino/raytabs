export default async function getUsers() {
  const URL = "https://raycast-test-attachments.s3.amazonaws.com/data.json";
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  // Artificial delay of 1 second
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = await res.json();
  const data = Object.keys(result.users).map((key) => ({
    id: key,
    admin: false,
    ...result.users[key],
  }));

  return { users: data };
}
