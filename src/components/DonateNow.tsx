import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export const DonateNow = () => {
  return (
    <div>
      <AppBar />
      <div
        className="min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url('/heroBanner.jpg')`, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:grid-cols-2 p-4 md:p-8">
          <img src="banner.jpg" alt="" className="max-w-full md:max-w-screen-sm mb-4 md:mb-0" />
          <div className="text-center md:text-left md:ml-8">
            <h1 className="font-semibold text-xl md:text-2xl">Donate Now</h1>
            <br />
            <p className="text-sm md:text-base">UK Registered Charity No:1179446</p>
            <h3 className="text-sm md:text-base mt-4 md:mt-6">
              We are a 100% non profit organisation, all of the funds received are donated first hand to the causes we support.
              <br /><br />
              With our trustee team being full time professionals we do not take a salary from our work at Happy to Help and fulfil travel and resource costs personally.
              <br /><br />
              As well as directing donations, we deliver them first hand to cut out any admin costs.
              <br /><br />
              If you would like to donate please transfer to our bank account set up with HSBC, details below, or alternatively via Paypal or our Justgiving page, links below.
              <br /><br />
              <h1 className="font-bold text-lg md:text-xl">
                Bank – HSBC
                <br />
                Sort Code – 40 01 13
                <br />
                Account Number – 92306980
              </h1>
              <div className="flex justify-center md:justify-start mt-4">
                <img src="/PayPal.png" alt="PayPal" className="h-10 md:h-20 w-auto mx-2" />
                <img src="/justgiving.webp" alt="JustGiving" className="h-10 md:h-20 w-auto mx-2" />
              </div>
            </h3>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
