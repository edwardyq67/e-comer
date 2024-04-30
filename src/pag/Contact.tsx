import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact: React.FC = () => {
  const [polygonCoords] = useState<[number, number][]>([[-11.98208, -76.97199]]);

  return (
    <div className="container mx-auto pt-[8em] px-2">
      <div className="h-full w-full rounded-md md:rounded-lg p-5 md:p-10 mb-5">
        <div className="grid grid-cols-4 px-2 gap-5 divide-y md:divide-y-0 divide-x-0 md:divide-x">
          <div className="col-span-4 md:col-span-2 grid gap-4 divide-y">
            <div className="grid gap-6">
              <h1 className="text-[4em] text-[#75C470]">Get In Touch</h1>
              <p className="text-[1.2em] mb-4">
                Sit vulputate faucibus eget eget scelerisque faucibus malesuada
                nullam mollis ut montes, dui scelerisque ornare.
              </p>
              <div className="inf grid gap-2">
                <i className="flex text-[1.5em]  fa-solid fa-location-dot">
                  <div className="grid gap-2 pl-3">
                    <h4 className="pt-1 text-[.6em]">VISIT US</h4>
                    <p className="text-[.7em]">
                      123 Demo St, San Francisco, CA 45678, United States
                    </p>
                  </div>
                </i>
              </div>
              <div className="inf grid gap-2">
                <i className="flex text-[1.5em]  fa-solid fa-phone">
                  <div className="grid gap-2 pl-3">
                    <h4 className="pt-1 text-[.6em]">CALL US</h4>
                    <p className="text-[.7em]">+1 123-456-7890</p>
                  </div>
                </i>
              </div>
              <div className="inf grid gap-2">
                <i className="flex text-[1.5em]  fa-solid fa-envelope">
                  <div className="grid gap-2 pl-3">
                    <h4 className="pt-1 text-[.6em]">EMAIL US</h4>
                    <p className="text-[.7em]">mail@example.com</p>
                  </div>
                </i>
              </div>
            </div>
            <div className="flex py-4">
              <i className="text-[2em] mx-2 hover:text-[#75c570] transition-all duration-300 cursor-pointer fa-brands fa-square-instagram"></i>
              <i className="text-[2em] mx-2 hover:text-[#75c570] transition-all duration-300 cursor-pointer fa-brands fa-pinterest"></i>
              <i className="text-[2em] mx-2 hover:text-[#75c570] transition-all duration-300 cursor-pointer fa-brands fa-facebook"></i>
              <i className="text-[2em] mx-2 hover:text-[#75c570] transition-all duration-300 cursor-pointer fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 grid gap-4 pl-4 pt-4">
            <h2 className="text-[1.5em] flex items-center">Drop us a line or two</h2>
            <form action="mx-auto" className="grid gap-2">
              <div className="grid gap-1">
                <label className="font-medium text-sm" htmlFor="Name">Name *</label>
                <input
                  id="Name"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                />
              </div>
              <div className="grid gap-1">
                <label className="font-medium text-sm" htmlFor="Email">Email *</label>
                <input
                  id="Email"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                />
              </div>
              <div className="grid gap-1">
                <label className="block mb-2 text-sm font-medium text-gray-900">Comment or Message *</label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
            </form>
          </div>
          <div className="col-span-4">
            <MapContainer center={[ -11.9598, -76.9875]} zoom={20} style={{ height: '400px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Polygon positions={polygonCoords} pathOptions={{ color: 'blue' }}>
                <Popup>Polígono</Popup>
              </Polygon>
              <Marker position={[ -11.9598, -76.9875]}>
                <Popup>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/Estaci%C3%B3n+Bay%C3%B3var/@-11.9597788,-76.9900756,17z/data=!4m15!1m8!3m7!1s0x9105c54803283327:0x51cbde03e4d3cc74!2zRXN0YWNpw7NuIEJhecOzdmFy!8m2!3d-11.9597841!4d-76.9875007!10e1!16s%2Fg%2F11bbqg59qb!3m5!1s0x9105c54803283327:0x51cbde03e4d3cc74!8m2!3d-11.9597841!4d-76.9875007!16s%2Fg%2F11bbqg59qb?entry=ttu"
                  >
                    Estacion Bayobar
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

