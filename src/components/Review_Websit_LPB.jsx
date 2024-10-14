import React, { useState,useEffect } from "react";

// Import images manually
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";
import img5 from "../image/5.jpg";
import img6 from "../image/6.jpg";
import img7 from "../image/7.jpg";
import img8 from "../image/8.jpg";
import img9 from "../image/9.jpg";
import img10 from "../image/10.jpg";
import img11 from "../image/11.jpg";
import img12 from "../image/12.jpg";
import img13 from "../image/13.jpg";
import img14 from "../image/14.jpg";
import img15 from "../image/15.jpg";
import img16 from "../image/16.jpg";
import img17 from "../image/17.jpg";
import img18 from "../image/18.jpg";
import img19 from "../image/19.jpg";
import img20 from "../image/20.jpg";
import img21 from "../image/21.jpg";
import img22 from "../image/22.jpg";
import { Link } from "react-router-dom";

import { AiOutlineYoutube } from "react-icons/ai";

import { FaGithub } from "react-icons/fa";
// ImageGallery Compone

export default function Review_Websit_LPB() {

 
  
    // Array of imported images
    const images = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
      img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,img21, img22
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
    <div className="containers   text-white bg-dark h-[100%]  ">
      <article class="prose lg:prose-xl font-NotosansLao">
        <h1 className="font-semibold text-xl md:text-3xl p-7">- ເວັບໄຊທ໌ແນະນໍາສະຖານທີ່ທ່ອງທ່ຽວໃນຫຼວງພະບາງ</h1>
        <p className="md:text-xl">
          ເວັບໄຊທ໌ແນະນໍາສະຖານທີ່ທ່ອງທ່ຽວໃນຫຼວງພະບາງນີ້ເປັນລະບົບ full-stack
          ທີ່ໃຊ້ React JS ສໍາລັບ front-end, Node.js ແລະ Express ສໍາລັບ back-end,
          ແລະ PostgreSQL ເປັນຖານຂໍ້ມູນ. ເວັບໄຊທ໌ອະນຸຍາດໃຫ້ຜູ້ໃຊ້ສົ່ງ ແລະ
          ທົບທວນສະຖານທີ່,
          ພ້ອມທັງມີຟັງຊັນຊຸມຊົນທີ່ເຮັດໃຫ້ສະມາຊິກສາມາດໂພສກິດຈະກໍາຕ່າງໆ.
          ນອກຈາກນັ້ນ, ເວັບໄຊທ໌ນີ້ຍັງມີຄຸນສົມບັດພິເສດສໍາລັບຜູ້ປະກອບການ.
          ເຈົ້າຂອງທຸລະກິດສາມາດລົງທະບຽນເພື່ອສ້າງໂປຣໄຟລ໌ສໍາລັບໂຮງແຮມ, ຮ້ານອາຫານ,
          ຫຼື ສິນຄ້າຂອງເຂົາເຈົ້າ. ລະບົບອະນຸຍາດໃຫ້ນັກທ່ອງທ່ຽວຂຽນຄໍາຄິດເຫັນ ແລະ
          ໃຫ້ຄະແນນກ່ຽວກັບການບໍລິການ ຫຼື ຜະລິດຕະພັນເຫຼົ່ານີ້,
          ສ້າງແພລດຟອມທີ່ຄົບຖ້ວນສໍາລັບການວາງແຜນການທ່ອງທ່ຽວ ແລະ
          ການມີສ່ວນຮ່ວມຂອງທຸລະກິດທ້ອງຖິ່ນ.
          ການເພີ່ມຄຸນສົມບັດນີ້ຊ່ວຍສົ່ງເສີມເສດຖະກິດທ້ອງຖິ່ນ ແລະ
          ໃຫ້ຂໍ້ມູນທີ່ຄົບຖ້ວນແກ່ນັກທ່ອງທ່ຽວ.
        </p>
      </article>


     
    <div className="video  w-full  justify-center mt-4">
 <h1 className="pt-10 text-Secondary font-NotosansLao font-bold text-3xl">1. ຊົມວິດີໂອ </h1>
 

 <a
          className="text-Secondary font-NotosansLao  font-bold items-center text-xl flex gap-6 "
          href="https://github.com/MK-LLX001/Website-laungphabang.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {" "}
            <FaGithub  className="text-3xl"/>
          </p>{" "}
          <span className="underline">ເບີງ coding</span>
        </a>

        <a
          className="text-Secondary font-NotosansLao pt-3  font-bold items-center text-xl flex gap-6 "
          href="https://youtu.be/HS14Jv7B-H0?si=ERpNSfKSA7WE_1jK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {" "}
            <AiOutlineYoutube  className="text-3xl"/>{" "}
          </p>{" "}
          <span className="underline">ເບີງລີວິວເພີມເຕີມ</span>
        </a>
        <div className="box-vdio w-full flex justify-center pt-3">
        <iframe
        className="w-fit md:w-full  "
        width="860"
        height="515"
        src="https://www.youtube.com/embed/HS14Jv7B-H0?si=cz0RqhgSHrqZZ8hQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      >
        
      </iframe>
        </div>
    </div>



    <div className="photos bg-dark mt-10 font-NotosansLao">

    <h1 className="text-2xl py-7 pt-5 text-Secondary font-bold ">ຮຼບພາບປະກອບ</h1>
    
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
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
              className="max-h-full max-w-full"
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


