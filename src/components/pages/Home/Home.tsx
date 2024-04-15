'use client'
import Image from 'next/image'

import Logo from '@/images/Logo.png'
// import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
// import { Button } from '@/components/core/Buttons/Button'
// import { NavForm } from './HeaderNav.form'

import { useState } from 'react'
import { MenuMobile } from './Header/components/MenuMobile/MenuMobile'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

import * as S from './Home.style'

// import { useRouter } from 'next/navigation'
// import Organograma from '@/images/Organograma.png'

/*imagens*/
import User from '@/images/users.png'
import BI from '@/images/bi.png'
import BPM from '@/images/bpm.png'
import Treinamento from '@/images/treinamento.png'
import PO from '@/images/pastinha.png'
import FAQ from '@/images/faq.png'
import Upload from '@/images/upload.png'
import Sair from '@/images/sair.png'

export function HomePage() {
  const { isMobile } = useDeviceDetection()
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  // const router = useRouter()

  return (
    <S.Container isMobile={isMobile}>
      {!isMobile ? (
        <>
          <S.Content>
            <div className="sidebar-content">
              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={User} alt="Icone de Usuários"></Image>
                    <span className="item-description">Usuários</span>
                  </a>
                </li>
              </ul>

              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={BI} alt="Icone de Usuários"></Image>
                    <span className="item-description">B.I</span>
                  </a>
                </li>
              </ul>

              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={BPM} alt="Icone de Usuários"></Image>
                    <span className="item-description">BPM</span>
                  </a>
                </li>
              </ul>

              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={Treinamento} alt="Icone de Usuários"></Image>
                    <span className="item-description">Treinamento</span>
                  </a>
                </li>
              </ul>
              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={PO} alt="Icone de Usuários"></Image>
                    <span className="item-description">P.O</span>
                  </a>
                </li>
              </ul>

              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={PO} alt="Icone de Usuários"></Image>
                    <span className="item-description">I.T</span>
                  </a>
                </li>
              </ul>

              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={FAQ} alt="Icone de Usuários"></Image>
                    <span className="item-description">FAQ</span>
                  </a>
                </li>
              </ul>

              <ul id="side_items">
                <li className="side-item">
                  <a href="#">
                    <Image src={Upload} alt="Icone de Usuários"></Image>
                    <span className="item-description">Upload DOC.</span>
                  </a>
                </li>
              </ul>
            </div>

            <div id="logout">
              <a href="/login">
                <button id="logout_btn">
                  <Image src={Sair} alt="Icone de Usuários"></Image>
                  <span className="item-description">Sair</span>
                </button>
              </a>
            </div>
          </S.Content>
          <div className="logo">
            <Image src={Logo} alt="Logo-bilgi" className="logo-image"></Image>
          </div>

          {/* <div className="Organo">
            <Image alt="Orgonograma" src={Organograma} className="img" />
          </div> */}
        </>
      ) : (
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      )}
    </S.Container>
  )
}
