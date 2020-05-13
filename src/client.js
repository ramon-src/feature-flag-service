import io from "socket.io-client";

function ConnectToggle() {
  return {
    withUrl: function (url) {
      this._url = url;
      return this;
    },
    open: function () {
      this._socket = io(this._url);
    },
  };
}
