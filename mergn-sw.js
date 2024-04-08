const _0x135d57 = _0xa904;
(function (_0x51e7bc, _0x35af6c) {
  const _0xdaa879 = _0xa904,
    _0x5cf84e = _0x51e7bc();
  while (!![]) {
    try {
      const _0x54c11c =
        parseInt(_0xdaa879(0x81)) / 0x1 +
        (-parseInt(_0xdaa879(0x9d)) / 0x2) *
          (-parseInt(_0xdaa879(0xa7)) / 0x3) +
        parseInt(_0xdaa879(0x82)) / 0x4 +
        (-parseInt(_0xdaa879(0x98)) / 0x5) *
          (-parseInt(_0xdaa879(0xad)) / 0x6) +
        parseInt(_0xdaa879(0xac)) / 0x7 +
        parseInt(_0xdaa879(0xa3)) / 0x8 +
        (-parseInt(_0xdaa879(0x97)) / 0x9) * (parseInt(_0xdaa879(0x9c)) / 0xa);
      if (_0x54c11c === _0x35af6c) break;
      else _0x5cf84e["push"](_0x5cf84e["shift"]());
    } catch (_0x20fd3b) {
      _0x5cf84e["push"](_0x5cf84e["shift"]());
    }
  }
})(_0xab8f, 0xe7a5e);
let API_KEY = "";
const API_BASE_URL = _0x135d57(0xa4),
  EVENT_BASE_URL = _0x135d57(0xae),
  EVENT_RECORD_EVENT_URL = _0x135d57(0xa6);
let events = {},
  operatingSystem = "",
  osVersion = "",
  Platform = "",
  customerId = "";
