import React, { useState,useEffect } from "react";

import img1 from "../assets/brijack-img/Screenshot 2024-10-05 104642.jpg"

import img2 from "../assets/brijack-img/Screenshot 2024-10-05 104722.jpg"

import img3 from "../assets/brijack-img/Screenshot 2024-10-05 104744.jpg"



import { AiOutlineYoutube } from "react-icons/ai";

import { FaGithub } from "react-icons/fa";

export default function Review_Brijark_system() {
  const images = [img1, img2, img3];

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
    <div className="containers h-[100%] bg-dark text-white">
      <article class="prose lg:prose-xl font-NotosansLao">
        <h1 className="font-semibold text-xl md:text-3xl">
          -ໂປຣແກຣມ ລະບົບຈັດການການເງິນສໍາລັບວັດໂພນພະເນົາ
        </h1>

        <p className="p-10">
          ໂປຣແກຣມນີ້ແມ່ນລະບົບຈັດການການເງິນສໍາລັບວັດໂພທິ໌ນອນ, ພັດທະນາດ້ວຍ Windows
          Forms ແລະ .NET Framework ໂດຍໃຊ້ພາສາ C#. ມັນມີຄຸນສົມບັດຫຼາຍຢ່າງລວມມີ:{" "}
          <br />
          1. ການບັນທຶກ ແລະ ຈັດການຂໍ້ມູນລາຍຮັບ-ລາຍຈ່າຍ <br />
          2. ການຄິດໄລ່ຄ່າໃຊ້ຈ່າຍຕ່າງໆ <br />
          3. ລະບົບສໍາຮອງຂໍ້ມູນ (Backup) <br />
          4. ການສ້າງລາຍງານ (Report) ຂໍ້ມູນຕ່າງໆ <br />
          ໜ້າຈໍຫຼັກສະແດງຕາຕະລາງທີ່ມີຂໍ້ມູນການເຮັດທຸລະກໍາ, ລວມທັງວັນທີ, ລາຍລະອຽດ,
          ແລະ ຈໍານວນເງິນ. ມີປຸ່ມສໍາລັບການດໍາເນີນການຕ່າງໆເຊັ່ນ ບັນທຶກ, ແກ້ໄຂ,
          ລຶບ, ພິມ, ແລະ ອອກຈາກໂປຣແກຣມ.
          ໂປຣແກຣມນີ້ຊ່ວຍໃຫ້ການຈັດການການເງິນຂອງວັດມີປະສິດທິພາບ ແລະ
          ເປັນລະບົບຫຼາຍຂຶ້ນ,
          ສະແດງໃຫ້ເຫັນເຖິງການນໍາໃຊ້ເຕັກໂນໂລຢີທີ່ທັນສະໄໝເຂົ້າໃນການບໍລິຫານວັດ.
        </p>
      </article>

      <div className="video items-center justify-center flex flex-col">


      <a
          className="text-Secondary font-NotosansLao w-full font-bold items-center text-xl flex gap-6 "
          href="https://github.com/MK-LLX001/MAI_PHADARN.git"
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
          className="text-Secondary font-NotosansLao pt-3 w-full font-bold items-center text-xl flex gap-6 "
          href="https://youtu.be/msfuTjeq6ss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {" "}
            <AiOutlineYoutube  className="text-3xl"/>{" "}
          </p>{" "}
          <span className="underline">ເບີງລີວິວເພີມເຕີມ</span>
        </a>



        <h3 className="text-Secondary font-bold md:text-2xl w-full py-7">
          Video Review 
        </h3>

        <iframe
        className="md:w-full w-fit"
          width="560"
          height="515"
          src="https://www.youtube.com/embed/msfuTjeq6ss?si=faqGuDbPTL4al21M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>




      <div className="photos bg-dark mt-10 font-NotosansLao ">
        <h1 className="text-2xl p-3 pt-5 text-Secondary font-bold">
          ຮູບພາບປະກອບ
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
              className="fixed  inset-0 bg-black bg-opacity-75 flex items-center justify-center px-2"
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
