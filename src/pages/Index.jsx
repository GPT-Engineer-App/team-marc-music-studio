import { Package2, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [currentImage, setCurrentImage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=music&orientation=landscape&client_id=YOUR_UNSPLASH_ACCESS_KEY"
        );
        const data = await response.json();
        setCurrentImage(data.urls.regular);
      } catch (error) {
        console.error("Error fetching background image:", error);
        // Set a default background image in case of an error
        setCurrentImage("https://source.unsplash.com/random?music");
      }
    };

    fetchBackgroundImage();
    const interval = setInterval(fetchBackgroundImage, 30000);

    return () => clearInterval(interval);
  }, []);

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
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out animate-fadeIn"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Package2 className="h-6 w-6 mr-2" />
          <h1 className="text-2xl font-bold">Team Marc Music Studio</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        {/* Current Playing Song Section */}
        <div className="mb-8 text-center bg-background/60 backdrop-blur-md p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-slideIn">
          <h2 className="text-2xl font-semibold mb-2">Now Playing</h2>
          <p className="text-xl">Song Title</p>
          <p className="text-lg text-muted-foreground">Artist Name</p>
        </div>

        {/* Playback Controls */}
        <div className="mb-8 flex items-center space-x-4 animate-slideIn" style={{animationDelay: "0.2s"}}>
          <Button variant="outline" size="icon" className="rounded-full">
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-16 h-16" onClick={togglePlayPause}>
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8 animate-slideIn" style={{animationDelay: "0.4s"}}>
          <Progress value={progress} className="w-full" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>0:00</span>
            <span>3:30</span>
          </div>
        </div>

        {/* Volume Slider */}
        <div className="w-full max-w-xs animate-slideIn" style={{animationDelay: "0.6s"}}>
          <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background/80 backdrop-blur-md border-t">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          © 2024 Team Marc Music Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;