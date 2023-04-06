import axios from 'axios'
import { User } from '../@types/types'

export const api = {
  getAllUsers: () => axios.get('http://localhost/api-worked/users.php'),
  postNewUser: (newUser: User) =>
    axios.post('http://localhost/api-worked/cadastrar.php', newUser),
}
