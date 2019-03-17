module.exports = {
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost/skill-trade',
  PORT: process.env.PORT || 8080,
  JWT_SECRET:process.env.JWT_SECRET,
  JWT_EXPIRY:process.env.JWT_EXPIRY || "7d",

}
