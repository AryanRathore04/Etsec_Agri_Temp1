"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-primary"></div>
        <div className="text-lg">Loading…</div>
      </div>
    </div>
  );
}
