turnstile.ready(function () {
  turnstile.render("#container", {
    sitekey: "0x4AAAAAAA3GsJWym_dVagkx",
    callback: function (token: string) {
      console.log(`Challenge Success ${token}`);
    },
  });
});
