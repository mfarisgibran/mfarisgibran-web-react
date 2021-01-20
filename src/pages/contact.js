import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createClient } from '@formium/client'
import styled from 'styled-components'

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

const formium = createClient('6005981cd0a32c0001f499e9')

const Contact = () => {
  const [status, setStatus] = useState('')
  return (
    <Container>
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
              <p>{status}</p>
            </FieldSet>
          </Form>
        </Formik>
      </div>
    </Container>
  )
}

export default Contact
