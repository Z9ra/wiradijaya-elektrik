import { Button } from "@/components/ui/button"

export default function Error500WithBackgroundImage() {
  return (
    <section
      className="relative grid min-h-screen place-items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
      <div className="relative z-10 container mx-auto">
        <div className="text-center">
          <div className="mx-auto grid h-16 w-16 cursor-pointer place-items-center rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-xl">
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/logo/google.svg"
              alt="Google logo"
              className="h-full w-full object-contain"
            />
          </div>
          <h2 className="mt-10 mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Unexpected Server Error (500)
          </h2>
          <p className="mb-10 text-base leading-relaxed text-white/90 md:text-lg">
            We're experiencing technical difficulties. Our team has been
            notified and is working to resolve the issue.
          </p>
          <Button className="border-white/20 bg-white text-neutral-900 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl">
            Contact Support Team
          </Button>
        </div>
      </div>
    </section>
  )
}
