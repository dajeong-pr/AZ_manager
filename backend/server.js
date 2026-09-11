const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let campaignDatabase = [];
let nextId = 1;

app.get('/api/campaigns', (req, res) => {
  res.json({ success: true, count: campaignDatabase.length, data: campaignDatabase });
});

app.post('/api/campaigns', (req, res) => {
  const { formData, activeChecks } = req.body;
  const newCampaign = { id: nextId++, createdAt: new Date().toISOString(), formData, activeChecks };
  campaignDatabase.unshift(newCampaign);
  res.status(201).json({ success: true, data: newCampaign });
});

app.delete('/api/campaigns/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  campaignDatabase = campaignDatabase.filter(c => c.id !== id);
  res.json({ success: true, message: '삭제 완료' });
});

app.listen(PORT, () => {
  console.log('🚀 캠페인 백엔드 서버 가동 중: http://localhost:' + PORT);
});