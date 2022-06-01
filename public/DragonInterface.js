//const { burnToken } = require("@metaplex/js/lib/actions");

window.dragon = {
  /// after unity instace loaded, this method will be called by unity object(dragonEventHandler)
  initialize: function () {
    var root = document.getElementById('root');
    root.style.display = 'block';
  },

  walletConnect: function (address) {
    window.dragon.walletAddress = address.toString();
    if (unityInstance != undefined)
      unityInstance.SendMessage('Canvas', 'walletConnect', address.toString());
  },

  checkWalletConnect: function () {
    if (window.dragon.walletAddress != undefined)
      unityInstance.SendMessage('Canvas', 'walletConnect', window.dragon.walletAddress);
  }

  // data = true or false
  // if data is true, show connect wallet burnToken and false not show.

  // window.dragon.ShowConnectBtn = function (data) {
  //   setShowBtn(data)
  // }
}