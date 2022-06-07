import React from "react";
import Icons from "../../../Shared/Icons";
import events from "./Events.json";
const Events = () => {
  return (
    <div className='my-10'>
      {/* ongoinging Event section  */}
      <div className='w-full flex justify-evenly items-start'>
        <div className='w-5/12'>
          <h1 className='text-center text-2xl font-semibold pb-16 mt-20'>
            চলমান ঘটনাবলী
          </h1>
          <div className='mx-auto w-full'>
            {events.onGoing.map((onEvent) => (
              <div
                key={onEvent.id}
                className='w-11/12 md:w-full mx-auto flex bg-green-50 p-4 rounded-lg shadow-md my-4 cursor-pointer'
              >
                <div className='flex flex-col'>
                  <div className='flex items-center'>
                    <Icons.Bell className='text-green-700 w-3 mr-2' />
                    <div className='text-black font-semibold'>
                      <span>{onEvent.title}</span>
                    </div>
                  </div>
                  <div className='flex items-center text-sm text-black font-medium pt-2 pl-8 '>
                    <Icons.Calender className='w-3 mr-2' />
                    <span>{onEvent.date}</span>
                  </div>
                  <div className='flex items-center text-sm text-black font-medium pt-2 pl-8 '>
                    <Icons.Location className='w-3 mr-2' />
                    <span>{onEvent.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Event section  */}
        <div className='w-5/12'>
          <h1 className='text-center text-2xl font-semibold pb-16 mt-20'>
            আসন্ন ঘটনাবলী
          </h1>
          <div className='mx-auto'>
            {events.upComming.map((upEvent) => (
              <div
                key={upEvent.id}
                className='w-11/12 md:w-full mx-auto flex bg-yellow-50 p-4 rounded-lg shadow-md my-4 cursor-pointer'
              >
                <div className='flex flex-col'>
                  <div className='flex items-center'>
                    <Icons.Bell className='text-yellow-700 w-3 mr-2' />
                    <div className='text-black font-semibold'>
                      <span>{upEvent.title}</span>
                    </div>
                  </div>
                  <div className='flex items-center text-sm text-black font-medium pt-2 pl-8 '>
                    <Icons.Calender className='w-3 mr-2' />
                    <span>{upEvent.date}</span>
                  </div>
                  <div className='flex items-center text-sm text-black font-medium pt-2 pl-8 '>
                    <Icons.Location className='w-3 mr-2' />
                    <span>{upEvent.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
