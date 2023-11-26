import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../interfaces";
import UserIcon from "../components/UserIcon";
import { formatDate } from "../helpers";

type Users = {
  users: User[];
};

const Dashboard = () => {
  const [users, setUsers] = useState<Users>({ users: [] });

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios(
        "https://www.mockachino.com/06c67c77-18c4-45/users"
      );
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <>
      <h2 className="font-black text-2xl">Dashboard</h2>
      <div className="w-full flex justify-center mt-7 px-3 overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-slate-500">
          <thead className="bg-slate-300">
            <tr>
              <th className="border border-slate-300 py-5 px-3">Name</th>
              <th className="border border-slate-300 py-5 px-3">Birth date</th>
              <th className="border border-slate-300 py-5 px-3">Photo</th>
              <th className="border border-slate-300 py-5 px-3 hidden md:table-cell">
                Gender
              </th>
              <th className="border border-slate-300 py-5 px-3 hidden md:table-cell">
                Profession
              </th>
              <th className="border border-slate-300 py-5 px-3 hidden md:table-cell">
                Email
              </th>
              <th className="border border-slate-300 py-5 px-3 hidden md:table-cell">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.users.length > 0 &&
              users.users.map((user) => (
                <tr key={user.contactId}>
                  <td className="border border-slate-300 text-center py-5 px-3">
                    {user.name} {user.surnames}
                  </td>
                  <td className="border border-slate-300 text-center py-5 px-3">
                    {formatDate(user.birthDate)}
                  </td>
                  <td className="border border-slate-300 py-5 px-3">
                    {user.photo ? (
                      <img
                        src={user.photo}
                        alt={user.name}
                        width="75"
                        height="75"
                        className="rounded-full mx-auto"
                      />
                    ) : (
                      <UserIcon />
                    )}
                  </td>
                  <td className="border border-slate-300 text-center py-5 px-3 hidden md:table-cell">
                    {user.gender ?? "-"}
                  </td>
                  <td className="border border-slate-300 text-center py-5 px-3 hidden md:table-cell">
                    {user.profesion ?? "-"}
                  </td>
                  <td className="border border-slate-300 text-center py-5 px-3 hidden md:table-cell">
                    {user.email ?? "-"}
                  </td>
                  <td className="border border-slate-300 text-center py-5 px-3 hidden md:table-cell">
                    {user.phone ?? "-"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
