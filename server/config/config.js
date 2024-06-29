module.exports = {
    mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@musicplayer.nnljdhv.mongodb.net/?retryWrites=true&w=majority&appName=musicplayer`,
    jwtSecret: `${process.env.JWT_SECRET}`,
    emailConfig: {
      service: 'your-email-service',
      user: 'your-email-user',
      pass: 'your-email-password'
    }
  };
  