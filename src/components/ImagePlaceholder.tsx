export default function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold`}>
      {/* 👇 REPLACE THIS WITH YOUR IMAGE */}
      <img src="/my-image.png" alt="Your Name" className="w-full h-full object-cover rounded-full" />
      <span className="text-4xl">MI</span> {/* Fallback initials */}
    </div>
  );
}