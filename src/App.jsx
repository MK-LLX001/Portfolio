import { useState } from "react";
import logo from "../public/img/logo.png";
import img from "../public/img/long.png";
import ayaka from "../public/img/longlai01.jpg";

import Slider from "@mui/material/Slider";
import { LuSeparatorVertical } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import imgwork01 from "../public/img/web.jpg";
import imgwork02 from "../public/img/web02.jpg";
import imgwork03 from "../public/img/web03.jpg";
import imgwork04 from "../public/img/web4.jpg";

import "./App.css";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
function App() {
  const Menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const [selected, setSelected] = useState("skill");

  console.log(selected);

  return (
    <div className=" font-sans   ">
      <nav className="bg-dark w-full flex h-[90px]  md:px-[3vw] md:py-5 top-0 md:text-2xl text-sm font-semibold border-dark-grey  border-b-2 shadow items-center z-10 sticky">
        <div className="mainNavbar flex items-center justify-between w-full">
          <div className="logo flex  gap-3 md:gap-8 items-center ">
            <img
              src={logo}
              className=" aspect-auto w-10 md:w-20 -ml-3 md:ml-0  "
            />

            <span className="text-Secondary md:font-bold pr-4 md:text-3xl text-xl font-semibold   ">
              i'm Long{" "}
            </span>
          </div>

          <div className="flex">
            {Menu.map((menuItem, index) => {
              return (
                <div className="menuitem   ">
                  <a
                    href={menuItem.path}
                    className={`block px-1 md:px-3 py-2 text-white hover:text-gray-500 items-center justify-center  ${
                      index === Menu.length - 1 ? "border-r-0" : ""
                    }`}
                  >
                    {menuItem.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="containers bg-dark">
        <div className="introduction text-white  flex w-full justify-between border-dark-grey border-4   rounded-xl shadow">
          <div className="info  w-full text-center   md:font-bold    text-xl md:text-4xl font-semibold">
            <div className=" flex flex-col justify-center items-center w-full h-full">
              <span>UI/UX DESIGNS</span>
              <h2>
                HI, I am <span className="text-Secondary font-bold">CCX4</span>
              </h2>
              <p>Web App, Sofeware Developer</p>
              <p>UI/UX</p>
            </div>
          </div>

          <div className="img h-auto items-center">
            <img src={img} className="aspect-auto w-full h-auto items-center" />
          </div>
        </div>

        <div className="about text-white flex pt-10 w-full flex-col md:flex-row ">
          <div className="img  bg-grey items-center justify-center flex rounded-xl w-full">
            <img
              src={ayaka}
              className="w-full aspect-auto items-center justify-center flex rounded-xl"
            />
          </div>

          <div className="info font-semibold mt-2 md:pt-10 md:pl-8">
            <p className="md:pl-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae dicta vel ipsum ex, sint tenetur, at nihil excepturi
              voluptate eum, cupiditate odio laboriosam ullam rem. Expedita
              officiis labore rem quasi, dolores, ipsam vel earum soluta sequi
              placeat id{" "}
            </p>
            <div className="skil  w-full mt-4 ">
              <div className="btnskill flex md:gap-4 gap-2 md:pl-3 justify-center md:text-xl text-sm">
                <button
                  onClick={() => setSelected("skill")}
                  className={`bg-blue-600 md:px-4 px-2 p-[5px] rounded-xl ${
                    selected === "skill"
                      ? "text-white bg-pink-600"
                      : "text-white"
                  }`}
                >
                  Skill
                </button>

                <button
                  onClick={() => setSelected("experience")}
                  className={`bg-blue-600 md:px-4 px-2 rounded-xl  ${
                    selected === "experience"
                      ? "text-white bg-pink-600"
                      : "text-white"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setSelected("education")}
                  className={`bg-blue-600 md:px-4 px-2 rounded-xl ${
                    selected === "education"
                      ? "text-white bg-pink-600"
                      : "text-white"
                  }`}
                >
                  Education
                </button>

                <button
                  onClick={() => setSelected("language")}
                  className={`bg-blue-600 md:px-4 px-2 rounded-xl ${
                    selected === "language"
                      ? "text-white bg-pink-600"
                      : "text-white"
                  }`}
                >
                  Language
                </button>
              </div>

              <div className="values mt-4">
                {selected === "skill" ? (
                  <div className=" font-semibold  w-full h-full p-3   border-2 border-dark-grey   rounded-xl">
                    <div className="flex flex-col rounded-xl w-full h-full justify-center md:pl-4">
                      <p className="md:text-xl text-Secondary">Frontend</p>
                      <p className="md:text-2xl text-xl">
                        Reactjs, JavaScrip,Tailwind css, HTML, CSS
                      </p>
                      <p className="md:text-xl text-Secondary">Back-end</p>
                      <p className="md:text-2xl text-xl">Nodejs, express, c#</p>
                      <p className="md:text-xl text-Secondary">SQL</p>
                      <p className="md:text-2xl text-xl">
                        PostgreSQL, SQLserver, xamp
                      </p>
                      <p className="md:text-xl text-Secondary">
                        UI/UX OR Gradphic
                      </p>
                      <p className="md:text-2xl text-xl">
                        Photoshop, Illustrator, Figma, Adobe Premiere
                      </p>
                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ອື່ນໆ
                      </p>
                      <p className="md:text-2xl text-xl font-NotosansLao">
                        ສ້ອມແປງ ແລະ ປະກອບຄອມພີວເຕີ
                      </p>
                    </div>
                  </div>
                ) : selected === "experience" ? (
                  <div className=" font-semibold  w-full h-full p-3  border-2 border-dark-grey   rounded-xl">
                    <div className="flex flex-col rounded-xl w-full h-full justify-center md:pl-4 ">
                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ພັດທະນາເວັບໄຊທ໌ແນະນໍາສະຖານທີ່ທ່ອງທ່ຽວໃນຫຼວງພະບາງ.
                      </p>
                      <p className="md:text-xl font-NotosansLao">
                        ເວັບໄຊທ໌ແນະນໍາສະຖານທີ່ທ່ອງທ່ຽວໃນຫຼວງພະບາງນີ້ເປັນລະບົບ
                        full-stack ທີ່ໃຊ້ React JS ສໍາລັບ front-end, Node.js ແລະ
                        Express ສໍາລັບ back-end, ແລະ PostgreSQL
                        ເປັນຖານຂໍ້ມູນ.ລວມທັງການຈັດການຂໍ້ມູນຜ່ານ API ແລະ
                        ການເກັບຮັກສາຂໍ້ມູນ.
                      </p>
                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ພັດທະນາໂປຣແກມ ບໍລິຫານລາຍຮັບ-ລາຍຈ່າຍເງີນໃນວັດໂພນພະເນົາ.
                      </p>
                      <p className="md:text-xl font-NotosansLao">
                        - ເປັນແອັບພລິເຄຊັນທີ່ພັດທະນາ ຂຽນດ້ວຍ: C# ແລະ .NET
                        Framework Databases SQL SERVER <br />
                        - ບັນທຶກລາຍຮັບ ແລະລາຍຈ່າຍ, ຮອງຮັບຫຼາຍສະກຸນເງິນ <br />
                        - ການ​ສໍາ​ຮອງ​ຂໍ້​ມູນ​:
                        ມີ​ຫນ້າ​ທີ່​ສໍາ​ຮອງ​ຂໍ້​ມູນ​ສໍາ​ລັບ​ຈຸດ​ປະ​ສົງ​ຄວາມ​ປອດ​ໄພ​.{" "}
                        <br />
                        - ບົດລາຍງານຂໍ້ມູນ,
                        ຄິດ​ໄລ່​ທັງ​ຫມົດ​,ສະຫຼຸບຍອດເງິນປະຈໍາເດືອນ <br />-
                        ພິມບົດລາຍງານ: ສາມາດພິມບົດລາຍງານ ແລະ ໃບຮັບເງິນ (ໃບບິນ)
                      </p>
                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ພັດທະນາໂປຣແກມ ບໍລິຈາກສ້າງສ້ອມແປງສາລາວັດ.
                      </p>
                      <p className="md:text-xl font-NotosansLao">
                        ເປັນແອັບພລິເຄຊັນທີ່ພັດທະນາ ຂຽນດ້ວຍ: C# ແລະ .NET
                        Framework Databases SQL SERVER
                      </p>
                    </div>
                  </div>
                ) : selected === "education" ? (
                  <div className=" font-semibold  w-full h-full p-3   border-2 border-dark-grey   rounded-xl">
                    <div className="flex flex-col rounded-xl w-full h-full justify-center md:pl-4">
                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ສະຖາບັນ
                      </p>
                      <p className="md:text-2xl text-xl font-NotosansLao">
                        ເຕັກໂນໂລຊີ ສຸດສະກະ
                      </p>
                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ປະລີນຍາຕີ
                      </p>
                      <p className="md:text-2xl text-xl font-NotosansLao">
                        ສາຂາ ການສ້າງໂປຮແກມຄອມພີວເຕິ ປີ 2023-2024
                      </p>
                    </div>
                  </div>
                ) : selected === "language" ? (
                  <div className=" font-semibold  w-full h-full p-4   border-2 border-dark-grey   rounded-xl">
                    <div className="flex flex-col rounded-xl w-full h-full justify-center md:pl-4">
                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ພາສາລາວ
                      </p>
                      <Slider
                        size="large"
                        defaultValue={80}
                        sx={{ width: 300, color: "#4B70F5" }}
                      />

                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        ภาษาไทย
                      </p>
                      <Slider
                        size="large"
                        defaultValue={60}
                        sx={{ width: 300, color: "#4B70F5" }}
                      />

                      <p className="md:text-xl text-Secondary font-NotosansLao">
                        English
                      </p>
                      <Slider
                        size="large"
                        defaultValue={50}
                        sx={{ width: 300, color: "#4B70F5" }}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* my Service  */}

        <div className="service mt-7 text-white  ">
          <h3 className="uppercase text-2xl font-bold pl-3">MY SWERVICE</h3>

          <div className="mainbox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 ">
            <div className="boxservice  text-white rounded-xl p-4 bg-Secondary ">
              <LuSeparatorVertical className="text-2xl font-bold" />
              <h2 className="uppercase font-bold">Web/App developer</h2>
              <p className="font-NotosansLao md:text-xl">
                {" "}
                ໃຫ້ບໍລິການພັດທະນາເວັບໄຊທ໌ ແລະ Application ທັນສະໄຫມ
                ຕອບສະຫນອງຄວາມຕ້ອງການຂອງຜູ້ໃຊ້ ທັງດ້ານຄວາມງາມ ແລະ ປະສິດທິພາບ
                ດ້ວຍການອອກແບບທີ່ເນັ້ນໃສ່ຄວາມປອດໄພ ແລະ ການນຳໃຊ້ທີ່ລຽບງ່າຍ.
              </p>
            </div>
            <div className="boxservice  text-white rounded-xl p-4 bg-Secondary">
              <LuSeparatorVertical />
              <h2 className="uppercase font-bold">software developer</h2>
              <p className="font-NotosansLao md:text-xl">
                ພັດທະນາຊອບແວທີ່ສາມາດຕອບສະຫນອງຄວາມຕ້ອງການຂອງທຸລະກິດແລະອົງການຈັດຕັ້ງ.
                ເຊັ່ນດຽວກັນກັບການສະຫນອງການແກ້ໄຂສະເພາະທີ່ຊ່ວຍໃຫ້ການດໍາເນີນງານມີປະສິດທິພາບຫຼາຍຂຶ້ນ.
              </p>
            </div>
            <div className="boxservice  text-white rounded-xl p-4 bg-Secondary">
              <LuSeparatorVertical />
              <h2 className="uppercase font-bold">UI/UX DESIGNS</h2>
              <p className="font-NotosansLao md:text-xl">
                ອອກແບບປະສົບການຂອງຜູ້ໃຊ້ (UI/UX) ທີ່ເນັ້ນຄວາມເຂົ້າໃຈ
                ແລະຄວາມສະດວກໃນການນຳໃຊ້.
                ເພື່ອເຮັດໃຫ້ການສື່ສານລະຫວ່າງຜູ້ໃຊ້ແລະລະບົບມີປະສິດທິພາບ.
                ແລະໃຫ້ຄວາມສໍາຄັນກັບການອອກແບບທີ່ສວຍງາມ
              </p>
            </div>
          </div>
        </div>

        {/* my work  */}

        <div className="service mt-7 text-white ">
          <h3 className="uppercase text-2xl font-bold pl-3">MY Work</h3>

          <div className="mainbox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4">
            {/* Box 01 */}
          
         
            <Link to="reviewLPB" className="boxservice text-white rounded-xl  relative group overflow-hidden">
              <img
                src={imgwork01}
                className="rounded-xl hover:opacity-50 w-full h-full"
              />
              <div className="boxTitle bg-gradient-to-t from-Secondary  to-Primary  group-hover:opacity-90 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out rounded-xl w-full h-full absolute bottom-0 left-0 p-4">
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="font-bold font-NotosansLao md:text-2xl">
                    ເວັບໄຊທ໌ແນະນໍາສະຖານທີ່ທ່ອງທ່ຽວໃນຫຼວງພະບາງ
                  </h1>
                  <p className="p-2 font-NotosansLao line-clamp-3 md:line-clamp-5 lg:line-clamp-6">
                    ເວັບໄຊທ໌ອະນຸຍາດໃຫ້ຜູ້ໃຊ້ສົ່ງ ແລະ ທົບທວນສະຖານທີ່,
                    ພ້ອມທັງມີຟັງຊັນຊຸມຊົນທີ່ເຮັດໃຫ້ສະມາຊິກສາມາດໂພສກິດຈະກໍາຕ່າງໆເຊັ່ນ:
                    ການຂັບລົດ, ຖ່າຍຮູບ, ແລະ ຂຽນຂໍ້ຄວາມ.
                  </p>
                  <button className="bg-grey p-4 rounded-full">
                    <FaLink className="text-black" />
                  </button>
                </div>
              </div>
            </Link>
            {/* Box 02 */}
            <Link to="expenses" className="boxservice text-white rounded-xl  relative group overflow-hidden">
              <img
                src={imgwork02}
                className="rounded-xl hover:opacity-50 w-full h-full"
              />
              <div className="boxTitle bg-gradient-to-t from-Secondary  to-Primary  group-hover:opacity-90 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out rounded-xl w-full h-full absolute bottom-0 left-0 p-4">
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="font-bold font-NotosansLao md:text-2xl">
                  ໂປຣແກຣມຈັດການດ້ານການເງິນຂອງວັດໂພນພະເນົາ
                  </h1>
                  <p className="p-2 font-NotosansLao line-clamp-3 md:line-clamp-5 lg:line-clamp-6">
                  ເປັນໂປຣແກຣມທີ່ຄອບຄຸມການຈັດການລາຍຮັບ ແລະ ລາຍຈ່າຍ, ມີຟັງຊັນສໍາຮອງຂໍ້ມູນ ແລະ ການສ້າງລາຍງານ. ໂດຍໃຊ້ເທັກໂນໂລຢີ Windows Forms ແລະ .NET Framework ໂດຍພາສາ C#. ໂປຣແກຣມນີ້ອອກແບບມາເພື່ອຊ່ວຍໃຫ້ການຄໍານວນ ແລະ ການຕິດຕາມຂໍ້ມູນການເງິນໄດ້ຢ່າງມີປະສິດທິພາບ.
                  </p>
                  <button className="bg-grey p-4 rounded-full">
                    <FaLink className="text-black" />
                  </button>
                </div>
              </div>
            </Link>
            {/* Box 03 */}
            <Link to="brijack" className="boxservice text-white rounded-xl  relative group overflow-hidden">
              <img
                src={imgwork03}
                className="rounded-xl hover:opacity-50 w-full h-full"
              />
              <div className="boxTitle bg-gradient-to-t from-Secondary  to-Primary  group-hover:opacity-90 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out rounded-xl w-full h-full absolute bottom-0 left-0 p-4">
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="font-bold font-NotosansLao md:text-2xl">
                  ໂປຣແກຣມລະບົບຈັດການການເງິນສ້ອມແປງສາລາວັດໂພນພະເນົາ
                  </h1>
                  <p className="p-2 font-NotosansLao line-clamp-3 md:line-clamp-5 lg:line-clamp-6">
                  ພັດທະນາດ້ວຍ Windows Forms ແລະ .NET Framework ໂດຍໃຊ້ພາສາ C#. ມັນມີຄຸນສົມບັດຫຼາຍຢ່າງລວມມີ:
                  ການບັນທຶກ ແລະ ຈັດການຂໍ້ມູນລາຍຮັບ-ລາຍຈ່າຍ
                  ການຄິດໄລ່ຄ່າໃຊ້ຈ່າຍຕ່າງໆ
                  ລະບົບສໍາຮອງຂໍ້ມູນ (Backup)
                  ການສ້າງລາຍງານ (Report) ຂໍ້ມູນຕ່າງໆ
                  </p>
                  <button className="bg-grey p-4 rounded-full">
                    <FaLink className="text-black" />
                  </button>
                </div>
              </div>
            </Link>
            {/* Box 04 */}
            <Link to="image" className="boxservice text-white rounded-xl  relative group overflow-hidden">
              <img
                src={imgwork04}
                className="rounded-xl hover:opacity-50 w-full h-full"
              />
              <div className="boxTitle bg-gradient-to-t from-Secondary  to-Primary  group-hover:opacity-90 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out rounded-xl w-full h-full absolute bottom-0 left-0 p-4">
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="font-bold font-NotosansLao md:text-2xl">
                    ການອອກແບບ Gradphic ແລະ UI ທີ່ເຄີຍເຮັດຜ່ານມາ
                  </h1>
                  <p className="p-2 font-NotosansLao line-clamp-3 md:line-clamp-5 lg:line-clamp-6">
                  ການອອກແບບກຣາຟິກ ແລະ UI ເປັນທັກສະທີ່ສຳຄັນໃນໂລກດິຈິຕອລປັດຈຸບັນ. Adobe Photoshop ແລະ Illustrator ເປັນເຄື່ອງມືທີ່ມີພະລັງສຳລັບການສ້າງ ແລະ ແກ້ໄຂຮູບພາບ, ໂລໂກ້, ແລະ ກຣາຟິກຕ່າງໆ. Photoshop ເໝາະສຳລັບການແກ້ໄຂຮູບຖ່າຍ ແລະ ການສ້າງອົງປະກອບ UI ທີ່ຊັບຊ້ອນ, ໃນຂະນະທີ່ Illustrator ແມ່ນດີເລີດສຳລັບກຣາຟິກແບບເວກເຕີ. Figma,
                  </p>
                  <button className="bg-grey p-4 rounded-full">
                    <FaLink className="text-black" />
                  </button>
                </div>
              </div>
            </Link>

          
            
           
          </div>
        </div>

        <div className="boxcontact h-full w-full  text-white mt-10 p-4">
              <hr className="h-2  bg-gradient-to-r from-Secondary  to-Primary "/>
                <div className="boxelements h-[20rem] w-full flex flex-col justify-center items-center gap-4">
                      <h1 className="md:text-2xl font-bold">Contact</h1>
                      <div className="email flex items-center gap-3 ">
                      <MdOutlineEmail className="text-Secondary text-2xl md:text-4xl"/>
                        <span className="md:text-2xl">info@yourwebsite.com</span>
                      </div>
                      <div className="tell flex items-center gap-3">
                      <BsTelephone className="text-Secondary md:text-4xl" />
                        <span className="md:text-2xl">info@yourwebsite.com</span>
                      </div>
                      <p>DOWLOAD CV</p>
                      <div className="sosia flex items-center gap-3 text-4xl text-Secondary">
                      <FiFacebook />
                      <FaTiktok />
                      <CiYoutube />
                      <CgWebsite />
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default App;
