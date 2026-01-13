interface ScheduleCardProps {
  time: string;
  title: string;
  subtitle: string;
  isLive?: boolean;
}

const ScheduleCard = ({ time, title, subtitle, isLive = false }: ScheduleCardProps) => {
  return (
    <div className="flex gap-4 animate-fade-in group">
      <div className="flex flex-col items-center pt-1">
        <span className={`text-sm font-bold ${isLive ? "text-live" : "text-foreground"}`}>
          {time}
        </span>
        <div className="relative mt-3">
          <div
            className={`w-3 h-3 rounded-full transition-all ${
              isLive
                ? "bg-live ring-4 ring-live/20 animate-pulse"
                : "bg-primary ring-2 ring-primary/30"
            }`}
          />
        </div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-3 min-h-[40px]" />
      </div>

      <div
        className={`flex-1 p-5 rounded-xl mb-4 transition-all duration-300 ${
          isLive
            ? "glass-effect-strong border-l-4 border-live card-shadow-hover scale-[1.02]"
            : "glass-effect hover:glass-effect-strong hover:card-shadow group-hover:scale-[1.01]"
        }`}
      >
        <h3 className={`font-bold ${isLive ? "text-foreground text-lg" : "text-foreground"}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5">{subtitle}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
