import { Package2, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="icon">
          <Package2 className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Team Marc Music Studio</h1>
        <div className="w-6"></div> {/* Placeholder for balance */}
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Current Playing Song Section */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Now Playing</h2>
          <p className="text-xl">Song Title</p>
          <p className="text-lg text-muted-foreground">Artist Name</p>
        </div>

        {/* Playback Controls */}
        <div className="mb-8 flex items-center justify-center space-x-6">
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className="h-16 w-16 rounded-full" onClick={togglePlayPause}>
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full mb-4">
          <Progress value={progress} className="w-full" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>0:00</span>
            <span>3:30</span>
          </div>
        </div>

        {/* Volume Slider */}
        <div className="w-full">
          <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-muted-foreground">
        Built with GPT Engineer
      </footer>
    </div>
  );
};

export default Index;