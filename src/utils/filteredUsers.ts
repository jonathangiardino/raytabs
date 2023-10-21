export default function filteredUsers(
  users: User[],
  type: string,
  admins: string[]
): User[] {
  const filtered = new Map<string, (user: User) => boolean>();
  filtered.set('admin', (user: User) => admins.includes(user.id));
  filtered.set('regular', (user: User) => !admins.includes(user.id));

  const filterFn = filtered.get(type);
  if (filterFn) {
    return users.filter(filterFn);
  } else {
    return users; // in case invalid type is provided, return unfiltered array
  }
}

