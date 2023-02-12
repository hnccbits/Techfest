import Home from '../components/home/Home';
// import axiosInstance from '../api/axios';

export default function home() {
  return (
    <div>
      <Home />
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await axiosInstance({
//     method: 'get',
//     url: '/event',
//     withCredentials: false,
//   });

//   return {
//     props: {
//       events: res.data.data,
//     },
//     revalidate: 1000,
//   };
// }
