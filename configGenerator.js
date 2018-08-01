function generateConfig() {
  const configJSON = {
    "blacklistShowInfractions": document.getElementById('blacklistShowInfractions').checked,
    "blacklistIgnoreAdmins": document.getElementById('blacklistIgnoreAdmins').checked
  };

  const e = document.getElementById("b64string");
  const strJSON = JSON.stringify(configJSON);
  e.innerHTML = btoa(strJSON);
}

function loadConfig() {
  const b64 = getParameterByName('cfg');
  console.log(b64);
  if (b64) {
    try {
      const json = JSON.parse(atob(b64));
      document.getElementById('blacklistShowInfractions').checked = json.blacklistShowInfractions;
      document.getElementById('blacklistIgnoreAdmins').checked = json.blacklistIgnoreAdmins;
      document.getElementById('b64string').innerHTML = b64;
    } catch (e) {
      alert(`Failed to load config from url: ${e}`);
    }
  }
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}