import Image from "src/common/component/element/Image";
import React from "react";

export default function OurTeam() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32">
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Meet the Visionaries
            </h2>
            <p className="max-w-[900px] text-neutral-700 dark:text-neutral-300 lg:text-2xl md:text-xl text-2xl">
              We&rsquo;re a team of designers, developers, and creatives who are passionate about building Amazing products.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 place-content-start place-items-start gap-8 lg:gap-10 mt-8">
          <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full aspect-square max-lg:mx-auto w-full group-hover:scale-105 transition-transform"
              height={50}
              src="/bron.webp"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-2xl font-bold">Daniel Bron</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CEO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">CEO Former strategy consultant for Fortune 500 companies. Expertise in AI ethics and responsible innovation.

</p>
            </div>
          </div>
         <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full aspect-square max-lg:mx-auto  w-full group-hover:scale-105 transition-transform"
              height={50}
              src="/EBTGjWHSXvZX4fBZp35s8JnDgE.avif"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-2xl font-bold">Patrick Rall</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CTO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">CTO Expert in cloud infrastructure and ML ops. Pioneered novel approaches to GPU optimization.

</p>
            </div>
          </div>
          <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full max-lg:mx-auto  w-full aspect-square group-hover:scale-105 transition-transform"
              height={50}
              src="/8HuM2EEr3giLHBawZQMSkENco.avif"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-2xl font-bold">Maher Fayed</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CDO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">Chief Design Officer UX/UI expert with a focus on making complex systems intuitive. Believes in the power of design to democratize technology.</p>
            </div>
          </div>
          <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full aspect-square max-lg:mx-auto  w-full group-hover:scale-105 transition-transform"
              height={50}
              src="/JCkbWWMQfdHDc0N94SGvbUhzG4.avif"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-2xl font-bold">Dan Marom              </h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CFO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">CFO with a legacy of scaling multimillion-dollar aviation and real estate ventures. Expertise in driving growth and operational efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
