import React from "react";

import Header from "../components/Header/Header";

export default {
  title: "Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args={label:"This is the Header Text"};
