import { useQuery } from "@tanstack/react-query";
import { serviceAllUsers, serviceDetailUsersId } from "../services/allUsers";

export const useUsers = () => {
  const users = useQuery({
    queryKey: ['users'],
    queryFn: serviceAllUsers,
  })
  return users
}

export const useDetailUsersId = (id: number) => {
  const detailUserID = useQuery({
    queryKey: ['users', id],
    queryFn: () => serviceDetailUsersId(id),
  })
  return detailUserID
}