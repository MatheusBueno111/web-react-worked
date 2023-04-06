import React from 'react'

import * as S from './styles'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { api } from '../../../../service/api'

const SignUpValadationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Digite seu email'),
  password: Yup.string().required('Digite sua senha'),
})

interface SignUpFormProps {
  onCreateNewUser: () => void
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onCreateNewUser }) => {
  async function handleCreateUser(email: string, password: string) {
    try {
      const newUser = {
        email,
        password,
      }
      const response = await api.postNewUser(newUser)
      onCreateNewUser()
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignUpValadationSchema}
      onSubmit={({ email, password }, { resetForm }) => {
        handleCreateUser(email, password)
        resetForm()
      }}
    >
      {({ dirty, isValid, errors, touched }) => (
        <S.ContainerForm>
          <label htmlFor="email">Email:</label>
          <S.InputFiled name="email" placeholder="Email" type="email" />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}

          <label htmlFor="password">Senha:</label>
          <S.InputFiled name="password" type="password" placeholder="Senha" />
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}

          <S.Button type="submit" disabled={!(dirty && isValid)}>
            Inscrever
          </S.Button>
        </S.ContainerForm>
      )}
    </Formik>
  )
}

export default SignUpForm
