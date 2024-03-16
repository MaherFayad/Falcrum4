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
            <p className="max-w-[900px] text-neutral-700 dark:text-neutral-300 lg:text-2xl md:text-xl text-lg">
              We&rsquo;re a team of designers, developers, and creatives who are passionate about building Amazing products.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-start place-items-start gap-8 lg:gap-10 mt-8">
          <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full max-lg:mx-auto w-full group-hover:scale-105 transition-transform"
              height={50}
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-lg font-bold">Daniel Bron</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CEO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">At just 12, Daniel Bron built his first computer, laying the groundwork for his path from tech prodigy to CEO & Founder of Fulcrum Services and a renowned author. His book, "4th Industrial Revolution: Redefining Frameworks for Startups & Creatives," reflects his belief that technologies like AI, blockchain, and IoT are reshaping society. Daniel's ability to transform visionary tech into strategic action has led to successful collaborations with the Delorean Motor Company, Chrome Hearts, and advisory roles for governments in Ukraine and Libya. Under his leadership, Fulcrum Services is not merely navigating but shaping the future, demonstrating that 4IR technologies are catalysts for a new societal paradigm.</p>
            </div>
          </div>
          <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full max-lg:mx-auto  w-full group-hover:scale-105 transition-transform"
              height={50}
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-lg font-bold">Lars Wood</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CIO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">Lars Wood, our Chief Innovation Officer and a renowned polymath, brings unparalleled expertise in AI and cybersecurity to our team. With pioneering work in machine learning since the 1980s, Lars developed the Octopus Neural System (ONS), a Category 4 AI that marks a significant leap over traditional models. His patented innovations have revolutionized fields from healthcare to energy, showcasing his knack for turning complex theories into tangible solutions.
                Lars's contributions extend to significant governmental collaborations, where his ONS AI has enhanced national cybersecurity defenses and optimized strategic operations. His foresight and interdisciplinary approach have made him a trusted advisor to government agencies, leveraging his AI innovations to secure and advance critical infrastructures. At the helm of our innovation efforts, Lars's visionary leadership not only directs our technological trajectory but also inspires a culture of forward-thinking and excellence, positioning us as pioneers at the edge of the digital frontier.
              </p>
            </div>
          </div>
          <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full max-lg:mx-auto  w-full group-hover:scale-105 transition-transform"
              height={50}
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-lg font-bold">Armen Khachatrian</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CTO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">Armen Khachatrian, Chief Technology Officer: Armen has been at the forefront of technological innovation from an extraordinarily young age. As our CTO, he skillfully steers our tech initiatives through the complexities of the Fourth Industrial Revolution with a blend of innate talent and advanced knowledge. Armen's exceptional skills in data analysis and AI were evident early on, setting the stage for a career marked by pioneering solutions that challenge industry norms. His leadership not only keeps us on the cutting edge of technology but also ensures our solutions are impactful and transformative, embodying the spirit of a true visionary in the tech world.</p>
            </div>
          </div>
          <div className="group pb-2">
            <Image
              alt="Team member"
              className=" overflow-hidden rounded-3xl object-cover object-center max-lg:w-48 max-lg:h-48 max-lg:rounded-full max-lg:mx-auto  w-full group-hover:scale-105 transition-transform"
              height={50}
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={50}
              priority
            />
            <div className="lg:mt-4 text-left max-lg:text-center">
              <h1 className="text-lg font-bold">Grigory Yusufov</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">COO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">Grigory Yusufov, Chief Operating Officer: With a deep-seated background in executive leadership and strategic growth across technology, media, and business, Grigory is pivotal in driving operational excellence at Fulcrum Services. His multifaceted expertise and visionary approach have been instrumental in guiding our company and clients toward significant breakthroughs, setting new standards for success in our sector.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
