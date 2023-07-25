import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'
import { InputContainer } from '../Input/Input.styles'
import { FieldError } from 'react-hook-form'
import { StyledSpan } from '../../styles/typography'
import { StyledTextarea } from './Textarea.styles'

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: FieldError
}

const Textarea = forwardRef(
  (
    { label, id, error, ...rest }: ITextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <InputContainer>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <StyledTextarea ref={ref} id={id} error={!!error} {...rest} />
        {error ? <StyledSpan>{error.message}</StyledSpan> : null}
      </InputContainer>
    )
  },
)

Textarea.displayName = 'Textarea'
export default Textarea
