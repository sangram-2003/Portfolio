const About = () => {
  return (
    <>
      <div className="w-full col-span-2 h-svh row-span-1 ">
        <div className="w-full h-full  col-span-12 flex flex-row-reverse items-center justify-center">
          <div className="w-[80rem] grid grid-cols-2 gap-2 grid-flow-dense h-full ">
            <img
              src="./man1.jpg"
              className=" rounded-md w-[100%] h-[8rem] col-span-2 row-end-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[8rem] h-[9rem] col-span-1 row-span-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[12rem] col-span-1 row-span-2"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[7rem] col-span-1 row-span-2"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[10rem] col-span-1 row-span-2"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[6rem] row-span-1 col-span-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[4rem] col-span-1 row-span-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[4rem] col-span-1 row-span-1"
              alt="Man"
            />
          </div>
          <div className="   p-4 h-full">
            <h6 className="text-2xl m-0 text-black font-serif font-bold">
              Sangram Bauri
            </h6>
            <p className="text-md m-0 text-gray-700  font-semibold">
              Mern Stack Developer <span className="font-extrabold">.</span>{" "}
              Frontend Developer
            </p>
            <p className="text-[1.1rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae beatae consequatur placeat dolorum perferendis
              distinctio fugit ratione veritatis quam nobis quaerat quasi, nam
              sunt dolores doloremque officia rerum quos ipsa nesciunt, optio,
              consequuntur eum! Illum quis perferendis, facilis cupiditate
              reiciendis voluptatibus quibusdam ea modi veniam. Inventore odio
              quidem itaque consequatur.
            </p>
            <p className="text-[1.1rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae beatae consequatur placeat dolorum perferendis
              distinctio fugit ratione veritatis quam nobis quaerat quasi, nam
              sunt dolores doloremque officia rerum quos ipsa nesciunt, optio,
              consequuntur eum! Illum quis perferendis, facilis cupiditate
              reiciendis voluptatibus quibusdam ea modi veniam. Inventore odio
              quidem itaque consequatur.
            </p>
            <p className="text-[1.1rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae beatae consequatur placeat dolorum perferendis
            </p>
            <div className="">
              <button className="w-auto px-4 py-2 bg-sky-400 rounded-full text-md font-semibold">
                Download CV
              </button>
            </div>
          </div>
          <div className="w-[70rem] px-2 py-1 h-full overflow-x-hidden gap-4 space-y-2 flex-col overflow-y-scroll review ">
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c1.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c2.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c3.png" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c4.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c5.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c7.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c8.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c1.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c1.jpg" className="h-full w-full rounded-md"></img>
            </div>
          </div>
        </div>
        {/* Scrollable content */}
        {/* <div className="w-full mt-2 gap-8 overflow-x-auto flex items-center justify-center">
          <button className="px-8 py-2 bg-green-300 rounded-full">
            Contact{" "}
          </button>
          <button className="px-8 py-2 bg-sky-300 rounded-full">
            Hire Me{" "}
          </button>
        </div> */}
      </div>
    </>
  );
};

export default About;
