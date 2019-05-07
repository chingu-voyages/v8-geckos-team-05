module.exports = {
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb+srv://chris:chris@cluster0-mk6rc.mongodb.net/test?retryWrites=true',
  PORT: process.env.PORT || 8080,
  // JWT_SECRET:process.env.JWT_SECRET,
  // JWT_EXPIRY:process.env.JWT_EXPIRY || "7d",

}
