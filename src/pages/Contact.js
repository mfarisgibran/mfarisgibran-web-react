const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Daniel Schwarz" />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="daniel.schwarz@mail.com" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" cols="30" rows="10" />
        </div>
        <div>
          <input type="submit" value="Send message" />
        </div>
      </form>
    </div>
  )
}

export default Contact
