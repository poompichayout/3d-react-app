import React from "react";
import { Table, Typography } from "antd";

const Abbreviation = () => {
  return (
    <>
      <Typography.Title>Abbreviation</Typography.Title>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered
      />
    </>
  );
};

const dataSource = [
  {
    key: "1",
    name: "AP",
    description: "Anteroposterior view",
  },
  {
    key: "2",
    name: "AR",
    description: "Augmented Reality",
  },
  {
    key: "3",
    name: "AV groove",
    description: "Atrioventricular groove",
  },
  {
    key: "4",
    name: "Cath lab",
    description: "Catheterization laboratory",
  },
  {
    key: "5",
    name: "LAO",
    description: "Left anterior oblique",
  },
  {
    key: "6",
    name: "LAD",
    description: "Left anterior descending artery",
  },
  {
    key: "7",
    name: "LCA",
    description: "Left coronary artery",
  },
  {
    key: "8",
    name: "LCx",
    description: "Left circumflex artery",
  },
  {
    key: "9",
    name: "PDA",
    description: "Posterior descending artery",
  },
  {
    key: "10",
    name: "PL branches",
    description: "Posterolateral branches",
  },
  {
    key: "11",
    name: "PLA",
    description: "Posterolateral artery",
  },
  {
    key: "12",
    name: "RAO",
    description: "Right anterior oblique",
  },
  {
    key: "13",
    name: "RCA",
    description: "Right coronary artery",
  },
  {
    key: "14",
    name: "RMA",
    description: "Right marginal artery",
  },
  {
    key: "15",
    name: "3D",
    description: "Three dimensional",
  },
];

const columns = [
  {
    title: "Symbols/Abbreviations",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Terms",
    dataIndex: "description",
    key: "description",
  },
];

export default Abbreviation;
