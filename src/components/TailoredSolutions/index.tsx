import Image from "next/image";

const TailoredSolutions = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Tailored Solutions
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Recognizing that every business is unique, we specialize in
                  crafting bespoke AI solutions. Our products are designed to
                  seamlessly integrate into your workflow, offering a
                  personalized touch that maximizes efficiency and
                  effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TailoredSolutions;
