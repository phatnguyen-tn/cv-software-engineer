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
      name: "Itszai",
      startDate: "Feb 2024",
      endDate: "Present",
      table: {
        customer: "TechX Vietnam",
        description: (
          <ul className="list-disc list-inside">
            <li>
              <Typography className="inline">
                A recruitment platform that lets employers publish job postings and distribute them to Google for Jobs
                and Indeed.
              </Typography>
            </li>
            <li>Includes a website builder to create career sites from system-provided themes.</li>
          </ul>
        ),
        "team size": "8 (Frontend team)",
        position: "Mid-level Frontend Engineer",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>Developing nearly all frontend features and integrating them with the Ruby backend APIs.</li>
              <li>Integrating job posting syndication with Google for Jobs and Indeed.</li>
              <li>
                Building the theme-based website builder: parsing theme templates via DOM parser with custom tags (e.g.{" "}
                {"<editable>"}) to dynamically generate user input forms and render the final career site.
              </li>
              <li>Improving SEO for public pages.</li>
              <li>Resolving bugs, optimizing existing features, and code reviews.</li>
            </ul>
          </div>
        ),
        "tech stack": (
          <ul className="list-disc list-inside">
            <li>Frontend: NextJs, Typescript, DOM Parser.</li>
            <li>Backend: Ruby.</li>
            <li>Cloud: AWS.</li>
          </ul>
        ),
      },
    },
    {
      name: "Easier",
      startDate: "Feb 2024",
      endDate: "Present",
      table: {
        customer: "TechX Vietnam",
        description: (
          <ul className="list-disc list-inside">
            <li>
              <Typography className="inline">
                An advertising platform where users build their own web pages from system-provided themes and run
                advertisements for those pages on Google Ads and Yahoo.
              </Typography>
            </li>
          </ul>
        ),
        "team size": "8 (Frontend team)",
        position: "Mid-level Frontend Engineer",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>Developing nearly all frontend features and integrating them with the Go backend APIs.</li>
              <li>
                Building the theme-based page builder, sharing the template engine with Itszai, and the flows that run
                ads for the built pages on Google Ads and Yahoo.
              </li>
              <li>Improving SEO for public pages.</li>
              <li>Resolving bugs, optimizing existing features, and code reviews.</li>
            </ul>
          </div>
        ),
        "tech stack": (
          <ul className="list-disc list-inside">
            <li>Frontend: NextJs, Typescript, DOM Parser.</li>
            <li>Backend: Go.</li>
            <li>Cloud: AWS.</li>
          </ul>
        ),
      },
    },
    {
      name: "Allio Finance Application",
      startDate: "Aug 2023",
      endDate: "Feb 2024",
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
              Website:{" "}
              <a href="https://alliofinance.com/" target="_blank" className="hover:underline hover:text-sky-500">
                https://alliofinance.com/
              </a>
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
      startDate: "Sep 2020",
      endDate: "Jul 2023",
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
              Website:{" "}
              <a
                href="https://teamboard.cloud/proscheduler/"
                target="_blank"
                className="hover:underline hover:text-sky-500"
              >
                https://teamboard.cloud/proscheduler/
              </a>
            </li>
          </ul>
        ),
        "team size": "4 (Frontend team)",
        position: "Frontend Developer",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>
                Developed the main frontend features: schedule task, Gantt chart, timelog, and report, and supported
                backend APIs for them.
              </li>
              <li>Code reviews and maintenance to keep the product stable.</li>
              <li>Optimized algorithms for interactive behaviors.</li>
              <li>Implemented CI/CD pipeline and release process.</li>
            </ul>
          </div>
        ),
        "tech stack": (
          <ul className="list-disc list-inside">
            <li>Frontend: ReactJs, Redux, Redux-Saga.</li>
            <li>Backend: ExpressJs, Sequelize, Postgresql.</li>
          </ul>
        ),
      },
    },
    {
      name: "Motoserve & Automundo",
      startDate: "Aug 2021",
      endDate: "Jul 2022",
      table: {
        customer: "Silicon Stack Pty Ltd",
        description: (
          <ul className="list-disc list-inside">
            <li>
              <Typography className="inline">
                Motoserve: a platform for booking car services, with an admin portal to configure services for sale.
              </Typography>
            </li>
            <li>
              <Typography className="inline">
                Automundo: a platform to discover and bid on cars from multiple sellers, with an admin portal for
                selling cars.
              </Typography>
            </li>
          </ul>
        ),
        "team size": "8 (Frontend team)",
        position: "Senior Frontend Developer",
        responsibility: (
          <div>
            <ul className="list-disc list-inside">
              <li>Implementing responsive components based on Figma design using Ant Design v4.</li>
              <li>Integrating APIs using SWR, adding Google Tag Manager and Google Analytics for SEO.</li>
              <li>Code reviews, optimizing CI/CD pipeline and release process.</li>
            </ul>
          </div>
        ),
        "tech stack": <Typography>NextJs, Typescript, Ant Design, Redux, Redux-Saga, Google APIs.</Typography>,
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
