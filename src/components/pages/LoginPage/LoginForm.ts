import * as Yup from 'yup'

export interface ContactForm {
  primeiroNome: string
  ultimoNome: string
  email: string
  celular: string
  totalClientes: string
  sistemaAtual: string
  mensagem: string
  gestaoProcessos: boolean
  businessInteligence: boolean
  contactCenter: boolean
}

export const initialValues: ContactForm = {
  primeiroNome: '',
  ultimoNome: '',
  email: '',
  celular: '',
  totalClientes: '',
  sistemaAtual: '',
  mensagem: '',
  gestaoProcessos: false,
  businessInteligence: false,
  contactCenter: false
}

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Campo Obrigatório')
})
