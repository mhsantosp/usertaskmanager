import { useQuery } from '@tanstack/react-query';
import { fetchAllTasks } from '../services/allTasks';

export const useAllTasks = () => {
  return useQuery({
    queryKey: ['allTasks'],
    queryFn: fetchAllTasks,
  })
}
