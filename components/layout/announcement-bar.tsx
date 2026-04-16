import { Container } from "@/components/ui/container";

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="border-b border-white/25 bg-gradient-to-r from-pop-rose via-pop-pink to-lilac text-center text-xs font-semibold text-white shadow-sm sm:text-sm">
      <Container className="py-2.5">
        <p className="leading-snug drop-shadow-sm">{text}</p>
      </Container>
    </div>
  );
}
