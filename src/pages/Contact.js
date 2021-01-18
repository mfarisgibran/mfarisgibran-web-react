import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const API_URL = 'https://api.formium.io/submit/6005981cd0a32c0001f499e9/contact'

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={(values) => {
          axios
            .post(API_URL, values)
            .then((response) => {
              console.log(response.data)
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
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <Field
              name="email"
              type="email"
              placeholder="daniel.schwarz@mail.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" cols="30" rows="10" />
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
