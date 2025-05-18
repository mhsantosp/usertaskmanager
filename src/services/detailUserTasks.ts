export const serviceDetailUserTasks = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  if (!res.ok) throw new Error('Error al obtener detalles de tareas')
  return res.json()
}