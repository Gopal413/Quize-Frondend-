
function HanldeToken(token) {
    let tokenvalue = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
    return tokenvalue;

}

export default HanldeToken