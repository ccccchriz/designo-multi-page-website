export default function Contact() {
  return (
    <>
      <div className="bg-peach text-white grid gap-8 p-6 text-center tablet:mx-6 tablet:rounded-2xl tablet:mb-12">
        <h2 className="font-medium text-mobile-heading-l">Contact Us</h2>
        <p className="text-body-sm">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        <form action="" className="grid gap-2 justify-items-center">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="bg-[transparent] border-b border-b-white p-3 placeholder:text-white placeholder:opacity-35 font-medium w-full"
          />
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="bg-[transparent] border-b border-b-white p-3 placeholder:text-white placeholder:opacity-35 font-medium w-full"
          />
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="bg-[transparent] border-b border-b-white p-3 placeholder:text-white placeholder:opacity-35 font-medium w-full"
          />
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="bg-[transparent] border-b border-b-white p-3 placeholder:text-white placeholder:opacity-35 font-medium w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-white rounded-lg text-black w-max px-12 py-4 uppercase tracking-[0.0625rem] font-medium mt-8 tablet:place-self-end"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
