export default function handler(req, res) {
  res.status(200).json({
    apiKey: process.env.FIREBASE_API_KEY,
  });
}
