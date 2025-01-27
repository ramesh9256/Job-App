import React from 'react';

const Data = [
  {
    img: "https://cdn.vectorstock.com/i/1000v/23/65/admin-support-for-clients-of-enterprises-vector-39402365.jpg",
    tittle: "Admin Support",
    job: "12 jobs",
  },
  {
    img: "https://images.surferseo.art/ab2827f1-a2ea-469f-874f-de59c41af595.jpeg",
    tittle: "React Js Developer",
    job: "23 jobs",
  },
  {
    img: "https://www.careerguide.com/career/wp-content/uploads/2023/12/Content-Writing.jpg",
    tittle: "Content Writer",
    job: "34 jobs",
  },
  {
    img: "https://cdn-ilaajhb.nitrocdn.com/bzYtFznvkVaQdGOioMzGqUmNQFhSYZZC/assets/images/optimized/rev-a0e3774/jkconsulting.com/wp-content/uploads/2024/03/Network-switch-and-ethernet-cables-2-copy-1080x675.jpg",
    tittle: "IT and Networking",
    job: "54 jobs",
  },
  {
    img: "https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/ai-ml/artificial-intelligence-1920.jpg",
    tittle: "Artificial Intelligence",
    job: "23 jobs",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202407/669646b958cc3-union-budget-2024-education-sector-expectations-160855715-16x9.jpeg?size=948:533",
    tittle: "Education sector",
    job: "12 jobs",
  },
  {
    img: "https://www.ramjankienterprises.com/gall/IT-and-software.jpg",
    tittle: "It and Software",
    job: "23 jobs",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdTkV7O7XUMHZC0gIKFnafhWsBp_Z7MOt3Q&s",
    tittle: "Law",
    job: "34 jobs",
  },
  {
    img: "https://legal.fronteo.com/wp-content/uploads/2023/09/FLLP_legal_affairs_work.png",
    tittle: "Legal",
    job: "54 jobs",
  },
  {
    img: "https://images.yourstory.com/cs/1/b3cc3444ab5e11e88691f70342131e20/Whatissoftwareandtypesofsoftwarewithexamples1575272423828jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
    tittle: "IT and Software",
    job: "23 jobs",
  },
  {
    img: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/banner-upload-07april/What_is_a_Project_Coordinator.jpg",
    tittle: "Project Coordinator",
    job: "12 jobs",
  },
  {
    img: "https://supersourcing.com/blog/wp-content/uploads/2023/12/Banner.webp",
    tittle: "Python Developer",
    job: "23 jobs",
  },
  {
    img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/web_developerskills.jpg",
    tittle: "Web Developer",
    job: "34 jobs",
  },
  {
    img: "https://www.applify.com.sg/blog/wp-content/uploads/2023/09/UI-UX-Developer-Skills.jpg",
    tittle: "UI/UX Designer",
    job: "54 jobs",
  },
  {
    img: "https://dsdeducation.in/wp-content/uploads/2024/02/digital_marketing_img_00-1.jpg",
    tittle: "digital Marketing",
    job: "23 jobs",
  },
  {
    img: "https://www.softwebsolutions.com/wp-content/uploads/2017/06/Nodejs-Developer.jpg",
    tittle: "Node Js Developer",
    job: "12 jobs",
  },
  {
    img: "https://contentwriters.com/blog/wp-content/uploads/PPC2018.jpg",
    tittle: "Content Writer",
    job: "23 jobs",
  },
  {
    img: "https://lh3.googleusercontent.com/proxy/rTyKcvE3ZVxvNowQzhK2-q-pwYxebx6r-LyGFcS2MrmVVeXDVI9MlSyaZ4wLsY67Lu3cEsJbkNOyJ8AfYR_dWJcyw0I_zht7DlnRMVPSG47gEoMGFTzjqvEMhzDK_s_orTS5Q1H0h_V25qgsUw",
    tittle: "Data Analyst",
    job: "34 jobs",
  },
  {
    img: "https://www.cio.com/wp-content/uploads/2024/12/230532-0-24925600-1733475745-data_science_classes-100682563-orig.jpg?quality=50&strip=all",
    tittle: "Data Scientist",
    job: "54 jobs",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    tittle: "Machine Learning",
    job: "23 jobs",
  },
];

const ManyJob = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Available Job Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center p-5"
            >
              <div className="relative w-30 h-20 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.tittle}
                  className="w-full h-full object-cover transform transition-transform duration-1000 hover:rotate-y-360"
                />
              </div>
              <div className="p-2 w-[100%]">
                <h3 className="text-lg font-semibold text-gray-800">{item.tittle}</h3>
                <p className="text-gray-500">{item.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManyJob;
