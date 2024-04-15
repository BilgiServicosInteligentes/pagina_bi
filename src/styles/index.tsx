import StyledComponentsRegistry from './lib/StyledComponentsRegistry'

import { GlobalStyles } from './global'
import { ReactNode } from 'react'

import Bootstrap from './lib/bootstrap'
import MaterialIcons from './lib/material-icons'
import ReactTooltip from './lib/react-tooltip'

import ReactMultiCarousel from './lib/react-multi-carousel'
import ReactDatepicker from './lib/react-datepicker'

interface Props {
  children: ReactNode
}

export function Styles({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <Bootstrap />
      <MaterialIcons />
      <ReactDatepicker />
      <ReactMultiCarousel />
      <ReactTooltip />

      {children}
    </StyledComponentsRegistry>
  )
}
