import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Task} from "../Task";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'TODOLIST/Task',
    component: Task,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        changeTaskStatus: {
            description: "changeTaskStatus",
            action: 'clicked'
        },
        changeTaskTitle: {
            description: "changeTaskTitle",
            action: 'clicked'
        },
        removeTask: {
            description: "removeTask",
            action: 'clicked'
        }

    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {

        todolistId: "123qwe123222",
        task: {id: 'qweqwe123123', title: 'JS', isDone: true}
    },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TaskIsDoneStory: Story = {
};
export const TaskIsNotDoneStory: Story = {
    args: {
        task: {id: 'qweqwe123123', title: 'JS', isDone: false}
    }
};
export const TaskStory: Story = {
    args: {
        task: {id: 'qweqwe123123', title: 'JS', isDone: false}
    }
};


