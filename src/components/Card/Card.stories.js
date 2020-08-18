import React from "react";
import Card from "./Card";

export default {
  card: "Card",
  component: Card,
};

export const Default = () => <Card />;

Default.story = {
  name: "default",
};