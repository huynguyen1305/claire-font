import { EmailTemplate } from "@/components/EmailTemplate/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const listChiNhanh = [
    {
      value: "thao-dien",
      label: "claire.thaodien@gmail.com",
    },
    {
      value: "phu-my-hung",
      label: "claire.pmt@gmail.com",
    },
    {
      value: "tan-binh",
      label: "claire.tanbinh@gmail.com",
    },
  ];
  const chiNhanhEmail =
    listChiNhanh.find((item) => item.value === body.chinhanh)?.label ||
    listChiNhanh[0].label;
  try {
    const { data, error } = await resend.emails.send({
      from: "booking@claire.vn",
      to: [chiNhanhEmail],
      subject: "Đặt hẹn tư vấn tại website claire.vn",
      react: EmailTemplate({ data: body }),
    });

    console.log("data", data);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
