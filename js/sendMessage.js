var ws;
    var SocketCreated = false;
    var isUserloggedout = false;

    function ToggleConnectionClicked() {
      if (SocketCreated && (ws.readyState == 0 || ws.readyState == 1)) {
        SocketCreated = false;
        isUserloggedout = true;
      } else {
        try {
          if ("WebSocket" in window) {
            ws = new WebSocket("ws://118.123.22.198:4141");
          }
          else if ("MozWebSocket" in window) {
            ws = new MozWebSocket("ws://118.123.22.198:4141");
          }
          SocketCreated = true;
          isUserloggedout = false;
        } catch (ex) {
          return;
        }
        ws.onopen = WSonOpen;
      }
    };
    function WSonOpen() {
      ws.send("新云翻译器：姓名：" + document.getElementById("contactName").value + "\n邮箱：" + document.getElementById("contactEmail").value + "\n内容：" + document.getElementById("contactMessage").value);
        alert("发送成功！");  
    };