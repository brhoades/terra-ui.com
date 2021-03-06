/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-heading/docs/README.md';
import HeadingLevelDocs from 'terra-heading/docs/heading-levels.md';
import HeadingSizeDocs from 'terra-heading/docs/heading-sizes.md';
import HeadingColorDocs from 'terra-heading/docs/heading-colors.md';
import HeadingWeightDocs from 'terra-heading/docs/heading-weights.md';
import HeadingVisuallyHiddenDocs from 'terra-heading/docs/heading-visually-hidden.md';
import HeadingVariationDocs from 'terra-heading/docs/heading-variations.md';
import { version } from 'terra-heading/package.json';
import HeadingProps from 'terra-heading/docs/props-table/Heading.md';

// Example Files
import HeadingColors from 'terra-site/lib/examples/heading/HeadingColors';
import HeadingLevels from 'terra-site/lib/examples/heading/HeadingLevels';
import HeadingSizes from 'terra-site/lib/examples/heading/HeadingSizes';
import HeadingVisuallyHidden from 'terra-site/lib/examples/heading/HeadingVisuallyHidden';
import HeadingWeights from 'terra-site/lib/examples/heading/HeadingWeights';
import HeadingVariations from 'terra-site/lib/examples/heading/HeadingVariations';

const HeadingExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <Markdown id="props-table" src={HeadingProps} />
    <Markdown id="heading-level-docs" src={HeadingLevelDocs} />
    <HeadingLevels />
    <br />
    <br />
    <Markdown id="heading-size-docs" src={HeadingSizeDocs} />
    <HeadingSizes />
    <br />
    <br />
    <Markdown id="heading-color-docs" src={HeadingColorDocs} />
    <HeadingColors />
    <br />
    <br />
    <Markdown id="heading-weight-docs" src={HeadingWeightDocs} />
    <HeadingWeights />
    <br />
    <br />
    <Markdown id="heading-visually-hidden-docs" src={HeadingVisuallyHiddenDocs} />
    <HeadingVisuallyHidden />
    <br />
    <br />
    <Markdown id="heading-variation-docs" src={HeadingVariationDocs} />
    <HeadingVariations />
  </div>
);

export default HeadingExamples;
