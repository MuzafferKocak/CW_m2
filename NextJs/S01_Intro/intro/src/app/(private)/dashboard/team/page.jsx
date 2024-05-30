import GoBack from "@/components/GoBack";
import { getUsers } from "@/helpers/apiFunctions";
import React from "react";

const Team = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1 className="text-2xl text-center">Team</h1>
      <ul role="list" className="divide-y divide-gray-100 ">
        {users.map((person) => (
          <li
            key={person.email}
            className="flex justify-between gap-x-6 py-5 w-[50vw] m-auto"
          >
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.avatar}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.first_name} {person.last_name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <GoBack />
    </div>
  );
};

export default Team;