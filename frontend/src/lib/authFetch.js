const authFetch = (user, url, options) => {
  console.log("running auth fetch");
  if (Date.now() - user.timeStamp < 12000) {
    return fetch(url, options);
  } else {
    throw new Error("User is not logged in");
  }
};

export default authFetch;
