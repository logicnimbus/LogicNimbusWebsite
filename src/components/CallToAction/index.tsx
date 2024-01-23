import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold  md:text-[38px] md:leading-[1.44]">
                  <span>Join Us on the AI Journey:</span>
                </h2>
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed">
                  Whether you&apos;re a forward-thinking business looking to
                  incorporate AI or a talented individual seeking to make a mark
                  in the AI landscape, LogicNimbus welcomes you to join us on
                  this exciting journey. Together, let&apos;s redefine
                  what&apos;s possible with artificial intelligence.
                </p>
                <div>
                  <p className="font-mediu mb-4 pt-8 text-center text-base">
                    Products By LogicNimbus
                  </p>
                  <div
                    className="wow fadeInUp flex items-center justify-center gap-4 text-center"
                    data-wow-delay=".3s"
                  >
                    <a
                      href="https://github.com/NextJSTemplates/play-nextjs"
                      className="text-white/60 duration-300 ease-in-out hover:text-white"
                      target="_blank"
                    >
                      <Image
                        src={`/images/products/tunk-ai.png`}
                        width={100}
                        height={100}
                        alt="tunk ai - ai based voice to text app"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
