import express from 'express';
import { connectDatabase } from './db';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' });
});

// Initialize database and start server
const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      const codespaceName = process.env.CODESPACE_NAME;
      const baseUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : `http://localhost:${PORT}`;

      console.log(`\n🏋️ OctoFit Tracker API running at ${baseUrl}`);
      console.log(`📝 Health check: ${baseUrl}/api/health\n`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
