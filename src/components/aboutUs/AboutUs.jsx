import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div id="AboutUs" className="bg-black border-b h-screen flex flex-col justify-center items-center">
      <div className="flex text-center justify-center mt-6">
        <h1 className="font-bebas text-white text-6xl">Sobre Nosotros</h1>
      </div>
      <div className="flex text-pretty text-lg text-ellipsis justify-center items-center text-white rounded-md p-8 gap-20">
        <div className="flex flex-col justify-evenly h-full gap-4 w-[650px]">
          <p className="font-roboto">
            En <strong>Training Center</strong>, somos tu gimnasio de confianza
            en Rosario, Santa Fe.
          </p>
          <p className="font-roboto">
            Con más de 10 sedes distribuidas por toda la ciudad, nos enorgullece ofrecer un espacio donde la salud y el bienestar son nuestra prioridad. Desde nuestros inicios, nos hemos dedicado a crear un ambiente inclusivo y motivador para todas las personas, independientemente de su nivel de experiencia o condición física.
          </p>
          <p className="font-roboto">
            En Training Center, contamos con instalaciones de primer nivel y equipamiento de última generación. Además, nuestros instructores altamente capacitados están comprometidos en ayudarte a alcanzar tus metas, ya sea mejorar tu condición física, ganar fuerza, perder peso o simplemente llevar un estilo de vida más saludable.
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
                src="https://mercadofitness.com/wp-content/uploads/2022/09/Training-Center-abrira-una-nueva-sede-en-el-centro-de-Rosario-Santa-Fe.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <p className="font-bebas text-4xl text-white">
        ¡Únete a <span className="text-yellow-400">Training Center</span> y
        mejora tu vida hoy mismo!
      </p>
    </div>
  );
};

export default AboutUs;
