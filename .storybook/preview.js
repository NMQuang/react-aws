import '../src/styles/index.scss';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>);
