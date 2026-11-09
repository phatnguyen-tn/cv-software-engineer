import { Typography } from "@/components/atoms/typography/Typography";
import ProjectTable from "@/components/organisms/project-table/ProjectTable";
import { EnvelopeIcon, PhoneIcon, LinkIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const PersonalInfo = {
    info: [
      { icon: <PhoneIcon className="w-4 h-4" />, value: "+84 856 127 101" },
      {
        icon: <EnvelopeIcon className="w-4 h-4" />,
        value: "ntphat.work@gmail.com",
      },
      {
        icon: <LinkIcon className="w-4 h-4" />,
        value: "https://www.linkedin.com/in/phatnguyentn/",
      },
      {
        icon: <MapPinIcon className="w-4 h-4" />,
        value: "District 7, Ho Chi Minh City",
        fullWidth: false,
      },
    ],
  };

  return (
    <main className="container mx-auto text-center p-4 md:p-8">
      <section>
        <Typography variant="h1" className="text-3xl font-bold">
          NGUYEN TAN PHAT
        </Typography>
        <Typography variant="h2">(James Nguyen)</Typography>
      </section>

      <Typography variant="h2" className="my-5">
        Software Engineer (Frontend-focused, Fullstack)
      </Typography>

      <section className="flex m-auto justify-center gap-x-8 gap-y-2 flex-wrap">
        {PersonalInfo.info.map((item, i) => (
          <div key={i} className={`flex items-center gap-1 justify-center ${item.fullWidth ? "w-full" : ""}`}>
            {item.icon}
            {item.value.includes("http") ? (
              <a
                href={item.value}
                target="_blank"
                className="hover:underline hover:decoration-sky-500 hover:text-sky-500"
              >
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </div>
        ))}
      </section>

      <section className="flex flex-col my-12 text-left">
        <article className="flex flex-col mt-2">
          <h2 className="text-xl uppercase font-bold">Objective</h2>
          <div className="h-[2px] w-full bg-black"></div>
          <Typography className="my-4">
            Frontend-focused engineer with experience building and shipping web (Next.js, React) and mobile (React
            Native) products across recruitment, fintech, and SaaS, and the ability to build backend services with
            Node.js. Seeking a Fullstack or AI Engineer role where I can deliver end-to-end features, integrate
            third-party platforms, and use AI tooling to ship faster while growing toward a Senior Engineer position.
          </Typography>
        </article>
        <article className="flex flex-col mt-2">
          <h2 className="text-xl uppercase font-bold">Education</h2>
          <div className="h-[2px] w-full bg-black"></div>
          <div className="my-4">
            <div className="flex justify-between items-start mb-2">
              <Typography className="font-bold">VNUHCM - University of Science</Typography>
              <Typography className="min-w-[25%]">2017 - 2021</Typography>
            </div>
            <div className="mb-2">Bachelor's degree - Information Technology</div>
            <Typography>Grade: 8/10</Typography>
          </div>
        </article>
        <article className="flex flex-col mt-2">
          <h2 className="text-xl uppercase font-bold">WORK EXPERIENCE</h2>
          <div className="h-[2px] w-full bg-black"></div>
          <div className="my-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold">TechX Vietnam</span>
              <span className="min-w-[25%]">Feb 2024 - Present</span>
            </div>
            <div className="mb-2">Mid-level Frontend Engineer</div>
            <ul className="list-disc list-inside">
              <li>
                Owned frontend development of nearly all features for two Next.js platforms: Itszai, a recruitment
                platform that syndicates job postings to Google for Jobs and Indeed, and Easier, an advertising platform
                that runs ads on Google Ads and Yahoo for customer-built pages.
              </li>
              <li>Integrated all frontend features with Ruby (Itszai) and Go (Easier) backend APIs.</li>
              <li>
                Built a template-driven website builder: parsed theme templates via DOM parsing with custom tags (e.g.{" "}
                {"<editable>"}) to generate input forms dynamically and render each customer's website.
              </li>
              <li>Improved SEO for public pages.</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold">Allio Finance</span>
              <span className="min-w-[25%]">Aug 2023 - Feb 2024</span>
            </div>
            <div className="mb-2">Mobile Developer</div>
            <ul className="list-disc list-inside">
              <li>Developed onboarding and investing features in React Native.</li>
              <li>Integrated financial accounts using Plaid.</li>
              <li>Built native modules (iOS and Android) for the Zendesk SDK to support users.</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold">DevSamurai Viet Nam</span>
              <span className="min-w-[25%]">Sep 2020 - Jul 2023</span>
            </div>
            <div className="mb-2">Web Developer</div>
            <ul className="list-disc list-inside">
              <li>
                Developed core features of Teamboard Proscheduler, a Jira plugin: schedule task, Gantt chart, timelog,
                and report.
              </li>
              <li>Optimized algorithms for interactive behaviors in the planning UI.</li>
              <li>Set up the CI/CD pipeline and release process.</li>
              <li>Participated in code reviews and agile development processes.</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold">Silicon Stack Pty Ltd - (Outsource: DevSamurai Viet Nam)</span>
              <span className="min-w-[25%]">Aug 2021 - Jul 2022</span>
            </div>
            <div className="mb-2">Senior Frontend Developer</div>
            <ul className="list-disc list-inside">
              <li>Implemented responsive UI based on Figma for Motoserve and Automundo.</li>
              <li>Implemented SEO strategies to improve website visibility and rankings.</li>
              <li>Optimized the CI/CD pipeline and release process.</li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col mt-2">
          <h2 className="text-xl uppercase font-bold">SKILLS</h2>
          <div className="h-[2px] w-full bg-black"></div>
          <div className="my-4">
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Languages</span>
              <span className="w-[75%]">Typescript, Javascript</span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Frontend</span>
              <span className="w-[75%]">ReactJs, NextJs, Redux, Redux-Saga, SWR, GraphQL, Webpack, SEO</span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">UI</span>
              <span className="w-[75%]">Ant Design, MUI, TailwindCSS, SASS</span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Mobile</span>
              <span className="w-[75%]">React Native</span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Backend</span>
              <span className="w-[75%]">NodeJs, ExpressJs, PostgreSQL, REST API</span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Cloud &amp; Tools</span>
              <span className="w-[75%]">AWS, Git, Github, Gitlab, Bitbucket, Jira, CI/CD</span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">AI</span>
              <span className="w-[75%]">AI-assisted development (e.g. Claude Code)</span>
            </div>
          </div>
        </article>

        <section>
          <ProjectTable />
        </section>
      </section>
    </main>
  );
}
