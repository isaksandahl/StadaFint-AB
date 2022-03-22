const getHashedPassword = (hashedPassword) => {
    const sha256 = crypto.createHash("sha256");
    const hash = sha256.update(hashedPassword).digest("base64");
    return hash;
  };

  function validateUsername(username) {
    let valid = true;
  
    valid = valid && username.length > 3;
  
    return valid;
  }