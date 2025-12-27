interface ScheduleCardProps {
  time: string;
  title: string;
  subtitle: string;
  isLive?: boolean;
}

const ScheduleCard = ({ time, title, subtitle, isLive = false }: ScheduleCardProps) => {
  return (
    <div className="flex gap-4 animate-fade-in">
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold text-foreground">{time}</span>
        <div className={`w-2 h-2 rounded-full mt-2 ${isLive ? "bg-live" : "bg-primary"}`} />
        <div className="w-0.5 flex-1 bg-border mt-2" />
      </div>
      
      <div 
        className={`flex-1 p-4 rounded-xl mb-4 transition-all duration-200 ${
          isLive 
            ? "bg-card border-l-2 border-live shadow-lg" 
            : "bg-card hover:bg-secondary"
        }`}
      >
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
