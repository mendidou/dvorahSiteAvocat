export default function ColorTest() {
  return (
    <div className="p-4 border-2 border-gray-300 m-4 rounded">
      <h3 className="text-lg font-bold mb-4">Test des couleurs dynamiques :</h3>
      
      {/* Test avec classes Tailwind personnalisées */}
      <div className="mb-4">
        <p className="text-primary">Texte couleur primaire (Tailwind)</p>
        <div className="bg-primary text-white p-2 rounded mb-2">Background primaire (Tailwind)</div>
        <div className="bg-primary-hover text-white p-2 rounded mb-2">Background primaire hover (Tailwind)</div>
        <div className="bg-primary-dark text-white p-2 rounded mb-2">Background primaire dark (Tailwind)</div>
      </div>

      {/* Test avec variables CSS directes */}
      <div className="mb-4">
        <p style={{ color: 'var(--primary-color)' }}>Texte couleur primaire (Variable CSS)</p>
        <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '8px', borderRadius: '4px', marginBottom: '8px' }}>
          Background primaire (Variable CSS)
        </div>
        <div style={{ backgroundColor: 'var(--primary-hover)', color: 'white', padding: '8px', borderRadius: '4px', marginBottom: '8px' }}>
          Background primaire hover (Variable CSS)
        </div>
        <div style={{ backgroundColor: 'var(--primary-dark)', color: 'white', padding: '8px', borderRadius: '4px', marginBottom: '8px' }}>
          Background primaire dark (Variable CSS)
        </div>
      </div>

      {/* Affichage des valeurs actuelles */}
      <div className="text-sm text-gray-600">
        <p>Valeurs CSS actuelles :</p>
        <ul className="list-disc pl-4">
          <li>--primary-color: <span id="primary-color-value"></span></li>
          <li>--primary-hover: <span id="primary-hover-value"></span></li>
          <li>--primary-dark: <span id="primary-dark-value"></span></li>
        </ul>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            const root = document.documentElement;
            const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color');
            const primaryHover = getComputedStyle(root).getPropertyValue('--primary-hover');
            const primaryDark = getComputedStyle(root).getPropertyValue('--primary-dark');
            
            setTimeout(() => {
              const primaryEl = document.getElementById('primary-color-value');
              const hoverEl = document.getElementById('primary-hover-value');
              const darkEl = document.getElementById('primary-dark-value');
              
              if (primaryEl) primaryEl.textContent = primaryColor || 'non défini';
              if (hoverEl) hoverEl.textContent = primaryHover || 'non défini';
              if (darkEl) darkEl.textContent = primaryDark || 'non défini';
            }, 100);
          }
        `
      }} />
    </div>
  );
}