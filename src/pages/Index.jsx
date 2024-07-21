import { Package2, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const beatRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying && beatRef.current) {
      beatRef.current.style.animation = 'beat 0.5s infinite';
    } else if (beatRef.current) {
      beatRef.current.style.animation = 'none';
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-purple-600">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-white/10">
        <Button variant="ghost" size="icon" className="text-white">
          <Package2 className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold text-white">Team Marc Music Studio</h1>
        <div className="w-6"></div> {/* Placeholder for balance */}
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/* 3D Beating Element */}
        <div 
          ref={beatRef} 
          className="w-32 h-32 bg-white/20 rounded-full mb-8 shadow-lg"
          style={{
            transform: 'perspective(500px) rotateX(20deg)',
            transition: 'transform 0.3s ease-in-out'
          }}
        ></div>

        {/* Current Playing Song Section */}
        <div className="mb-8 text-center text-white">
          <h2 className="text-2xl font-semibold mb-2">Now Playing</h2>
          <p className="text-xl">Song Title</p>
          <p className="text-lg text-white/70">Artist Name</p>
        </div>

        {/* Playback Controls */}
        <div className="mb-8 flex items-center justify-center space-x-6">
          <Button variant="ghost" size="icon" className="h-12 w-12 text-white">
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className="h-16 w-16 rounded-full bg-white/10 border-white/20 text-white" onClick={togglePlayPause}>
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 text-white">
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full mb-4">
          <Progress value={progress} className="w-full bg-white/20" indicatorClassName="bg-white" />
          <div className="flex justify-between mt-2 text-sm text-white/70">
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
      <footer className="p-4 text-center text-sm text-white/70">
        Built with GPT Engineer
      </footer>
    </div>
  );
};

export default Index;