import React from 'react';

import Card from '../components/Card/Card';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Card  {...args} />;
export const Default = Template.bind({});
Default.args  ={
    obj:{Poster: "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
    Title: "Breaking Bad",
    Type: "series",
    Year: "2008–2013",
    imdbID: "tt0903747"
  }
}