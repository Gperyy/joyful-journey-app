import { Search, Plane, Star } from "lucide-react";
import { useState } from "react";
import MobileLayout from "@/components/MobileLayout";

const participants = [
  { name: "Türk Yıldızları", type: "Akrobasi Timi", country: "Türkiye", featured: true },
  { name: "Solotürk", type: "F-16 Demo Timi", country: "Türkiye", featured: true },
  { name: "Semin Öztürk Şener", type: "Akrobasi Pilotu", country: "Türkiye", featured: false },
  { name: "Ali İsmet Öztürk", type: "Akrobasi Pilotu", country: "Türkiye", featured: false },
  { name: "Red Arrows", type: "Akrobasi Timi", country: "İngiltere", featured: true },
  { name: "Patrouille de France", type: "Akrobasi Timi", country: "Fransa", featured: true },
  { name: "Frecce Tricolori", type: "Akrobasi Timi", country: "İtalya", featured: false },
  { name: "Blue Angels", type: "Akrobasi Timi", country: "ABD", featured: false },
];

const Participants = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredParticipants = filteredParticipants.filter((p) => p.featured);
  const otherParticipants = filteredParticipants.filter((p) => !p.featured);

  return (
    <MobileLayout>
      <div className="px-5 pt-6 pb-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-foreground mb-6">Katılımcılar</h1>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Katılımcı, tim veya ülke ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-effect rounded-xl py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Featured Section */}
        {featuredParticipants.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-bold text-foreground">Öne Çıkan Katılımcılar</h2>
            </div>
            <div className="space-y-3">
              {featuredParticipants.map((participant, index) => (
                <div
                  key={index}
                  className="glass-effect-strong border-2 border-primary/30 rounded-xl p-5 flex items-center gap-4 animate-fade-in card-shadow hover:card-shadow-hover hover:scale-[1.02] transition-all cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <Plane className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg">{participant.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{participant.type}</p>
                  </div>
                  <span className="text-xs glass-effect px-3 py-1.5 rounded-full text-foreground font-medium">
                    {participant.country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Participants */}
        {otherParticipants.length > 0 && (
          <div>
            <h2 className="font-bold text-foreground mb-4">Diğer Katılımcılar</h2>
            <div className="space-y-3">
              {otherParticipants.map((participant, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-4 flex items-center gap-4 animate-fade-in hover:glass-effect-strong hover:card-shadow transition-all cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{participant.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{participant.type}</p>
                  </div>
                  <span className="text-xs glass-effect px-2.5 py-1 rounded-full text-muted-foreground font-medium">
                    {participant.country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default Participants;
