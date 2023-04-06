import styled from 'styled-components'
import { Field, Form } from 'formik'

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;

  max-width: 30rem;
  width: 100%;
  padding: 4rem;
  gap: 1rem;
  font-size: 2rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.red};
  }

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`

export const InputFiled = styled(Field)`
  all: unset;
  font-size: 1.2rem;
  border-bottom: 1px solid;
  line-height: 2;
  padding: 0.25rem;
  color: ${({ theme }) => theme['gray-400']};
`

export const Button = styled.button`
  color: ${({ theme }) => theme.white};
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme['green-400']};
  border-radius: 0.4rem;
  transition: background-color 0.2s;

  :not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme['gray-100']};
  }
`
