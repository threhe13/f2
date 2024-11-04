export type TodoFormType = {
  title: string;
  content: string;
};

export type Todo = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoActionParams = {
  todoId: string;
};
