import React from "react";
import CardService from "@/components/CardService/CardService";
import FAQService from "@/components/FAQService/FAQService";

import hydra from "@/assets/images/hydra.png";

const HydraFacialPage = () => {
  const dataTriLieu = [
    {
      id: 3,
      title: "HYDRA FACIAL LÀ GÌ?",
      description: `Hydra Facial là liệu trình chăm sóc da chuyên sâu, sử dụng hệ thống máy chuyên dụng để làm sạch sâu, dưỡng ẩm và detox cho làn da. Đây là liệu trình làm đẹp không xâm lấn, không đau, không tốn thời gian nghỉ dưỡng và mang đến hiệu quả hàng đầu.

Nguyên lý hoạt động của Hydra Facial sử dụng công nghệ Aqua Peeling với lực xoáy nước tiên tiến để làm sạch sâu và cung cấp hiệu quả các thành phần có chứa dưỡng chất nuôi dưỡng vào sâu trong da. Ngoài ra, Hydra Facial còn cung cấp khả năng detox làm khoẻ da mạnh mẽ thông qua hiệu ứng BOHR với bộ trị liệu chuyên dụng riêng biệt cho từng vấn đề của mỗi khách hàng, kết hợp với bước massage tăng khả năng lưu dẫn của hệ bạch huyết. 

Hydra Facial không chỉ là một trị liệu thẩm mỹ. Đó là một trải nghiệm. Một niềm vui. Một cảm giác an tâm và tin tưởng. Trị liệu tập trung vào triết lý “ Skin Health for Life”, không chỉ là làn da cải thiện và khoẻ hơn, mà khi làm da của bạn cải thiện và tốt hơn, bạn sẽ cảm giác tốt và vui vẻ hơn. Đó là sự khác biệt bạn nhận được với Hydra Facial.
      `,
      image: hydra,
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
      title: "Trị liệu Hydra Facial dành cho vấn đề gì?",
      content: `Hydra Facial có thể sử dụng để trẻ hoá toàn diện làn da. Trị liệu cũng có thể tập trung giải quyết vấn đề da riêng biệt như mụn, lão hoá và sắc tố. Bước làm sạch và tẩy tế bào chết có thể loại bỏ mụn đầu đen và cải thiện kích thước lổ chân lông. Trị liệu thường được sử dụng cho vùng mặt, nhưng cũng có thể thiết kế để sử dụng cho vùng cổ, decollete và hơn nữa.`,
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
            Hydra Facial
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

export default HydraFacialPage;
