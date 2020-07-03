import React from "react";

import Information from "./components/information/";
import Address from "./components/address/";
import Contact from "./components/contact/";

import { useSelector } from "react-redux";

const Index = () => {
  const visible = useSelector((state) => state.prefecture.create_prefecture);

  return (
    <div>
      <Information />
      <Address />
      <Contact />
    </div>
  );
};
export default Index;
