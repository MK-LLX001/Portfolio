import React, { useState,useEffect } from "react";
import img1 from "../assets/photoshop/01 finall.jpg";
import img2 from "../assets/photoshop/03.jpg";
import img3 from "../assets/photoshop/1.jpg";
import img4 from "../assets/photoshop/3.jpg";
import img5 from "../assets/photoshop/AEYE.jpg";
import img6 from "../assets/photoshop/bouhayatran1.jpg";
import img7 from "../assets/photoshop/boukathin 01.jpg";
import img8 from "../assets/photoshop/cat1-1.jpg";
import img9 from "../assets/photoshop/ccx-clor.jpg";
import img10 from "../assets/photoshop/ccx-tecno01.jpg";
import img11 from "../assets/photoshop/h04.jpg";
import img12 from "../assets/photoshop/imgeaready to print.png";
import img13 from "../assets/photoshop/logoccx01.jpg";
import img14 from "../assets/photoshop/MONK-YOM.jpg";
import img15 from "../assets/photoshop/patukhongNachangtai copy.jpg";
import img16 from "../assets/photoshop/phadarn copy.jpg";
import img17 from "../assets/photoshop/phadarn01.jpg";
import img18 from "../assets/photoshop/post01 copy.jpg";
import img19 from "../assets/photoshop/souksavanh-edit.jpg";
import img20 from "../assets/photoshop/Untitled-2.jpg";
import img21 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.50_aae5623b.jpg";
import img22 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.52_55b90c2f.jpg";
import img23 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.52_74cbf496.jpg";
import img24 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.52_9e3ab7bf.jpg";
import img25 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.53_76a461dc.jpg";
import img26 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.55_02276734.jpg";
import img27 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.55_886a06e7.jpg";
import img28 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.55_ad670f93.jpg";
import img29 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.56_599b7cee.jpg";
import img30 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.56_9b3863da.jpg";
import img31 from "../assets/photoshop/WhatsApp Image 2024-10-10 at 17.05.56_9c037f2a.jpg";


export default function Review_Image() {



  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
  ];

// State to control which image is clicked and whether to show the full-screen mode
const [selectedImage, setSelectedImage] = useState(null);

// Function to open image in full-screen
const openImage = (image) => {
  setSelectedImage(image);
};

// Function to close full-screen view
const closeImage = () => {
  setSelectedImage(null);
};

useEffect(() => {
  window.scroll(0, 0);
}, []);

  return (
    <div className="containers bg-dark text-white h-full">
      <div className="photos bg-dark mt-10 font-NotosansLao ">
        <h1 className="text-2xl p-3 pt-5 text-Secondary font-bold">
          ຮູບພາບປະກອບ
        </h1>
        <h1 className="text-2xl p-3 pt-5 text-Secondary font-bold">
          ໂປຮແກມທີໃຊ້
        </h1>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="grid gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg cursor-pointer"
                    src={image}
                    alt={`Image ${index + 1}`}
                    onClick={() => openImage(image)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Full-screen overlay */}
          {selectedImage && (
            <div
              className="fixed px-10 inset-0 bg-black bg-opacity-75 flex items-center justify-center"
              onClick={closeImage} // Close when clicking anywhere in the overlay
            >
              <div className="relative">
                <button
                  className="absolute top-0 right-0 m-4 text-white text-2xl"
                  onClick={closeImage}
                >
                  &times; {/* Close button */}
                </button>
                <img
                  className="max-h-full max-w-full object-cover"
                  src={selectedImage}
                  alt="Expanded"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
