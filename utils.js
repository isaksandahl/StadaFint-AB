const crypto = require("crypto");
const bcrypt = require("bcrypt");

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

  function validateEmailAddress(input) {
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(input)) {
      return 1;
    } else {
      return -1;
    }
  }

  module.exports = {
    getHashedPassword,
    validateUsername,
    hashedPassword,
    validateEmailAddress,
  }