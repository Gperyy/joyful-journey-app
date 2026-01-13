import { Plane, MapPin, Calendar, ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import MobileLayout from "@/components/MobileLayout";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-airshow.jpg";

const Index = () => {
  // Event date: September 19, 2026
  const eventDate = new Date("2026-09-19T09:00:00");

  return (
    <MobileLayout>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-foreground text-lg">SHG Airshows</span>
          </div>
          <button className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-5 pb-32">
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Plane className="w-4 h-4" />
              <span className="text-sm font-medium tracking-widest uppercase">Sivrihisar, Eskişehir</span>
            </div>

            <h1 className="text-5xl font-extrabold text-foreground leading-tight mb-1">
              SHG<br />Airshow
            </h1>
            <span className="text-5xl font-extrabold text-primary">2026</span>
            
            <p className="text-muted-foreground mt-4 text-lg">
              Dünya Havacılığının Buluşma Noktası
            </p>

            {/* Date & Location Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 glass-effect px-4 py-2.5 rounded-full hover:glass-effect-strong transition-all">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">19-20 Eylül 2026</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2.5 rounded-full hover:glass-effect-strong transition-all">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">S.H.M.</span>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CountdownTimer targetDate={eventDate} />
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-3 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Link to="/biletler" className="block">
              <Button variant="hero" size="lg" className="w-full">
                Hemen Bilet Al
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/katilimcilar" className="block">
              <Button variant="outline" size="lg" className="w-full">
                Katılımcılar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Index;
