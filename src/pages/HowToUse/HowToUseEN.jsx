import React from "react";
import { Image, Typography } from "antd";
import marker from "src/images/pattern-AR_marker.png";
import sample from "src/images/ar-sample.gif";

const paddingLeft = {
  paddingLeft: "1.5em",
};

const HowToUseEN = () => {
  return (
    <div style={{ textAlign: "justify" }}>
      <Typography.Text>
        <b>Home page</b>
      </Typography.Text>
      <ol>
        <li>
          Click ‘Angiogram’ to explore fluoroscopy and fluoroscopic image.
          <ol style={{ ...paddingLeft }}>
            <li>
              Select step by step to see desired image.
              <ol style={{ ...paddingLeft }}>
                <li>
                  Select angiographic view
                  <ul style={{ ...paddingLeft, listStyleType: "circle" }}>
                    <li>AP</li>
                    <li>LAO</li>
                    <li>RAO</li>
                  </ul>
                </li>
                <li>
                  Select Angulation
                  <ul style={{ ...paddingLeft, listStyleType: "circle" }}>
                    <li>Cranial</li>
                    <li>Caudal</li>
                  </ul>
                </li>
                <li>
                  Select Degree Angle
                  <ul style={{ ...paddingLeft, listStyleType: "circle" }}>
                    <li>For angiographic view; from 0 to 90 degree</li>
                    <li>For angulation; from 0 to 25 degree</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              Click ‘submit’ to see fluoroscopic image. Fluoroscopic image and
              information will show on the screen.
            </li>
          </ol>
        </li>
        <li>
          Click ‘Coronary arteries’ to explore cardiac vessel anatomy. Model of
          cardiac vessel will demonstrate with the vessel's name tag.
          <ol style={{ ...paddingLeft }}>
            <li>Click the interested name tag ; such as LCx.</li>
            <li>
              The fluoroscopy image and necessary information of the
              selected-vessel will show on the screen.
            </li>
            <li>Click ‘back’ to explore other vessel.</li>
            <li>
              There are three model following each dominant that is Right, Left,
              and Co dominant. Click on the interested dominant at menu bar
              aboce the model.
            </li>
          </ol>
        </li>
        <li>
          Click ‘3D Model Viewer’ bar at the left upper corner for a shortcut
          keys to go on other page without back to the home page.
        </li>
        <li>
          Click ‘About us’ to see more information and contact of the organizer.
        </li>
      </ol>
      <Typography.Text>
        <b>AR Mode</b>
      </Typography.Text>
      <ol style={{ ...paddingLeft }}>
        <li>
          <p>Download this picture on your another device.</p>
          <Image src={marker} width="25%"></Image>
        </li>

        <li>
          <p>
            Open AR Mode and put a marker in front of the camera for model
            detection.
          </p>
          <Image src={sample} width="25%"></Image>
        </li>
      </ol>
    </div>
  );
};

export default HowToUseEN;