const recordEvent = ({
  campaignCustomerInstanceId: _0x48b44b,
  eventName: _0x2a4053,
  name: _0x3c521c,
}) => {
  const _0x333111 = _0x135d57;
  fetch(
    API_BASE_URL + _0x333111(0x93) + EVENT_BASE_URL + EVENT_RECORD_EVENT_URL,
    {
      body: JSON[_0x333111(0x9f)]({
        customerId: customerId,
        events: [
          {
            campaignCustomerInstanceId: _0x48b44b,
            eventId: events[_0x2a4053]?.["id"] || "",
            eventProperties: [
              {
                eventPropertyId:
                  events[_0x2a4053]?.["eventProperty"]?.[_0x333111(0x8e)]?.[
                    "id"
                  ],
                value: Platform,
              },
              {
                eventPropertyId:
                  events[_0x2a4053]?.["eventProperty"]?.[_0x333111(0xa2)]?.[
                    "id"
                  ],
                value: operatingSystem,
              },
              {
                eventPropertyId:
                  events[_0x2a4053]?.[_0x333111(0xa9)]?.["os-version"]?.["id"],
                value: osVersion,
              },
            ],
            name: _0x3c521c,
            sessionId: _0x333111(0xa0),
          },
        ],
      }),
      headers: { Authorization: API_KEY, "Content-Type": _0x333111(0xa8) },
      method: "POST",
    }
  );
};
function _0xab8f() {
  const _0x4b1e55 = [
    "abcd",
    "skipWaiting",
    "operating-system",
    "2598840szndNU",
    "https://u23z4zsda8.execute-api.ap-southeast-1.amazonaws.com/Prod/sdk-management/api",
    "notificationclick",
    "/record-event",
    "69WfckIi",
    "application/json",
    "eventProperty",
    "events",
    "osVersion",
    "6554569AaRBSr",
    "1914cxbNaT",
    "/event",
    "focus",
    "view",
    "Web\x20Push\x20Notification\x20Closed",
    "openWindow",
    "close",
    "503731qUhnnZ",
    "4583348tJpFkV",
    "click",
    "window",
    "campaignCustomerInstanceId",
    "matchAll",
    "parse",
    "options",
    "push",
    "title",
    "API_KEY",
    "customerId",
    "then",
    "Platform",
    "length",
    "waitUntil",
    "addEventListener",
    "install",
    "/v2",
    "notificationclose",
    "Web\x20Push\x20Notification\x20Clicked",
    "data",
    "1408734AkWsLa",
    "12785jbfmxo",
    "notification",
    "action",
    "operatingSystem",
    "190FdEBLs",
    "17074gsYMgQ",
    "url",
    "stringify",
  ];
  _0xab8f = function () {
    return _0x4b1e55;
  };
  return _0xab8f();
}
function _0xa904(_0x348193, _0xed3e84) {
  const _0xab8f50 = _0xab8f();
  return (
    (_0xa904 = function (_0xa9043e, _0x19f368) {
      _0xa9043e = _0xa9043e - 0x81;
      let _0x525313 = _0xab8f50[_0xa9043e];
      return _0x525313;
    }),
    _0xa904(_0x348193, _0xed3e84)
  );
}
self[_0x135d57(0x91)]("message", (_0x396624) => {
  const _0x2af337 = _0x135d57;
  try {
    const _0x1530e6 = _0x396624[_0x2af337(0x96)]
      ? JSON[_0x2af337(0x87)](_0x396624[_0x2af337(0x96)])
      : null;
    _0x1530e6 &&
      (_0x1530e6 &&
        _0x1530e6["API_KEY"] &&
        (API_KEY = _0x1530e6[_0x2af337(0x8b)]),
      _0x1530e6 && _0x1530e6["events"] && (events = _0x1530e6[_0x2af337(0xaa)]),
      _0x1530e6 &&
        _0x1530e6[_0x2af337(0x9b)] &&
        (operatingSystem = _0x1530e6[_0x2af337(0x9b)]),
      _0x1530e6 &&
        _0x1530e6[_0x2af337(0xab)] &&
        (osVersion = _0x1530e6[_0x2af337(0xab)]),
      _0x1530e6 &&
        _0x1530e6[_0x2af337(0x8e)] &&
        (Platform = _0x1530e6[_0x2af337(0x8e)]),
      _0x1530e6 &&
        _0x1530e6[_0x2af337(0x8c)] &&
        (customerId = _0x1530e6["customerId"]));
  } catch (_0x58ffcc) {}
}),
  self[_0x135d57(0x91)](_0x135d57(0x89), async function (_0x5d090f) {
    const _0x17f9d0 = _0x135d57;
    try {
      if (_0x5d090f[_0x17f9d0(0x96)]) {
        const _0x487cfc = _0x5d090f["data"]["json"]();
        _0x5d090f[_0x17f9d0(0x90)](
          self["registration"]["showNotification"](
            _0x487cfc[_0x17f9d0(0x8a)],
            _0x487cfc[_0x17f9d0(0x88)]
          )
        ),
          recordEvent({
            campaignCustomerInstanceId:
              _0x487cfc[_0x17f9d0(0x88)][_0x17f9d0(0x96)][_0x17f9d0(0x85)] ||
              "",
            eventName: "Web\x20Push\x20Notification\x20Viewed",
            name: _0x17f9d0(0xb0),
          });
      }
    } catch (_0x56bc32) {}
  }),
  self[_0x135d57(0x91)](_0x135d57(0xa5), function (_0x38a9b2) {
    const _0x54d9b5 = _0x135d57;
    try {
      _0x38a9b2[_0x54d9b5(0x99)][_0x54d9b5(0xb3)]();
      if (_0x38a9b2[_0x54d9b5(0x9a)] === "action1") {
      } else {
        if (_0x38a9b2[_0x54d9b5(0x9a)] === "action2") {
        } else {
          var _0x502d40 =
            _0x38a9b2[_0x54d9b5(0x99)][_0x54d9b5(0x96)][_0x54d9b5(0x9e)];
          _0x38a9b2[_0x54d9b5(0x90)](
            clients[_0x54d9b5(0x86)]({
              includeUncontrolled: !![],
              type: _0x54d9b5(0x84),
            })[_0x54d9b5(0x8d)](function (_0x4bad2e) {
              const _0x123f3e = _0x54d9b5;
              var _0x24a62e = null;
              for (
                var _0x5da78c = 0x0;
                _0x5da78c < _0x4bad2e[_0x123f3e(0x8f)];
                _0x5da78c++
              ) {
                var _0x274087 = _0x4bad2e[_0x5da78c];
                if (_0x274087[_0x123f3e(0x9e)] === _0x502d40) {
                  _0x24a62e = _0x274087;
                  break;
                }
              }
              return _0x24a62e
                ? _0x24a62e[_0x123f3e(0xaf)]()
                : clients[_0x123f3e(0xb2)](_0x502d40);
            })
          ),
            recordEvent({
              campaignCustomerInstanceId:
                _0x38a9b2[_0x54d9b5(0x99)][_0x54d9b5(0x96)][_0x54d9b5(0x85)] ||
                "",
              eventName: _0x54d9b5(0x95),
              name: _0x54d9b5(0x83),
            });
        }
      }
    } catch (_0x452cb5) {}
  }),
  self[_0x135d57(0x91)](_0x135d57(0x94), function (_0x166be4) {
    const _0x2c664e = _0x135d57;
    try {
      recordEvent({
        campaignCustomerInstanceId:
          event[_0x2c664e(0x99)][_0x2c664e(0x96)][
            "campaignCustomerInstanceId"
          ] || "",
        eventName: _0x2c664e(0xb1),
        name: _0x2c664e(0xb3),
      });
    } catch (_0x1ea901) {}
  }),
  self["addEventListener"](_0x135d57(0x92), function (_0x192ba4) {
    const _0x232e8a = _0x135d57;
    _0x192ba4[_0x232e8a(0x90)](self[_0x232e8a(0xa1)]());
  });
