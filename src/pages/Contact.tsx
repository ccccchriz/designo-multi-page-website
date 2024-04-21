export default function Contact() {
  return (
    <>
      <div className="bg-peach text-white">
        <h2>Contact Us</h2>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        <form action="">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name" />
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input type="tel" name="phone" id="phone" placeholder="Phone" />
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
