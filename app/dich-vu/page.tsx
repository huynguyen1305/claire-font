// "use client";

import React from "react";

import CardService from "@/components/CardService/CardService";
import ServiceSection from "@/containers/dich-vu/ServiceSection";

import rezenerate from "@/assets/images/rezenerate.png";
import hydra from "@/assets/images/hydra.png";
import chamsocdatainha from "@/assets/images/cham-soc-da-tai-nha.png";
import tuvan11 from "@/assets/images/tu-van-1-1.png";

const DichVuPage = () => {
  const dataChamSocDa = [
    {
      id: 1,
      title: "TƯ VẤN CHĂM SÓC DA TẠI NHÀ",
      description: `Không đơn thuần là bán sản phẩm, Claire bán sự trải nghiệm Dược mỹ phẩm chính hãng hợp lý, an toàn và hiệu quả với sự tư vấn và theo dõi xuyên suốt quá trình sử dụng cùng khách hàng từ những Chuyên viên Tư vấn viên có chuyên môn và dày dặn kinh nghiệm, dưới sự theo dõi, kiểm soát và cố vấn từ Bác sĩ CK Da liễu.`,
      image: chamsocdatainha,
      button: [
        {
          id: 1,
          title: "Tư vấn miễn phí online",
          onclick: async () => {
            console.log("Tư vấn miễn phí online");
          },
        },
      ],
    },
    {
      id: 2,
      title: "TƯ VẤN TRỰC TIẾP 1:1 VỚI BÁC SĨ CHUYÊN KHOA",
      description: `Thăm khám trực tiếp với Bác sĩ CK Da liễu và Thẩm mỹ tại Claire. Bạn sẽ được phân tích làn da một cách chính xác nhất và được tư vấn 1 phác đồ điều trị cùng báo cáo phân tích nhận ngay trong tầm tay.`,
      image: tuvan11,
      button: [
        {
          id: 1,
          title: "Đặt lịch hẹn",
          onclick: async () => {
            console.log("Đặt lịch hẹn");
          },
        },
      ],
    },
  ];

  const dataTriLieu = [
    {
      id: 3,
      title: "Trị liệu HYDRA FACIAL",
      description: `Hydra Facial là liệu trình chăm sóc da chuyên sâu, sử dụng hệ thống máy chuyên dụng để làm sạch sâu, dưỡng ẩm và detox cho làn da. Đây là liệu trình làm đẹp không xâm lấn, không đau, không tốn thời gian nghỉ dưỡng và mang đến hiệu quả hàng đầu.

Nguyên lý hoạt động của Hydra Facial sử dụng công nghệ Aqua Peeling với lực xoáy nước tiên tiến để làm sạch sâu và cung cấp hiệu quả các thành phần có chứa dưỡng chất nuôi dưỡng vào sâu trong da. Ngoài ra, Hydra Facial còn cung cấp khả năng detox làm khoẻ da mạnh mẽ thông qua hiệu ứng BOHR với bộ trị liệu chuyên dụng riêng biệt cho từng vấn đề của mỗi khách hàng, kết hợp với bước massage tăng khả năng lưu dẫn của hệ bạch huyết. 

Hydra Facial không chỉ là một trị liệu thẩm mỹ. Đó là một trải nghiệm. Một niềm vui. Một cảm giác an tâm và tin tưởng. Trị liệu tập trung vào triết lý “ Skin Health for Life”, không chỉ là làn da cải thiện và khoẻ hơn, mà khi làm da của bạn cải thiện và tốt hơn, bạn sẽ cảm giác tốt và vui vẻ hơn. Đó là sự khác biệt bạn nhận được với Hydra Facial.
      `,
      image: hydra,
      button: [
        {
          id: 1,
          title: "Tìm hiểu thêm",
          link: "dich-vu/hydra-facial",
          onclick: async () => {
            console.log("Tìm hiểu thêm");
          },
        },
      ],
    },
    {
      id: 4,
      title: "Trị liệu REZENERATE NanoFacial",
      description: `Rezenerate NanoFacial là phương thức chăm sóc da mới nhất trên thị trường làm đẹp hiện nay mang lại cho bạn những kết quả tuyệt vời tương đương với các liệu trình xâm lấn hơn mà vẫn giữ trải nghiệm thoải mái và không có khó chịu hay tiêu cực nào.

Khác hẳn với các trị liệu tương tự nhưng với công nghệ cấp thấp, vật liệu không đạt tiêu chuẩn và kết quả không rõ ràng, Rezenerate NanoFacial là phương pháp DUY NHẤT sử dụng công nghệ nano tiên tiến và Acupressure của phương pháp Cold Therapy mang đến trị liệu Facial tốt nhất thị trường. 

Triết lý của Rezenerate rất đơn giản: kết hợp công nghệ tiên tiến nhất thị trường với các sản phẩm chất lượng cao tinh khiết nhất. Khi được kết hợp đúng cách và phù hợp với từng vấn đề da khách hàng, chúng trở nên hiệu quả theo cấp số nhân, mang lại kết quả bạn chưa bao giờ nghĩ mình có thể đạt được. 

Công nghệ Nano đang đóng góp rất nhiều trong sự phát triển của nhiều lãnh vực phục vụ đời sống con người và Rezenerate tự hào là phương pháp thay đổi bộ mặt của ngành làm đẹp hiện đại. 
      `,
      image: rezenerate,

      button: [
        {
          id: 1,
          title: "Tìm hiểu thêm",
          link: "dich-vu/rezenerate-nanofacial",
          onclick: async () => {
            console.log("Tìm hiểu thêm");
          },
        },
      ],
    },
  ];

  const dataDichVu = [
    {
      id: 1,
      title: "CHĂM SÓC DA CHUYÊN SÂU",
      titleEn: "Advanced Clinical Treatment",
      children: [
        {
          id: 1,
          title: "Hydra Facial",
          content: `Trị liệu phục hồi độ ẩm, săn chắc mọng nước cho da
          
          Thời gian: 60 phút
          Thời gian nghỉ dưỡng: Không có thời gian nghỉ dưỡng`,
        },
        {
          id: 2,
          title: "Hydra Facial Plus",
          content: `Trị liệu chuyên sâu về trẻ hoá / trắng sáng / tái tạo bề mặt giúp da căng bóng và tươi sáng
          
          Thời gian: 60 phút
          Thời gian nghỉ dưỡng: Không có thời gian nghỉ dưỡng`,
        },
        {
          id: 3,
          title: "Hydra Body",
          content: `Liệu trình chăm sóc da body được thiết kế cho hiệu quả vượt trội sau 1 liệu trình.
          Các bước đặc biệt
          
          Làm sạch tiêu chuẩn
          Hiệu ứng Bohr + Exfoliation thông qua Capsule chuyên biệt
          Cấp ẩm chuyên sâu
          Kết quả mong đợi: Da căng sáng hơn, giảm sừng và bít tắt. 
          Thời gian trị liệu: 60-90 phút tuỳ vào vùng điều trị  
          Thời gian nghỉ dưỡng: không cần nghỉ dưỡng`,
        },
        {
          id: 4,
          title: "Acne Clinical Treatment",
          content: `Chăm sóc & phục hồi da mụn chuẩn y khoa

          Thời gian: 30 phút
          Thời gian nghỉ dưỡng: Không có thời gian nghỉ dưỡng`,
        },
        {
          id: 5,
          title: "Skin Recovery",
          content: `Phục hồi sức khoẻ làn da bị tổn thương, da nhạy cảm hoặc nhiễm Corticoid

          Thời gian: 60 phút
          Thời gian nghỉ dưỡng: Không có thời gian nghỉ dưỡng`,
        },
      ],
    },
    {
      id: 2,
      title: "ĐIỀU TRỊ LASER",
      titleEn: "Low Level Laser Therapy",
      children: [
        {
          id: 1,
          title: "18 minutes to glow",
          content: `Trị liệu độc quyền cho làn da căng bóng và tươi trẻ tức thì bằng công nghệ laser toning kết hợp trẻ hoá từ cấp độ tế bào
          Thời gian: 30 phút
          Thời gian nghỉ dưỡng: Không có thời gian nghỉ dưỡng`,
        },
        {
          id: 2,
          title: "Claire's C18 Signature",
          content: `Ứng dụng công nghệ Laser toning và phục hồi da lập tức mang lại làn da tươi trẻ vượt trội cho vùng Mặt – Cổ – Tay

          Thời gian trị liệu: 60 phút
          
          Thời gian nghỉ dưỡng: không cần nghỉ dưỡng`,
        },
      ],
    },
    {
      id: 3,
      title: "THAY DA SINH HỌC",
      titleEn: "Clinical Peeling Therapy",
      children: [
        {
          id: 1,
          title: "Bio Peel",
          content: `Thay da sinh học nông với TCA 35%, peel hai pha duy nhất trên thị trường.

          Thời gian: 60 phút
          Thời gian nghỉ dưỡng: theo hướng dẫn, trung bình 1-2 ngày`,
        },
        {
          id: 2,
          title: "Derma Peel",
          content: `Peel da sinh học độc quyền của Dermalogica

          Thời gian: 60 phút
          Thời gian nghỉ dưỡng: theo hướng dẫn, trung bình 1-2 ngày`,
        },
      ],
    },
    {
      id: 4,
      title: "NÂNG CƠ, TRẺ HOÁ",
      titleEn: "Energy-Based Treatments",
      children: [
        {
          id: 1,
          title: "Skin Revitalize",
          content: `Trị liệu độc quyền cho làn da căng bóng và tươi trẻ tức thì bằng công nghệ Radio Frequency tần số đặc biệt 448khz

          Thời gian: 60-75 phút
          Thời gian nghỉ dưỡng: Không có thời gian nghỉ dưỡng`,
        },
        {
          id: 2,
          title: "Bio Lifting          ",
          content: `Ứng dụng công nghệ độc quyền True Microcurrent lập tức mang lại làn da tươi trẻ vượt trội, nâng cơ vùng mặt và tăng cường lymphatic drainge

          Thời gian trị liệu: 90 phút
          
          Thời gian nghỉ dưỡng: không cần nghỉ dưỡng`,
        },
        {
          id: 3,
          title: "Thermage® CPT Mặt",
          content: `Trẻ hoá với công nghệ Thermage® CPT chính hãng 1200 shot cho vùng mặt

          Thời gian trị liệu: 120 phút
          
          Thời gian nghỉ dưỡng: không cần nghỉ dưỡng`,
        },
        {
          id: 4,
          title: "Thermage® CPT Mắt",
          content: `Trẻ hoá với công nghệ Thermage® CPT chính hãng 600 shot cho vùng mặt

          Thời gian trị liệu: 90 phút
          
          Thời gian nghỉ dưỡng: không cần nghỉ dưỡng`,
        },
        {
          id: 5,
          title: "HIFU Evolift",
          content: `Trẻ hoá, nâng cơ, thon gọn gương mặt với công nghệ sóng siêu âm hội tụ tần số cao 600-800 shot cho vùng mặt.

          Thời gian trị liệu: 120 phút
          
          Thời gian nghỉ dưỡng: không cần nghỉ dưỡng`,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="w-full h-[500px] bg-slate-500">Banner</div>
      <div className="container py-10 flex flex-col gap-10">
        <section className="border-2 px-10 py-8 flex flex-col gap-8">
          <h2 className="text-3xl lg:text-5xl text-center uppercase font-extrabold">
            {"Tư vấn & TRỊ LIỆU"}
          </h2>
          <p className="text-center lg:w-2/3 mx-auto">
            Luôn đi đầu và cập nhật công nghệ hiện đại bậc nhất trên thế giới,
            Các thiết bị, công nghệ tại Claire Private Clinic đều được nhập khẩu
            chính hãng, được FDA và CE Approve cũng như đảm bảo an toàn và hiệu
            quả lâm sàng khi điều trị.
          </p>
          <button
            type="button"
            className="lg:w-1/3 mx-auto buttonBlack font-bold"
          >
            đặt lịch hẹn
          </button>
        </section>
        <br />
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            Tư vấn chăm sóc da
          </h3>
          <div className="w-full h-full flex items-stretch gap-10 flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <CardService data={dataChamSocDa[0]} />
            </div>
            <div className="w-full lg:w-1/2">
              <CardService data={dataChamSocDa[1]} />
            </div>
          </div>
        </section>
        <br />
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            Trị liệu
          </h3>
          <div className="w-full h-full flex items-stretch gap-10 flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <CardService data={dataTriLieu[0]} />
            </div>
            <div className="w-full lg:w-1/2">
              <CardService data={dataTriLieu[1]} />
            </div>
          </div>
        </section>
        <br />
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            Dịch Vụ
          </h3>
          <div>
            {dataDichVu.length > 0 &&
              dataDichVu.map((item) => {
                return (
                  <div key={item.id}>
                    <ServiceSection data={item} />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DichVuPage;
