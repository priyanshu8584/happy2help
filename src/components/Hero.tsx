export const Hero = () => {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center flex justify-center items-center p-4 md:p-8" 
           style={{ backgroundImage: `url('/heroBanner.jpg')`, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="text-black text-center md:text-left flex flex-col md:flex-row justify-between items-center font-semibold space-y-4 md:space-y-0 md:space-x-8">
          <div className="max-w-full md:w-1/2">
            <p className="mb-4">
              We are a team of young professionals and students and act as a platform for first time fundraisers to raise awareness and funds through the things they love such as dance, singing, music, and fitness.
            </p>
            <p className="mb-4">
              We pride ourselves on ensuring 100% of donations received are allocated to the causes we support. Having zero administrative costs or overheads means we are able to maximise all donations.
            </p>
            <p>
              Having completed projects in the UK, US, China, Peru, and Tanzania, we plan to grow our organisation worldwide and encourage volunteers to identify other areas where we can help.
            </p>
          </div>
          <img src="/banner.jpg" alt="image" className="h-40 w-40 md:h-80 md:w-80" />
        </div>
      </div>
    </div>
  );
};

