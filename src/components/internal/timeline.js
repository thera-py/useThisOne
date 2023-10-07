import React, { useState } from 'react';
import '../../public/internal/timeline.css'
//import Transcript from './transcript';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { purple } from '@mui/material/colors';

function AudioTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        14:30:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{
    backgroundColor: 'purple'
  }}/>
          <TimelineConnector sx={{
    backgroundColor: 'purple'
  }} />
        </TimelineSeparator>
        <TimelineContent>Sample transcription 1 (signs of depression)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        14:32:00
        </TimelineOppositeContent>
        <TimelineSeparator  color='purple' >
          <TimelineDot sx={{
    backgroundColor: 'red'
  }}/>
          <TimelineConnector sx={{
    backgroundColor: 'red'
  }}/>
        </TimelineSeparator>
        <TimelineContent>Sample transcription 2 (signs of anger)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        14:34:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sample transcription 3</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        14:36:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{
    backgroundColor: 'blue'
  }}/>
          <TimelineConnector sx={{
    backgroundColor: 'blue'
  }}/>
        </TimelineSeparator>
        <TimelineContent>Sample transcription 4 (signs of sadness)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        14:38:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{
    backgroundColor: 'orange'
  }}/>
          <TimelineConnector sx={{
    backgroundColor: 'orange'
  }} />
        </TimelineSeparator>
        <TimelineContent>Sample transcription 5 (signs of laughter)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        14:40:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sample transcription 6</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
        14:42:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{
    backgroundColor: 'darkgreen'
  }}/>
        </TimelineSeparator>
        <TimelineContent>Sample transcription 7 (signs of calmness)</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default AudioTimeline;

// Render the App component to the root element in the HTML
//ReactDOM.render(<App />, document.getElementById("root"));