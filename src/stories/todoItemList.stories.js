import MarginDecorator from "../components/marginDecorator.svelte";
import TodoItemList from "../components/todoItemList.svelte";
import * as TodoItemStories from './todoItem.stories';

export default {
    decorators: [() => MarginDecorator],
    component: TodoItemList,
    title: "TodoItemList",
    excludeStories: /.*Data$/
};

const Template = ({ ...args }) => ({
    Component: TodoItemList,
    props: args
});

export const Default = Template.bind({});

Default.args = {
    todoItems: [
        {...TodoItemStories.Default.args.todoItem, id: "1", content: "Todo Item 1"},
        {...TodoItemStories.Default.args.todoItem, id: "2", content: "Todo Item 2"},
        {...TodoItemStories.Default.args.todoItem, id: "3", content: "Todo Item 3"},
        {...TodoItemStories.Default.args.todoItem, id: "4", content: "Todo Item 4"},
        {...TodoItemStories.Default.args.todoItem, id: "5", content: "Todo Item 5"},
        {...TodoItemStories.Default.args.todoItem, id: "6", content: "Todo Item 6"},
    ]
};

export const WithPriority = Template.bind({});

WithPriority.args = {
    todoItems: [
        {id: "1", content: "Todo Item 1", isPriority: true, isCompleted: false},
        ...Default.args.todoItems.slice(1, 6)
    ]
};

export const Completed = Template.bind({});

Completed.args = {
    todoItems: [
        {...TodoItemStories.Default.args.todoItem, id: "1", content: "Todo Item 1", isCompleted: true},
        {...TodoItemStories.Default.args.todoItem, id: "2", content: "Todo Item 2", isCompleted: true},
        {...TodoItemStories.Default.args.todoItem, id: "3", content: "Todo Item 3", isCompleted: true},
        {...TodoItemStories.Default.args.todoItem, id: "4", content: "Todo Item 4", isCompleted: true},
        {...TodoItemStories.Default.args.todoItem, id: "5", content: "Todo Item 5", isCompleted: true},
        {...TodoItemStories.Default.args.todoItem, id: "6", content: "Todo Item 6", isCompleted: true},
    ]
};

export const Loading = Template.bind({});

Loading.args = {
    todoItems: [],
    isLoading: true
}

export const Empty = Template.bind({});

Empty.args = {
    todoItems: Loading.args.todoItems
}