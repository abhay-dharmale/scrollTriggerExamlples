import React from "react";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./Nav";

const Images = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll(".elem").forEach((item) => {
      let image = item.querySelector("img");
      let tl = gsap.timeline();
      let XTransform = gsap.utils.random(-50, 50);
      tl.set(
        image,
        {
          transformOrigin: `${XTransform < 0 ? 0 : "100%"}`,
        },
        "a",
      )
        .to(
          image,
          {
            scale: 0,
            scrollTrigger: {
              trigger: image,
              start: "top 15%",
              end: "bottom top",
              scrub: true,
            },
          },
          "a",
        )
        .to(
          item,
          {
            xPercent: XTransform,
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "a",
        );
    });
  });

  return (
    <>
      <Nav />
      <div className="w-full bg-zinc-900">
        <div className="grid grid-cols-8 grid-rows-20 gap-6 p-8 pt-[13vh] overflow-hidden">
          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 1, "--c": 3 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1670738779764-afeba43cec05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhwZXJpbWVudGFsfGVufDB8MHwwfHx8MA%3D%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 1, "--c": 7 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1576822112471-cf7a211b717f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhwZXJpbWVudGFsfGVufDB8MHwwfHx8MA%3D%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 2 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1671955101204-42ea9a352cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXhwZXJpbWVudGFsfGVufDB8MHwwfHx8MA%3D%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 5 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1577426715985-2d6fc2b14c57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 4 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1576662786653-7d16470f6ec5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 1 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1566729318297-fa13d254fab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXhwZXJpbWVudGFsfGVufDB8MHwwfHx8MA%3D%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 1 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1700798863073-c84f73adcc46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 7 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1530054733408-79162074a62b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 3 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1576662786346-1f941c47a9a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 1 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522072783977-1117b39ffb58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 5 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1724412015476-94a61a3a0f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 2 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1631427984596-5b3412779d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 7 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1547634412-3f352eb240a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 4 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1541994419788-a34485a3641e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 3 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1551565426-1bc3f807f076?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 7 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1579986736310-7a8f26b67b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGV4cGVyaW1lbnRhbHxlbnwwfDB8MHx8fDA%3D"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 3 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1565502233391-e4ff4ed6bf4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxleHBlcmltZW50YWx8ZW58MHwwfDB8fHww"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 6 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1514906578662-76a82721d72e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxleHBlcmltZW50YWx8ZW58MHwwfDB8fHww"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 2 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1593163127678-9924b3d586a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxleHBlcmltZW50YWx8ZW58MHwwfDB8fHww"
            />
          </div>

          <div
            className="elem h-[29vh] w-[20vw] col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 7 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1672580343139-f27d44682d21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxleHBlcmltZW50YWx8ZW58MHwwfDB8fHww"
            />
          </div>
        </div>
        <div className="w-full h-screen bg-white flex items-center justify-center">
          <span className="text-5xl font-bold text-[#999] px-[8vw]">
            Mauris faucibus augue sit amet risus fermentum pharetra. Curabitur
            vel diam vel lectus mollis imperdiet
          </span>
        </div>
      </div>
    </>
  );
};

export default Images;