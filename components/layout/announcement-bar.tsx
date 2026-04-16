import { Container } from "@/components/ui/container";

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="border-b border-border-soft bg-surface-mist/80 text-center text-xs font-medium text-ink-muted backdrop-blur-sm sm:text-sm">
      <Container className="py-2.5">
        <p className="leading-snug">{text}</p>
      </Container>
    </div>
  );
}
