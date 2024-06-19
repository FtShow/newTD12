import type {Meta, StoryFn, StoryObj} from '@storybook/react';
import React, {useState} from "react";
import {Task} from "../Task";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'TODOLIST/AppWithRedux',
    component: AppWithRedux,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {


    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {

    },
    decorators: [ReduxStoreProviderDecorator]
} satisfies Meta<typeof AppWithRedux>;

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AppWithReduxStory: Story= {}