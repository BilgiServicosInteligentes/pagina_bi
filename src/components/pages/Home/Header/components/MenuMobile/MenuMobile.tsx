'use client'

import { MenuStyle } from './MenuMobile.style'
import Image from 'next/image'
import Logo from '@/images/Logo.png'

/*imagens*/
import User from '@/images/users.png'
import BI from '@/images/bi.png'
import BPM from '@/images/bpm.png'
import Treinamento from '@/images/treinamento.png'
import PO from '@/images/pastinha.png'
import FAQ from '@/images/faq.png'
import Upload from '@/images/upload.png'
import Sair from '@/images/sair.png'

interface Props {
  menuIsVisible: boolean
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuMobile({ menuIsVisible }: Props) {
  return (
    <MenuStyle isVisible={menuIsVisible}>
      <div className="logo">
        <Image src={Logo} alt="Logo-bilgi" className="logo-image"></Image>
      </div>
      <div className="content-side">
        <div className="content">
          <div className="usuario">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image
                    src={User}
                    alt="Icone de Usuários"
                    className="size-icon"
                  ></Image>
                  <span className="description">Usuários</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bi">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image src={BI} alt="Icone BI" className="size-icon"></Image>
                  <span className="description">B.I</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="bpm">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image
                    src={BPM}
                    alt="Icone BPM"
                    className="size-icon"
                  ></Image>
                  <span className="description">BPM</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="treinamento">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image
                    src={Treinamento}
                    alt="Icone de Vídeo Aula"
                    className="size-icon"
                  ></Image>
                  <span className="description">Treinamento</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="po">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image
                    src={PO}
                    alt="Icone de P.O"
                    className="size-icon"
                  ></Image>
                  <span className="description">P.O</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="it">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image
                    src={PO}
                    alt="Icone de I.T"
                    className="size-icon"
                  ></Image>
                  <span className="description">I.T</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="faq">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image
                    src={FAQ}
                    alt="Icone de FAQ"
                    className="size-icon"
                  ></Image>
                  <span className="description">FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="upload">
            <ul id="items">
              <li className="item">
                <a href="#">
                  <Image
                    src={Upload}
                    alt="Icone de Upload"
                    className="size-icon"
                  ></Image>
                  <span className="description">Upload DOC.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="logout">
        <button id="logout_btn">
          <Image src={Sair} alt="Icone de Usuários" className="icon" />
        </button>
      </div>
    </MenuStyle>
  )
}
