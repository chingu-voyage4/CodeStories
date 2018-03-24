
/**
 * Check if a file is an image or not
 * @param {*} file
 */
const isImage = file => {
  if (!file.type.includes('image')) throw new Error("Only images are supported !");
  return true;
};

/**
 * Read file as data URL
 * @param {*} file
 * @return { Promise }
 */
export const getImageDataURL = file => {
  if (!isImage(file)) return;
  const reader = new FileReader(file);
  reader.readAsDataURL(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Fail to read file'));
  });
};

/**
 * Generate random string or chars
 */
export const getRandomKey = () => Math.random().toString(36).slice(-9);
