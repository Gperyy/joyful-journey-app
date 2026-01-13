import { Bell, Search, Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import MobileLayout from "@/components/MobileLayout";
import LiveBadge from "@/components/LiveBadge";
import ScheduleCard from "@/components/ScheduleCard";

const scheduleData = [
  { time: "12:00", endTime: "12:30", title: "Açılış Seremonisi", subtitle: "Protokol", isLive: false },
  { time: "12:30", endTime: "13:15", title: "Türk Yıldızları", subtitle: "Nefes kesen akrobasi gösterisi", isLive: true },
  { time: "13:15", endTime: "14:00", title: "Solotürk", subtitle: "F-16 Demo Uçuşu", isLive: false },
  { time: "14:00", endTime: "15:30", title: "Yeni Menekşe", subtitle: "Semin Öztürk Şener", isLive: false },
  { time: "15:30", endTime: "16:30", title: "Vecihi 14", subtitle: "Ali İsmet Öztürk", isLive: false },
  { time: "16:30", endTime: "17:30", title: "Gösteri Finali", subtitle: "Tüm Pilotlar", isLive: false },
];

const calculateProgress = (startTime: string, endTime: string): number => {
  const now = new Date();
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);

  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHour, startMin);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHour, endMin);
  const current = now.getTime();

  if (current < start.getTime()) return 0;
  if (current > end.getTime()) return 100;

  const total = end.getTime() - start.getTime();
  const elapsed = current - start.getTime();
  return Math.round((elapsed / total) * 100);
};

const Program = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [progress, setProgress] = useState(0);

  const filteredSchedule = scheduleData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const liveEvent = scheduleData.find((item) => item.isLive);

  useEffect(() => {
    if (liveEvent) {
      const updateProgress = () => {
        setProgress(calculateProgress(liveEvent.time, liveEvent.endTime));
      };
      updateProgress();
      const interval = setInterval(updateProgress, 1000);
      return () => clearInterval(interval);
    }
  }, [liveEvent]);

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
          <div className="glass-effect-strong rounded-2xl p-5 mb-6 border-2 border-primary/30 animate-fade-in card-shadow-hover">
            <div className="flex items-center justify-between mb-3">
              <LiveBadge />
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>{liveEvent.time} - {liveEvent.endTime}</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-1">{liveEvent.title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{liveEvent.subtitle}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>İlerleme</span>
                <span className="font-semibold">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-live to-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Gösteri ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-effect rounded-xl py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Date Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="font-bold text-foreground block">19 Eylül Cumartesi</span>
            <span className="text-xs text-muted-foreground">SHG Airshow 2026</span>
          </div>
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
