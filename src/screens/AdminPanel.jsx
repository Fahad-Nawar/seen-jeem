import React, { useState, useMemo, useRef } from 'react';
import { CATEGORIES, QUESTIONS_DATA, BOARD_ROWS } from '../data/categories';
import {
  loadCustomImages,
  saveCustomImage,
  deleteCustomImage,
  fileToBase64,
  getQuestionKey,
  getStorageInfo,
  clearAllCustomImages
} from '../services/customImageStorage';
import NeoButton from '../components/NeoButton';
import './AdminPanel.css';

export default function AdminPanel({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);
  const [customImages, setCustomImages] = useState(loadCustomImages());
  const [uploading, setUploading] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRefs = useRef({});

  const storageInfo = getStorageInfo();

  // Build list of all questions for selected category
  const questions = useMemo(() => {
    const categoryData = QUESTIONS_DATA[selectedCategory];
    if (!categoryData) return [];

    const list = [];
    BOARD_ROWS.forEach(row => {
      const questionsAtLevel = categoryData[row.points] || [];
      const question = questionsAtLevel[row.index];
      if (question) {
        list.push({
          ...question,
          points: row.points,
          questionIndex: row.index,
          key: getQuestionKey(selectedCategory, row.points, row.index)
        });
      }
    });
    return list;
  }, [selectedCategory]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return CATEGORIES;
    return CATEGORIES.filter(c =>
      c.name.includes(searchQuery) || c.id.includes(searchQuery)
    );
  }, [searchQuery]);

  const handleFileUpload = async (questionKey, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('الرجاء اختيار ملف صورة فقط');
      return;
    }

    setUploading(questionKey);
    try {
      const base64 = await fileToBase64(file, 800);
      saveCustomImage(questionKey, base64);
      setCustomImages(loadCustomImages());
    } catch (e) {
      alert('فشل تحميل الصورة');
      console.error(e);
    } finally {
      setUploading(null);
    }
  };

  const handleDeleteImage = (questionKey) => {
    if (confirm('حذف الصورة؟')) {
      deleteCustomImage(questionKey);
      setCustomImages(loadCustomImages());
    }
  };

  const handleClearAll = () => {
    if (confirm('حذف جميع الصور المرفوعة؟ لا يمكن التراجع.')) {
      clearAllCustomImages();
      setCustomImages({});
    }
  };

  const triggerUpload = (questionKey) => {
    fileInputRefs.current[questionKey]?.click();
  };

  const currentCategory = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="screen admin-screen nb-enter">
      <div className="admin-top">
        <NeoButton variant="ghost" size="sm" onClick={onBack}>← رجوع</NeoButton>
        <h1 className="admin-title">🖼️ إدارة الصور</h1>
        <span className="nb-pill admin-storage">
          <span>{storageInfo.count} صورة</span>
          <span>•</span>
          <span>{storageInfo.sizeMB} MB</span>
        </span>
      </div>

      <div className="admin-layout">
        {/* Sidebar */}
        <div className="admin-sidebar">
          <input
            type="text"
            className="nb-input admin-search"
            placeholder="🔍 ابحث عن فئة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="admin-cats-list">
            {filteredCategories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                className={`admin-cat-item ${selectedCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                style={{ '--cat-color': cat.color }}
              >
                <div className="admin-cat-icon">{cat.icon}</div>
                <div className="admin-cat-info">
                  <div className="admin-cat-name">{cat.name}</div>
                  <div className="admin-cat-section">{cat.section}</div>
                </div>
              </button>
            ))}
          </div>

          {storageInfo.count > 0 && (
            <NeoButton variant="danger" size="sm" onClick={handleClearAll}>
              🗑️ حذف جميع الصور
            </NeoButton>
          )}
        </div>

        {/* Main Content */}
        <div className="admin-content">
          <div className="admin-cat-header" style={{ '--cat-color': currentCategory?.color }}>
            <div className="admin-cat-header-icon">{currentCategory?.icon}</div>
            <div>
              <h2 className="admin-cat-header-name">{currentCategory?.name}</h2>
              <div className="admin-cat-header-sub">{questions.length} سؤال</div>
            </div>
          </div>

          <div className="admin-q-grid">
            {questions.map((q) => {
              const customImage = customImages[q.key];
              const isUploading = uploading === q.key;
              const ptsColor = q.points === 200 ? 'var(--nb-success)'
                             : q.points === 400 ? 'var(--nb-orange)'
                             : q.points === 600 ? 'var(--nb-pink)'
                             : q.points === 800 ? 'var(--nb-cyan)'
                             : q.points === 1000 ? 'var(--nb-violet)'
                             : 'var(--nb-danger)';
              return (
                <div key={q.key} className="admin-q-card">
                  <div className="admin-q-head">
                    <span className="admin-points-badge" style={{ '--points-color': ptsColor }}>
                      {q.points}
                    </span>
                    <span className="admin-q-num">#{q.questionIndex + 1}</span>
                  </div>

                  <div className="admin-q-text">{q.question}</div>

                  <div className="admin-img-slot">
                    {isUploading ? (
                      <div className="admin-upload-loading">
                        <div className="admin-upload-spinner" />
                        <div>جاري الرفع...</div>
                      </div>
                    ) : customImage ? (
                      <div className="admin-img-preview">
                        <img src={customImage} alt="معاينة" />
                        <div className="admin-img-actions">
                          <NeoButton variant="yellow" size="sm" onClick={() => triggerUpload(q.key)}>
                            🔄 تغيير
                          </NeoButton>
                          <NeoButton variant="danger" size="sm" onClick={() => handleDeleteImage(q.key)}>
                            🗑️
                          </NeoButton>
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="admin-upload-zone"
                        onClick={() => triggerUpload(q.key)}
                      >
                        <div className="admin-upload-icon">📤</div>
                        <div className="admin-upload-text">اضغط لرفع صورة</div>
                      </button>
                    )}

                    <input
                      ref={(el) => fileInputRefs.current[q.key] = el}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileUpload(q.key, e)}
                    />
                  </div>

                  <div className="admin-answer-hint">
                    💡 الإجابة: <strong>{q.options[q.correct]}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
