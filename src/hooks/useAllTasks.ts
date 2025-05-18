import { useQuery } from '@tanstack/react-query';
import { serviceAllTasks } from '../services/allTasks';

// This hook fetches all tasks from the API using react-query
export const useAllTasks = () => {
  const allTasks = useQuery({
    queryKey: ['allTasks'],
    queryFn: serviceAllTasks,
  })
  return allTasks
}
