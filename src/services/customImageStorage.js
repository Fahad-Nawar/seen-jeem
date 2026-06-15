// Custom Image Storage - Save user-uploaded images locally
// Uses localStorage with base64 encoding

const STORAGE_KEY = 'yadee_custom_images';

/**
 * Generate a unique key for a question
 */
export function getQuestionKey(categoryId, points, questionIndex) {
  return `${categoryId}_${points}_${questionIndex}`;
}

/**
 * Load all custom images
 */
export function loadCustomImages() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

/**
 * Save a custom image for a specific question
 */
export function saveCustomImage(key, base64Data) {
  try {
    const images = loadCustomImages();
    images[key] = base64Data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    return true;
  } catch (e) {
    console.error('Failed to save image:', e);
    return false;
  }
}

/**
 * Get a custom image for a question (if exists)
 */
export function getCustomImage(key) {
  const images = loadCustomImages();
  return images[key] || null;
}

/**
 * Delete a custom image
 */
export function deleteCustomImage(key) {
  try {
    const images = loadCustomImages();
    delete images[key];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    return true;
  } catch {
    return false;
  }
}

/**
 * Convert a File to base64 with optional resizing
 */
export function fileToBase64(file, maxWidth = 800) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Resize if too large
        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to JPEG with 0.85 quality to reduce size
        const base64 = canvas.toDataURL('image/jpeg', 0.85);
        resolve(base64);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Clear all custom images
 */
export function clearAllCustomImages() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Get storage usage info
 */
export function getStorageInfo() {
  const images = loadCustomImages();
  const count = Object.keys(images).length;
  const sizeBytes = new Blob([JSON.stringify(images)]).size;
  return {
    count,
    sizeKB: Math.round(sizeBytes / 1024),
    sizeMB: (sizeBytes / 1024 / 1024).toFixed(2)
  };
}
