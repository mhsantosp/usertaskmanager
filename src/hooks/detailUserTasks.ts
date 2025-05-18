import { useQuery } from '@tanstack/react-query';
import { serviceDetailUserTasks } from '../services/detailUserTasks';

export const useUserTasks = (id: number) => {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => serviceDetailUserTasks(id),
  })
}