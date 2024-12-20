import './index.css';

function handleError () {
  console.log('ERROR')
}

window.onloadTurnstileCallback = function () {
  turnstile.render("#container", {
    sitekey: "0x4AAAAAAA3GsJWym_dVagkx",
    callback: function (token: string) {
      console.log(`Challenge Success ${token}`);
    },
    language: 'en',
    size: 'compact',
    'expired-callback': handleError,
    'error-callback': handleError
  });
};
