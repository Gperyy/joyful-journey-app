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
            className="w-full bg-card border border-border rounded-xl py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Featured Section */}
        {featuredParticipants.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Öne Çıkan Katılımcılar</h2>
            </div>
            <div className="space-y-3">
              {featuredParticipants.map((participant, index) => (
                <div
                  key={index}
                  className="bg-card border border-primary/20 rounded-xl p-4 flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{participant.name}</h3>
                    <p className="text-sm text-muted-foreground">{participant.type}</p>
                  </div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
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
            <h2 className="font-semibold text-foreground mb-4">Diğer Katılımcılar</h2>
            <div className="space-y-3">
              {otherParticipants.map((participant, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Plane className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{participant.name}</h3>
                    <p className="text-sm text-muted-foreground">{participant.type}</p>
                  </div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
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
