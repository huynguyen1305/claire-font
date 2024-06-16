import React from "react";

export const EmailTemplate = ({ data }: { data: any }) => {
  const listDichVu = [
    {
      value: "sach-da-detox",
      label: "Làm sạch & detox làn da",
    },
    {
      value: "chong-lao-hoa",
      label: "Trị liệu chống lão hóa",
    },
    {
      value: "tri-mun",
      label: "Trị mụn",
    },
    {
      value: "tu-van-them",
      label: "Tư vấn thêm",
    },
  ];
  const listChiNhanh = [
    {
      value: "thao-dien",
      label: "Claire Thảo Điền",
    },
    {
      value: "phu-my-hung",
      label: "Claire Phú Mỹ Hưng",
    },
    {
      value: "tan-binh",
      label: "Claire Tân Bình",
    },
  ];
  return (
    <div>
      <h4 className="text-xl text-center uppercase font-extrabold">
        Đặt hẹn và Tư vấn
      </h4>

      <div className="text-justify">
        <div>
          - Tên:{" "}
          <span>
            <strong>{data.name}</strong>
          </span>
        </div>
      </div>
      <br />
      <div className="text-justify">
        <div>
          - Email:{" "}
          <span>
            <a href={`mailto:${data.email}`}>
              <strong>{data.email}</strong>
            </a>
          </span>
        </div>
      </div>
      <br />
      <div className="text-justify">
        <div>
          - Phone:{" "}
          <span>
            <a href={`tel:${data.phone}`}>
              <strong>{data.phone}</strong>
            </a>
          </span>
        </div>
      </div>
      <br />
      <div className="text-justify">
        <div>
          - Nhu Cầu:{" "}
          <span>
            <strong>
              {listDichVu.find((item) => item.value === data.dichvu)?.label}
            </strong>
          </span>
        </div>
      </div>
      <br />
      <div className="text-justify">
        <div>
          - Chi nhánh:{" "}
          <span>
            <strong>
              {listChiNhanh.find((item) => item.value === data.chinhanh)?.label}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};
