import React, { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';

export default function Products({ products, onAdd }) {
  const [q, setQ] = useState('');
  const [heat, setHeat] = useState('all');

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return products.filter(p => {
      const nameHit = !t || p.name.toLowerCase().includes(t);
      const heatHit = heat === 'all' || String(p.heat) === heat;
      return nameHit && heatHit;
    });
  }, [q, heat, products]);

  return (
    <section style={{ padding: '28px 0' }}>
      <h2 style={{ marginTop: 0 }}>Our Spices</h2>
      <div className="card" style={{ padding: 12 }}>
        <div className="flex" style={{ alignItems: 'stretch' }}>
          <input
            className="input"
            placeholder="Search spices..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <select className="input" style={{ maxWidth: 180 }} value={heat} onChange={e => setHeat(e.target.value)}>
            <option value="all">Heat: All</option>
            <option value="0">Mild (0)</option>
            <option value="1">Gentle (1)</option>
            <option value="2">Warm (2)</option>
            <option value="3">Hot (3)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-3" style={{ marginTop: 16 }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="muted" style={{ marginTop: 16 }}>No spices match your filters.</p>
      )}
    </section>
  );
}
    