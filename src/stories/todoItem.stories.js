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