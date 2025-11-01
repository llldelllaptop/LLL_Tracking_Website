// shared.js
function getConsignments() {
  const saved = localStorage.getItem('limelightConsignments');
  return saved ? JSON.parse(saved) : [];
}

function initializeSampleData() {
  // Single implementation
}