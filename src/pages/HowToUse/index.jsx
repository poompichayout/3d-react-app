import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Flag from "react-world-flags";
import styled from "styled-components";
import { Col, Row, Space, Switch, Typography } from "antd";

function HowToUse() {
  const [lang, setLang] = useState(true);

  const onLanguageChange = () => {
    setLang(!lang);
  };
  return (
    <>
      <Helmet>
        <title>How To Use - Cardiac Catheterization</title>
      </Helmet>
      <RowStyled justify="center" align="top">
        <Col xs={24} md={18}>
          <Row>
            <Col xs={24} sm={18}>
              <Typography.Title>
                {lang ? "How To Use" : <div className="th">วิธีการใช้</div>}
              </Typography.Title>
            </Col>
            <Col xs={24} sm={2} style={{ marginBottom: "2em" }}>
              <Space>
                <Flag code="TH" height="16" />
                <Switch defaultChecked onChange={onLanguageChange} />
                <Flag code="GB" height="16" />
              </Space>
            </Col>
          </Row>
          <Row>
            {lang ? (
              <div>
                <Typography.Text>Home page</Typography.Text>
                <ol>
                  <li>
                    Click ‘Angiogram’ to explore fluoroscopy and fluoroscopic
                    image
                    <ol>
                      <li>
                        Select step by step to see desired image
                        <ol>
                          <li>
                            Select angiographic view
                            <ul>
                              <li>AP</li>
                              <li>LAO</li>
                              <li>RAO</li>
                            </ul>
                          </li>
                          <li>
                            Select Angulation
                            <ul>
                              <li>Cranial</li>
                              <li>Caudal</li>
                            </ul>
                          </li>
                          <li>
                            Select Degree Angle
                            <ul>
                              <li>
                                For angiographic view; from 0 to 90 degree
                              </li>
                              <li>For angulation; from 0 to 25 degree</li>
                            </ul>
                          </li>
                        </ol>
                      </li>
                      <li>
                        Click ‘submit’ to see fluoroscopic image. Fluoroscopic
                        image and information will show on the screen
                      </li>
                    </ol>
                  </li>
                  <li>
                    Click ‘Coronary arteries’ to explore cardiac vessel anatomy
                    Model of cardiac vessel will demonstrate with the vessel's
                    name tag.
                    <ol>
                      <li>Click the interested name tag ; such as LCx.</li>
                      <li>
                        The fluoroscopy image and necessary information of the
                        selected-vessel will show on the screen.
                      </li>
                      <li>Click ‘back’ to explore other vessel</li>
                    </ol>
                  </li>
                  <li>
                    Click ‘3D Model Viewer’ bar at the left upper corner for a
                    shortcut keys to go on other page without back to the home
                    page
                  </li>
                  <li>
                    Click ‘About us’ to see more information and contact of the
                    organizer
                  </li>
                </ol>
              </div>
            ) : (
              <div className="th">
                <Typography.Text> หน้า Home</Typography.Text>
                <ol>
                  <li>
                    กดปุ่ม Angiogram
                    สำหรับดูเครื่องปฏิบัติการสวนหัวใจและหลอดเลือด
                    และภาพฟลูออโรสโคปิค
                    <ol>
                      <li>
                        เลือกข้อมูลของภาพฟลูออโรสโคปิคที่ต้องการดู
                        <ol>
                          <li>เลือก Angiographic View<ul>
                              <li>AP</li>
                              <li>LAO</li>
                              <li>RAO</li>
                            </ul></li>
                          <li>เลือก Angulation<ul>
                              <li>Cranial</li>
                              <li>Caudal</li>
                            </ul></li>
                          <li>เลือก Degree Angle<ul>
                              <li>มุม Angiographic View ตั้งแต่ 0 ถึง 90 องศา</li>
                              <li>มุม Angulation ตั้งแต่ 0 ถึง 25 องศา</li>
                            </ul></li>
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
                    <ol>
                      <li>กดปุ่มชื่อของหลอดเลือดหัวใจที่สนใจ เช่น LCx</li>
                      <li>
                        ภาพฟลูออโรสโคปิค และข้อมูลต่าง ๆ
                        ที่สำคัญของหลอดเลือดหัวใจที่เลือกจะปรากฎ
                      </li>
                      <li>กดปุ่ม Back เพื่อกลับไปเลือกหลอดเลือดหัวใจอื่น ๆ</li>
                    </ol>
                  </li>
                  <li>
                    กด 3D Model Viewer ด้านซ้ายบนเพื่อเป็นคีย์ลัดไปยังหน้าอื่น
                  </li>
                  <li>กด About Us เพื่อดูข้อมูลการติดต่อของคณะผู้จัดทำ</li>
                </ol>
              </div>
            )}
          </Row>
        </Col>
      </RowStyled>
    </>
  );
}

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fff;
  padding: 4em;
`;

export default HowToUse;
