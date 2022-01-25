import Head from "next/head";
import Header from "../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import Link from "next/link";
import { useEffect } from "react";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation]);

function playPauseVideo() {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // We can only control playback without insteraction if video is mute
    video.muted = true;
    // Play is a promise so we need to check we have it
    let playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio !== 1 && !video.paused) {
                // video.pause();
              } else if (video.paused) {
                video.currentTime = 0;
                video.play();
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(video);
      });
    }
  });
}

export default function Home() {
  useEffect(() => {
    playPauseVideo();
  }, []);

  return (
    <>
      <Head>
        <title>Hair By | Devon Sean</title>
        <meta name="description" content="Generated Team Devon Sean" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <Swiper
        spaceBetween={30}
        effect={"slide"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".slider-next-btn",
          prevEl: ".slider-prev-btn",
        }}
        className="lead-swiper"
      >
        <SwiperSlide>
          <img src="/hair-product-min.jpg" />
          {/* <div className="text-block max-w-7xl mx-auto px-4 sm:px-6 absolute text-left">
          <div className="title">Stylist</div>
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/male-stylist-min.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/owner-min.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/delivery-min.jpeg" />
        </SwiperSlide>
      </Swiper>

      {/* Founder's story */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto p-4 lg:pl-8">
          <div className="grid grid-cols-6">
            <div className="col-span-6 lg:col-span-2 h-full">
              <div className="relative lg:-mt-24 z-10 founder-box">
                <img
                  src="/mimi.jpeg"
                  className="absolute w-full h-full object-cover"
                />
                <div className="w-full h-full bg-black/60 p-6 relative">
                  <h1 className="text-gray-50 text-2xl lg:text-6xl font-extralight pt-16">
                    Founder's <br /> Story
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-4 pt-24 lg:pt-0">
              <div className="relative lg:-mt-24 z-10 w-fit h-20 overflow-hidden hidden lg:block">
                <div className="sliderarrow">
                  <Link href="#">
                    <a className="left-arrow slider-prev-btn">Left</a>
                  </Link>
                  <Link href="#">
                    <a className="right-arrow slider-next-btn">Right</a>
                  </Link>
                </div>
              </div>
              <div className="bg-brand-900/30">
                <div className="p-4">
                  <h3 className="text-gray-200 font-semibold">
                    The Inspiration
                  </h3>
                  <p className="text-gray-400 font-light">
                    I made the decision to go
                    Natural and never use chemicals on my hair... It's 8 years
                    now and I've grown a healthy and luscious natural African
                    hair. <br />
                    In the first 2 years of my Natural Hair journey I lived in
                    Ghana, Koforidua to be precise. It was quite easy to
                    maintain my natural hair there. But I had to move back to
                    Nigeria and just then I saw the gap in the Nigerian beauty
                    sector.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-200 font-semibold">
                    Bridging The Gap
                  </h3>
                  <p className="text-gray-400 font-light">
                    Hair by Devon Sean bridges the gap between customers and
                    vendors when purchasing Natural ingredients, Proper care for
                    the hair, Knowledge on what works for different hair types,
                    The right treatment, Proper styling, salon management, and
                    mobile salon services
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-200 font-semibold">
                    The Opportunity
                  </h3>
                  <p className="text-gray-400 font-light">
                    At Devon Sean we seek to close that gap by infusing
                    technology, artisan and knowledge into the African beauty
                    industry. We provide high visibility, Trainings for stylist,
                    barbers and staff, Providing the right product per hair
                    type, and making products & services affordable.
                  </p>
                </div>
                <div className="p-4">
                  <h2 className="text-gray-500 text-2xl font-halimun">
                    Alex Mimi.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* app preview */}
      <section>
        <video preload="none" width="100%" height="100%">
          <source src="app-preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* app features */}
      <section id="features">
        <div className="max-w-7xl mx-auto py-10 px-4 lg:py-20">
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-6 lg:col-span-2">
              <h1 className="text-gray-50 text-2xl lg:text-6xl font-extralight">
                Platform <br /> Features
              </h1>
              <p className="text-gray-400 font-light py-4">
                Hair By Devon Sean is an e- commerce software as a service
                (SaaS) product. Purely cloud-based, Hair By Devon Sean is a
                complete appointment booking, salon management and ecommerce
                software solution for business owners, freelance hair stylist
                and clients.
              </p>
            </div>

            <div className="col-span-6 lg:col-span-4 relative">
              <div className="absolute top-0 right-0 z-10 -mt-10 w-fit  overflow-hidden">
                <div className="flex flex-row justify-around items-center">
                  <Link href="#">
                    <a className="slider-prev-btn p-2 bg-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffffff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="slider-next-btn p-2 bg-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffffff"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <Swiper
                spaceBetween={30}
                breakpoints={{
                  270: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
                effect={"slide"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".slider-next-btn",
                  prevEl: ".slider-prev-btn",
                }}
                className="features-swiper"
              >
                {[
                  {
                    i: "male-stylist-min.jpg",
                    t: "Stylists",
                    d: "Stylist will be able to post pictures of previous jobs done, accept appointments and sell hair products.",
                  },
                  {
                    i: "hair-product-min.jpg",
                    t: "Products",
                    d: "Book appointments with stylist & salons near you, view, purchase hair products, tools & kits from hair merchants on the platform",
                  },
                  {
                    i: "owner-min.jpg",
                    t: "Businesses",
                    d: "Salon owners will be able to register, manage staff, accept appointments and sell hair products.",
                  },
                  {
                    i: "delivery-min.jpeg",
                    t: "Delivery",
                    d: "Dispatch riders and delivery companies can signup and track orders and access more merchants",
                  },
                  {
                    i: "signin-screen.png",
                    t: "Registration",
                    d: `Platform is opened for registration to Salons, Freelance Stylists,  and Hair Merchants`,
                  },
                  {
                    i: "products.png",
                    t: "Near You",
                    d: "App uses geo-location services to find hair products and locate hair stylist and salons near you.",
                  },
                ].map((v) => (
                  <SwiperSlide key={v.t}>
                    <div className="flex flex-col  bg-black h-full w-full">
                      <div className="relative lg:h-3/6 h-80">
                        <img
                          src={`/${v.i}`}
                          className="w-full h-full  object-cover object-center"
                        />
                      </div>

                      <div className="text-left mt-4 lg:h-3/6">
                        <h3 className="text-gray-200 font-semibold">{v.t}</h3>
                        <p className="text-gray-400 font-light mt-4">{v.d}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* download app */}
      <section className="bg-gray-800" id="download">
        <div className="max-w-7xl mx-auto py-10 px-4 lg:py-20">
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-6 lg:col-span-3 lg:order-2">
              <div className="lg:pt-10">
                <h1 className="text-gray-200 text-2xl lg:text-6xl font-extralight">
                  Download Now
                </h1>
                <p className="text-gray-400 font-light py-2">
                  Explore more features (push notifications, reminders, and many
                  more) when you download the app from app stores.
                </p>
                <div className="grid grid-cols-6 gap-5 py-2">
                  <div className="col-span-3">
                    <Link href="#">
                      <a className="border-2 border-gray-50 hover:border-gray-300 bg-gray-50 hover:bg-gray-300 w-full p-2  flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                          <img
                            src="/appstore.png"
                            className=" w-6 h-6 object-cover object-center"
                          />
                          <span className=" text-gray-800 text-sm md:text-lg ml-2">
                            App Store
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#6e6e6e"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-span-3">
                    <Link href="#">
                      <a className="border-2 border-gray-50 hover:border-gray-300 bg-gray-50 hover:bg-gray-300 w-full p-2 flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center">
                          <img
                            src="/playstore.png"
                            className=" w-6 h-6 object-cover object-center"
                          />
                          <span className=" text-gray-800 text-sm md:text-lg ml-2">
                            PlayStore
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#6e6e6e"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3 lg:order-1">
              <video preload="none" width="100%" height="100%">
                <source src="app-download.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact">
        <div className="max-w-7xl mx-auto py-10 px-4 lg:py-20">
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-6 lg:col-span-2">
              <h1 className="text-gray-50 text-2xl lg:text-6xl font-extralight">
                Reach Out
              </h1>
              <p className="text-gray-400 font-light py-4">
                We would love ♥️ to hear from you, contact us:
              </p>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-400 font-light ml-4">
                    Rivers, Nigeria 🇳🇬
                  </p>
                </div>
                <div className="col-span-6 flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-400 font-light ml-4">
                    info@devonsean.com
                  </p>
                </div>
                <div className="col-span-6 flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-400 font-light ml-4">
                    +2347034378351
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-4">
              <form>
                <div className="shadow overflow-hidden sm:">
                  <div className="px-4 py-5 bg-gray-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          // onChange={formik.handleChange}
                          // value={formik.values.email}
                          autoComplete="email"
                          className="bg-gray-300  mt-1 focus:ring-brand-500 focus:border-brand-500 block w-full shadow-sm sm:text-sm border-gray-300 "
                        />
                        {/* {formik.touched.email && formik.errors.email ? (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.email}
                        </p>
                      ) : null} */}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          // onChange={formik.handleChange}
                          // value={formik.values.subject}
                          id="subject"
                          autoComplete="address-level1"
                          className="bg-gray-300 mt-1 focus:ring-brand-500 focus:border-brand-500 block w-full shadow-sm sm:text-sm border-gray-300 "
                        />
                        {/* {formik.touched.subject && formik.errors.subject ? (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.subject}
                        </p>
                      ) : null} */}
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Message
                        </label>
                        <textarea
                          type="text"
                          name="message"
                          // onChange={formik.handleChange}
                          // value={formik.values.message}
                          id="message"
                          autoComplete="message"
                          className="bg-gray-300 mt-1 sm:h-48 h-40 focus:ring-brand-500 focus:border-brand-500 block w-full shadow-sm sm:text-sm border-gray-300  resize-none"
                        ></textarea>
                        {/* {formik.touched.message && formik.errors.message ? (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.message}
                        </p>
                      ) : null} */}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-900 text-right sm:px-6">
                    <button
                      type="submit"
                      // disabled={formik.isSubmitting}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* competion */}
      <section className="competition">
        <img src="/total.png" className="" />
      </section>
      <section className="share-likes ">
        <div className="max-w-7xl mx-auto  p-4 pb-10">
          <div className="grid grid-cols-6 gap-10">
            <div className="col-span-6 lg:col-span-3 lg:order-2">
              <video preload="none" width="100%" height="100%" controls>
                <source src="like-steps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-span-6 lg:col-span-3 lg:order-1">
              <h1 className="text-gray-50 text-2xl lg:text-6xl font-extralight">
                Share For Likes
              </h1>
              <p className="text-gray-100 font-light py-4">
                Please follow the steps below to help us win the Startupper
                Challenge of the year by TotalEnergies
              </p>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>

                  <p className="text-gray-100 font-light ml-4">
                    1. Visit
                    <Link href="https://startupper.totalenergies.com/juries/zQhZ1VKY1YekVoBD2vb7cw/participations/24181/vote?order=random&scope=all">
                      <a
                        className="text-gray-50 font-light ml-4 bg-gray-50/10 rounded p-2 text-xs"
                        target="_blank"
                      >
                        TotalEnergies Startupper Challenge
                      </a>
                    </Link>
                  </p>
                </div>
                <div className="col-span-6 flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <p className="text-gray-100 font-light ml-4">
                    2. Create Account
                  </p>
                </div>
                <div className="col-span-6 flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-gray-100 font-light ml-4">
                    3. Search for <strong>Devon Sean</strong>
                  </p>
                </div>
                <div className="col-span-6 flex flex-row justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p className="text-gray-100 font-light ml-4">
                    4. Like project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
