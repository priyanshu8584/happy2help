import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export const AboutUs = () => {
  return (
    <div>
      <AppBar />
      <div
        className="min-h-screen bg-cover bg-center font-semibold p-4 md:p-8"
        style={{ backgroundImage: `url('/heroBanner.jpg')`, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
        <div className="text-black text-center mb-8">
          <h1 className="text-xl md:text-2xl mb-4">About Happy to Help</h1>
          <h3 className="text-sm md:text-base">
            We are a team of young professionals and students and act as a platform for first time fundraisers to raise awareness and funds through the things they love such as dance, singing, music, and fitness. We aim to provide a support fund for medical and educational staff, in the hope that we can make a difference by aiding in the purchase of tools and equipment so the staff can better serve the patients and students respectively.
          </h3>
        </div>
        <hr className="border-black mb-8" />
        <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
          <img src="/about1.jpg" alt="About Us 1" className="w-full md:w-1/2 h-auto" />
          <div className="text-sm md:text-base">
            The current small but dedicated team behind the fund have done a fantastic job so far since establishing in December 2013 raising more than £62,000 for a number of causes including Great Ormond Street Hospital for Children, Help for Heroes, and Delete Blood Cancer. We are now focusing on growing the organisation worldwide having completed projects in UK, US, China, Peru, Tanzania, and India. The donations primarily are used to buy Fabian machines, a piece of equipment which is used to make it easier for babies to breathe so that they can relax and sleep without difficulty during their treatment.
          </div>
        </div>
        <hr className="border-black mb-8" />
        <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-sm md:text-base">
            Majority of the patients at Great Ormond Street are under the age of 2, some of whom have been admitted there since birth. Occasionally older children with chronic health conditions have been readmitted to the hospital. The continuous challenge is to meet the needs for expansion to provide the best care to its young patients.
            <br /><br />
            The children do not understand why they cannot go home and just want to run around and be happy, it is our duty to try and put a smile on these young faces and aid the medical team involved to carry on doing their excellent work.
          </div>
          <img src="/about2.jpg" alt="About Us 2" className="w-full md:w-1/2 h-auto" />
        </div>
        <hr className="border-black mb-8" />
        <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
          <img src="/about3.jpg" alt="About Us 3" className="w-full md:w-1/2 h-auto" />
          <div className="text-sm md:text-base">
            We encourage volunteers to identify other areas where we can help and have further developed relationships with The Anthony Nolan Trust, Help for Heroes, Little Havens Hospice for Children, and schools in Punjab, India. I am proud to announce our academy has been successfully running since June 2016 whereby we support 132 children funding tuition fees for exams and providing basic equipment in books, pencils, and erasers. The academy was set up to provide children with educational support having lost family members due to the ongoing drug issue in Punjab and some are still facing the tragic backlash of 1984.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
