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
        <div className="glass-effect-strong rounded-2xl p-5 mb-6 animate-fade-in card-shadow">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <TicketIcon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-lg">SHG Airshow 2026</h3>
              <div className="flex items-center gap-3 mt-1.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">19-20 Eylül</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Sivrihisar</span>
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
              className={`rounded-2xl p-6 animate-fade-in transition-all cursor-pointer ${
                ticket.popular
                  ? "glass-effect-strong border-2 border-primary card-shadow-hover scale-[1.02]"
                  : "glass-effect hover:glass-effect-strong hover:card-shadow hover:scale-[1.01]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {ticket.popular && (
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                    En Popüler
                  </span>
                </div>
              )}
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-extrabold text-xl text-foreground">{ticket.name}</h3>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-primary">{ticket.price}</span>
                  <span className="text-xs text-muted-foreground block mt-0.5">/ kişi</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {ticket.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={ticket.popular ? "hero" : "outline"}
                className="w-full text-base font-bold py-6"
              >
                {ticket.popular ? "Hemen Al" : "Seç"}
              </Button>
            </div>
          ))}
        </div>

        {/* QR Code Info */}
        <div className="mt-8 glass-effect rounded-xl p-5 flex items-center gap-4 animate-fade-in">
          <div className="w-14 h-14 rounded-lg glass-effect flex items-center justify-center">
            <QrCode className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground font-bold">Dijital Bilet</p>
            <p className="text-xs text-muted-foreground mt-1">Satın aldığınız biletler e-posta ile gönderilir</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Tickets;
