import React, { useState } from 'react';

const symbols = 'アカサタナハマヤラワ0123456789<>/{}[]=+-';

const columns = Array.from({ length: 38 }, (_, i) => ({
  id: i,
  left: (i / 38) * 100,
  delay: `${-((i * 1.7) % 12)}s`,
  duration: `${9 + (i % 7)}s`,
  opacity: 0.25 + ((i * 13) % 65) / 100,
  size: 13 + (i % 5) * 3,
  content: Array.from(
    { length: 24 },
    (_, j) => symbols[(i * 7 + j * 11) % symbols.length]
  ).join('\n')
}));

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main className={`screen hacker-screen ${opened ? 'opened' : ''}`}>
      <section className={`reveal-content ${opened ? 'visible' : ''}`}>
        <div className="portfolio-label">DIGITAL DESIGN / WEB DEVELOPMENT</div>
        <h1>I BUILD WEBSITES<br /><span>THAT BUILD BUSINESSES.</span></h1>
        <p className="mission">
          I want to create websites because I believe every business deserves a
          strong online presence. A website should do more than look good. It
          should represent a company's identity, connect with its customers,
          and help it grow.
        </p>
        <div className="mission-divider" />
        <div className="mission-points">
          <div><strong>01</strong><span>CREATIVE DESIGN</span></div>
          <div><strong>02</strong><span>USER EXPERIENCE</span></div>
          <div><strong>03</strong><span>BUSINESS GROWTH</span></div>
        </div>
        <div className="mission-footer">TURNING IDEAS INTO DIGITAL EXPERIENCES.</div>
        <button className="replay-button" onClick={() => setOpened(false)}>REPLAY INTRO</button>
      </section>

      <div className={`hacker-wall ${opened ? 'wall-open' : ''}`}>
        <div className="code-panel panel-left">
          {columns.map(column => (
            <div key={`left-${column.id}`} className="code-column" style={{
              left: `${column.left}%`, animationDelay: column.delay,
              animationDuration: column.duration, opacity: column.opacity,
              fontSize: `${column.size}px`
            }}>{column.content}</div>
          ))}
        </div>
        <div className="code-panel panel-right">
          {columns.map(column => (
            <div key={`right-${column.id}`} className="code-column" style={{
              left: `${column.left}%`, animationDelay: column.delay,
              animationDuration: column.duration, opacity: column.opacity,
              fontSize: `${column.size}px`
            }}>{column.content}</div>
          ))}
        </div>
      </div>

      <div className={`hacker-overlay ${opened ? 'overlay-open' : ''}`}>
        <div className="hacker-status">
          <span>WEB SYSTEM INITIALIZATION</span><span>SYS.001 // ONLINE</span>
        </div>
        <div className="hacker-center">
          <div className="hacker-small">A NEW DIGITAL EXPERIENCE</div>
          <button className="hacker-start" onClick={() => setOpened(true)} disabled={opened}>
            {opened ? 'ACCESS GRANTED' : 'ENTER SYSTEM'}
          </button>
          <p>INITIALIZE DIGITAL EXPERIENCE</p>
        </div>
        <div className="hacker-terminal">
          <div>&gt;&gt; CONNECTING TO NETWORK...</div>
          <div>&gt;&gt; LOADING DIGITAL INTERFACE...</div>
          <div>&gt;&gt; PREPARING CREATIVE SYSTEM...</div>
          <div>&gt;&gt; AWAITING USER INPUT...</div>
        </div>
      </div>
    </main>
  );
}