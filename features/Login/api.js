export const login = (username, password) =>
  fetch(`http://192.168.1.169:8888/login?username=${username}&password=${password}`)
    .then(r => r.json());
