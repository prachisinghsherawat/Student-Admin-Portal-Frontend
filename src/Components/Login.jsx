import { useState } from "react";
import { Tab } from "@headlessui/react";
import StudentLoginPage from "./login/Student";
import AdminLoginPage from "./login/Admin";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LoginPage() {
  const [selectedTab, setSelectedTab] = useState("Student"); 

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full mx-auto max-w-md px-2 py-24 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-1 text-lg">
          <Tab
            key="Student"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-indigo-600 ring-offset-2  focus:outline-none focus:ring-2",
                selected ? "bg-indigo-600 text-white" : "text-gray-900"
              )
            }
            onClick={() => handleTabChange("Student")}
          >
            Student
          </Tab>
          <Tab
            key="Admin"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-indigo-600 ring-offset-2  focus:outline-none focus:ring-2",
                selected ? "bg-indigo-600 text-white" : "text-gray-900"
              )
            }
            onClick={() => handleTabChange("Admin")}
          >
            Admin
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel key="Student">
            {selectedTab === "Student" && <StudentLoginPage />}
          </Tab.Panel>
          <Tab.Panel key="Admin">
            {selectedTab === "Admin" && <AdminLoginPage />}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
