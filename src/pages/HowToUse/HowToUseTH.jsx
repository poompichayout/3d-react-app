import React from "react";
import { Image, Typography } from "antd";
import marker from "src/images/pattern-AR_marker.png";
import sample from "src/images/ar-sample.gif";

const HowToUseTH = () => {
  return (
    <div className="th" style={{ textAlign: "justify" }}>
      <Typography.Text>
        <b>หน้า Home</b>
      </Typography.Text>
      <ol>
        <li>
          กดปุ่ม Angiogram สำหรับดูเครื่องปฏิบัติการสวนหัวใจและหลอดเลือด
          และภาพฟลูออโรสโคปิค
          <ol style={{ paddingLeft: "2em" }}>
            <li>
              เลือกข้อมูลของภาพฟลูออโรสโคปิคที่ต้องการดู
              <ol style={{ paddingLeft: "2em" }}>
                <li>
                  เลือก Angiographic View
                  <ul style={{ paddingLeft: "2em", listStyleType: "circle" }}>
                    <li>AP</li>
                    <li>LAO</li>
                    <li>RAO</li>
                  </ul>
                </li>
                <li>
                  เลือก Angulation
                  <ul style={{ paddingLeft: "2em", listStyleType: "circle" }}>
                    <li>Cranial</li>
                    <li>Caudal</li>
                  </ul>
                </li>
                <li>
                  เลือก Degree Angle
                  <ul style={{ paddingLeft: "2em", listStyleType: "circle" }}>
                    <li>มุม Angiographic View ตั้งแต่ 0 ถึง 90 องศา</li>
                    <li>มุม Angulation ตั้งแต่ 0 ถึง 25 องศา</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              กด Submit เพื่อดูภาพฟลูออโรสโคปิคที่เลือก
              และภาพฟลูออโรสโคปิคที่เลือกจะปรากฎพร้อมกับข้อมูล
            </li>
          </ol>
        </li>
        <li>
          กดปุ่ม Coronary Arteries สำหรับดูกายวิภาคของหลอดเลือดหัวใจ
          โดยแบบจำลองกายวิภาคของหลอดเลือดหัวใจปรากฎจะพร้อมกับชื่อของหลอดเลือกแต่ละเส้น
          <ol style={{ paddingLeft: "2em" }}>
            <li>กดปุ่มชื่อของหลอดเลือดหัวใจที่สนใจ เช่น LCx</li>
            <li>
              ภาพฟลูออโรสโคปิค และข้อมูลต่าง ๆ
              ที่สำคัญของหลอดเลือดหัวใจที่เลือกจะปรากฎ
            </li>
            <li>กดปุ่ม Back เพื่อกลับไปเลือกหลอดเลือดหัวใจอื่น ๆ</li>
            <li>
              มีแบบจำลองกายวิภาคของหลอดเลือดหัวใจใน 3 รูปแบบ
              <ul style={{ paddingLeft: "2em", listStyleType: "circle" }}>
                <li>Right Dominant</li>
                <li>Left dominant</li>
                <li>Co dominant</li>
              </ul>
              เลือกแต่ละรูปแบบได้จากแถบเมนูด้านบนแบบจำลอง
            </li>
          </ol>
        </li>
        <li>กด 3D Model Viewer ด้านซ้ายบนเพื่อเป็นคีย์ลัดไปยังหน้าอื่น</li>
        <li>กด About Us เพื่อดูข้อมูลการติดต่อของคณะผู้จัดทำ</li>
      </ol>
      <Typography.Text>
        <b>โหมดความจริงเสมือน (Augmented Reality)</b>
      </Typography.Text>
      <ol style={{ paddingLeft: "2em" }}>
        <li>
          <p>ดาวน์โหลดภาพนี้ในอุปกรณ์อีกเครื่องนึงของท่าน</p>
          <Image src={marker} width="25%"></Image>
        </li>

        <li>
          <p>
            เปิดใช้งานโหมด AR และนำไฟล์ภาพด้านบนวางไว้หน้ากล้อง
            เพื่อทำการตรวจจับโมเดลอัตโนมัติ
          </p>
          <Image src={sample} width="25%"></Image>
        </li>
      </ol>
    </div>
  );
};

export default HowToUseTH;
