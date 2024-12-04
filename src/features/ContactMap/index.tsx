export default function ContactMap() {
  return (
    <section className="bg-site-black flex flex-col gap-10 justify-center items-center py-9 md:py-40">
      <h1 className="font-semibold text-4xl md:text-5xl text-[#fbf5ff] text-center">
        Direction
      </h1>
      <div className="h-80 md:h-[65vh] w-full md:w-[80vw]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126781.39155974983!2d150.8496104!3d-33.8472174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e1!3m2!1sen!2sin!4v1733225516242!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-none"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
