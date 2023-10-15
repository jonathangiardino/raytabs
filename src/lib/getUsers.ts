export default async function getUsers() {
  const URL = "https://raycast-test-attachments.s3.amazonaws.com/data.json";
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  // Artificial delay of 2.5 seconds
  // await new Promise((resolve) => setTimeout(resolve, 2500));

  const result = await res.json();
  const data = Object.keys(result.users).map((key) => ({
    id: key,
    ...result.users[key],
  }));

  return { users: data };
}
