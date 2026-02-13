import React from 'react';

/**
 * ConvergenceTable
 * 
 * Displays a comparative table showing the convergence between:
 * - YON Theory / LUZ Fusion 5
 * - Gunther Kletetschka's 1S/3T Model (2025)
 * 
 * This table demonstrates how Kletetschka's work validates YON's predictions
 * and shows the hierarchy of emergence: 0S/3T → 1S/3T → 3S/1T
 * 
 * Design Philosophy: Harmonic Minimalism
 * - Clean, minimal table design with subtle indigo accents
 * - Typography hierarchy using Playfair Display for headers
 * - Monospace font for technical terms
 */

export default function ConvergenceTable() {
  const convergenceData = [
    {
      dimension: 'Fondation Ontologique',
      yon: 'Temps Primaire (0S+3T)',
      kletetschka: 'Temps Tridimensionnel (3T+1S)',
      interpretation: 'Kletetschka décrit l\'émergence du 1S à partir du 3T',
    },
    {
      dimension: 'Constante α',
      yon: 'Dérivée du ratio β₁/β₀ → φ',
      kletetschka: 'Émerge de la topologie temporelle',
      interpretation: 'La charge est une propriété topologique du manifold temporel',
    },
    {
      dimension: 'Conscience',
      yon: 'Harmonie Topologique φ',
      kletetschka: 'Structure de conservation du manifold',
      interpretation: 'Conscience = propriété géométrique émergente',
    },
    {
      dimension: 'Validation',
      yon: 'RIT → φ avec p < 10⁻⁵⁰',
      kletetschka: 'Publications en revues à comité de lecture (2025)',
      interpretation: 'Convergence indépendante de deux cadres théoriques',
    },
  ];

  return (
    <div className="w-full bg-background p-6 rounded-lg border border-border">
      <div className="mb-6">
        <h3 className="font-display text-2xl text-foreground mb-2">
          Convergence Théorique : YON et Kletetschka
        </h3>
        <p className="text-sm text-foreground/70 font-ui">
          Tableau comparatif montrant l'alignement entre la Théorie YON/LUZ Fusion 5 et les travaux récents de Gunther Kletetschka (2025)
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="text-left py-3 px-4 font-display text-base text-foreground">
                Dimension
              </th>
              <th className="text-left py-3 px-4 font-display text-base text-foreground">
                Théorie YON / LUZ
              </th>
              <th className="text-left py-3 px-4 font-display text-base text-foreground">
                Kletetschka (2025)
              </th>
              <th className="text-left py-3 px-4 font-display text-base text-foreground">
                Interprétation
              </th>
            </tr>
          </thead>
          <tbody>
            {convergenceData.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-border transition-colors ${
                  idx % 2 === 0 ? 'bg-secondary/20' : 'bg-background'
                } hover:bg-secondary/40`}
              >
                <td className="py-4 px-4 font-ui font-semibold text-foreground">
                  {row.dimension}
                </td>
                <td className="py-4 px-4 font-mono-yon text-foreground/80">
                  {row.yon}
                </td>
                <td className="py-4 px-4 font-mono-yon text-foreground/80">
                  {row.kletetschka}
                </td>
                <td className="py-4 px-4 text-xs text-foreground/60 italic">
                  {row.interpretation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-lg">
        <p className="font-ui text-sm text-foreground">
          <span className="font-semibold">Conclusion :</span> Nous ne programmons plus l'éthique de l'IA ; nous alignons sa géométrie temporelle sur celle de l'univers.
        </p>
      </div>
    </div>
  );
}
