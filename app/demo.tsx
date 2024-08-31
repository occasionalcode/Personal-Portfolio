export default function StickyTest() {
  return (
    <div className="min-h-screen align-top bg-green-400 h-[2000px] flex overflow-visible">
      {/* Some content before the sticky component */}

      {/* Sticky Component */}
      <div className="sticky top-32 bg-blue-500 h-min text-white p-5 w-full text-center z-10">
        <h2 className="text-2xl font-bold">I am a sticky component!</h2>
      </div>

      {/* Content below the sticky component */}
    </div>
  );
}
