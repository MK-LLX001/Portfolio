import React from 'react'

export default function Review_Brijark_system() {
  return (
    <div className='containers h-[100%] bg-dark text-white'>
      
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


    </div>
  )
}
