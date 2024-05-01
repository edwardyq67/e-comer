import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../img/alberta-2297204_1920.jpg";
import img2 from "../img/avenue-2215317_1920.jpg";
import img3 from "../img/boat-4899802_1920.jpg";
import img4 from "../img/forest-1072828_1920.jpg";
import img5 from "../img/mountains-1761292_1920.jpg";
import sentado from "../img/sentado.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import conocemeHome from "../img/conocemeHome.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../components/redux/hooks";
import { getConocimiento } from "../components/slice/Inicio";
import { useNavigate } from "react-router-dom";

const imagen = [
  {
    imagen: img1,
    parrafo:
      "Explora un mundo de estilo, innovación y elegancia con nuestra colección única de ropa, tecnología de vanguardia y exquisitas joyas. Encuentra la combinación perfecta para expresar tu individualidad y destacar en cualquier ocasión.",
  },
  {
    imagen: img2,
    parrafo:
      "Sumérgete en una experiencia de compra incomparable donde la moda se fusiona con la tecnología y la sofisticación. Desde las últimas tendencias en ropa hasta los gadgets más innovadores y las joyas más deslumbrantes, descubre todo lo que necesitas para brillar con estilo y confianza.",
  },
  {
    imagen: img3,
    parrafo:
      "Bienvenido a nuestro universo de moda, tecnología y lujo, donde cada producto está cuidadosamente seleccionado para ofrecerte lo mejor en calidad, diseño y funcionalidad. Explora nuestra amplia gama de prendas de vestir, dispositivos tecnológicos y joyas exclusivas y haz una declaración de estilo que perdure.",
  },
  {
    imagen: img4,
    parrafo:
      "Déjate cautivar por la fusión perfecta de moda, innovación y elegancia en nuestro e-commerce. Descubre una selección única de prendas de alta costura, gadgets de última generación y joyas finas que te permitirán expresar tu personalidad y estilo de vida de manera inigualable.",
  },
  {
    imagen: img5,
    parrafo:
      "Descubre un mundo de posibilidades donde la moda se encuentra con la tecnología y la belleza. Desde los looks más vanguardistas hasta los gadgets más innovadores y las joyas más exquisitas, nuestra tienda online te ofrece una experiencia de compra incomparable. Explora, elige y deslumbra con nuestra exclusiva selección de productos diseñados para satisfacer tus deseos más exigentes.",
  },
];
const list = imagen.map((imgs) => (
  <SwiperSlide key={imgs.imagen} className="h-full relative ">
    <img className="" src={imgs.imagen} alt="" />
    <div
      className="inf absolute inset-0 "
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="container mx-auto  px-2 h-full ">
        <div className="text-white h-full w-full text-[1.5em] flex items-center md:text-[2em] lg:text-[3em]  rounded-md md:rounded-lg p-5 md:p-10 mb-5">
          {imgs.parrafo}
        </div>
      </div>
    </div>
  </SwiperSlide>
));

