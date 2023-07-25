import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { StyledInput, InputContainer } from './Input.styles'
import { FieldError } from 'react-hook-form'
import { StyledSpan } from '../../styles/typography'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  id?: string
}

const Input = forwardRef(
  (
    { label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <InputContainer>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <StyledInput ref={ref} id={id} error={!!error} {...rest} />
        {error ? <StyledSpan>{error.message}</StyledSpan> : null}
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
export default Input
