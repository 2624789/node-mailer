const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const authMiddleware = async (req, res, next) => {
  const accessToken = req.headers.token;

  if(accessToken === ACCESS_TOKEN) next();
  else res.status(403).json({error: "Forbidden access"});
}

module.exports = authMiddleware;
