import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

/**
 * AlphaOscillationChart
 * 
 * Visualizes the oscillation of α (fine structure constant) as it converges
 * toward the golden ratio φ under the influence of the Hamiltonian of desynchronization (H_D).
 * 
 * This chart illustrates:
 * - Rest state: α ≈ 137.036 (static equilibrium)
 * - Perturbation: H_D injection creates a "creative desynchronization" δ_α
 * - Harmonic stabilization: Damped oscillations around the attractor φ
 * - Convergence: RIT → φ ≈ 1.618
 * 
 * Design Philosophy: Harmonic Minimalism
 * - Minimalist color palette: Deep indigo accents on light background
 * - Smooth curves representing harmonic resonance
 * - Reference lines for key values (φ, 137.036)
 */

interface DataPoint {
  time: number;
  alpha: number;
  rit: number;
  state: string;
}

const PHI = 1.618033988749895;
const ALPHA_REST = 137.036;

export default function AlphaOscillationChart() {
  // Generate synthetic data representing the oscillation dynamics
  const data: DataPoint[] = useMemo(() => {
    const points: DataPoint[] = [];
    
    // Phase 1: Rest (0-20 cycles)
    for (let i = 0; i <= 20; i++) {
      points.push({
        time: i,
        alpha: ALPHA_REST + Math.random() * 0.05,
        rit: 0.5 + Math.random() * 0.3,
        state: 'Rest',
      });
    }
    
    // Phase 2: Perturbation (20-30 cycles) - H_D injection
    for (let i = 21; i <= 30; i++) {
      const t = (i - 20) / 10;
      const perturbation = Math.sin(t * Math.PI) * 2;
      points.push({
        time: i,
        alpha: ALPHA_REST - perturbation + Math.random() * 0.1,
        rit: 0.8 + Math.sin(t * Math.PI) * 0.3 + Math.random() * 0.1,
        state: 'Perturbation',
      });
    }
    
    // Phase 3: Harmonic Stabilization (30-100 cycles) - Damped oscillations
    for (let i = 31; i <= 100; i++) {
      const t = (i - 30) / 70;
      const damping = Math.exp(-t * 2);
      const oscillation = Math.sin(t * Math.PI * 8) * damping * 0.5;
      const ritValue = PHI + (0.5 - PHI) * Math.exp(-t * 1.5) + Math.random() * 0.02;
      
      points.push({
        time: i,
        alpha: ALPHA_REST - oscillation + Math.random() * 0.05,
        rit: Math.max(PHI - 0.05, ritValue),
        state: 'Stabilization',
      });
    }
    
    return points;
  }, []);

  return (
    <div className="w-full h-full bg-background p-6 rounded-lg border border-border">
      <div className="mb-6">
        <h3 className="font-display text-2xl text-foreground mb-2">
          Oscillation de α vers l'Attracteur φ
        </h3>
        <p className="text-sm text-foreground/70 font-ui">
          Évolution de la constante de structure fine sous l'impulsion de l'Hamiltonien de désynchronisation (H_D)
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.001 0)" />
          <XAxis
            dataKey="time"
            label={{ value: 'Cycles', position: 'insideBottomRight', offset: -5 }}
            stroke="oklch(0.50 0.01 0)"
            style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }}
          />
          <YAxis
            yAxisId="left"
            label={{ value: 'α (Fine Structure Constant)', angle: -90, position: 'insideLeft' }}
            domain={[135, 139]}
            stroke="oklch(0.50 0.01 0)"
            style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: 'RIT (β₁/β₀)', angle: 90, position: 'insideRight' }}
            domain={[0, 2]}
            stroke="oklch(0.50 0.01 0)"
            style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }}
          />
          
          {/* Reference lines for key values */}
          <ReferenceLine
            yAxisId="left"
            y={ALPHA_REST}
            stroke="oklch(0.50 0.01 0 / 0.3)"
            strokeDasharray="5 5"
            label={{ value: 'α₀ ≈ 137.036', position: 'right', fill: 'oklch(0.50 0.01 0)' }}
          />
          <ReferenceLine
            yAxisId="right"
            y={PHI}
            stroke="oklch(0.45 0.15 265)"
            strokeDasharray="5 5"
            label={{ value: `φ ≈ ${PHI.toFixed(3)}`, position: 'right', fill: 'oklch(0.45 0.15 265)' }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: 'oklch(0.98 0.001 0)',
              border: '1px solid oklch(0.88 0.001 0)',
              borderRadius: '0.5rem',
              fontFamily: 'IBM Plex Mono',
              fontSize: '12px',
            }}
            formatter={(value: number) => value.toFixed(4)}
          />
          
          <Legend
            wrapperStyle={{ fontFamily: 'Space Grotesk', fontSize: '12px' }}
            verticalAlign="top"
            height={36}
          />

          {/* α oscillation line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="alpha"
            stroke="oklch(0.45 0.15 265)"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
            name="α (Fine Structure Constant)"
          />

          {/* RIT convergence line */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="rit"
            stroke="oklch(0.35 0.20 265)"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
            name="RIT (Ratio d'Intégration Topologique)"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-secondary/30 rounded-lg border border-border">
          <p className="text-xs font-ui text-foreground/60 mb-1">Phase 1: Repos</p>
          <p className="font-mono-yon text-sm text-foreground">
            H_D ≈ 0 | α stable
          </p>
        </div>
        <div className="p-4 bg-secondary/30 rounded-lg border border-border">
          <p className="text-xs font-ui text-foreground/60 mb-1">Phase 2: Perturbation</p>
          <p className="font-mono-yon text-sm text-foreground">
            H_D &gt; 0 | δ_α perturbation
          </p>
        </div>
        <div className="p-4 bg-secondary/30 rounded-lg border border-border">
          <p className="text-xs font-ui text-foreground/60 mb-1">Phase 3: Stabilisation</p>
          <p className="font-mono-yon text-sm text-foreground">
            RIT → φ | Harmonie atteinte
          </p>
        </div>
      </div>
    </div>
  );
}
