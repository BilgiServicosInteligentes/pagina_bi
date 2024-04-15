import { useState } from 'react'

import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { MinusCircleIcon } from '@heroicons/react/24/outline'

import { Icon } from '../Icon'
import { Subtitle } from '../Typography/Subtitle'
import { Paragraph } from '../Typography/Paragraph'

import * as S from './FaqItem.styles'

interface Props extends React.HTMLProps<HTMLDivElement> {
  defaultOpen?: boolean
  question: string
  visible?: boolean
  response: string
  firstFaq?: boolean
  lastFaq?: boolean
}

export function FaqItem({
  defaultOpen,
  question,
  visible,
  className,
  response,
  firstFaq,
  lastFaq
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen || false)

  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {!firstFaq && <S.Divider className="top" />}

      <S.Container
        open={isOpen}
        className={className}
        tabIndex={0}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="question">
          <Subtitle size="sm">{question}</Subtitle>

          <S.Body open={isOpen} visible={visible}>
            <Paragraph size="sm">{response}</Paragraph>
          </S.Body>
        </div>

        <div className="icon" onClick={() => setIsOpen(!isOpen)}>
          <Icon
            size="xs"
            IconRender={!isOpen ? PlusCircleIcon : MinusCircleIcon}
            mode={isHovered ? 'hard-gray' : 'gray'}
          />
        </div>
      </S.Container>

      {!lastFaq && <S.Divider className="bottom" />}
    </>
  )
}

FaqItem.defaultProps = {
  defaultOpen: undefined,
  visible: undefined,
  firstFaq: undefined,
  lastFaq: undefined
}
