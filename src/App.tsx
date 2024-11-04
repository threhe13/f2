import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Auth } from "./routes/auth";
import { TodoCreate } from "./routes/todo/create";
import { Todo } from "./routes/todo";
import { RootLayout } from "./layouts/root";
import { TodoById } from "./routes/todo/id";
import { loader as todoByIdLoader } from "./routes/todo/id/loader";
import { loader as todosLoader } from "./routes/todo/loader";
import { action as todoCreateAction } from "./routes/todo/create/action";
import { action as todoEditAction } from "./routes/todo/id/edit/action";
import { action as todoDeleteAction } from "./routes/todo/id/delete";
import { EditTodoById } from "./routes/todo/id/edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "todos",
          element: <Todo />,
          loader: todosLoader,
          children: [
            {
              path: ":todoId",
              element: <TodoById />,
              loader: todoByIdLoader,
              errorElement: <div>삭제된 할 일 입니다.</div>,
            },
            {
              path: ":todoId/delete",
              action: todoDeleteAction,
              errorElement: <div>Oops! There was an error.</div>,
            },
            {
              path: ":todoId/edit",
              element: <EditTodoById />,
              loader: todoByIdLoader,
              action: todoEditAction,
            },
            {
              path: "create",
              element: <TodoCreate />,
              action: todoCreateAction,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
