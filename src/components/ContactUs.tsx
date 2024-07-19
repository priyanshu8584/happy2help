import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export const ContactUs = () => {
  return (
    <div>
      <AppBar />
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-4 md:p-8"
        style={{ backgroundImage: `url('/heroBanner.jpg')`, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <h1 className="font-bold text-xl md:text-2xl text-center mb-4">Happy To Help</h1>
        <h2 className="font-semibold text-lg md:text-xl text-center mb-4">GET IN TOUCH WITH US</h2>
        <h3 className="font-semibold text-center mb-4">
          Want to find out more?
          <br />
          We would love to hear from you, get in touch with us either by contact form, or send us an email.
          <br />
          We will get back to you as soon as possible.
          <br />
          E: info@happytohelp.foundation
          <br />
          Happy To Help Foundation
          <br />
          London, UK
        </h3>
        <img src="/logo.jpg" alt="Logo" className="max-w-full h-auto mt-4 md:mt-8" />
      </div>
      <Footer />
    </div>
  );
};