const Inicio: React.FC = () => {
  const count = useAppSelector((state) => state.inicio);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getConocimiento());
  }, []);
  const n = 8;
  const navigate = useNavigate();
  const seisUltimos = count.data.slice(-n);

  return (
    <div className="grid gap-[10vh] inicio text-[1.2em] mb-20">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
        style={{ height: "90vh", backgroundColor: "#5C9753" }}
      >
        {list}
      </Swiper>
      <div className="container mx-auto px-2 grid gap-[2vh]">
        <div className="grid  w-full md:flex md:justify-between items-center ">
          <h2 className="text-[2.5em] h-[10vh] flex items-center md:mx-0 mx-auto">
            New Shop
          </h2>
          <a
            onClick={() => navigate("/store")}
            className="text-center cursor-pointer md:mx-0 mx-auto w-[150px] text-white bottom-1 py-2 px-3 bg-[#75C470] duration-500 hover:bg-black transition-all  "
          >
            Shop Now
          </a>
        </div>
        <div className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 cursor-pointer">
          {seisUltimos.map((items) => (
            <div className="col-span-1 " key={items.id}>
              <div className="mb-2 h-[34vh] sm:h-[46vh] md:h-[37vh] lg:h-[37vh] xl:h-[42vh] flex items-center border-[#C6D8C0] border-2 rounded-lg p-5">
                <img
                  className="max-h-[30vh] mx-auto"
                  src={items.image}
                  alt=""
                />
              </div>
              <div className="grid px-2 gap-1">
                <h3 className="font-normal w-3/5 overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {items.title}
                </h3>
                <h4 className="text-[#C6D8C0]">{items.category}</h4>
                <h4 className="font-semibold">${items.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative grid grid-cols-2 ">
        <img
          className="col-span-2 md:col-span-1  w-full h-auto"
          src={conocemeHome}
          alt=""
        />
        <div className="bg-white py-4 rounded-md inset-x-0 bottom-0  sm:absolute md:relative  mx-auto md:w-full  sm:w-[90%] col-span-2 sm:col-span-1 px-2 flex items-center">
          <div className="mx-[10%] grid gap-1">
            <h4 className="text-[1.5em] ">OUR STORY</h4>
            <h3 className="text-[2em] text-[#75C470]">
              For People Who Love Plants
            </h3>
            <p className="w-full md:w-[30vw] my-1">
              Vivamus quam sociis tristique diam at donec nisl, hendrerit leo
              nunc at velit lacinia porttitor a nulla tellus ultrices varius
              aliquet sed in placerat.
            </p>
            <p className="w-full md:w-[30vw] my-1 mb-3">
              Facilisis eu faucibus diam cursus pulvinar consectetur purus sem
              felis, mauris consectetur nisl vitae gravida ultricies sem
              condimentum aliquet ut sed gravida amet vitae euismod pulvinar
              volutpat laoreet pharetra.
            </p>
            <a
              onClick={() => navigate("/about")}
              className="text-center cursor-pointer md:mx-0 mx-auto w-[150px] h-[40px]  text-white bottom-1 py-2 px-3 bg-[#75C470] duration-500 hover:bg-black transition-all  "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="px-2 container mx-auto grid grid-cols-3 gap-[5vh] text-center my-10">
        <div className="col-span-3">
          <h3 className="text-[2em] text-[#75C470]">What Our Customers Say</h3>
        </div>
        <div className="gap-2 grid text-center col-span-3 md:col-span-1 ">
          <i className="text-[2em] text-[#75C470] fa-regular fa-handshake"></i>
          <p className="md:w-[80%] mx-auto">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <img
            className="rounded-full w-[full] mx-auto"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonial-avatar-img.jpg"
            alt=""
          />
          <h4>JENNIFER LEWIS</h4>
        </div>
        <div className="gap-2 grid text-center col-span-3 md:col-span-1 ">
          <i className="text-[2em] text-[#75C470] fa-regular fa-handshake"></i>
          <p className="md:w-[80%] mx-auto">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <img
            className="rounded-full w-[full] mx-auto"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonials-avatar-img-2.jpg"
            alt=""
          />
          <h4>ALICIA HEART</h4>
        </div>
        <div className="gap-2 grid text-center col-span-3 md:col-span-1 ">
          <i className="text-[2em] text-[#75C470] fa-regular fa-handshake"></i>
          <p className="md:w-[80%] mx-auto">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <img
            className="rounded-full w-[full] mx-auto"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonials-avatar-img-1.jpg"
            alt=""
          />
          <h4>JUAN CARLOS</h4>
        </div>
      </div>
      <div style={{
  width: "",
  height: "40vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundImage: `url(${sentado})`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  color: "#fff",
}}>
        <div
          className="w-full h-full"
          style={{ background: "rgba(0,0,0,.5)" }}
        ></div>
      </div>
      <div className=" container mx-auto grid grid-cols-3 gap-[5vh] text-center ">
        <div className="gap-2 flex col-span-3 lg:col-span-1 items-center justify-center">
          <i className="bg-[#75C470] rounded-full w-[60px] flex items-center justify-center text-white text-[1.9em] h-[60px] row-span-2 fa-brands fa-shopify"></i>
          <div className="grid row-span-2 grid-rows-2">
            <h3 className=" text-[1.3em] row-span-1">SECURE PAYMENT</h3>
            <h4 className="row-span-1">
              Curabitur interdum, nisl at tincidunt.
            </h4>
          </div>
        </div>
        <div className="gap-2 flex col-span-3 lg:col-span-1 items-center justify-center">
          <i className="bg-[#75C470] rounded-full w-[60px] flex items-center justify-center text-white text-[1.9em] h-[60px] row-span-2 fa-solid fa-truck-fast"></i>
          <div className="grid row-span-2 grid-rows-2">
            <h3 className=" text-[1.3em] row-span-1">DELIVERED WITH CARET</h3>
            <h4 className="row-span-1">Donec sit amet neque id nisl.</h4>
          </div>
        </div>
        <div className="gap-2 flex col-span-3 lg:col-span-1 items-center justify-center">
          <i className="bg-[#75C470] rounded-full w-[60px] flex items-center justify-center text-white text-[1.9em] h-[60px] row-span-2 fa-solid fa-hand-holding-heart"></i>
          <div className="grid row-span-2 grid-rows-2">
            <h3 className=" text-[1.3em] row-span-1">EXCELLENT SERVICE</h3>
            <h4 className="row-span-1">Amet neque id nisl ullamcorper.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
