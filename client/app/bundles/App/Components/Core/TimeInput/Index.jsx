/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-time-input/docs/README.md';
import { version } from 'terra-time-input/package.json';
import TimeInput from 'terra-time-input/lib/TimeInput';
import TimeInputProps from 'terra-time-input/docs/props-table/TimeInput.md';

const handleOnChange = (event, time) => {
  window.console.log('**handleOnChange** Input value:', event.target.value, ' Updated time:', time);
};

const TimeInputExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={TimeInputProps} />
    <h2 id="default">Without Default Time</h2>
    <TimeInput
      name="time-input-default"
    />
    <br />
    <br />
    <h2 id="default">With Default Time</h2>
    <TimeInput
      name="time-input-value"
      value={moment().format('HH:mm')}
      onChange={handleOnChange}
    />
  </div>
);

export default TimeInputExamples;
