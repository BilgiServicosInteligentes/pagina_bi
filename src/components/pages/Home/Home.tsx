'use client'
// import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
// import { Button } from '@/components/core/Buttons/Button'
// import { NavForm } from './HeaderNav.form'

import * as S from './Home.style'

// import { useRouter } from 'next/navigation'
// import Organograma from '@/images/Organograma.png'

export function HomePage() {
  // const router = useRouter()

  return (
    <S.Container>
      <>
        <S.Content>
          <div className="Container">
            <iframe
              className="bi"
              title="Dashboard Demo Dark"
              width="600"
              height="373.5"
              src="https://app.powerbi.com/view?r=eyJrIjoiNDA2Y2E2MDEtN2YwZS00MDM0LWIzMzUtZDZhN2Q0ODc5NzY5IiwidCI6IjYzOWQ1NmI2LTlhNWMtNDUxNC1iODFjLWZkMzgxMTY2MzFlYiJ9"
            />
          </div>
        </S.Content>
      </>
    </S.Container>
  )
}
