import React from "react";
import SectionHeadline from "../../Components/SectionHeadLine";

const Gallery = () => {
  const images = [
    "https://i.ibb.co.com/sdh65TKH/217cfb16459e087cdd7e428d11b56e76-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-Xz8.jpg",
    "https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/h1-img-11-300x300.jpg",
    "https://i.ibb.co.com/Zww3bHH/316a373853d08f83b04f0cac3bcf58c5-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-s0.jpg",
    "https://i.ibb.co.com/yvGRrgT/c82269316c76d2757d508021284bb29e-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-Sv.jpg",
    "https://i.ibb.co.com/KczZCd34/050a635801d4dcaee4e401873d1f3021-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-SGH.jpg",
    "https://i.ibb.co.com/n837gK2K/74fbe316f9340e1cb54902e2d7c4129a-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-Eov.jpg",
    "https://i.ibb.co.com/LdmbbpHM/b43a68d37b9054525339de9b09acd2eb-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-P2.jpg",
    "https://i.ibb.co.com/ks3FFZ2H/5ff0606ad51479743e65020f43161104-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-b-I.jpg",
    "https://i.ibb.co.com/wFRfJdwf/5a5b058579686fb7fa72a099952c9047-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-qme.jpg",
    "https://i.ibb.co.com/3YfKKHSh/e9042fa238b5ce108512708f516c6f6e-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-P2.jpg",
    "https://i.ibb.co.com/C568C1KW/83b6749dda7c437efd73dfce7266e9fa-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-Mn.jpg",
    "https://i.ibb.co.com/8DpkQxDn/291c70e172f7601f662335ed5210b1cd-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-Zs.jpg"
  ]

  return (
    <div className="bg-secondary pt-12 md:pb-0 pb-24">
      <div className="md:flex justify-between items-center hidden">
        <img
          src="https://i.ibb.co.com/Q3sgWC6H/9bfb118b9926a6263173bf00ebed4b6f-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-CB1.png"
          alt="cloud"
        />
        <div className="flex justify-between items-center gap-44">
          <img
            src="https://i.ibb.co.com/WvQg6ygC/8b7a8175c8d16f8095aa8bb6b85cf424-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-QBA.png"
            alt="bird"
          />
          <img
            src="https://i.ibb.co.com/pBCz3DHL/c3087be6c5205c1f1217dc7e147c9cac-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-ALo.png"
            alt="baby"
            className="-mt-12"
          />
        </div>
      </div>
      <div className="md:-mt-28">
        <SectionHeadline
          heading={"CHECK OUT OUR GALLERY"}
          subHeading={
            "Iaculis nunc sed augue lacus viverra vitae congue. Vitae congue eu consequat ac."
          }
        />
      </div>
      
      <div className="grid md:grid-cols-6 gap-6 md:gap-2 md:w-[87%] mx-auto px-10 md:px-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`photo${index + 1}`}
            className="hover:scale-105 transition-all duration-700 cursor-pointer"
          />
        ))}
      </div>


      <img
        src="https://i.ibb.co.com/Vc3CfwVq/7a9c986c442258903678a7e498192fe9-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-Rg9.png"
        alt="doll"
        className="pl-16 pt-5 hidden md:block"
      />
    </div>
  );
};

export default Gallery;
