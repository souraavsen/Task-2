import React from "react";
import Typical from "react-typical";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className='mt-6'>
        <Carousel fade>
          <Carousel.Item interval={4000}>
            <div className='slide1 lg:w-screen lg:min-h-screen'>
              <div className='slide1-content min-h-screen pl-8 md:pl-20 pr-20 py-20 flex flex-col justify-end bg-gray-800 bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm'>
                <h3 className='text-lg md:text-2xl font-bold text-black pb-4'>
                  <Typical
                    className='text-white text-opacity-80'
                    steps={[
                      `"মুজিব বর্ষ" ক্যাপশন সহ একটি ছবি পোস্ট করুন`,
                      3000,
                      "ক্যাপশন এর জন্য শব্দ সীমা -১০",
                      2500,
                    ]}
                    loop={Infinity}
                    wrapper='p'
                  />
                </h3>
                <p className='text-stone-200 text-justify sm:w-4/12 lg:w-6/12 md:text-sm'>
                  আমাদের জাতির পিতা এবং দূরদর্শী নেতা বঙ্গবন্ধু শেখ মুজিবুর
                  রহমানের জন্মশতবার্ষিকী উদযাপনের জন্য ২০২০-২০২১ বছরটি আমাদের
                  কাছে বিশেষ মূল্যবান।
                  <br />
                  <br />
                  উপযুক্ত ক্যাপশন সহ একটি ছবি পোস্ট করে দেশব্যাপী এই উদযাপনে
                  অংশগ্রহণের জন্য আমরা আপনাকে আমন্ত্রণ জানাচ্ছি।
                </p>
                <button className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-md text-black bg-stone-300 bg-opacity-70 hover:bg-opacity-50 text-center'>
                  Explore
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <div className='slide2 lg:w-screen lg:min-h-screen'>
              <div className='slide2-content ml-auto min-h-screen pl-8 md:pl-20 pr-20 py-20 flex flex-col justify-end bg-gray-800 bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm'>
                <h3 className='text-lg md:text-2xl font-bold text-black pb-4'>
                  <Typical
                    className='text-white text-opacity-80'
                    steps={[
                      "কোভিড-১৯ ভ্যাকসিন নিবন্ধন",
                      3000,
                      "করার জন্য ভিজিট করুন।",
                      2500,
                    ]}
                    loop={Infinity}
                    wrapper='p'
                  />
                </h3>
                <p className='text-stone-200 text-justify sm:w-4/12 lg:w-6/12 md:text-sm'>
                  "ডিজিটাল বাংলাদেশ পুরস্কার ২০২১ এর মনোনয়ন বা আবেদন আহ্বান
                  করেছে সরকারের তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ। সোমবার (২ আগস্ট)
                  আইসিটি বিভাগ থেকে এক সংবাদ বিজ্ঞপ্তিতে এই তথ্য জানানো হয়। তথ্য
                  ও যোগাযোগ প্রযুক্তি বিভাগের অতিরিক্ত সচিব ড. খন্দকার আজিজুল
                  ইসলামের স্বাক্ষরিত ওই বিজ্ঞপ্তিতে বলা হয়, তথ্য ও যোগাযোগ
                  প্রযুক্তি খাতে বিশেষ অবদান রাখার জন্য ব্যক্তি, দল ও
                  প্রতিষ্ঠানকে অনুপ্রেরণা, উৎসাহ ও উদ্দীপনা যোগানো।
                </p>
                <button className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-md text-black bg-stone-300 bg-opacity-70 hover:bg-opacity-50 text-center'>
                  Explore
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <div className='slide3 lg:w-screen lg:min-h-screen'>
              <div className='slide3-content min-h-screen pl-8 pr-20 py-20 flex flex-col justify-end items-end lg:pr-48 md:pr-48 bg-gray-800 bg-opacity-40 md:backdrop-filter md:backdrop-blur-sm'>
                <h3 className='text-lg md:text-2xl font-bold text-black pb-4'>
                  <Typical
                    className='text-white text-opacity-80'
                    steps={[
                      "প্রধানমন্ত্রীর জন্মদিন উপলক্ষে গণ টিকা শুরু",
                      3000,
                      "অনলাইনে নিবন্ধন",
                      2500,
                    ]}
                    loop={Infinity}
                    wrapper='p'
                  />
                </h3>
                <p className='text-stone-200 text-justify sm:w-4/12 lg:w-6/12 md:text-sm'>
                  "The mass vaccination campaign started from 9am and it will
                  continue till the target is met," Director General of
                  Directorate General of Health Services (DGHS), Prof Dr Abul
                  Bashar Mohammad Khurshid Alam, told BSS.
                </p>
                <button className='w-36 lg:ml-40 mt-4 px-3 py-2 font-semibold rounded-md text-black bg-stone-300 bg-opacity-70 hover:bg-opacity-50 text-center'>
                  Explore
                </button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
