import React, { useState } from "react";
import vdeo from "../assets/expenss.mp4";
import img1 from "../assets/expenses-img/Screenshot 2024-10-05 000928.jpg";
import img2 from "../assets/expenses-img/Screenshot 2024-10-05 001042.jpg";
import img3 from "../assets/expenses-img/Screenshot 2024-10-05 001109.jpg";
import img4 from "../assets/expenses-img/Screenshot 2024-10-05 001435.jpg";
import img5 from "../assets/expenses-img/Screenshot 2024-10-05 001505.jpg";
import img6 from "../assets/expenses-img/Screenshot 2024-10-05 001541.jpg";
import img7 from "../assets/expenses-img/Screenshot 2024-10-05 001728.jpg";
import img8 from "../assets/expenses-img/Screenshot 2024-10-05 001818.jpg";

export default function Review_Expen_system() {

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8
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


  return (
    <div className=" containers h-[100%] text-white "> 
      <article class="prose lg:prose-xl font-NotosansLao">
        <h1 className="font-semibold text-xl">
          - ເວັບໄຊທ໌ແນະນໍາສະຖານທີ່ທ່ອງທ່ຽວໃນຫຼວງພະບາງ
        </h1>

        <p className="p-10">
               
          ໂປຣແກຣມນີ້ແມ່ນລະບົບຈັດການການເງິນສໍາລັບວັດໂພທິ໌ນອນ, ພັດທະນາດ້ວຍ Windows Forms ແລະ .NET Framework ໂດຍໃຊ້ພາສາ C#. ມັນມີຄຸນສົມບັດຫຼາຍຢ່າງລວມມີ: <br />
         1. ການບັນທຶກ ແລະ ຈັດການຂໍ້ມູນລາຍຮັບ-ລາຍຈ່າຍ <br />
         2. ການຄິດໄລ່ຄ່າໃຊ້ຈ່າຍຕ່າງໆ <br />
         3. ລະບົບສໍາຮອງຂໍ້ມູນ (Backup) <br />
         4. ການສ້າງລາຍງານ (Report) ຂໍ້ມູນຕ່າງໆ <br />
          ໜ້າຈໍຫຼັກສະແດງຕາຕະລາງທີ່ມີຂໍ້ມູນການເຮັດທຸລະກໍາ, ລວມທັງວັນທີ, ລາຍລະອຽດ, ແລະ ຈໍານວນເງິນ. ມີປຸ່ມສໍາລັບການດໍາເນີນການຕ່າງໆເຊັ່ນ ບັນທຶກ, ແກ້ໄຂ, ລຶບ, ພິມ, ແລະ ອອກຈາກໂປຣແກຣມ.
          ໂປຣແກຣມນີ້ຊ່ວຍໃຫ້ການຈັດການການເງິນຂອງວັດມີປະສິດທິພາບ ແລະ ເປັນລະບົບຫຼາຍຂຶ້ນ, ສະແດງໃຫ້ເຫັນເຖິງການນໍາໃຊ້ເຕັກໂນໂລຢີທີ່ທັນສະໄໝເຂົ້າໃນການບໍລິຫານວັດ.
        </p>
      </article>


      <div className="video items-center justify-center flex flex-col">
        <h3 className="text-Secondary font-bold md:text-2xl">Video Review of Expense System</h3>
        <video src={vdeo} controls width="700" className=" pt-7">
          Your browser does not support the video tag.
        </video>
      </div>

   <div className="photos bg-dark mt-10 font-NotosansLao ">

<h1 className="text-2xl p-3 pt-5 text-Secondary font-bold">ຮູບພາບປະກອບ</h1>

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
