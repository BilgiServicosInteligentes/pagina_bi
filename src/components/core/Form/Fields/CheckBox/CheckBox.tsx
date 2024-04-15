import { CheckIcon } from '@heroicons/react/24/solid'

import { Label } from '../../Label'
import { Icon } from '../../../Icon'

import * as S from './CheckBox.styles'

interface Props {
  label?: string
  description?: string
  name?: string
  checked: boolean
  value?: string
  readOnly?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export function CheckBox({
  label,
  description,
  name,
  checked,
  value,
  readOnly,
  disabled,
  onChange,
  onBlur
}: Props) {
  return (
    <S.Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}

      <S.Container disabled={disabled} readOnly={readOnly}>
        {description && <span className="description">{description}</span>}

        <input
          type="checkbox"
          name={name}
          checked={checked}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />

        <div className="checkmark">
          <div className="icon">
            {checked && (
              <Icon
                size="md"
                IconRender={CheckIcon}
                mode={disabled || readOnly ? 'gray' : 'primary'}
              />
            )}
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

CheckBox.defaultProps = {
  label: undefined,
  description: undefined,
  name: undefined,
  value: undefined,
  readOnly: undefined,
  disabled: undefined,
  onChange: undefined,
  onBlur: undefined
}
