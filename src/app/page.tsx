'use client';
import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
