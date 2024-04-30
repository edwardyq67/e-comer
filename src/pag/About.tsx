import React from "react";
import ReactPlayer from 'react-player/youtube'
const About: React.FC = () => {
  const imgSloga = [
    {
      url: "https://static.vecteezy.com/system/resources/previews/015/764/886/non_2x/happy-woman-shopping-for-clothes-photo.jpg",
      slogan: "Descubre la diferencia en cada detalle! Tu tienda de confianza para productos de calidad y servicio excepcional"
    },
    {
      url: "https://st3.depositphotos.com/5392356/13130/i/450/depositphotos_131300336-stock-photo-beautiful-woman-buying-clothes.jpg",
      slogan: "¡Encuentra tu estilo, vive tu pasión! Explora nuestra selección única y déjate inspirar."
    },
    {
      url: "https://st4.depositphotos.com/5392356/21168/i/450/depositphotos_211685688-stock-photo-young-attractive-woman-buying-clothes.jpg",
      slogan: "¡Haz de cada compra una experiencia inolvidable! Donde la calidad se encuentra con la comodidad y la atención al cliente es nuestra prioridad."
    },
    {
      url: "https://cdn.connectamericas.com/sites/default/files/ThinkstockPhotos-508454788.jpg",
      slogan: "Nuestro equipo está aquí para hacer tu día un poco más brillante. ¡Siempre amables, siempre a tu servicio!"
    },
    {
      url: "https://www.shutterstock.com/image-photo/happy-woman-chooses-jewelry-turquoise-260nw-1917924101.jpg",
      slogan: "Brilla con estilo. Encuentra tu joya perfecta en nuestra tienda."
    },
    {
      url: "https://thumbs.dreamstime.com/b/vendedor-feliz-ayudando-la-gente-comprar-un-nuevo-dispositivo-inteligente-digital-en-tienda-de-tecnolog%C3%ADa-una-pareja-concepto-260858540.jpg",
      slogan: "Explora el futuro hoy. Encuentra las últimas innovaciones en tecnología en nuestra tienda."
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/015/764/886/non_2x/happy-woman-shopping-for-clothes-photo.jpg",
      slogan: "Descubre la diferencia en cada detalle! Tu tienda de confianza para productos de calidad y servicio excepcional"
    },
    {
      url: "https://st3.depositphotos.com/5392356/13130/i/450/depositphotos_131300336-stock-photo-beautiful-woman-buying-clothes.jpg",
      slogan: "¡Encuentra tu estilo, vive tu pasión! Explora nuestra selección única y déjate inspirar."
    },
  ];

  
  console.log(imgSloga);
  return (
    <div className="container mx-auto pt-[8em] px-2">
      <div className="h-full w-full  rounded-md md:rounded-lg ] p-5 md:p-10 mb-5">
      <div className="grid grid-cols-4 px-2 gap-4">
            <h2 className="col-span-1 text-[2em] text-[#75C470]">About</h2>
            <div className="col-span-3 flex items-end"><div className="w-[40%] rounded-lg h-1 bg-[#75C470]"></div></div>
            <div className="col-span-1"></div>
            <div className="col-span-3 grid gap-2">
                <h4 className="text-[1.3em]">We provide fresh and healthy plants for your space</h4>
                <p className="text-[1.1em]" >Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo sapien faucibus in adipiscing risus adipiscing bibendum nec eget tincidunt sed.</p>
            </div>
            <div className="col-span-4 py-5">
      <ReactPlayer
        url='https://www.youtube.com/watch?v=kqy99h-dZCE'
        controls
        playing={true}
        width="100%"
        max-height="auto"
      />
    </div>
    <h2 className="col-span-1 text-[1.5em] ">OUR STORY</h2>
    <div className="col-span-3 grid gap-2">
  <p className="text-[1.1em] mb-1">
    Tristique dapibus porta viverra sit accumsan integer semper dolor etiam id iaculis feugiat egestas urna est magna euismod donec facilisis sed integer orci ac.
  </p>
  <p className="text-[1.1em] mb-1">
    Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo, et, pellentesque pellentesque sapien faucibus in adipiscing risus adipiscing bibendum in nec eget tincidunt in in sed magna arcu molestie nec mauris quisque.
  </p>
  <p className="text-[1.1em]">
    Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae in volutpat faucibus elementum, sodales orci mi fames molestie venenatis nunc hendrerit.
  </p>
  <i className="mt-5 text-[2em] text-[#75C470] fa-regular fa-handshake"></i>
  <b className="text-[1.5em]">Massa aliquam montes, odio porttitor sit ac maecenas interdum ut tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in nec ullamcorper vel.</b>
          <img className="rounded-full w-[full] " src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-testimonials-avatar-img-2.jpg" alt="" />
</div>
{
  imgSloga.map((history) => (
    <div key={history.slogan} className="col-span-2 sm:col-span-1">
      <img className="rounded-sm " src={history.url} alt="" />
    </div>
  ))
}

      </div>
      </div>
    </div>
  );
};

export default About;
