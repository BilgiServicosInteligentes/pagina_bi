import { useEffect, useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

import { HelperText } from '../../HelperText'
import { Icon } from '../../../Icon'

import * as S from './TextArea.styles'
import { Label } from '../../Label'

interface Props {
  label?: string
  name: string
  placeholder?: string
  initialValue?: string
  value?: string
  maxlength?: number
  error?: boolean
  helperText?: string
  readOnly?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

export function TextArea({
  label,
  name,
  placeholder,
  initialValue,
  value,
  maxlength,
  error,
  helperText,
  readOnly,
  disabled,
  onChange,
  onBlur
}: Props) {
  const textAreaField = useRef<HTMLTextAreaElement | null>(null)

  const [textAreaValue, setTextAreaValue] = useState(initialValue || '')

  useEffect(() => {
    typeof value === 'string' && setTextAreaValue(value)
  }, [value])

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange && onChange(e)

    setTextAreaValue(e.target.value)
  }

  return (
    <S.Container
      hasValue={!!textAreaValue}
      error={error}
      readOnly={readOnly}
      disabled={disabled}
    >
      {label && <Label htmlFor={name}>{label}</Label>}

      <div className="text-area">
        <textarea
          id={uuidv4()}
          name={name}
          value={textAreaValue}
          placeholder={placeholder}
          maxLength={maxlength}
          readOnly={readOnly}
          disabled={disabled}
          onChange={handleOnChange}
          onBlur={onBlur}
          ref={textAreaField}
          autoComplete="one-time-code"
        />

        {error && (
          <Icon
            size="sm"
            IconRender={ExclamationCircleIcon}
            mode="error"
            className="icon"
          />
        )}
      </div>

      {helperText && <HelperText text={helperText} />}
    </S.Container>
  )
}

TextArea.defaultProps = {
  label: undefined,
  initialValue: undefined,
  value: undefined,
  placeholder: undefined,
  maxlength: undefined,
  error: undefined,
  helperText: undefined,
  readOnly: undefined,
  disabled: undefined,
  onChange: undefined,
  onBlur: undefined
}
