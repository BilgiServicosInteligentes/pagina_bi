import User from '@/images/bpm.png'
import { StaticImageData } from 'next/image'

interface INavForm {
  link: string

  cover: StaticImageData

  children: string
}

export const NavForm: INavForm[] = [
  {
    cover: User,
    link: '/home',
    children: 'Usuários'
  },
  {
    link: '/business-inteligence',
    cover: User,
    children: 'B.I'
  },
  {
    link: '/bpm',
    cover: User,
    children: 'BPM'
  },
  {
    link: '/treinamento',
    cover: User,
    children: 'Treinamento'
  },
  {
    link: '/po',
    cover: User,
    children: 'P.O'
  },
  {
    link: '/it',
    cover: User,
    children: 'I.T'
  },
  {
    link: '/faq',
    cover: User,
    children: 'FAQ'
  },
  {
    link: '/upload',
    cover: User,
    children: 'Upload DOC.'
  }
]
