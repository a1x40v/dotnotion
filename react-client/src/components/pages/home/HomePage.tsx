import { Button } from '@/components/ui/button';
import TitleSection from '../landing-page/TitleSection';
import Banner from '../../../../public/appBanner.png';
import Cal from '../../../../public/cal.png';
import { CLIENTS } from '@/lib/constants';

const HomePage = () => {
  return (
    <>
      <section className="mt-10 px-4 gap-4 overflow-hidden sm:flex sm:flex-col sm:px-6 md:justify-center md:items-center">
        <TitleSection
          pill="✨ Your workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]">
          <Button
            variant={'secondary'}
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            Get Cypress Free
          </Button>
        </div>
        <div
          className="flex justify-center items-center relative w-[750px] mt-[-40px] ml-[-50px]
          sm:w-full sm:ml-0 md:mt-[-90px]"
        >
          <img src={Banner} alt="Application Banner" />
          <div className="absolute z-10 top-[50%] bottom-0 bg-gradient-to-t dark:from-background left-0 right-0"></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="flex overflow-hidden
            after:content[:] after:absolute
            after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-20
            after:bg-gradient-to-l after:dark:from-brand-dark after:from-background after:to-transparent
            
            before:content[''] before:absolute
            before:top-0 before:left-0 before:bottom-0 before:z-10 before:w-20
            before:bg-gradient-to-r before:dark:from-brand-dark before:from-background before:to-transparent"
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex flex-nowrap animate-slide">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative flex items-center shrink-0 w-[200px] m-20"
                >
                  <img
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="absolute top-22 -z-10 w-[30%] h-32 rounded-full">
          <TitleSection
            title="Keep track of your meetings all in one place"
            subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
            pill="Features"
          />
          <div
            className="relative flex justify-center items-center
                       max-w-[450px] mt-10 border-8 border-washed-purple-300 border-opacity-10 rounded-2xl sm:ml-0"
          >
            <img src={Cal} alt="Banner" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
