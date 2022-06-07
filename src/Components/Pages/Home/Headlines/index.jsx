import Ticker, { NewsTicker } from "nice-react-ticker";

const Headlines = () => {
  return (
    <div className='mt-0.5'>
      <Ticker isNewsTicker={true}>
        <NewsTicker
          id='4'
          title='◉ করোনাভাইরাস প্রতিরোধে নিয়ম মেনে মাস্ক ব্যবহার করুন। ভিজিট করুন corona.gov.bd'
        />

        <NewsTicker
          id='2'
          title='◉ ঐতিহাসিক ৭ই মার্চ উপলক্ষে জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের প্রতিকৃতিতে শ্রদ্ধা নিবেদন এবং আইসিটি টাওয়ারে "বঙ্গবন্ধু বাংলাদেশ" ভাস্কর্য এর উদ্বোধন।'
          meta='২০২২-০৫-০৩'
        />
        <NewsTicker
          id='3'
          title='◉ UNDP, ICT Division sign deal to launch cyber security awareness campaign.'
          meta='২০২২-০৫-০৩'
        />
        <NewsTicker
          id='4'
          title='◉ জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমান এর ঐতিহাসিক নেতৃত্ব এবং সুবর্ণজয়ন্তীতে দেশের উন্নয়ন বিষয়ক আলোচনা সভা ২৪ মার্চ ২০২২ তারিখ অনুষ্ঠিত হয়।'
          meta='২০২২-০৫-০৩'
        />
      </Ticker>
    </div>
  );
};

export default Headlines;
