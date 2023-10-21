interface User {
  id: string;
  first: string;
  last: string;
  role: string;
  avatar: string;
  admin?: boolean;
}

interface UserListProps {
  title: string;
  children: React.ReactNode;
}

interface UserListItemProps {
  user: User;
  isAdmin: boolean;
  readonly?: boolean;
}
