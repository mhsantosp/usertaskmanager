export interface User {
  id: number;
  name: string;
  email: string;
}

// This function fetches all users from the API and returns the data in JSON format.
export const serviceAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Error al cargar usuarios");
  return res.json();
};

// This function fetches a user by ID from the API and returns the data in JSON format.
// Note: This function is used to display the specific details of a user
// Doesn't have Hook
// Page: src/app/users/[id]/page.tsx
export const serviceDetailUsersId = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Error al cargar detalle del usuario");
  return res.json();
};
