System.register(["./Server.js"], function (exports_1, context_1) {
    "use strict";
    var Server_js_1, server;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Server_js_1_1) {
                Server_js_1 = Server_js_1_1;
            }
        ],
        execute: function () {
            server = new Server_js_1.default();
            server.startServer();
        }
    };
});
//# sourceMappingURL=main.js.map