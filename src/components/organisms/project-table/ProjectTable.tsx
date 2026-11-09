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
    customer: ReactNodeOrString;
    description: ReactNodeOrString;
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
      name: "Allio Finance Application",
      startDate: "August 2023",
      endDate: "Present",
      table: {
        customer: "Allio Finance",
        description: (
          <ul className="list-disc list-inside">
            <li>
              <Typography className="inline">
                Allio is the only macro investing app giving strategic investors the cutting-edge tools
              </Typography>
            </li>
            <li>
              Website: <Typography>https://alliofinance.com/</Typography>
            </li>
          </ul>
        ),
        "team size": "5 (Mobile team)",
        position: "Mobile Developer",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>
                Developed and maintained core features of a React Native macro-investing app (iOS &amp; Android):
                onboarding, portfolio allocation, stock/ETF trading (buy/sell orders, TAF fee estimation, price charts),
                recurring deposits and savings goals.
              </li>
              <li>
                Main developer of the Net Worth / Wealth Tracker: net worth charts, custom assets, spending tracker
                (categories, recurring expenses, budgets and budget notifications), credit score and credit alerts.
              </li>
              <li>
                Integrated Plaid Link to connect bank and financial accounts, manage funding sources and relink
                institutions.
              </li>
              <li>
                Integrated in-app subscriptions with RevenueCat: display plans, purchase, change, cancel and gate
                premium screens.
              </li>
              <li>
                Implemented native modules (Java for Android, Objective-C for iOS) wrapping the Zendesk SDK for in-app
                support chat and phone-call requests.
              </li>
              <li>
                Delivered app-wide dark mode, referral program, and account security flows (email/phone update with
                verification and cooldown).
              </li>
              <li>
                Fixed bugs, optimized UI/UX and performance; worked in an agile team with Jira and GitHub code reviews.
              </li>
            </ul>
          </div>
        ),
        "tech stack": (
          <ul className="list-disc list-inside">
            <li>
              Mobile: React Native, TypeScript, GraphQL (codegen), React Query, Recoil / Jotai / Zustand, React
              Navigation, Reanimated, Victory Native / Skia (charts), Emotion.
            </li>
            <li>Integrations: Plaid, RevenueCat, Zendesk, Firebase, LaunchDarkly, Datadog.</li>
            <li>
              Native Module:
              <ul className="list-[circle] list-inside ml-8">
                <li>Android: Java.</li>
                <li>iOS: Objective-C.</li>
              </ul>
            </li>
          </ul>
        ),
      },
    },
    {
      name: "Teamboard Proscheduler",
      startDate: "September 2020",
      endDate: "July 2023",
      table: {
        customer: "Devsamurai Viet Nam",
        description: (
          <ul className="list-disc list-inside">
            <li>
              <Typography className="inline">
                This is a Jira plugin that allows users to easily, effectively, and clearly view planning tasks and
                manage resources.
              </Typography>
            </li>
            <li>
              Website: <Typography>https://teamboard.cloud/proscheduler/</Typography>
            </li>
          </ul>
        ),
        "team size": "4 (Frontend team)",
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
              <li>Optimize algorithms for interactions behaviors.</li>
              <li>Implement CI/CD pipeline and release process.</li>
            </ul>
          </div>
        ),
        "tech stack": (
          <ul className="list-disc list-inside">
            <li>Frontend: ReactJs, Redux, Redux-Saga</li>
            <li>
              Backend:
              <ul className="list-[circle] list-inside ml-8">
                <li>Cloud edition: ExpressJs, Sequelize, Postgresql.</li>
                <li>Server edition: Atlassian SDK, Java Serverless, Postgresql.</li>
              </ul>
            </li>
          </ul>
        ),
      },
    },
    {
      name: "Motoserve",
      startDate: "August 2021",
      endDate: "July 2022",
      table: {
        customer: "Silicon Stack Pty Ltd",
        description: (
          <ul className="list-disc list-inside">
            <li>
              <Typography className="inline">
                This is a platform for users to book car services. Additionally, the platform also provide an admin
                portal where users can configure their services for sale.
              </Typography>
            </li>
            <li>
              Website: <Typography>https://motorserve.com.au/</Typography>
            </li>
          </ul>
        ),
        "team size": "8 (Frontend team)",
        position: "Senior Frontend Developer",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>Implementing responsive components based on Figma design using Ant Design v4.</li>
              <li>Integrating APIs to visible data using SWR.</li>
              <li>Adding Google Tag Manager and Google Analytics for SEO activities.</li>
              <li>Code reviews.</li>
              <li>Optimize CI/CD pipeline and release process</li>
            </ul>
          </div>
        ),
        "tech stack": <Typography>NextJs, Typescript, Ant Design, Redux, Redux-Saga, Google APIs.</Typography>,
      },
    },
    {
      name: "Automundo",
      startDate: "August 2021",
      endDate: "July 2022",
      table: {
        customer: "Silicon Stack Pty Ltd",
        description: (
          <ul className="list-disc list-inside">
            <li>
              <Typography className="inline">
                This is a platform for users to discover and bid on cars from multiple sellers. Additionally, the
                platform also provide an admin portal where users can sell their own cars.
              </Typography>
            </li>
            <li>
              Website: <Typography>https://automundobuyscars.com.au/</Typography>
            </li>
          </ul>
        ),
        "team size": "8 (Frontend team)",
        position: "Senior Frontend Developer",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>Implementing responsive components based on Figma design using Ant Design v4.</li>
              <li>Integrating APIs to visible data using SWR.</li>
              <li>Code reviews.</li>
              <li>Optimize CI/CD pipeline and release process</li>
            </ul>
          </div>
        ),
        "tech stack": <Typography>NextJs, Typescript, Ant Design, Redux, Redux-Saga.</Typography>,
      },
    },
  ];

  return (
    <div>
      <h2 className="text-xl uppercase font-bold">PROJECTS</h2>
      <div className="h-[2px] w-full bg-black"></div>

      {projects.map((project, idx) => (
        <div key={idx} className="relative overflow-x-auto mt-4 mb-8 flex flex-col gap-2">
          <p className="text-xl">{project.name}</p>
          <p>{`( ${project.startDate} - ${project.endDate} )`}</p>
          <table className="w-full border border-gray-400 text-left">
            <tbody>
              {Object.keys(project.table).map((key, keyIdx) => (
                <tr className="border-b border-gray-400" key={keyIdx}>
                  <th scope="col" className="border-r border-gray-400 p-2 w-[25%] capitalize">
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
