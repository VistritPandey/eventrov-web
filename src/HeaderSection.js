function HeaderSection() {

  return (
    <section className="bg-black text-gray-400 p-12 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Join the Community.
          </h1>
          <p className="mb-8 leading-relaxed">
            We are launching a new social community to connect you with individuals who share your vision. Post, interact, collaborate on events, find talent to hire, or get your next gig. This creative community is an outlet for you to share your passion without the stress of how many followers you have or views you get.
          </p>
          <div className="flex justify-center">
            <a
              href="http://social.eventrov.com/"
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Join Now
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D" />
        </div>
      </div>
    </section>
  )
}

export default HeaderSection;