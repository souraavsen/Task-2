import React from "react";

const TopNewes = () => {
  return (
    <div>
      <div className='pt-10'>
        <h1 className='text-center text-4xl font-semibold pb-16 mt-20'>
          সকল বাতায়ন
        </h1>
        <div className='container bg-stone-300 py-10'>
          <div className='md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            <div className='mx-auto mb-6 flex justify-center items-center'>
              <iframe
                className='bg-white shadow-md p-1 rounded-md'
                width='350'
                height='250'
                src='https://www.youtube.com/embed/B0FgrYBE4uY'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>

            <div className='text-justify m-auto p-8'>
              <h1 className='text-base pb-4 font-semibold text-black'>
                শেখ হাসিনার নেতৃত্বে ডিজিটাল বাংলাদেশ
              </h1>
              "মাননীয় প্রধানমন্ত্রী জননেত্রী শেখ হাসিনার নেতৃত্বে ডিজিটাল
              বাংলাদেশ এর এগিয়ে যাওয়ার ১২ বছর (দিন বদলের গল্প)।" - শীর্ষক
              উপস্থাপনা। - জুনাইদ আহমেদ পলক, এমপি।
            </div>
            <div className='mx-auto mb-6 flex justify-center items-center'>
              <iframe
                className='bg-white shadow-md p-1 rounded-md'
                width='350'
                height='250'
                src='https://www.youtube.com/embed/v1R-CB3e-pw'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>

            <div className='text-justify m-auto p-8'>
              <h1 className='text-base pb-4 font-semibold text-black'>
                করোনাভাইরাস পরিস্থিতি
              </h1>
              করোনাভাইরাস পরিস্থিতিতে বঙ্গবন্ধুকন্যা মাননীয় প্রধানমন্ত্রী শেখ
              হাসিনা ৩১ নির্দেশনা দিয়েছেন। করোনাভাইরাস (COVID-19) সংক্রমণ
              প্রতিরোধে সরকারের নির্দেশনাবলী মেনে চলুন। নিজে সুস্থ থাকুন, অন্যকে
              নিরাপদে রাখুন। মনে রাখবেন আমার হাতেই আমার সুরক্ষা । জরুরি
              স্বাস্থ্যসেবা পেতে ৩৩৩ অথবা ১৬২৬৩ নম্বরে কল করুন এবং তথ্য পেতে
              www.corona.gov.bd ওয়েবসাইটে ভিজিট করুন।
            </div>

            <div className='mx-auto mb-6 flex justify-center items-center'>
              <img
                className='bg-white shadow-md p-1 rounded-md'
                src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Mujib_100_Logo.svg/800px-Mujib_100_Logo.svg.png'
                width='90%'
              />
            </div>

            <div className='text-justify m-auto p-8'>
              <h1 className='text-base pb-4 font-semibold text-black'>
                মুজিববর্ষ
              </h1>
              মুজিববর্ষ পালনের অংশ হিসেবে, বাংলাদেশের স্বাধীনতা সংগ্রামে শেখ
              মুজিবুর রহমানের ভূমিকা তৃণমূল পর্যায়ে প্রচারের পাশাপাশি প্রতি
              বছরের মতই তার স্বদেশ প্রত্যাবর্তন দিবস, আওয়ামী লীগের
              প্রতিষ্ঠাবার্ষিকী, জাতীয় শোক দিবস এবং জেল হত্যা দিবসও পালিত হয়।
              এছাড়াও বাংলাদেশ সরকার জন্মশতবার্ষিকী ও মুজিববর্ষ উদ্‌যাপন
              উপলক্ষ্যে স্বল্পদৈর্ঘ্য চলচ্চিত্র ও প্রামাণ্যচিত্র নির্মাণ করে।...
              <button className='mt-3 text-xs py-1.5 font-semibold text-black border-b-2 border-stone-700 text-center'>
                আরো জানুন
              </button>
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <button className='w-36 mx-auto mt-3 py-1.5 font-semibold rounded-md text-black bg-stone-100 bg-opacity-80 hover:bg-opacity-70 text-center'>
              আরো বাতায়ন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNewes;
