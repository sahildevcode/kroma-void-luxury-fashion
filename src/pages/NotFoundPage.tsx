import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <span className="text-[10px] font-mono tracking-widest-2xl text-metallic uppercase">
        STATUS 404 // VOID DETECTED
      </span>
      <h1 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
        SILHOUETTE <span className="text-chrome">UNAVAILABLE</span>
      </h1>
      <p className="text-xs sm:text-sm text-metallic-dark max-w-md font-sans">
        The requested pathway does not exist within the current atelier coordinate matrix.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="px-8 py-3.5 bg-white text-obsidian text-xs font-mono font-bold tracking-widest uppercase hover:bg-metallic-light transition-all"
        >
          Return to Flagship
        </Link>
      </div>
    </div>
  );
};
