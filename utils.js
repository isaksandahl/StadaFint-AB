const getHashedPassword = (hashedPassword) => {
    const sha256 = crypto.createHash("sha256");
    const hash = sha256.update(hashedPassword).digest("base64");
    return hash;
  };

  const hashedPassword = (password) => {
    const hashValue = bcrypt.hashSync(password, 12);
  
    return hashValue;
  };

  function validateUsername(username) {
    let valid = true;
  
    valid = valid && username.length > 3;
  
    return valid;
  };

  module.exports = {
    getHashedPassword,
    validateUsername,
    hashedPassword,
  }