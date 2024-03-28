import React from "react";
import CardService from "@/components/CardService/CardService";
import FAQService from "@/components/FAQService/FAQService";

import rezenerate from "@/assets/images/rezenerate.png";
import reze from "@/assets/images/reze.png";
import Image from "next/image";

const RezeFacialPage = () => {
  const dataTriLieu = [
    {
      id: 3,
      title: "REZENERATE NanoFacial LÀ TRỊ LIỆU GÌ?",
      description: `Rezenerate NanoFacial là phương thức chăm sóc da mới nhất trên thị trường làm đẹp hiện nay mang lại cho bạn những kết quả tuyệt vời tương đương với các liệu trình xâm lấn hơn mà vẫn giữ trải nghiệm thoải mái và không có khó chịu hay tiêu cực nào. 

      Khác hẳn với các trị liệu tương tự nhưng với công nghệ cấp thấp, vật liệu không đạt tiêu chuẩn và kết quả không rõ ràng, Rezenerate NanoFacial là phương pháp DUY NHẤT sử dụng công nghệ nano tiên tiến và Acupressure của phương pháp Cold Therapy mang đến trị liệu Facial tốt nhất thị trường. 
      
      Triết lý của Rezenerate rất đơn giản: kết hợp công nghệ tiên tiến nhất thị trường với các sản phẩm chất lượng cao tinh khiết nhất. Khi được kết hợp đúng cách và phù hợp với từng vấn đề da khách hàng, chúng trở nên hiệu quả theo cấp số nhân, mang lại kết quả bạn chưa bao giờ nghĩ mình có thể đạt được. 
      
      Công nghệ Nano đang đóng góp rất nhiều trong sự phát triển của nhiều lãnh vực phục vụ đời sống con người và Rezenerate tự hào là phương pháp thay đổi bộ mặt của ngành làm đẹp hiện đại. 
      `,
      image: rezenerate,
      button: [
        {
          id: 1,
          title: "Tư vấn miễn phí online",
          onclick: () => {
            console.log("Tư vấn miễn phí online");
          },
        },
        {
          id: 2,
          title: "Đặt lịch hẹn",
          onclick: () => {
            console.log("Đặt lịch hẹn");
          },
        },
      ],
    },
  ];
  const dataFAQ = [
    {
      id: 1,
      title: "Trị liệu Rezenerate NanoFacial dành cho vấn đề gì?",
      content: `Rezenerate NanoFacial có thể sử dụng để trẻ hoá toàn diện làn da. Trị liệu cũng có thể tập trung giải quyết vấn đề da riêng biệt như:

      + Các nếp nhăn và các dấu hiệu lão hóa da khác
      
      + Da thiếu nuôi dưỡng
      
      + Da bị tổn thương do ánh nắng và đốm đồi mồi
      
      + Da dầu hoặc da quá khô
      
      + Màu da và kết cấu không đồng đều`,
    },
    {
      id: 2,
      title: "Quy trình trị liệu của Hydra Facial",
      content: `Trị liệu bao gồm các bước cơ bản:

      Bước 1: Làm sạch tế bào chết bề mặt và làm sạch sâu trong lổ chân lông bằng các đầu Tip chuyên biệt với các dung dịch như AHA, BHA.
      
      Bước 2: Thực hiện detox da với Capsule BOHR 
      
      Bước 3: Cân bằng da và khoá ẩm 
      
      *  Trị liệu có thể thay đổi thêm các thành phần độc quyền tuỳ vào nhu cầu da riêng của từng khách hàng. 
      
      Thời gian thực hiện: 60 phút`,
    },
    {
      id: 3,
      title: "Thời gian duy trì và tần suất giữa các trị liệu",
      content: `Căn cứ vào mong muốn và kết quả trị liệu của bạn, Bác Sĩ sẽ tư vấn cho bạn số lượng trị liệu và khoảng cách giữa các trị liệu phù hợp với làn da của bạn. Với phác đồ trị liệu độc quyền chúng tôi tập trung vào trẻ hoá làn da toàn diện và có thể lập lại mỗi 2-4 tuần. Dành cho trị liệu chuyên sâu mụn, sắc tố và lão hoá chúng tôi đề nghị trị liệu duy trì 1-2 tuần, cho tối thiểu 6 trị liệu để đạt hiệu quả tốt nhất.`,
    },
    {
      id: 4,
      title: "Hydra Facial không phù hợp với ai?",
      content: `Sử dụng Acnotin ( vitamin A liều cao) trong vòng 6 tháng
      
      Da đang có tình trạng viêm hoạt động ( rosacea, mụn nặng) 
      
      Da đang có tình trạng nhiễm trùng ( Herpes)
      
      Đang sử dụng một số loại thuốc ( Bác Sĩ của chúng tôi sẽ thảo luận với bạn)
      
      Đang mang thai hoặc cho con bú`,
    },
    {
      id: 5,
      title: "Những nguy cơ và tác dụng phụ có thể xảy ra?",
      content: `Da của bạn có thể có hiện tượng ửng hồng nhẹ ngay sau trị liệu, có thể kéo dài trong vòng 20 phút trước khi da trở nên căng sáng. Số hiếm khách hàng có thể gặp tình trạng lên mụn, đỏ da hoặc ngứa những ngày sau trị liệu nhưng sẽ biến mất nhanh chóng.`,
    },
    {
      id: 6,
      title: "Chăm sóc và chú ý sau trị liệu",
      content: `Tránh nắng và sử dụng kem chống nắng luôn luôn quan trọng cho sức khoẻ da của bạn và cần thiết hơn nữa sau những ngày trị liệu với Hydra Facial. Không trang điểm ngay sau khi trị liệu ít nhất đến hôm sau ngày trị liệu. Các sản phẩm dưỡng da có chứa acid như glycolic/lactic/salicylic và retinol/tretinoin nên tạm ngưng 48 giờ trước và sau khi thực hiện trị liệu ( bạn nên yêu cầu tư vấn nếu bạn không chắc những sản phẩm ở nhà có thành phần gì). Hãy nhờ sự tư vấn của đội ngũ chuyên môn nếu bạn dự định cho những trị liệu thẩm mỹ khác như Filler, Laser, Peel, chúng tôi sẽ hướng dẫn bạn cụ thể. `,
    },
  ];
  return (
    <div>
      <div className="w-full h-[500px] bg-slate-500">Banner</div>
      <div className="container py-10 flex flex-col gap-10">
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            REZENERATE IS PROUD TO ANNOUNCE OUR OFFICIAL ACCREDITATION AND
            STATUS AS A CIDESCO USA ASSOCIATE MEMBER!
          </h3>
          <div className="w-full h-full flex gap-10 items-center flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/3">
              <Image
                src={reze}
                alt="rezenerate"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-2/3 text-xl flex flex-col gap-8 font-bold">
              <p className="text-justify">
                Founded in 1946 in Brussels, Comité International d’Esthétique
                et de Cosmétologie (“CIDESCO”) is the World Standard for Beauty
                and Spa Therapy. A non-profit organization providing Swiss
                quality education, CIDESCO is known for its standard of
                excellence worldwide.
              </p>
              <p className="text-justify">
                By becoming a CIDESCO USA Associate Member, Rezenerate has
                demonstrated our company meets the highest standards in the
                beauty industry through superior work practices, exceptional
                product quality, and top-notch customer service.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl text-center uppercase font-extrabold">
            BEST.FACIAL.EVER
          </h3>
          <div className="w-full h-full flex gap-10 flex-wrap lg:flex-nowrap">
            <CardService data={dataTriLieu[0]} />
          </div>
        </section>
        <br />
        <section className="flex flex-col gap-8 ">
          <h3 className="text-3xl text-center uppercase font-extrabold">FAQ</h3>
          <FAQService data={dataFAQ} />
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default RezeFacialPage;
