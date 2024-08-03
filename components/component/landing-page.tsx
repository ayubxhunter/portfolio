"use client"

import Link from "next/link"
import Image from "next/image"

import * as Icons from "@/components/ui/icons"
import { Book } from "lucide-react"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Fascinate } from "next/font/google"

export default function LandingPage() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.ok) {
  //     setFormData({
  //       name: '',
  //       email: '',
  //       message: '',
  //     });

  //     alert('Form submitted successfully');

  //   } else {
  //     alert('Failed to submit the form');
  //   }
  // };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="font-bold">Software Engineer</span>
          </Link>
          <nav className="flex items-center gap-4 sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <Icons.MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="sm:hidden">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#education"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    Education
                  </Link>
                  <Link
                    href="#experience"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    Experience
                  </Link>
                  <Link
                    href="#projects"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    Projects
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>

          <nav className="hidden space-x-4 sm:flex">
            <Link
              href="#education"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Education
            </Link>
            <Link
              href="#experience"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        <section id="hero" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Hi, I&apos;m Ayub Hunter</h1>
              <p className="text-lg text-muted-foreground">
                Software Engineer Intern at Apple
              </p>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/ayubxhunter"
                  target="_blank"
                  prefetch={false}
                >
                  <Button>
                    <Icons.GithubIcon className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/ayub-hunter/"
                  target="_blank"
                  prefetch={false}
                >
                  <Button variant="outline">
                    <Icons.LinkedinIcon className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </Link>

                <Link
                  href="https://drive.google.com/file/d/1CTIs_7_b4tRIgDD0rcJMaa-cmzqnWrhm/view?usp=sharing"
                  target="_blank"
                  prefetch={false}
                >
                  <Button variant="outline">
                    <Book className="mr-2 h-5 w-5" />
                    Resume
                  </Button>
                </Link>

              </div>
            </div>

            <div className="relative">
              <Image
                src="/PFP.jpg"
                width={400}
                height={400}
                alt="Profile"
                className="mx-auto h-[450px] w-[400px] rounded-full object-cover shadow-lg transition-all duration-500 hover:scale-105"
              />
            </div>

          </div>
        </section>

        <section id="education" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
              <p className="mt-4 text-muted-foreground">
                Georgia Institute of Technology<br />
                Bachelor of Science (BS) in Computer Science<br />
                Expected Graduation: Dec 2025<br />
                GPA: 3.7/4.0
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Coursework</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
                    <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium">Data Structures and Algorithms</h3>
                </div>
                <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
                    <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium">Object-Oriented Programming</h3>
                </div>
                <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
                    <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium">Machine Learning</h3>
                </div>
                <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="currentColor" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium">Linear Algebra</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">

    <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
      <div className="flex items-center">
        <h3 className="text-lg font-medium mr-2">Apple</h3>
        <svg fill="#ffffff" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.773 22.773" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path> <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
      </div>
      <p className="mt-2 text-muted-foreground">Software Engineering Intern | May 2024 - Present</p>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <Icons.CheckIcon className="h-5 w-5 text-primary" />
          <span>
          Developing an internal tool to enhance process efficiency for the Apple TV editorial team
          </span>
        </li>
        {/* <li className="flex items-start gap-2">
          <Icons.CheckIcon className="h-5 w-5 text-primary" />
          <span>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Icons.CheckIcon className="h-5 w-5 text-primary" />
          <span>
          </span>
        </li> */}
      </ul>
    </div>


            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium">Heastarter AI</h3>
              <p className="mt-2 text-muted-foreground">Software Engineer Fellow | June 2024 - Present</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                  Developed projects from design to deployment working with a team while building AI applications
                  </span>
                </li>

                {/* <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                  </span>
                </li> */}
              </ul>
            </div>

            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium">AMO Auto</h3>
              <p className="mt-2 text-muted-foreground">Software Engineering Intern | Jan 2024 - May 2024</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                  Utilized Next.js, JSX, and Tailwind CSS to develop a responsive website, boosting user engagement by 40%
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    Developed a MySQL database to streamline data management by enabling real-time updates on car inventory
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                  Implemented Edge Functions in Next.js 14 for the full-stack website, optimizing performance by rendering content
                  closer to user locations, which significantly reduced latency and improved site speed.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </section>


        <section id="projects" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">

            <Link
              href="https://ayubhunter11.wixsite.com/spotifywrappedapp/wrapper-app-1"
              className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105"
              target="_blank"
              prefetch={false}
            >
              <Image
                src="/SPRA.png"
                width={400}
                height={225}
                alt="Project 1"
                className="h-[225px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-lg font-medium">Spotify Wrapped App</h3>
              <p className="mt-2 text-muted-foreground">
              An app that provides users with a engaging summary of their Spotify listening habits, accessible year-round! Unlike Spotify's own Wrapped feature, 
              which is available once a year, our app allows users to log in anytime to view a summary of their music listening statistics.
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>Java</Badge>
                <Badge>OpenAI API</Badge>
                <Badge>Spotify Web API</Badge>
                <Badge>Firebase Cloud Storage</Badge>
              </div>
            </Link>

            <Link
              href="https://github.com/ayubxhunter"
              className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105"
              target="_blank"
              prefetch={false}
            >
              <Image
                src="/image.png"
                width={400}
                height={225}
                alt="Project 1"
                className="h-[225px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-lg font-medium">AWS-Powered Photo Hub</h3>
              <p className="mt-2 text-muted-foreground">
              Developing a scalable photo storage feature with AWS Lambda, using serverless functions to automatically handle
              increased traffic by instantiating multiple function instances, removing the need for manual scaling
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>AWS S3</Badge>
                <Badge>AWS Lambda</Badge>
                <Badge>AWS CloudFront</Badge>
                <Badge>React</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Python</Badge>
              </div>
            </Link>

            <Link
              href="https://github.com/ayubxhunter/spendwise"
              className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105"
              target="_blank"
              prefetch={false}
            >
              <Image
                src="/budgetApp.png"
                width={400}
                height={225}
                alt="Project 3"
                className="h-[225px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-lg font-medium">SpendWise | Budgeting Application</h3>
              <p className="mt-2 text-muted-foreground">
                Developed a budgeting app to simplify financial management by integrating the 50-30-20 rule algorithm
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>React</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
            </Link>

          </div>
        </section>

        <section id="contact" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <div className="mt-8">
            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Icons.MailIcon className="h-6 w-6 text-primary" />
                  <span>ayub.hunter11@gmail.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Icons.MapPinIcon className="h-6 w-6 text-primary" />
                  <span>Atlanta, Georgia</span>
                </div>

                <Link
                  href="https://github.com/ayubxhunter"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <Icons.GithubIcon className="h-6 w-6 text-primary" />
                  <span className="border-transparent border-b-2 hover:border-opacity-100 hover:border-b-white">ayubxhunter</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/ayub-hunter/"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <Icons.LinkedinIcon className="h-6 w-6 text-primary" />
                  <span className="border-transparent border-b-2 hover:border-opacity-100 hover:border-b-white">ayubhunter</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  )
}