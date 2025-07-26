const DecorativeElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gradient overlays only, no floating squares */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-ceramic-warm/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-ceramic-terracotta/5 to-transparent rounded-full blur-2xl"></div>
    </div>
  );
};

export default DecorativeElements;
