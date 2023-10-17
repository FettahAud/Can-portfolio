function TextBlock({ title, children }) {
  return (
    <div className="text-block">
      <div className="title">
        <h2>01</h2>
        <span></span>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <h1 className="title">
        shaping <span>the Future</span>
      </h1>
      <div className="content">
        <div className="text-wrapper">
          <TextBlock title="UI Design">
            As a UI designer, I create visually engaging and intuitive user
            interfaces that enhance the user experience. I have a keen eye for
            design and a strong understanding of the principles of user
            interface design, including typography, color theory, and layout. By
            combining my creative skills with user-centered design principles, I
            am able to craft interfaces that are not only aesthetically pleasing
            but also easy to use and navigate.
          </TextBlock>
          <TextBlock title="UX Research">
            As a UX researcher, I help teams understand the needs, goals, and
            behaviors of their users. I conduct research using a variety of
            methods, including surveys, interviews, and usability testing, to
            uncover insights that inform the design process. By taking a
            user-centered approach to design, I help ensure that products and
            services meet the needs of their intended audience and deliver a
            positive user experience.
          </TextBlock>
          <TextBlock title="UX Writing">
            As a UX writer, I craft clear and concise content that guides users
            through the user interface and helps them achieve their goals. I
            understand the importance of writing for the user and strive to
            create copy that is not only useful but also engaging and
            delightful. From error messages to onboarding flows, I work closely
            with designers and developers to ensure that every piece of content
            contributes to a seamless and enjoyable user experience.
          </TextBlock>
          <TextBlock title="3D Modeling">
            As a 3D modeler, I create digital representations of real-world
            objects and environments. I have a strong understanding of modeling
            techniques and tools, as well as a keen eye for detail and
            composition. Whether I'm working on a character, a product design,
            or a virtual environment, I use my skills to bring ideas to life and
            create immersive experiences that captivate and engage audiences.
          </TextBlock>
        </div>
        <figure>
          <img src="/human-head.png" alt="Human Head is missing" />
        </figure>
      </div>
      <div className="tags">
        <span className="tag">Figma</span>
        <span className="tag">ProtoPie</span>
        <span className="tag">Miro</span>
        <span className="tag">Flexible Grid System</span>
        <span className="tag">CSS</span>
        <span className="tag">HTML</span>
        <span className="tag">Bootstrap</span>
        <span className="tag">Tailwind</span>
        <span className="tag">Mockup</span>
        <span className="tag">Spline</span>
      </div>
    </section>
  );
}
