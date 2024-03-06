import { motion } from 'framer-motion'
function Slogen() {
  return (
    <motion.div
      initial={{ scale: 0.5, y: 100, x: -40, opacity: 0 }} // Bắt đầu từ vị trí dưới cùng (100px so với vị trí ban đầu) và độ mờ là 0
      animate={{ scale: 1, y: 0, x: 0, opacity: 1 }} // Kết thúc ở vị trí ban đầu và độ mờ là 1
      transition={{ duration: 0.6 }}
      id="slogan-header" className="absolute top-[30%] lg:top-1/3 left-[30%] max-md:left-[18%] max-lg:left-[18%]">
      <div id="box-slogan" className="relative flex  flex-col text-white aos-init aos-animate" data-aos="zoom-in-up">
        <p className=" z-50 text-white font-extrabold text-[9.2rem] lg:text-[4.2rem] ">BACK TO<br />
          <b className={" ml-[10rem] lg:leading-[1.5rem] translate-y-10 text-white font-medium text-[16.2rem] lg:text-[8.2rem]  font-tomatos"}>nature</b>
        </p>
      </div>
    </motion.div>
  );
}

export default Slogen;