const AboutUs = () => {
  return (
    <>
      <div className="flex text-center justify-center mt-6">
        <h1 className="font-bebas text-black text-4xl">Sobre Nosotros</h1>
      </div>
      <div className="flex text-pretty text-ellipsis justify-center items-center bg-zinc-900 text-white rounded-md p-8 m-11">
        <div>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            doloremque id numquam repellendus adipisci nisi fuga libero ducimus.
            Voluptas culpa perspiciatis corporis est autem distinctio ut totam
            eaque consectetur porro?
          </p>
        </div>
        <div className="hover:shadow-2xl hover:scale-105 transition-all ">
          <img
            src="https://mercadofitness.com/wp-content/uploads/2021/11/Training-Gimnasio-Rosario.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
