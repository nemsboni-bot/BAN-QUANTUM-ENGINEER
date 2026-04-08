export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center py-32">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-border" />
          <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-steel">Loading...</p>
      </div>
    </div>
  );
}
