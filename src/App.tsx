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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Todo />,
          errorElement: <div>oops</div>,
          loader: todosLoader(queryClient),
          children: [
            {
              path: ":todoId",
              element: <TodoById />,
              loader: todoByIdLoader(queryClient),
              errorElement: <div>삭제된 할 일 입니다.</div>,
            },
            {
              path: ":todoId/delete",
              action: todoDeleteAction(queryClient),
              errorElement: <div>Oops! There was an error.</div>,
            },
            {
              path: ":todoId/edit",
              element: <EditTodoById />,
              loader: todoByIdLoader(queryClient),
              action: todoEditAction(queryClient),
            },
            {
              path: "create",
              element: <TodoCreate />,
              action: todoCreateAction(queryClient),
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

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
