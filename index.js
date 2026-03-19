const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Health check route (important for DevOps)
app.get('/', (req, res) => {
  res.send('CI/CD Pipeline by judah Oyekunle is working  perfectly🚀');
});

// Optional: health endpoint (used in real deployments)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});