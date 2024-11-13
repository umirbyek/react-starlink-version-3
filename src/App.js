// import { FaChevronRight } from "react-icons/fa";
import Roam_b_install from "./assets/images/roam_b_install_m.webp";
import Accessories_ethernet_adapter from "./assets/images/accessories_ethernet_adapter.webp";
import Hardware_standard_dish from "./assets/images/hardware_standard_dish.webp"
import Hardware_standard_kickstand from "./assets/images/hardware_standard_kickstand.webp"
import Hardware_standard_router from "./assets/images/hardware_standard_router.webp"
import Hardware_standard_ac_power_cable from "./assets/images/hardware_standard_ac_power_cable.webp"
import Hardware_standard_starlink_cable_gen3 from "./assets/images/hardware_standard_starlink_cable_gen3.webp"
import Hardware_standard_power_supply_unit from "./assets/images/hardware_standard_power_supply_unit.webp"
import React, { useEffect, useRef } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log(scrollRef.current); // Check if the ref is correctly attached
  }, []);

  const getScrollAmount = () => {
    const width = window.innerWidth;
    if (width < 640) return 180; // Mobile screens
    if (width < 1024) return 180; // Medium screens (tablet)
    return 230; // Large screens (desktop)
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    }
  };
  const handleOrderClick = () => {
    window.parent.location.href = 'https://emartmall.mn/productdetail/2140057847000';
  };
  const viewPlanClick = () => {
    window.parent.location.href = 'https://www.starlink.com/service-plans';
  };
  const activeGuideClick = () => {
    window.parent.location.href = 'https://emartmall.mn/info/99';
  };
  const iosClick = () => {
    window.parent.location.href = 'https://apps.apple.com/us/app/starlink/id1537177988';
  };
  const androiClick = () => {
    window.parent.location.href = 'https://play.google.com/store/apps/details?id=com.starlink.mobile';
  };
  const zipcodeClick = () => {
    window.parent.location.href = 'https://zipcode.mn/zipcode';
  };
  const specificationsClick = () => {
    window.parent.location.href = 'https://www.starlink.com/specifications?spec=1';
  };
  const cableOrderClick = () => {
    window.parent.location.href = 'https://emartmall.mn/productdetail/2140056356008';
  };
  
  return (
    <div className="w-full h-screen">
      <div
        className=" bg-cover bg-center
        bg-hero-image-md md:bg-hero-image-md lg:bg-hero-image-lg
        h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600
        w-full font-roboto"
      >
        <div className="w-auto flex  justify-center h-full">
          <div className="flex flex-col  text-white items-center  justify-between py-40 w-96 lg:w-full md:w-full">
            <div className="flex flex-col  items-center lg:gap-10 ">
              <h1 className="lg:text-7xl md:text-7xl text-3xl font-semibold lg:font-semibold md:font-bold font-roboto">
                ROAM WITH STARLINK
              </h1>
              <div className="flex flex-col items-center">
                <p className="lg:text-3xl md:text-2xl text-base">
                  Work and play at remote locations.
                </p>
                <p className="lg:text-3xl md:text-2xl text-base">
                  Үндсэн үнэ: 1,525,000₮
                </p>
              </div>
            </div>

          
              <button onClick={handleOrderClick}  className="bg-white text-black font-semibold py-3 px-20 rounded hover:bg-[#ffa500] transition duration-500 lg:text-lg md:text-base text-sm items-end">
                Захиалах
              </button>
       
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center bg-roam_illustriation1-image-lg h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600 w-full font-roboto">
        <div className="w-full flex justify-center h-full">
          <div className="flex flex-col text-white items-center justify-center">
            <div className="flex flex-col items-center lg:gap-14 md:gap-10 gap-4">
              <h1 className="lg:text-5xl md:text-5xl text-2xl font-medium">
                HIGH-SPEED INTERNET ON THE GO
              </h1>

              <div className="flex lg:flex-row md:flex-row flex-col gap-8">
                <div className="relative text-center p-6 rounded-lg shadow-lg border border-white/20 lg:w-96 w-80 ">
                  {/* <div className="absolute inset-0 bg-white/5 blur-3xl rounded-lg"></div> */}
                  <div className="absolute inset-0   bg-slate-900/5  "></div>
                  <div className="relative">
                    <h2 className="md:text-3xl text-xl font-semibold">
                      ROAM
                      <br />
                      50GB
                    </h2>
                    <p className="text-sm md:text-xl   mt-2">
                      Best for infrequent and individual travel with low usage
                    </p>
                    <p className="md:text-4xl text-2xl  font-bold mt-4">MNT170,000</p>
                    <p className="text-sm md:text-xl  mt-1">50 GB Roam Data</p>
                  </div>
                </div>

                <div className="relative text-center p-6 rounded-lg shadow-lg border border-white/20 lg:w-96 w-80 ">
                  <div className="absolute inset-0 bg-slate-900/5  blur-sm  "></div>
                  <div className="relative">
                    <h2 className="md:text-3xl text-xl  font-semibold">
                    ROAM
                      <br />
                      UNLIMITED
                    </h2>
                    <p className="text-sm md:text-xl  mt-2">
                    Best for RVers, campers, travelers, and working on the go 
                    </p>
                    <p className="md:text-4xl text-2xl font-bold mt-4">MNT291,221 </p>
                    <p className="text-sm md:text-xl   mt-1">Unlimited Roam Data</p>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-xl  lg:w-auto md:w-auto w-80 text-center">
                *Сарын үйлчилгээний төлбөрийг доорх хэсгээс болон "Starlink"
                апп-руу шууд хандан идэвхжүүлнэ.
              </p>
       
                <button onClick={viewPlanClick} className="bg-white/15 text-white  font-semibold py-2 px-2 md:py-3 md:px-4  lg:py-3 lg:px-7 rounded hover:bg-black/90  transition duration-500 border border-white flex items-center gap-2 lg:text-lg md:text-base text-sm">
                  View plans
                  <FaChevronRight />
                </button>

            </div>
          </div>
        </div>
      </div>

      <div
        className=" bg-cover bg-center
        bg-roam_c_feature5_m-image-md md:roam_c_feature5_m-image-md lg:bg-roam_c_feature5_d-image-lg
        h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600
        w-full font-roboto"
      >
        <div className="flex h-auto pt-10 w-auto justify-end pr-6 md:pr-14 lg:pr-16">
          <div className="flex flex-col  text-white gap-4 w-80 md:w-96 lg:w-2/6   rounded  p-4 ">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:font-semibold md:font-bold text-justify">
              АЛСЛАГДСАН ЗАЙНААС Ч АЖИЛЛА, ТОГЛО
            </h1>

            <p className="lg:text-2xl md:text-xl text-sm text-justify">
              Дэлхийн хаана ч ашиглах боломжтой өндөр хурдны интернэт Энэхүү
              төхөөрөмжөөр хэдхэн хормын дотор интернэтэд холбогдож, хурааж авч
              явахад хялбар
            </p>

   
              <button onClick={activeGuideClick} className="w-full  bg-white text-black font-semibold py-3 px-10 lg:text-base rounded hover:bg-[#ffa500] transition duration-500 lg:text-lg md:text-base text-sm ">
                Идэвхжүүлэх заавар харах
              </button>
      
          </div>
        </div>
      </div>

      <div
        className=" bg-cover bg-center
        bg-roam_illustriation2_d
        h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600
        w-full font-roboto"
      >
        <div className="flex h-full  w-auto justify-center  items-center gap-4 flex-col lg:flex-row md:flex-row">
          <div className="flex flex-col  text-white gap-4 w-80 md:w-96 lg:w-2/5  bg-black/30 rounded">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:font-semibold md:font-bold text-justify">
              Хормын төдийд Интернэт-д холбогд!
            </h1>

            <p className="lg:text-2xl md:text-xl text-sm text-justify">
              Starlink app татах линкүүд: IOS, Android
            </p>

            <div className="flex gap-4">
       
                <button onClick={iosClick} className="bg-white/15 text-white  font-semibold py-2 px-3 md:py-4 md:px-4 lg:py-4 lg:px-6 rounded hover:bg-black/90  transition duration-500 border border-white flex items-center gap-2 lg:text-lg md:text-base text-sm">
                  DOWNLOAD FOR IOS
                  <FaChevronRight />
                </button>
       

                <button onClick={androiClick} className="bg-white/15 text-white  font-semibold py-2 px-3 md:py-4 md:px-4 lg:py-4 lg:px-6  rounded hover:bg-black/90  transition duration-500 border border-white flex items-center gap-2 lg:text-lg md:text-base text-sm">
                  DOWNLOAD FOR ANDROID
                  <FaChevronRight />
                </button>
   
            </div>
          </div>
          <img
            src={Roam_b_install}
            className="lg:w-auto lg:h-auto md:w-60 md:h-60 w-56 h-56"
          />
        </div>
      </div>

      <div
        className=" bg-cover bg-center
        bg-roam_collapse_m md:bg-roam_collapse_m lg:bg-roam_collapse_d
        h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600
        w-full font-roboto"
      >
        <div className="flex h-auto pt-10 w-auto justify-end pr-6 md:pr-14 lg:pr-16">
          <div className="flex flex-col  text-white gap-4 w-80 md:w-96 lg:w-2/5">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:font-semibold md:font-bold">
              ХӨДӨЛЖ БУЙ ТЭЭВРИЙН ХЭРЭГСЭЛД АШИГЛАХ БОЛОМЖТОЙ
            </h1>

            <p className="lg:text-2xl md:text-xl text-sm text-justify  rounded    p-4 ">
              Хөдөлгөөнт байдлаар ашиглах боломжтой үйлчилгээ нь зөвхөн Mobile
              Priority болон Flat High Performance иж бүрдлээр л ажиллах
              боломжтой ба уг төхөөрөмжийг таны тээврийн хэрэгсэл дээр байнгын
              суурилуулах зориулалттай.
            </p>

  
              <button onClick={zipcodeClick} className="bg-black/35 text-white  font-semibold py-2 px-3 md:py-4 md:px-5 lg:py-4 lg:px-6 rounded hover:bg-black/90  transition duration-500 border border-white flex items-center gap-2 lg:text-lg md:text-base text-sm">
                ZIPCODE харах
                <FaChevronRight />
              </button>
    
          </div>
        </div>
      </div>

      <div
        className=" bg-cover bg-center
        bg-roam_b_hardware_d
        h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600
        w-full font-roboto"
      >
        <div className="flex h-full  w-auto justify-between md:justify-between lg:justify-between pl-2 pt-4 md:pl-28 md:pt-28 gap-4 flex-col items-center md:items-start lg:items-start ">
          <div className="flex flex-col text-white gap-4 w-80 md:w-96 lg:w-2/6 items-center  md:items-start lg:items-start  ">
            <h1 className="lg:text-5xl md:text-4xl text-4xl font-semibold lg:font-semibold md:font-bold text-justify ">
              WHAT'S IN THE <br /> STANDARD BOX
            </h1>

            <p className="lg:text-2xl md:text-xl text-sm text-justify">
              Starlink-н төхөөрөмж нь танд минутын дотор онлайнд холбогдоход
              шаардлагатай бүх зүйлтэй ирдэг.
            </p>

     
              <button onClick={specificationsClick} className="bg-white/15 text-white  font-semibold py-2 px-3 md:py-4 md:px-4 lg:py-4 lg:px-6  rounded hover:bg-black/90  transition duration-500 border border-white flex items-center gap-2 lg:text-base md:text-sm text-sm">
                VIEW SPECIFICATIONS
                <FaChevronRight />
              </button>
        
          </div>
          <div className="flex flex-col  text-white gap-4 w-80 md:w-4/5 lg:w-5/6  items-center rounded pb-32 md:pb-30">
            <div className="relative  w-80 md:w-4/5 lg:w-5/6  h-full " >
              {/* Left Button */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white p-2 lg:hidden "
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollRef}
                className=" flex gap-4 p-4 scrollbar-hide overflow-x-hidden h-full "
              >
                <div className="flex flex-col items-center text-white ">
                  <img
                    src={Hardware_standard_dish}
                    alt="Starlink"
                    className="h-40 w-40 md:h-44 md:w-44  lg:h-48 lg:w-48 max-w-none"
                  />
                  <p className="mt-2 lg:text-2xl md:text-xl text-sm text-justify">STARLINK</p>
                </div>
                <div className="flex flex-col items-center text-white">
                  <img
                      src={Hardware_standard_kickstand}
                    alt="Kickstand"
                className="h-40 w-40 md:h-44 md:w-44  lg:h-48 lg:w-48 max-w-none"
                  />
                  <p className="mt-2 lg:text-2xl md:text-xl text-sm text-justify">KICKSTAND</p>
                </div>
                <div className="flex flex-col items-center text-white ">
                  <img
                     src={Hardware_standard_router}
                    alt="Gen 3 Router"
                    className="h-40 w-40 md:h-44 md:w-44  lg:h-48 lg:w-48 max-w-none"
                  />
                  <p className="mt-2 lg:text-2xl md:text-xl text-sm text-justify">GEN 3 ROUTER</p>
                </div>
                
                <div className="flex flex-col items-center text-white ">
                  <img
                      src={Hardware_standard_starlink_cable_gen3}
                    alt="Starlink"
                    className="h-40 w-40 md:h-44 md:w-44  lg:h-48 lg:w-48 max-w-none"
                  />
                  <p className="mt-2 lg:text-2xl md:text-xl text-sm text-justify">STARLINK CALBE</p>
                </div>
             
                <div className="flex flex-col items-center text-white ">
                  <img
                       src={Hardware_standard_ac_power_cable}
                    alt="Kickstand"
                    className="h-40 w-40 md:h-44 md:w-44  lg:h-48 lg:w-48 max-w-none"
                  />
                  <p className="mt-2 lg:text-2xl md:text-xl text-sm text-justify">AC CABLE</p>
                </div>
                <div className="flex flex-col items-center text-white ">
                  <img
                      src={Hardware_standard_power_supply_unit}
                    alt="Gen 3 Router"
                    className="h-40 w-40 md:h-44 md:w-44  lg:h-48 lg:w-48 max-w-none"
                  />
                  <p className="mt-2 lg:text-2xl md:text-xl text-sm text-justify">POWER SUPPLY</p>
                </div>
                {/* Add more items as needed */}
              </div>

              {/* Right Button */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg z-10 lg:hidden "
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            {/* <p className="lg:text-xl md:text-lg text-sm text-justify">
              Starlink gen 2 зөвхөн Wifi цацдаг бөгөөд сүлжээг дотоод сүлжээнд
              LAN кабелиар салаалах эсвэл LAN оролт бүхий төхөөрөмжинд холбоход
              зайлшгүй Ethertnet Adapter төхөөрөмжийг ашиглах шаардлагатай.
            </p>
            <p className="lg:text-xl md:text-lg text-sm text-justify">
              Ethernet Adapter төхөөрөмж нь Starlink-ийн өөрийн C-Type маягийн
              кабелийн үзүүр дээр холбогдож сүлжээг байгууллагын дотоод сүлжээ
              эсвэл LAN RJ45 кабелиар салаалж ашиглах боломжийг олгодог.
            </p> */}
          </div>
        </div>
      </div>

      <div
        className=" bg-cover bg-center
        bg-roam_b_weather_m md:bg-roam_b_weather_m lg:bg-roam_b_weather_d
        h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600
        w-full font-roboto"
      >
        <div className="flex h-full  w-auto justify-start md:pl-14 lg:pl-16 pl-4 lg:items-center items-start pt-4 md:pt-10">
          <div className="flex flex-col  text-white gap-4 w-80 md:w-96 lg:w-2/6 ">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:font-semibold md:font-bold text-start">
              ЦАГ АГААРЫН ӨӨРЧЛӨЛТИЙГ ТЭСВЭРЛЭХ ЧАДВАРТАЙ
            </h1>

            <p className="lg:text-2xl md:text-xl text-sm text-justify">
              Цаг агаарын ямар ч нөхцөл байдалд тэсвэртэй. Урт хугацааны
              гэрээгүй, хүссэн үедээ захиалга цуцлах, зогсоох боломжтой, өндөр
              хурдны хязгааргүй Data-тай
            </p>

          
              <button onClick={handleOrderClick} className="bg-white text-black font-semibold py-3 px-20 rounded hover:bg-[#ffa500] transition duration-500 lg:text-lg md:text-base text-sm items-end">
                Захиалах
              </button>
         
          </div>
        </div>
      </div>

      <div
        className=" bg-cover bg-center
        bg-black
        h-sm-image-600 md:h-md-image-600 lg:h-lg-image-600
        w-full font-roboto"
      >
        <div className="flex h-full  w-auto justify-center  items-center gap-4 flex-col lg:flex-row md:flex-row">
          <div className="flex flex-col md:flex-col lg:flex-col text-white justify-center items-center lg:gap-4 md:gap-4 gap-2 md:items-start">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:font-semibold md:font-bold text-justify">
              ACCESSORIES & MOUNTS
            </h1>

            <img
              src={Accessories_ethernet_adapter}
              className="lg:h-96 lg:w-96 md:w-60 md:h-60 w-56 h-56"
            />
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:font-semibold md:font-bold text-justify">
              Ethernet adapter
            </h1>
          </div>
          <div className="flex flex-col  text-white gap-4 w-80 md:w-96 lg:w-2/5  bg-black/30 rounded">
            <p className="lg:text-xl md:text-lg text-sm text-justify">
              Starlink gen 2 зөвхөн Wifi цацдаг бөгөөд сүлжээг дотоод сүлжээнд
              LAN кабелиар салаалах эсвэл LAN оролт бүхий төхөөрөмжинд холбоход
              зайлшгүй Ethertnet Adapter төхөөрөмжийг ашиглах шаардлагатай.
            </p>
            <p className="lg:text-xl md:text-lg text-sm text-justify">
              Ethernet Adapter төхөөрөмж нь Starlink-ийн өөрийн C-Type маягийн
              кабелийн үзүүр дээр холбогдож сүлжээг байгууллагын дотоод сүлжээ
              эсвэл LAN RJ45 кабелиар салаалж ашиглах боломжийг олгодог.
            </p>

              <button onClick={cableOrderClick} className="bg-white text-black font-semibold py-3 px-20 rounded hover:bg-[#ffa500] transition duration-500 lg:text-lg md:text-base text-sm items-end">
                Захиалах
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
