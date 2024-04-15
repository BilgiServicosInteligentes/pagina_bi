'use client'

import Image from 'next/image'
import * as S from './Login.Style'
import { Field, Form, Formik } from 'formik'

import Logo from '@/images/bilgibranco.png'
import { Button } from '@/components/core/Buttons/Button'
import { InputField } from '@/components/core/Form/Fields/InputField'
import { initialValues, validationSchema } from './LoginForm'
import { Col, Row } from 'react-bootstrap'
import { Subtitle } from '@/components/core/Typography/Subtitle'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'

import LogoMobile from '@/images/Logo.png'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

export function Login() {
  const { isMobile } = useDeviceDetection()
  return (
    <S.Container>
      {!isMobile ? (
        <>
          <div className="content">
            <div className="image-logo">
              <Image src={Logo} alt="Logo Bilgi" className="logo" />
            </div>
            <div className="form">
              <div className="content-form">
                <div className="login">Login</div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={() => console.log(initialValues)}
                >
                  {({ touched, errors, isValid }) => (
                    <Form>
                      <Row className="d-flex mb-4 g-5 flex-column containerform">
                        <Col>
                          <Field
                            as={InputField}
                            label="E-mail"
                            name="email"
                            placeholder="Digite seu e-mail"
                            type="email"
                            error={
                              touched.ultimoNome && !!errors.ultimoNome
                                ? errors.ultimoNome
                                : ''
                            }
                            helperText={
                              touched.email && !!errors.email
                                ? errors.email
                                : ''
                            }
                          />
                        </Col>
                        <Col>
                          <Field
                            as={InputField}
                            label="Senha"
                            name="password"
                            placeholder="Digite sua senha"
                            type="password"
                            error={
                              touched.ultimoNome && !!errors.ultimoNome
                                ? errors.ultimoNome
                                : ''
                            }
                            helperText={
                              touched.email && !!errors.email
                                ? errors.email
                                : ''
                            }
                          />
                        </Col>

                        <Col className="pt-4 buttoncontent">
                          <Button
                            href="/home"
                            button_size="xxl"
                            styles="primary"
                            className="button-form"
                            disabled={!isValid}
                          >
                            Entrar
                          </Button>
                        </Col>

                        <div className="senha">
                          <Subtitle size="sm" className="subtitle">
                            Esqueceu a senha?
                          </Subtitle>
                          <ButtonLink link="/home" mode="red" size="md">
                            Clique aqui
                          </ButtonLink>
                        </div>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="content">
          <div className="image-logo">
            <Image src={Logo} alt="Logo Bilgi" className="logo" />
          </div>
          <div className="form">
            <div className="content-form">
              <div className="login">
                <Image src={LogoMobile} alt="Logo Bilgi"></Image>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => console.log(initialValues)}
              >
                {({ touched, errors, isValid }) => (
                  <Form>
                    <Row className="d-flex mb-4 g-5 flex-column containerform">
                      <Col>
                        <Field
                          as={InputField}
                          label="E-mail"
                          name="email"
                          placeholder="Digite seu e-mail"
                          type="email"
                          error={
                            touched.ultimoNome && !!errors.ultimoNome
                              ? errors.ultimoNome
                              : ''
                          }
                          helperText={
                            touched.email && !!errors.email ? errors.email : ''
                          }
                        />
                      </Col>
                      <Col>
                        <Field
                          as={InputField}
                          label="Senha"
                          name="password"
                          placeholder="Digite sua senha"
                          type="password"
                          error={
                            touched.ultimoNome && !!errors.ultimoNome
                              ? errors.ultimoNome
                              : ''
                          }
                          helperText={
                            touched.email && !!errors.email ? errors.email : ''
                          }
                        />
                      </Col>

                      <Col className="pt-4 buttoncontent">
                        <Button
                          href="/home"
                          button_size="xxl"
                          styles="primary"
                          className="button-form"
                          disabled={!isValid}
                        >
                          Entrar
                        </Button>
                      </Col>

                      <div className="senha">
                        <Subtitle size="sm" className="subtitle">
                          Esqueceu a senha?
                        </Subtitle>
                        <ButtonLink link="/home" mode="red" size="md">
                          Clique aqui
                        </ButtonLink>
                      </div>
                    </Row>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
      ;
    </S.Container>
  )
}
