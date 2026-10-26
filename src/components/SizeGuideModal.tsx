import React from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <div className="min-h-screen px-4 flex items-center justify-center py-12">
        <div className="relative bg-obsidian-900 border border-white/20 max-w-2xl w-full text-luxury-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
          
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <h3 className="font-display text-lg tracking-widest uppercase text-white">
                Architectural Fit Matrix
              </h3>
              <p className="text-[10px] font-mono text-metallic-dark uppercase">
                Precision metric specifications & atelier ease allowances
              </p>
            </div>
            <button onClick={onClose} className="p-2 text-metallic hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 space-y-6">
            <p className="text-xs text-metallic-light leading-relaxed">
              Our silhouettes are cut with structured architectural drape. Outerwear is engineered to layer comfortably over heavy knitwear, while tailoring features an intentional sharp drop shoulder.
            </p>

            {/* Matrix Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border border-white/10">
                <thead className="bg-white/5 text-metallic uppercase text-[10px]">
                  <tr>
                    <th className="p-3 border-b border-white/10">Size (EU / US)</th>
                    <th className="p-3 border-b border-white/10">Chest (CM)</th>
                    <th className="p-3 border-b border-white/10">Shoulder (CM)</th>
                    <th className="p-3 border-b border-white/10">Waist (CM)</th>
                    <th className="p-3 border-b border-white/10">Sleeve (CM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/90">
                  <tr>
                    <td className="p-3 font-bold text-white">46 (S)</td>
                    <td className="p-3">92 - 96</td>
                    <td className="p-3">47.5</td>
                    <td className="p-3">78 - 82</td>
                    <td className="p-3">65.0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">48 (M)</td>
                    <td className="p-3">98 - 102</td>
                    <td className="p-3">49.0</td>
                    <td className="p-3">84 - 88</td>
                    <td className="p-3">66.5</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">50 (L)</td>
                    <td className="p-3">104 - 108</td>
                    <td className="p-3">50.5</td>
                    <td className="p-3">90 - 94</td>
                    <td className="p-3">68.0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">52 (XL)</td>
                    <td className="p-3">110 - 114</td>
                    <td className="p-3">52.0</td>
                    <td className="p-3">96 - 100</td>
                    <td className="p-3">69.5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Measurement Tips */}
            <div className="bg-obsidian-950 p-4 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-metallic font-bold">
                Bespoke Fit Advisory:
              </span>
              <ul className="text-[11px] text-metallic-dark space-y-1">
                <li className="flex items-center space-x-2">
                  <Check className="w-3 h-3 text-metallic shrink-0" />
                  <span>Outerwear features 6-8cm of structured breathing room for seasonal layering.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-3 h-3 text-metallic shrink-0" />
                  <span>Trousers include internal chrome cuff snaps to transition from puddle wide-leg to tapered.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-white text-obsidian font-mono text-xs uppercase tracking-widest font-bold hover:bg-metallic-light transition-all"
            >
              Confirm Dimensions
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
