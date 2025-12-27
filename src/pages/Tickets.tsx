import { Ticket as TicketIcon, Check, Calendar, MapPin, QrCode } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const ticketTypes = [
  {
    name: "Standart Giriş",
    price: "150 ₺",
    features: ["Etkinlik alanına giriş", "Gösteri izleme", "Park alanı"],
    popular: false,
  },
  {
    name: "VIP Paket",
    price: "450 ₺",
    features: ["Özel VIP tribün", "Karşılama kokteyli", "Pilot buluşması", "Özel park alanı", "Etkinlik hediyesi"],
    popular: true,
  },
  {
    name: "Aile Paketi",
    price: "350 ₺",
    features: ["4 kişilik giriş", "Çocuk aktiviteleri", "Özel oturma alanı", "Park alanı"],
    popular: false,
  },
];

const Tickets = () => {
  return (
    <MobileLayout>
      <div className="px-5 pt-6 pb-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-foreground mb-2">Biletler</h1>
        <p className="text-muted-foreground mb-6">Size en uygun bileti seçin</p>

        {/* Event Info Card */}
        <div className="bg-card border border-border rounded-2xl p-4 mb-6 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
              <TicketIcon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">SHG Airshow 2026</h3>
              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>19-20 Eylül</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Sivrihisar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Types */}
        <div className="space-y-4">
          {ticketTypes.map((ticket, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 animate-fade-in ${
                ticket.popular
                  ? "bg-primary/10 border-2 border-primary"
                  : "bg-card border border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {ticket.popular && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  En Popüler
                </span>
              )}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-foreground">{ticket.name}</h3>
                <span className="text-2xl font-bold text-primary">{ticket.price}</span>
              </div>
              <ul className="space-y-2 mb-5">
                {ticket.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={ticket.popular ? "hero" : "outline"}
                className="w-full"
              >
                {ticket.popular ? "Hemen Al" : "Seç"}
              </Button>
            </div>
          ))}
        </div>

        {/* QR Code Info */}
        <div className="mt-8 bg-secondary/50 rounded-xl p-4 flex items-center gap-4 animate-fade-in">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
            <QrCode className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium">Dijital Bilet</p>
            <p className="text-xs text-muted-foreground">Satın aldığınız biletler e-posta ile gönderilir</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Tickets;
