import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createClient } from '@formium/client'

const formium = createClient('6005981cd0a32c0001f499e9')

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={(values) => {
          formium
            .submitForm('contact', values)
            .then((response) => {
              console.log(response)
            })
            .catch((error) => {
              console.log(error)
            })
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Your Name</label>
            <Field name="name" type="text" placeholder="Daniel Schwarz" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <Field
              name="email"
              type="email"
              placeholder="daniel.schwarz@mail.com"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" cols="30" rows="10" />
            <ErrorMessage name="message" />
          </div>
          <div>
            <Field type="submit" value="Send message" />
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Contact
