"use client";

import { Typography } from "@/components/atoms/typography/Typography";
import React from "react";

type Props = {};

type ReactNodeOrString = React.ReactNode | string;

type Project = {
  name: ReactNodeOrString;
  startDate: ReactNodeOrString;
  endDate: ReactNodeOrString;
  table: {
    description: ReactNodeOrString;
    customer: ReactNodeOrString;
    "team size": ReactNodeOrString | number;
    position: ReactNodeOrString;
    responsibility: ReactNodeOrString;
    "tech stack": ReactNodeOrString;
    [key: string]: ReactNodeOrString | number;
  };
};

export default function ProjectTable({}: Props) {
  const projects: Project[] = [
    {
      name: "Teamboard Proscheduler",
      startDate: "September 2020",
      endDate: "July 2023",
      table: {
        description:
          "This is a Jira plugin that allows users to easily, effectively, and clearly view planning tasks and manage resources",
        customer: "Devsamurai Viet Nam",
        "team size": 4,
        position: "Team Lead",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>
                Delivering tasks to team members, code reviews, implementing new features, and performing maintenance
                tasks to ensure the stability and functionality of the product.
              </li>
              <li>
                Main developer in frontend and backend for these main feature:
                <ul className="list-[circle] list-inside ml-8">
                  <li>Schedule task</li>
                  <li>Gantt chart</li>
                  <li>Timelog</li>
                  <li>Report</li>
                  <li>Email service</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
        "tech stack": (
          <ul className="list-disc list-inside">
            <li>Frontend: ReactJs, Redux, Redux-Saga</li>
            <li>
              Backend:
              <ul className="list-[circle] list-inside ml-8">
                <li>Cloud edition: ExpressJs, Postgresql</li>
                <li>Server edition: Atlassian SDK, Java Serverless, Postgresql</li>
              </ul>
            </li>
          </ul>
        ),
      },
    },
  ];

  return (
    <div>
      <h2 className="text-xl uppercase font-bold">PROJECTS</h2>
      <div className="h-[2px] w-full bg-black"></div>

      {projects.map((project, idx) => (
        <div key={idx} className="relative overflow-x-auto my-4 flex flex-col gap-2">
          <p className="text-xl">{project.name}</p>
          <p>{`( ${project.startDate} - ${project.endDate} )`}</p>
          <table className="w-full border border-gray-400 text-left">
            <tbody>
              {Object.keys(project.table).map((key, keyIdx) => (
                <tr className="border-b border-gray-400" key={keyIdx}>
                  <th scope="col" className="border-r border-gray-400 p-2 w-[40%] capitalize">
                    {key}
                  </th>
                  <td scope="col" className="border-r border-gray-400 p-2">
                    {project.table[key]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
