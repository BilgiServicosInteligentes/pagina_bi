import { useEffect, useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

import { Label } from '../../Label'

import { HelperText } from '../../HelperText'
import { Icon } from '../../../Icon'

import * as S from './InputField.styles'

interface Props {
  label?: string
  name: string
  placeholder?: string
  inputMode?:
    | 'email'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal'
  type?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  initialValue?: string
  value?: string
  maxLength?: number
  suffix?: string
  error?: boolean
  helperText?: string
  readOnly?: boolean
  disabled?: boolean
  step?: string
  min?: string
  max?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export function InputField({
  label,
  name,
  placeholder,
  inputMode,
  type,
  initialValue,
  value,
  maxLength,
  suffix,
  error,
  helperText,
  readOnly,
  disabled,
  step,
  min,
  max,
  onChange,
  onBlur
}: Props) {
  const inputField = useRef<HTMLInputElement | null>(null)

  const [inputValue, setInputValue] = useState(initialValue || '')

  useEffect(() => {
    if (typeof value === 'string' || typeof value === 'number') {
      setInputValue(value)
    }
  }, [value])

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (inputMode === 'numeric') {
      e.target.value = e.target.value.replace(/[^0-9]/g, '')
    }

    setInputValue(e.target.value)

    onChange && onChange(e)
  }

  return (
    <S.Container
      hasValue={!!inputValue}
      error={error}
      readOnly={readOnly}
      disabled={disabled}
    >
      {label && <Label htmlFor={name}>{label}</Label>}

      <div className="input">
        <input
          ref={inputField}
          id={uuidv4()}
          name={name}
          inputMode={inputMode}
          type={type}
          value={
            suffix && inputValue.length > 0
              ? `${inputValue}${suffix}`
              : inputValue
          }
          placeholder={placeholder}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          step={step}
          min={min}
          max={max}
          autoComplete="new-password"
          onChange={handleOnChange}
          onBlur={onBlur}
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
;('')
InputField.defaultProps = {
  size: undefined,
  label: undefined,
  tooltip: undefined,
  inputMode: 'text',
  type: 'text',
  initialValue: undefined,
  value: undefined,
  placeholder: undefined,
  addonText: undefined,
  addonPlacement: undefined,
  maxLength: undefined,
  suffix: undefined,
  error: undefined,
  helperText: undefined,
  readOnly: undefined,
  disabled: undefined,
  step: undefined,
  min: undefined,
  max: undefined,
  onChange: undefined,
  onBlur: undefined
}
