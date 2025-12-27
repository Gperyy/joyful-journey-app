const LiveBadge = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-live opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-live"></span>
      </span>
      <span className="text-live text-sm font-semibold tracking-wide">CANLI</span>
    </div>
  );
};

export default LiveBadge;
