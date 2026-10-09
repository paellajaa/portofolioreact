// src/components/SpotifyCard.tsx
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const LiveEqualizer = () => (
  <div className="eq-container select-none">
    <div className="eq-bar eq-bar-1" />
    <div className="eq-bar eq-bar-2" />
    <div className="eq-bar eq-bar-3" />
    <div className="eq-bar eq-bar-4" />
  </div>
);

export default function SpotifyCard() {
  const isMobile = useMediaQuery(768);

  const albumArt = '/img/spotify-album.png';
  const songName = 'Subeme La Radio';
  const artistName = 'Enrique Iglesias';
  const spotifyLink = 'https://open.spotify.com/track/10633633';

  const handleClick = () => {
    window.open(spotifyLink, '_blank', 'noopener,noreferrer');
  };

  const SPRING_CARD = { type: 'spring' as const, stiffness: 100, damping: 20 };

  if (isMobile) {
    // Mobile Version: Background bg-zinc-900, text colors as specified, rounded-full
    return (
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        transition={SPRING_CARD}
        title="Listen on Spotify"
        className="w-full flex items-center justify-between bg-zinc-900 hover:border-zinc-500 border border-zinc-800/85 text-green-500 shadow-lg rounded-full px-4 py-2 cursor-pointer select-none"
      >
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={albumArt}
            alt="Album Art"
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold font-sans truncate leading-none text-zinc-100">{songName}</p>
            <p className="text-[10px] text-zinc-400 font-sans truncate mt-0.5">{artistName}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] font-mono font-bold tracking-wider text-green-500 uppercase">Now Playing</span>
          <LiveEqualizer />
        </div>
      </motion.div>
    );
  }

  // Desktop Version: Background bg-zinc-900/80, text colors as specified, border border-zinc-800/85, rounded-xl
  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      transition={SPRING_CARD}
      title="Listen on Spotify"
      className="w-full bg-zinc-900/80 border border-zinc-800/85 text-green-500 rounded-xl p-3 cursor-pointer select-none flex items-center gap-3 hover:border-zinc-500 transition-colors"
    >
      <div className="relative w-12 h-12 flex-shrink-0">
        <img
          src={albumArt}
          alt="Album Art"
          className="w-full h-full rounded-lg object-cover"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_6px_rgba(0,0,0,0.6)] rounded-lg" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1.5">
          <p className="text-xs font-bold font-sans text-zinc-100 truncate leading-tight">{songName}</p>
          <LiveEqualizer />
        </div>
        <p className="text-[10px] text-zinc-400 font-sans truncate mt-0.5">{artistName}</p>
        <span className="text-[8px] font-mono uppercase tracking-widest text-green-500 mt-1 block">Spotify • Now Playing</span>
      </div>
    </motion.div>
  );
}
