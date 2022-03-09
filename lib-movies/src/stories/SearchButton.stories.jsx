import React from "react";

import SearchButton from "../components/SearchButton/SearchButton";

export default {
  title: "SearchButton",
  component: SearchButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <SearchButton {...args} />;
export const Default = Template.bind({});
