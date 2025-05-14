import { useQuery } from '@tanstack/react-query';
import { fetchUserTasks } from '../services/detailUserTasks';

export const useUserTasks = (id: number) => {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => fetchUserTasks(id),
  })
}