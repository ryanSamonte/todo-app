import TodoItem from "../components/todoItem.svelte";

export default {
    component: TodoItem,
    title: 'TodoItem',
    excludeStories: /.*Data$/
  };

const Template = ({ ...args }) => ({
    Component: TodoItem,
    props: args
});

export const Default = Template.bind({});
    Default.args = {
    todoItem: {
        id: "1",
        content: "Default Task",
        isPriority: false,
        isCompleted: false
    }
};

export const Completed = Template.bind({});
    Completed.args = {
    todoItem: {
        id: "2",
        content: "Completed Task",
        isPriority: false,
        isCompleted: true
    }
};

export const Priority = Template.bind({});
    Priority.args = {
    todoItem: {
        id: "3",
        content: "Priority Task",
        isPriority: true,
        isCompleted: false
    }
};