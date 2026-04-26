export default function VideoAutoplay() {
  return (
    <div className="w-full">
      <video className="h-full w-full rounded-lg" controls autoPlay loop>
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
