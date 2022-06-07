import membersInfo from "./MembersInfo.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Members = () => {
  return (
    <div className='container md:flex justify-center items-center pt-24'>
      <div className='w-4/12 flex flex-col mx-auto items-start mr-10 pb-10 lg:pb-0 lg:w-5/12'>
        <h1 className='text-center text-2xl font-semibold p-12'>
          উপদেষ্টা/বিশেষ সহকারীগণ
        </h1>
      </div>
      <div className='w-8/12 relative'>
        <OwlCarousel className='owl-theme' loop margin={20} items={3} nav>
          {membersInfo.map((member) => (
            <div key={member.id} className='item'>
              <div className='flex flex-col justify-center items-center p-10 bg-stone-200 mx-auto rounded-md shadow-md member'>
                <div className='w-44 h-44'>
                  <img
                    className='mx-auto w-full h-full'
                    src={member.image}
                    alt=''
                  />
                </div>
                <div className='flex flex-col justify-center items-center mx-auto pt-3'>
                  <h3 className='text-center font-semibold'>{member.name}</h3>
                  <p className='text-xs text-center text-gray-700'>
                    {member.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Members;
