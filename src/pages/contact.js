import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createClient } from '@formium/client'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Container = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    text-align: center;
  }
  form {
    width: 350px;
  }
`
const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  label {
    margin: 5px 0px;
  }
  input {
    padding: 5px;
    border-radius: 5px;
    border: solid #473720 2px;
  }
  textarea {
    padding: 5px;
    border-radius: 5px;
    border: solid #473720 2px;
  }
  input[type='submit'] {
    background-color: #473720;
    color: #fff;
    cursor: pointer;
    padding: 5px;
    &:hover {
      filter: brightness(1.5);
    }
  }
`
const AlertMessage = styled.p`
  font-size: 14px;
`

const formium = createClient(process.env.REACT_APP_FORMIUM_PROJECT_ID)

const Contact = () => {
  const [status, setStatus] = useState('')
  return (
    <Container>
      <Helmet>
        <title>Contact – M Faris Gibran</title>
      </Helmet>
      <div>
        <h1>Contact Me</h1>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={(values) => {
            setStatus('Sending your message...')
            formium
              .submitForm('contact', values)
              .then((response) => {
                setStatus(`Thank you ${values.name} for your message!`)
              })
              .catch((error) => {
                setStatus(`Your message can't be sent`)
              })
          }}
        >
          <Form>
            <FieldSet>
              <label htmlFor="name">Your Name</label>
              <Field name="name" type="text" placeholder="Daniel Schwarz" />
              <ErrorMessage name="name" />
            </FieldSet>
            <FieldSet>
              <label htmlFor="email">Your Email</label>
              <Field
                name="email"
                type="email"
                placeholder="daniel.schwarz@mail.com"
              />
              <ErrorMessage name="email" />
            </FieldSet>
            <FieldSet>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" cols="30" rows="10" />
              <ErrorMessage name="message" />
            </FieldSet>
            <FieldSet>
              <Field type="submit" value="Send message" />
              <AlertMessage>{status}</AlertMessage>
            </FieldSet>
          </Form>
        </Formik>
      </div>
    </Container>
  )
}

export default Contact
