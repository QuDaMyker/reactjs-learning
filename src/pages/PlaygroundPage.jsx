import { useState } from 'react';

import { AppButton } from '../shared/components/AppButton';
import { AppCard } from '../shared/components/AppCard';
import { AppInput } from '../shared/components/AppInput';

export function PlaygroundPage() {
  const [name, setName] = useState('');
  const [items, setItems] = useState(['Routing', 'Reusable Components']);

  function handleAddItem() {
    if (!name.trim()) {
      return;
    }

    setItems((current) => [...current, name.trim()]);
    setName('');
  }

  return (
    <div className="page-stack">
      <header className="page-header">
        <p className="eyebrow">Starter Playground</p>
        <h2>Try small state changes before moving to bigger patterns.</h2>
      </header>

      <div className="grid two-columns">
        <AppCard title="Local state example" description="Use this page to understand `useState`.">
          <div className="stack">
            <AppInput
              id="topic-name"
              label="Topic name"
              value={name}
              placeholder="Add a React topic"
              onChange={(event) => setName(event.target.value)}
              hint="Examples: Forms, React Query, Token Refresh"
            />
            <AppButton onClick={handleAddItem}>Add topic</AppButton>
          </div>
        </AppCard>

        <AppCard title="Rendered list" description="This is a simple list render using `map`.">
          <ul className="plain-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </AppCard>
      </div>
    </div>
  );
}
