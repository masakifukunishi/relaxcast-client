interface AboutSectionProps {
  channelName: string;
}

const AboutSection = ({ channelName }: AboutSectionProps) => {
  return (
    <section className="w-full bg-stone-800 text-stone-200 py-20">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-9">An online streaming station for relaxing sounds</h2>
        <div className="inline-block mb-16 bg-stone-700/50 rounded-lg px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-stone-200 to-stone-100 bg-clip-text text-transparent">{channelName}</h3>
            <span className="text-stone-400">is now streaming</span>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">What is RelaxTunes?</h2>
          <p className="text-lg leading-relaxed text-stone-300">
            RelaxTunes offers streaming channels with relaxing sounds to help you unwind. All channels are available 24/7, always here to
            bring you warmth and comfort.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-6">
              <kbd className="px-4 py-2 text-sm font-semibold text-stone-700 bg-stone-50 border border-stone-200 rounded-lg shadow-sm">
                Space
              </kbd>
              <span className="text-lg text-stone-300">Play / Pause</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
