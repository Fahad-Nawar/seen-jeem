import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../data/categories';
import NeoButton from '../components/NeoButton';
import './CategoriesScreen.css';

export default function CategoriesScreen({ onSelectCategories, onBack }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const sections = useMemo(() => {
    const grouped = {};
    CATEGORIES.forEach(cat => {
      const section = cat.section || 'أخرى';
      if (!grouped[section]) grouped[section] = [];
      grouped[section].push(cat);
    });
    return grouped;
  }, []);

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) return prev.filter(c => c !== categoryId);
      if (prev.length >= 6) return prev;
      return [...prev, categoryId];
    });
  };

  const handleStart = () => {
    if (selectedCategories.length === 6) onSelectCategories(selectedCategories);
  };

  const canStart = selectedCategories.length === 6;

  return (
    <div className="screen cats-screen nb-enter">
      <div className="cats-inner">
        <div className="cats-header">
          <h1 className="nb-display nb-display--lg">اختر 6 فئات</h1>
          <div className="nb-pill cats-counter">
            <span className="cats-counter-num">{selectedCategories.length}</span>
            <span>/ 6</span>
          </div>
        </div>

        <div className="cats-sections">
          {Object.entries(sections).map(([sectionName, categories]) => (
            <div key={sectionName} className="cats-section">
              <div className="cats-section-label">{sectionName}</div>
              <div className="cats-grid">
                {categories.map((category) => {
                  const isSelected = selectedCategories.includes(category.id);
                  const isDisabled = !isSelected && selectedCategories.length >= 6;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      className={`cats-card ${isSelected ? 'is-selected' : ''} ${isDisabled ? 'is-disabled' : ''}`}
                      onClick={() => !isDisabled && toggleCategory(category.id)}
                      disabled={isDisabled}
                      style={{ '--cat-color': category.color }}
                    >
                      <div className="cats-card-icon">{category.icon}</div>
                      <div className="cats-card-name">{category.name}</div>
                      {isSelected && <div className="cats-card-check">✓</div>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="cats-actions">
          <NeoButton variant="ghost" onClick={onBack}>رجوع</NeoButton>
          <NeoButton
            variant="orange"
            size="lg"
            onClick={handleStart}
            disabled={!canStart}
          >
            ابدأ اللعب
          </NeoButton>
        </div>
      </div>
    </div>
  );
}
