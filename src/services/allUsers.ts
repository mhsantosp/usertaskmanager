export interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Error al cargar usuarios");
  return res.json();
};

export const fetchUsersId = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Error al cargar detalle del usuario");
  return res.json();
};
