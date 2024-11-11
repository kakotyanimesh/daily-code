import React from "react";
import { ChitChat } from "../components/chichat";
import { Profile } from "../components/profile";
import { ListItems } from "../components/List";
import { FormComponent } from "../components/Form";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

const One = () => {
  return (
    <>
    <div className=" flex-col items-center gap-10 text-center flex justify-center text-xl sm:text-4xl ">
      <h1>Day One so basic components </h1>
      <ChitChat h1Text="animesh" Ptext="kakoty"/>
      {/* <ChitChat h1Text='its me ' Ptext="y can text me "/> */}
      <Profile name='Animesh kakoty' position='Remote Developer'/>
      <ListItems/>
      <FormComponent/>
      <Footer prevLink={'/' } nextLink={'/dayTwo'} />
    </div>
    </>
  );
};

export default One;
