import { Link } from "react-router-dom";

import { Add } from "../../icons";
import { Button } from "../../components/button";

export const TodoNavbar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      {/* <fieldset>
        <legend className="sr-only">Checkboxes</legend>

        <div className="space-y-2">
          <label
            className="flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
            htmlFor="Option1"
          >
            <div className="flex items-center">
              <input
                id="Option1"
                className="size-4 rounded border-gray-300"
                type="checkbox"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">
                Manish Tamang
              </strong>
            </div>
          </label>

          <label
            className="flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
            htmlFor="Option2"
          >
            <div className="flex items-center">
              <input
                id="Option2"
                className="size-4 rounded border-gray-300"
                type="checkbox"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">
                Sajak Dhital{" "}
              </strong>
            </div>
          </label>

          <label
            className="flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
            htmlFor="Option3"
          >
            <div className="flex items-center">
              <input
                id="Option3"
                className="size-4 rounded border-gray-300"
                type="checkbox"
              />
            </div>

            <div>
              <strong className="text-pretty font-medium text-gray-900">
                Nishan Basnet
              </strong>
            </div>
          </label>
        </div>
      </fieldset> */}

      <Link to="create">
        <Button>
          <Add color="white" />
        </Button>
      </Link>
    </div>
  );
};
