import { Bell, Search, Calendar } from "lucide-react";
import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";
import LiveBadge from "@/components/LiveBadge";
import ScheduleCard from "@/components/ScheduleCard";

const scheduleData = [
  { time: "12:00", title: "Açılış Seremonisi", subtitle: "Protokol", isLive: false },
  { time: "12:30", title: "Türk Yıldızları", subtitle: "Nefes kesen akrobasi gösterisi", isLive: true },
  { time: "13:15", title: "Solotürk", subtitle: "F-16 Demo Uçuşu", isLive: false },
  { time: "14:00", title: "Yeni Menekşe", subtitle: "Semin Öztürk Şener", isLive: false },
  { time: "15:30", title: "Vecihi 14", subtitle: "Ali İsmet Öztürk", isLive: false },
  { time: "16:30", title: "Gösteri Finali", subtitle: "Tüm Pilotlar", isLive: false },
];

const Program = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchedule = scheduleData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const liveEvent = scheduleData.find((item) => item.isLive);

  return (
    <MobileLayout>
      <div className="px-5 pt-6 pb-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Gösteri Programı</h1>
          <button className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Live Event Card */}
        {liveEvent && (
          <div className="bg-card rounded-2xl p-5 mb-6 border border-border animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <LiveBadge />
              <span className="text-sm text-muted-foreground">12:30 - 13:15</span>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-1">{liveEvent.title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{liveEvent.subtitle}</p>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-live rounded-full transition-all duration-1000"
                style={{ width: "35%" }}
              />
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Katılımcı ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-xl py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Date Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-foreground">19 Eylül Cumartesi</span>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-0">
          {filteredSchedule.map((item, index) => (
            <ScheduleCard
              key={index}
              time={item.time}
              title={item.title}
              subtitle={item.subtitle}
              isLive={item.isLive}
            />
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Program;
