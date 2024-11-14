interface CardInterface {
  todo: Todo;
}

type Todo = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export const Card = ({ todo }: CardInterface) => {
  return (
    <div className="bg-white w-full rounded-lg border-2 cursor-pointer aspect-[4/1]">
      <div className="flex p-2 gap-1">
        <div className="circle">
          <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start px-2 py-0 pb-4">
        <span className="text-lg font-bold text-black">{todo.title}</span>
        <span className="text-slate-500 line-clamp-2 text-start">
          {todo.content}
        </span>
      </div>
    </div>
  );
};
