import { notFound } from "next/navigation";
import { farmhouseRooms } from "@/content/site";
import { VisualPlaceholder } from "@/components/visual-placeholder";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

export default async function FarmhouseRoomPage({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = await params;
  const room = farmhouseRooms.find(r => r.id === roomId);

  if (!room) {
    notFound();
  }

  return (
    <div className="shell section-space pt-32 pb-20 space-y-12">
      {/* Back Button */}
      <Link href="/stay-explore" className="inline-flex items-center gap-2 text-sm font-semibold text-bark/60 hover:text-forest transition-colors">
        <span className="text-lg">←</span> Back to Stay & Explore
      </Link>

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:items-start">
        {/* Visual Gallery Placeholder */}
        <div className="space-y-4">
          <VisualPlaceholder 
            title={`${room.name} Main View`} 
            subtitle="Beautiful interior layout"
            className="w-full h-[400px] md:h-[500px] rounded-[2.5rem] shadow-soft"
            accent="from-emerald-100 to-stone-50"
          />
          <div className="grid grid-cols-2 gap-4">
            <VisualPlaceholder 
              title="Bathroom" 
              subtitle="Modern amenities"
              className="h-40 rounded-[1.5rem]"
              accent="from-stone-100 to-white"
            />
            <VisualPlaceholder 
              title="View" 
              subtitle="Scenic window view"
              className="h-40 rounded-[1.5rem]"
              accent="from-green-50 to-emerald-50"
            />
          </div>
        </div>

        {/* Room Details & Booking Action */}
        <div className="bg-white rounded-[2.5rem] border border-bark/10 shadow-card p-8 md:p-10 sticky top-32 space-y-8">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="font-serif text-4xl font-bold text-bark">{room.name}</h1>
              <span className={`inline-block rounded-full px-4 py-1.5 text-xs uppercase tracking-wider font-extrabold ${
                room.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {room.status}
              </span>
            </div>
            <p className="text-base text-bark/75 leading-relaxed font-medium">{room.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 py-6 border-y border-bark/5">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1.5">Capacity</span>
              <span className="text-lg font-semibold text-bark flex items-center gap-2">
                <span>👥</span> {room.capacity}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1.5">Rate</span>
              <span className="text-2xl font-extrabold text-forest">{formatCurrency(room.price)} <span className="text-sm font-semibold text-bark/50">/ night</span></span>
            </div>
          </div>

          <div>
             <span className="text-xs uppercase tracking-[0.15em] text-bark/50 font-bold block mb-4">Amenities & Inclusions</span>
             <ul className="grid gap-3 text-sm text-bark/80 font-medium">
               {room.amenities.map(item => (
                 <li key={item} className="flex items-center gap-3 bg-forest/5 px-4 py-3 rounded-xl">
                   <span className="text-forest text-lg leading-none">✓</span> {item}
                 </li>
               ))}
             </ul>
          </div>

          <div className="pt-4 border-t border-bark/5">
            {room.status === 'Available' ? (
              <Link href="/checkout" className="btn-primary w-full text-center py-4 text-lg">
                Make Payment
              </Link>
            ) : (
              <button disabled className="w-full text-center py-4 text-lg bg-bark/10 text-bark/40 font-bold rounded-2xl cursor-not-allowed">
                Already Reserved
              </button>
            )}
            <p className="text-center text-xs text-bark/40 mt-3 font-medium">
              Check-in: 12:00 PM • Check-out: 10:00 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return farmhouseRooms.map((room) => ({
    roomId: room.id,
  }));
}
