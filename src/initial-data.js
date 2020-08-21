const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorit show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
    addTask: { id: "addTask", content: "" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Add to do list",
      taskIds: ["addTask"],
    },
    "column-2": {
      id: "column-2",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "In progress",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialData;
