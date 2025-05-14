import { useUserStore } from './userStore'

describe('userStore', () => {
  it('guarda el usuario seleccionado', () => {
    const user = { id: 1, name: 'Carlos', email: 'carlos@mail.com' }
    useUserStore.getState().setSelectedUser(user)
    const selected = useUserStore.getState().selectedUser

    expect(selected).toEqual(user)
  })
})
