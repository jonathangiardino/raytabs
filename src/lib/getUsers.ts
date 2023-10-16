export default async function getUsers() {
  // Artificial delay of 1 seconds
  // const URL = "https://raycast-test-attachments.s3.amazonaws.com/data.json";
  const delayedURL =
    "https://app.requestly.io/delay/1000/https://raycast-test-attachments.s3.amazonaws.com/data.json";

  const res = await fetch(delayedURL);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const result = await res.json();
  const data = Object.keys(result.users).map((key) => ({
    id: key,
    ...result.users[key],
  }));

  return { users: data };
}
