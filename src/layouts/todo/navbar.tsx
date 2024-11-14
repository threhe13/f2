import { Link } from "react-router-dom";

import { Add } from "../../icons";
import { Button } from "../../components/button";

export const TodoNavbar = () => {
  return (
    <div className="w-full flex justify-end items-center">
      <Link to="create">
        <Button>
          <Add color="white" />
        </Button>
      </Link>
    </div>
  );
};
