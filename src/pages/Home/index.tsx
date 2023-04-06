import React, { useEffect, useState } from 'react'

import { api } from '../../service/api'

import * as S from './styles'
import SignUpForm from './components/SignUpForm'
import { User } from '../../@types/types'
import CardUser from './components/CardUser'

const Home: React.FC = () => {
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [newUserAdded, setNewUserAdded] = useState(false)
  const [title, setTitle] = useState('')

  async function getUsers() {
    try {
      const response = await api.getAllUsers()
      const data = response.data
      setAllUsers(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [newUserAdded])

  useEffect(() => {
    console.log(title)
  }, [title])

  function handleNewUser() {
    setNewUserAdded((value) => !value)
  }

  return (
    <S.Container>
      <SignUpForm onCreateNewUser={handleNewUser} />
      {allUsers.length > 0
        ? allUsers.map((user) => {
            return <CardUser key={user.id} id={user.id} email={user.email} />
          })
        : null}

      <input onChange={(event) => setTitle(event.target.value)} />
    </S.Container>
  )
}

export default Home
