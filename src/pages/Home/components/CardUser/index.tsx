import React from 'react'

import * as S from './styles'

interface CardUserProps {
  id?: string
  email: string
}

const CardUser: React.FC<CardUserProps> = ({ id, email }) => {
  return (
    <S.Container>
      <span># {id}</span>
      <p>{email}</p>
    </S.Container>
  )
}

export default CardUser
