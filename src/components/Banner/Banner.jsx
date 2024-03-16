const Banner = () => {
  return (
    <div className="relative mt-16">
      <img
        src="https://i.ibb.co/hLGWNSM/vegetables-italian-knife-placed-left-black-table.jpg"
        alt=""
      />
      <div className="absolute top-32 left-12">
        <p className="text-6xl font-bold text-white">
          Discover an exceptional cooking <br /> class tailored for you!
        </p>
        <p className="mt-6 text-lg font-normal text-white">
          "Indulge in culinary creativity! Explore our mouthwatering recipes for
          delicious inspiration. <br /> Let's cook up something extraordinary
          together!"
        </p>
        <div className="gap-x-7 flex mt-12">
          <button className="bg-[#FF0000] p-5 rounded-3xl text-xl font-semibold text-white">
            Explore Now
          </button>
          <button className="bg-slate-100 p-5 rounded-3xl text-xl font-semibold">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
