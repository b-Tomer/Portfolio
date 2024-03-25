import ContactForm from "@/Components/ContactForm";
import ProjectPreview from "@/Components/ProjectPreview";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>My Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold">Welcome to the next level</h1>
          <p className="text-xl mt-4">Showcasing High Performance Websites with Next.js</p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <ProjectPreview
              title="Twitter clone"
              description="This is a brief description of Project 2. Highlighting performance and SEO."
              imageUrl="https://res.cloudinary.com/dyfldyuby/image/upload/v1711395973/twitter2_a0kfk1.png"
              projectUrl="#"
            />
            <ProjectPreview
              title="Noy Avneri food blog"
              description="This is a brief description of Project 2. Highlighting performance and SEO."
              imageUrl="https://res.cloudinary.com/dyfldyuby/image/upload/v1711395973/noy-blog_msmopu.png"
              projectUrl="#"
            />
            <ProjectPreview
              title="Trellax"
              description="This is a brief description of Project 2. Highlighting performance and SEO."
              imageUrl="https://res.cloudinary.com/dyfldyuby/image/upload/v1711396487/trellax_dp0p3f.png"
              projectUrl="#"
            />
            <ProjectPreview
              title="Gmail clone"
              description="This is a brief description of Project 1. Showcasing the latest technologies."
              imageUrl="https://res.cloudinary.com/dyfldyuby/image/upload/v1711395972/gmail_qrlfzt.png"
              projectUrl="#"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}