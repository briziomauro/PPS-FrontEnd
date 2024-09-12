import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div id="AboutUs">
      <div className="flex text-center justify-center mt-6">
        <h1 className="font-bebas text-black text-4xl">Sobre Nosotros</h1>
      </div>
      <div className="flex text-pretty text-ellipsis justify-center items-center bg-zinc-900 text-white rounded-md p-8 m-11 gap-8">
        <div className="flex flex-col justify-evenly h-full gap-4 w-[750px]">
          <p className="font-roboto">
            En <strong>Training Center</strong>, somos tu gimnasio de confianza
            en Rosario, Santa Fe.
          </p>
          <p className="font-roboto">
            Con <strong>10 sedes</strong> en la ciudad y una nueva apertura en
            camino, ofrecemos un ambiente motivador para alcanzar tus
            <strong> objetivos</strong>. Contamos con
            <strong> instalaciones modernas</strong>, equipamiento de última
            generación y un equipo de instructores dedicados a tu{" "}
            <strong> bienestar</strong>.
          </p>
          <p className="font-bebas text-2xl">
            ¡Únete a <span className="text-yellow-400">Training Center</span> y
            mejora tu vida hoy mismo!
          </p>
        </div>
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://mercadofitness.com/wp-content/uploads/2021/11/Training-Gimnasio-Rosario.jpeg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://infodeportes.com.ar/wp-content/uploads/2023/02/imagen-60.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://mercadofitness.com/wp-content/uploads/2021/05/Training-Center-Rosario-Gimnasio.jpeg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.rosario3.com/__export/1694972412589/sites/rosario3/img/2023/09/17/34543f58-fc15-43a4-b48b-5b52678e8aed.jpg_328691942.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.on24.com.ar/wp-content/uploads/2023/02/IMG_2248-scaled-1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://mercadofitness.com/wp-content/uploads/2022/09/Training-Center-abrira-una-nueva-sede-en-el-centro-de-Rosario-Santa-Fe.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
