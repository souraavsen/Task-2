import React from "react";
import logo from "../../asstes/Images/logo.png";
import footerLogo from "../../asstes/Images/footer_logo.png";
import footerTop from "../../asstes/Images/footer_top.png";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className='mt-28'>
      <img className='w-full h-24' src={footerTop} alt='' />
      <div className='bg-stone-400 text-black px-8 md:px-14 md:py-4'>
        <div className='w-100 container-fluid grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-justify mt-5 mx-auto'>
            <div className='mb-3 flex justify-center md:justify-start items-center text-xl font-semibold'>
              <img className='mx-auto mb-2' width='70%' src={logo} alt='' />
            </div>
            <p>
              পরিকল্পনা ও বাস্তবায়নে: এটুআই, মন্ত্রিপরিষদ বিভাগ, বিসিসি, বেসিস
            </p>
            <div className='flex justify-center items-end mt-4'>
              <h4 className='text-sm'>কারিগরি সহায়তায়:</h4>
              <img className='w-48 mx-auto mb-2' src={footerLogo} alt='' />
            </div>
          </div>

          <div className='mt-5 flex flex-col items-center mx-auto'>
            <h4 className='text-black flex justify-center md:justify-start items-center md:ml-16 text-xl font-semibold mb-4'>
              গুরুত্বপূর্ণ লিংক
            </h4>
            <div className='grid grid-cols-4 md:grid-cols-1 relative float-left'>
              <a
                href='/'
                className='list-item absolute top-0 underline mb-1 hover:ml-4 hover:transition-all hover:delay-75'
              >
                গোপনীয়তার
              </a>
              <a
                href='/'
                className='list-item absolute top-8 underline mb-1 hover:ml-4 hover:transition-all hover:delay-75'
              >
                নীতিমালাব্যবহারের
              </a>
              <a
                href='/'
                className='list-item absolute top-16 underline mb-1 hover:ml-4 hover:transition-all hover:delay-75'
              >
                শর্তাবলিসার্বিক
              </a>
              <a
                href='/'
                className='list-item absolute top-24 underline mb-1 hover:ml-4 hover:transition-all hover:delay-75'
              >
                সহযোগিতায়সাইট
              </a>
              <a
                href='/'
                className='list-item absolute top-32 underline mb-1 hover:ml-4 hover:transition-all hover:delay-75'
              >
                ম্যাপসচরাচর
              </a>
            </div>
          </div>
          <div className=' mt-5 mx-auto'>
            <h4 className='text-black flex justify-center md:justify-start items-center mb-4 text-xl font-semibold'>
              জিজ্ঞাসা
            </h4>
            <div>
              <div className='flex flex-col justify-center items-center md:block mb-4'>
                <a
                  href='tel:911411913165181'
                  className='flex items-center font-medium mb-2'
                >
                  <Icons.TelePhone className='w-4 mr-2' />
                  <span>911411913165181</span>
                </a>
                <a
                  href='tel:+8801756-414858'
                  className='flex items-center font-medium mb-2'
                >
                  <Icons.Mobile className='w-4 mr-2' />
                  <span>01756414858</span>
                </a>
                <div className='flex items-center font-medium'>
                  <Icons.Location className='w-4 mr-2' />
                  <span>BCC Bhaban, E-14 10, Dhaka 1207</span>
                </div>
              </div>
              <div className='mt-2 flex flex-col justify-center items-center md:items-start'>
                <img
                  src='https://i.ibb.co/G2fDPjw/Google-Play-Badge.png'
                  alt=''
                />
                <img
                  className='mt-1'
                  src='https://i.ibb.co/92hb6Q9/App-Store-Badge.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <h6 className='text-black text-center pb-4 py-4 font-light'>
          সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২২-০৫-২৪ ১০:১৯:৩৭
        </h6>
      </div>
    </div>
  );
};

export default Footer;
