export const serviceAllTasks = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  if (!res.ok) throw new Error('Error al cargar las tareas')
  return res.json()
}
