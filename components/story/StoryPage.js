import React from 'react';
import Stories from 'react-insta-stories';

// const burakHeading = {
//       heading: "Burak Deniz",
//       subheading: "burakdeniz@gmail.com",
//       profileImage: "https://i.imgur.com/lq0DC3a.jpg"
//   }

const StoryPage = ({stories}) => {

const onAllStoriesEndHandler = () =>{
    console.log('stories ended')
};

const storyContent = {
    width: '900px',
    maxWidth: '1200px',
    height: '100%',
    margin: 'auto',   
};
const formatted=stories.map(i=>{
  return {url:i.media,type:i.image?"image":"video"}
})
  return (
    <React.Fragment>
        <Stories 
          stories={formatted}
          defaultInterval={1500}
          width='100%'
          height="100%"
          storyStyles={storyContent}         
          loop={true}
          keyboardNavigation={true}
          currentIndex={()=>{}}
          onStoryStart={()=>{}}
          onAllStoriesEnd={onAllStoriesEndHandler}
          /> 
    </React.Fragment>
  )
}

export default StoryPage;