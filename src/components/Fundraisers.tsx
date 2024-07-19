import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export const Fundraisers = () => {
  return (
    <div>
      <AppBar />
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center p-4 md:p-8"
        style={{ backgroundImage: `url('/heroBanner.jpg')`, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left text-lg md:text-2xl space-y-4 md:space-y-0 md:space-x-8">
          <img src="/fundraisers.avif" alt="Fundraisers" className="max-w-full h-auto mb-4 md:mb-0" />
          <div>
            <h1 className="font-bold text-xl md:text-2xl mb-4">Fundraising</h1>
            <p>
              We believe raising awareness through the things we love is the best way to not only engage with the public but also gives our volunteers a chance to connect through their passion.
              <br /><br />
              Be it singing, dancing, running, cycling we encourage single volunteers to get involved and we join them side by side to tackle challenges and fundraise as a team.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


