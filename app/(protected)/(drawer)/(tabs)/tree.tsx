import React from "react";
import { Redirect } from "expo-router";

const Tree = () => {
  return <Redirect href={"/(protected)/hierarchy"} />;
};

export default Tree;
