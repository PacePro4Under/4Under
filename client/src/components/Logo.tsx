export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      {/* Digital clock display showing 4:00 */}
      <div className="bg-slate-800 golf-green clock-font text-sm px-2 py-1 rounded border">
        4:00
      </div>
      <span className="golf-green font-bold text-lg tracking-wide">Under</span>
    </div>
  );
}
