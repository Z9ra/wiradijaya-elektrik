"use client"

export default function ContentBlockWithParagraphs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
                <span>Design Excellence</span>
              </div>
              <h2 className="text-3xl leading-tight font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
                Building Digital Experiences That Drive Results
              </h2>
            </div>

            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed md:text-lg">
              In today's fast-paced digital landscape, creating exceptional user
              experiences is no longer optional—it's essential. Our platform
              empowers teams to build stunning interfaces that not only look
              beautiful but also deliver measurable business outcomes. From
              startups to enterprises, we provide the tools needed to succeed.
            </p>

            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed md:text-lg">
              Every component is carefully crafted with attention to detail,
              ensuring consistency across your entire application. We believe
              that great design should be accessible to everyone, which is why
              our library combines professional aesthetics with
              developer-friendly implementation. No compromise between beauty
              and functionality.
            </p>

            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed md:text-lg">
              Whether you're building a marketing website, a SaaS dashboard, or
              an e-commerce platform, our components adapt to your needs. With
              built-in responsive design, accessibility features, and
              customizable themes, you can launch faster without sacrificing
              quality. Join thousands of developers who trust us to power their
              digital products.
            </p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl">
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
                alt="Modern workspace with mountain view"
                className="h-80 w-full object-cover object-center transition-transform hover:scale-105 md:h-96"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl">
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg"
                alt="Elegant architectural design"
                className="h-80 w-full object-cover object-center transition-transform hover:scale-105 md:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
