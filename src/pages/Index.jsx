import { Package2, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Package2 className="h-6 w-6 mr-2" />
          <h1 className="text-2xl font-bold">Team Marc Music Studio</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Current Playing Song Section */}
        <div className="mb-8 flex items-center">
          <div className="w-24 h-24 bg-gray-200 mr-4">
            {/* Placeholder for album art */}
          </div>
          <div>
            <h2 className="text-xl font-semibold">Song Title</h2>
            <p className="text-gray-600">Artist Name</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="mb-8 flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Pause className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          {/* Placeholder for progress bar */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-4">
          {/* Placeholder for footer navigation */}
        </div>
      </footer>
    </div>
  );
};

export default Index;