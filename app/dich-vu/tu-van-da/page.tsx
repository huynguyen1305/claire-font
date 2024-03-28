import React from "react";
import CardService from "@/components/CardService/CardService";

import chamsocdatainha from "@/assets/images/cham-soc-da-tai-nha.png";
import tuvan11 from "@/assets/images/tu-van-1-1.png";

const TuVanDaPage = () => {
  const dataChamSocDa = [
    {
      id: 1,
      title: "TƯ VẤN CHĂM SÓC DA TẠI NHÀ",
      description: `Không đơn thuần là bán sản phẩm, Claire bán sự trải nghiệm Dược mỹ phẩm chính hãng hợp lý, an toàn và hiệu quả với sự tư vấn và theo dõi xuyên suốt quá trình sử dụng cùng khách hàng từ những Chuyên viên Tư vấn viên có chuyên môn và dày dặn kinh nghiệm, dưới sự theo dõi, kiểm soát và cố vấn từ Bác sĩ CK Da liễu.`,
      image: chamsocdatainha,
      button: [
        {
          id: 1,
          title: "Tư vấn online miễn phí",
          onclick: () => {
            console.log("Tư vấn online miễn phí");
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
          title: "Đặt lich hẹn",
          onclick: () => {
            console.log("Đặt lich hẹn");
          },
        },
      ],
    },
  ];
  return (
    <div>
      <div className="w-full h-[500px] bg-slate-500">Banner</div>
      <div className="container py-10 flex flex-col gap-10">
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
          <br />
          <br />
          <br />
          <br />
        </section>
      </div>
    </div>
  );
};

export default TuVanDaPage;
