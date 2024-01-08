import { Typography } from "@/components/atoms/typography/Typography";
import ProjectTable from "@/components/organisms/project-table/ProjectTable";
import { EnvelopeIcon, PhoneIcon, LinkIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const PersonalInfo = {
    primaryName: "",
    secondaryName: "",
    position: "",
    info: [
      { icon: <PhoneIcon className="w-4 h-4" />, value: "0856127101" },
      { icon: <EnvelopeIcon className="w-4 h-4" />, value: "ntphat.work@gmail.com" },
      { icon: <LinkIcon className="w-4 h-4" />, value: "https://www.linkedin.com/in/phatnguyentn/" },
      { icon: <MapPinIcon className="w-4 h-4" />, value: "District 7, Ho Chi Minh City", fullWidth: false },
    ],
  };

  return (
    <main className="container mx-auto text-center p-4 md:p-8">
      <section>
        <Typography variant="h1" className="text-3xl font-bold">
          NGUYEN TAN PHAT
        </Typography>
        <Typography variant="h2">--- James Nguyen ---</Typography>
      </section>

      <Typography variant="h2" className="my-5">
        Software Engineer
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
            I am highly motivated to advance my career as a Fullstack Engineer and am committed to developing the
            necessary skills and expertise to become a Senior Fullstack Engineer in the near future. I am eager to take
            on new challenges and responsibilities to continue to grow in my career.
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
              <span className="font-bold">Allio Finace</span>
              <span className="min-w-[25%]">August 2023 - Present</span>
            </div>
            <div className="mb-2">Mobile Developer</div>
            <ul className="list-disc list-inside">
              <li>Working on onboarding, and investing features.</li>
              <li>Working on the integration of financial accounts by Plaid.</li>
              <li>Implement native module (IOS and Android): Zendesk SDK for support user problems.</li>
              <li>Resolve bugs, and optimize existing features.</li>
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
                Participated in code reviews, collaborated with teams, and contributed to agile development processes.
                My ability to seamlessly transition between frontend and backend development allowed for efficient
                collaboration and timely project delivery.
              </li>
              <li>Implement CI/CD pipeline and release process.</li>
              <li>Optimize algorithms for interaction behaviors.</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold">Silicon Stack Pty Ltd - (Outsource: DevSamurai Viet Nam)</span>
              <span className="min-w-[25%]">Aug 2021 - Jul 2022</span>
            </div>
            <div className="mb-2">Senior Frontend Developer</div>
            <ul className="list-disc list-inside">
              <li>
                As a frontend developer, I actively participated in UI implements base on Figma, code reviews,
                collaborated with teams, and followed agile development processes.
              </li>
              <li>Implement SEO strategies to optimize website visibility and rankings</li>
              <li>Optimize CI/CD pipeline and release process.</li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col mt-2">
          <h2 className="text-xl uppercase font-bold">SKILLS</h2>
          <div className="h-[2px] w-full bg-black"></div>
          <div className="my-4">
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Frontend</span>
              <span className="w-[75%]">
                React Native, ReactJs, NextJs, Typescript, GraphQL, Redux, Redux-Saga, MUI, TailwindCSS, SASS, Webpack,
                ...
              </span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Backend</span>
              <span className="w-[75%]">ExpressJs, Sequelize, Postgresql, MongoDB, ...</span>
            </div>
            <div className="flex justify-between items-start gap-4 mb-2 py-2 border-b-[1px]">
              <span className="font-bold">Tools</span>
              <span className="w-[75%]">Jira, Git, Github, Gitlab, Bitbucket ...</span>
            </div>
          </div>
        </article>

        <section>
          <ProjectTable />
        </section>

        <article className="flex flex-col mt-2">
          <h2 className="text-xl uppercase font-bold">CERTIFICATIONS</h2>
          <div className="h-[2px] w-full bg-black"></div>
          <div className="my-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold">Applied Social Network Analysis in Python</span>
              <span className="min-w-[25%]">Nov 2020</span>
            </div>
            <div className="mb-2">Senior Frontend Developer</div>
            <Typography>https://coursera.org/share/92b95726e51e3365350faed9cfdade5c</Typography>
          </div>
        </article>
      </section>
    </main>
  );
}
