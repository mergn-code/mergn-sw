const _0x243f01 = _0x4365;
(function (_0x167284, _0x5eeb41) {
  const _0x1ee764 = _0x4365,
    _0x53b0b6 = _0x167284();
  while (!![]) {
    try {
      const _0x56fbc6 =
        (parseInt(_0x1ee764(0x1e3)) / 0x1) *
          (-parseInt(_0x1ee764(0x1c9)) / 0x2) +
        (-parseInt(_0x1ee764(0x1a5)) / 0x3) *
          (-parseInt(_0x1ee764(0x1ae)) / 0x4) +
        (-parseInt(_0x1ee764(0x1e9)) / 0x5) *
          (-parseInt(_0x1ee764(0x19a)) / 0x6) +
        (-parseInt(_0x1ee764(0x1b2)) / 0x7) *
          (parseInt(_0x1ee764(0x197)) / 0x8) +
        parseInt(_0x1ee764(0x19f)) / 0x9 +
        (-parseInt(_0x1ee764(0x1ab)) / 0xa) *
          (parseInt(_0x1ee764(0x1e0)) / 0xb) +
        -parseInt(_0x1ee764(0x1e2)) / 0xc;
      if (_0x56fbc6 === _0x5eeb41) break;
      else _0x53b0b6["push"](_0x53b0b6["shift"]());
    } catch (_0x38a0b6) {
      _0x53b0b6["push"](_0x53b0b6["shift"]());
    }
  }
})(_0x572d, 0x394a4);
const openDatabase = () => {
    return new Promise((_0x8bb43d, _0x14c265) => {
      const _0xcf9dc8 = _0x4365;
      let _0x45499c = indexedDB[_0xcf9dc8(0x1a0)]("MyMergnDatabase", 0x1);
      (_0x45499c[_0xcf9dc8(0x1ce)] = function () {
        const _0xfc0484 = _0xcf9dc8;
        let _0x2c7416 = _0x45499c[_0xfc0484(0x199)];
        !_0x2c7416[_0xfc0484(0x1a7)]["contains"](_0xfc0484(0x1a6)) &&
          _0x2c7416["createObjectStore"](_0xfc0484(0x1a6), { keyPath: "id" });
      }),
        (_0x45499c[_0xcf9dc8(0x1a4)] = () =>
          _0x8bb43d(_0x45499c[_0xcf9dc8(0x199)])),
        (_0x45499c[_0xcf9dc8(0x1e1)] = () =>
          _0x14c265(_0x45499c[_0xcf9dc8(0x1d3)]));
    });
  },
  getConfig = async () => {
    let _0x3f8448 = await openDatabase();
    return new Promise((_0xe4c564, _0x45163e) => {
      const _0xb9ce99 = _0x4365;
      let _0x113af8 = _0x3f8448["transaction"](
          "MergnObjectStore",
          _0xb9ce99(0x1c6)
        ),
        _0x469358 = _0x113af8[_0xb9ce99(0x1ea)](_0xb9ce99(0x1a6)),
        _0x313200 = _0x469358[_0xb9ce99(0x1af)](_0xb9ce99(0x1b4));
      (_0x313200[_0xb9ce99(0x1a4)] = () => _0xe4c564(_0x313200["result"])),
        (_0x313200[_0xb9ce99(0x1e1)] = () => _0x45163e(_0x313200["error"]));
    });
  },
  logDebug = async (_0x29e0b1, _0x213a0a) => {
    const _0x10b7e5 = _0x4365;
    try {
      let _0x2c5ba9 = await getConfig();
      if (!_0x2c5ba9 || !_0x2c5ba9[_0x10b7e5(0x1cf)]) return;
      if (_0x2c5ba9[_0x10b7e5(0x1cf)] <= 0x3) {
        if (_0x29e0b1 === 0x1)
          console[_0x10b7e5(0x194)](
            _0x10b7e5(0x1ba) + new Date()[_0x10b7e5(0x1a9)](),
            _0x213a0a
          );
        else
          _0x29e0b1 === 0x2 &&
            console["error"](
              _0x10b7e5(0x1d8) + new Date()["toISOString"](),
              _0x213a0a
            );
      }
    } catch (_0x54bf60) {
      console[_0x10b7e5(0x1d3)](
        _0x54bf60?.[_0x10b7e5(0x1df)] || "Error\x20in\x20logging\x20debug"
      );
    }
  },
  toFullPath = (_0x40b4ed) => {
    const _0x47ba1d = _0x4365;
    if (
      !_0x40b4ed[_0x47ba1d(0x193)]("http://") &&
      !_0x40b4ed["startsWith"]("https://")
    )
      return _0x47ba1d(0x1cd) + _0x40b4ed;
    return _0x40b4ed;
  },
  recordEvent = async ({
    campaignCustomerInstanceId: _0x430085,
    eventName: _0x1dd63e,
    name: _0x70fc82,
  }) => {
    const _0x9ea7b = _0x4365;
    try {
      let _0x143607 = await getConfig();
      const _0x25b2d9 = {
        customerId: _0x143607[_0x9ea7b(0x1ca)],
        events: [
          {
            campaignCustomerInstanceId: _0x430085,
            eventId: _0x143607[_0x9ea7b(0x1b1)][_0x1dd63e]?.["id"] || "",
            eventProperties: [
              {
                eventPropertyId:
                  _0x143607[_0x9ea7b(0x1b1)][_0x1dd63e]?.[_0x9ea7b(0x1c8)]?.[
                    _0x9ea7b(0x1cb)
                  ]?.["id"],
                value: _0x143607[_0x9ea7b(0x1cb)],
              },
              {
                eventPropertyId:
                  _0x143607["events"][_0x1dd63e]?.[_0x9ea7b(0x1c8)]?.[
                    _0x9ea7b(0x1ac)
                  ]?.["id"],
                value: _0x143607[_0x9ea7b(0x1b7)],
              },
              {
                eventPropertyId:
                  _0x143607[_0x9ea7b(0x1b1)][_0x1dd63e]?.["eventProperty"]?.[
                    "os-version"
                  ]?.["id"],
                value: _0x143607[_0x9ea7b(0x1c0)],
              },
            ],
            name: _0x70fc82,
            sessionId: _0x9ea7b(0x1bc),
          },
        ],
      };
      try {
        const _0x428dd3 =
            "https://u23z4zsda8.execute-api.ap-southeast-1.amazonaws.com/Prod/sdk-management/api",
          _0x29836b = _0x9ea7b(0x1da),
          _0x55a240 = _0x9ea7b(0x1b3);
        fetch(_0x428dd3 + _0x9ea7b(0x1e6) + _0x29836b + _0x55a240, {
          body: JSON[_0x9ea7b(0x1c2)](_0x25b2d9),
          headers: {
            Authorization: _0x143607[_0x9ea7b(0x1b0)],
            "Content-Type": _0x9ea7b(0x1c4),
          },
          method: _0x9ea7b(0x198),
        });
      } catch (_0x41e8c6) {
        logDebug(0x2, _0x41e8c6?.[_0x9ea7b(0x1df)] || _0x9ea7b(0x1e7));
      }
      const { API_KEY: _0x52eef8, events: _0x3c292a, ..._0x39f607 } = _0x143607;
      logDebug(0x1, "Recording\x20event\x20config:\x20" + _0x39f607),
        logDebug(0x1, _0x9ea7b(0x1cc) + _0x25b2d9);
    } catch (_0x3e2dba) {
      logDebug(0x2, _0x3e2dba?.[_0x9ea7b(0x1df)] || _0x9ea7b(0x1e7));
    }
  };
function _0x572d() {
  const _0x10364c = [
    "options",
    "Web\x20Push\x20Notification\x20Closed",
    "message",
    "104445qPLBgn",
    "onerror",
    "2585256LHXCsS",
    "3dZkbOC",
    "Web\x20Push\x20Notification\x20Viewed",
    "registration",
    "/v2",
    "Error\x20in\x20recording\x20event",
    "waitUntil",
    "5rCkAAV",
    "objectStore",
    "action",
    "Error\x20in\x20notification\x20click\x20event",
    "Error\x20in\x20message\x20event",
    "Push\x20event\x20data\x20received:\x20",
    "length",
    "openWindow",
    "Notification\x20close\x20event\x20received:\x20",
    "startsWith",
    "info",
    "data",
    "Error\x20in\x20notification\x20close\x20event",
    "413432nucprh",
    "POST",
    "result",
    "2428260JhAytr",
    "Error\x20in\x20push\x20subscription\x20change\x20event",
    "matchAll",
    "then",
    "showNotification",
    "2732157urBRNl",
    "open",
    "addEventListener",
    "transaction",
    "action2",
    "onsuccess",
    "201tJeNuP",
    "MergnObjectStore",
    "objectStoreNames",
    "newSubscription",
    "toISOString",
    "campaignCustomerInstanceId",
    "60OumiSD",
    "operating-system",
    "Notification\x20click\x20event\x20received:\x20",
    "13652qtyEKA",
    "get",
    "API_KEY",
    "events",
    "7EZgrTk",
    "/record-event",
    "config",
    "/device/add-device-token",
    "readwrite",
    "operatingSystem",
    "keys",
    "close",
    "INFO:\x20",
    "skipWaiting",
    "abcd",
    "https://u23z4zsda8.execute-api.ap-southeast-1.amazonaws.com/Prod/sdk-management/api",
    "auth",
    "toJSON",
    "osVersion",
    "click",
    "stringify",
    "notificationclose",
    "application/json",
    "p256dh",
    "readonly",
    "Error\x20in\x20push\x20event",
    "eventProperty",
    "252138eVHMqA",
    "customer",
    "Platform",
    "Recording\x20event:\x20",
    "http://",
    "onupgradeneeded",
    "debugLevel",
    "url",
    "Message\x20event\x20received:\x20",
    "title",
    "error",
    "endpoint",
    "notification",
    "view",
    "json",
    "ERROR:\x20",
    "focus",
    "/event",
    "pushsubscriptionchange",
    "window",
  ];
  _0x572d = function () {
    return _0x10364c;
  };
  return _0x572d();
}
function _0x4365(_0x2f01bb, _0x358414) {
  const _0x572d27 = _0x572d();
  return (
    (_0x4365 = function (_0x43653e, _0x27bbb6) {
      _0x43653e = _0x43653e - 0x18d;
      let _0x3c3da5 = _0x572d27[_0x43653e];
      return _0x3c3da5;
    }),
    _0x4365(_0x2f01bb, _0x358414)
  );
}
self[_0x243f01(0x1a1)](_0x243f01(0x1df), async (_0x4fe1f2) => {
  const _0x2a72b3 = _0x243f01;
  try {
    let _0x2c5af8 = await getConfig();
    const _0x607bde = _0x4fe1f2["data"]
      ? JSON["parse"](_0x4fe1f2["data"])
      : null;
    if (_0x607bde) {
      let _0x42288d = await openDatabase(),
        _0x329255 = _0x42288d[_0x2a72b3(0x1a2)](
          _0x2a72b3(0x1a6),
          _0x2a72b3(0x1b6)
        ),
        _0x25f230 = _0x329255[_0x2a72b3(0x1ea)](_0x2a72b3(0x1a6)),
        _0x1a5b5e = { id: "config", ...(_0x2c5af8 || {}), ..._0x607bde };
      _0x25f230["put"](_0x1a5b5e);
    }
    if (_0x607bde["events"]) {
      const { API_KEY: _0x1c8fa, events: _0x424f0f, ..._0x198e98 } = _0x607bde;
      logDebug(0x1, _0x2a72b3(0x1d1) + JSON[_0x2a72b3(0x1c2)](_0x198e98));
    } else logDebug(0x1, _0x2a72b3(0x1d1) + JSON[_0x2a72b3(0x1c2)](_0x607bde));
    const { API_KEY: _0x6db59a, events: _0x478f65, ..._0x4c0418 } = _0x2c5af8;
    logDebug(
      0x1,
      "Message\x20event\x20config:\x20" + JSON[_0x2a72b3(0x1c2)](_0x4c0418)
    );
  } catch (_0x34b2ab) {
    logDebug(0x2, _0x34b2ab?.["message"] || _0x2a72b3(0x18e));
  }
}),
  self["addEventListener"]("push", async function (_0x350f59) {
    const _0x2ad164 = _0x243f01;
    try {
      if (_0x350f59[_0x2ad164(0x195)]) {
        const _0x15e906 = _0x350f59[_0x2ad164(0x195)][_0x2ad164(0x1d7)]();
        logDebug(0x1, _0x2ad164(0x18f) + JSON["stringify"](_0x350f59["data"])),
          _0x350f59[_0x2ad164(0x1e8)](
            self[_0x2ad164(0x1e5)][_0x2ad164(0x19e)](
              _0x15e906[_0x2ad164(0x1d2)],
              _0x15e906[_0x2ad164(0x1dd)]
            )
          ),
          recordEvent({
            campaignCustomerInstanceId:
              _0x15e906[_0x2ad164(0x1dd)][_0x2ad164(0x195)][
                "campaignCustomerInstanceId"
              ] || "",
            eventName: _0x2ad164(0x1e4),
            name: _0x2ad164(0x1d6),
          });
      }
    } catch (_0x52e5af) {
      logDebug(0x2, _0x52e5af?.[_0x2ad164(0x1df)] || _0x2ad164(0x1c7));
    }
  }),
  self["addEventListener"]("notificationclick", async function (_0x14db74) {
    const _0x3d4e3c = _0x243f01;
    try {
      logDebug(
        0x1,
        _0x3d4e3c(0x1ad) +
          JSON[_0x3d4e3c(0x1c2)](
            _0x14db74?.[_0x3d4e3c(0x1d5)]?.[_0x3d4e3c(0x195)]
          )
      ),
        _0x14db74[_0x3d4e3c(0x1d5)][_0x3d4e3c(0x1b9)]();
      if (_0x14db74[_0x3d4e3c(0x1eb)] === "action1") {
      } else {
        if (_0x14db74[_0x3d4e3c(0x1eb)] === _0x3d4e3c(0x1a3)) {
        } else {
          var _0x36c0e2 =
            _0x14db74[_0x3d4e3c(0x1d5)][_0x3d4e3c(0x195)][_0x3d4e3c(0x1d0)];
          _0x14db74[_0x3d4e3c(0x1e8)](
            clients[_0x3d4e3c(0x19c)]({
              includeUncontrolled: !![],
              type: _0x3d4e3c(0x1dc),
            })[_0x3d4e3c(0x19d)](function (_0x42f428) {
              const _0x4a7ea2 = _0x3d4e3c;
              var _0x4b9af2 = null;
              for (
                var _0x33d1e0 = 0x0;
                _0x33d1e0 < _0x42f428[_0x4a7ea2(0x190)];
                _0x33d1e0++
              ) {
                var _0x254f4b = _0x42f428[_0x33d1e0];
                if (_0x254f4b[_0x4a7ea2(0x1d0)] === _0x36c0e2) {
                  _0x4b9af2 = _0x254f4b;
                  break;
                }
              }
              return _0x4b9af2
                ? _0x4b9af2[_0x4a7ea2(0x1d9)]()
                : clients[_0x4a7ea2(0x191)](toFullPath(_0x36c0e2));
            })
          ),
            recordEvent({
              campaignCustomerInstanceId:
                _0x14db74[_0x3d4e3c(0x1d5)]["data"][_0x3d4e3c(0x1aa)] || "",
              eventName: "Web\x20Push\x20Notification\x20Clicked",
              name: _0x3d4e3c(0x1c1),
            });
        }
      }
    } catch (_0x181af0) {
      logDebug(0x2, _0x181af0?.[_0x3d4e3c(0x1df)] || _0x3d4e3c(0x18d));
    }
  }),
  self[_0x243f01(0x1a1)](_0x243f01(0x1c3), async function (_0x34bad2) {
    const _0x388754 = _0x243f01;
    try {
      logDebug(
        0x1,
        _0x388754(0x192) +
          JSON[_0x388754(0x1c2)](
            _0x34bad2?.[_0x388754(0x1d5)]?.[_0x388754(0x195)]
          )
      ),
        recordEvent({
          campaignCustomerInstanceId:
            _0x34bad2[_0x388754(0x1d5)][_0x388754(0x195)][_0x388754(0x1aa)] ||
            "",
          eventName: _0x388754(0x1de),
          name: _0x388754(0x1b9),
        });
    } catch (_0x418449) {
      logDebug(0x2, _0x418449?.[_0x388754(0x1df)] || _0x388754(0x196));
    }
  }),
  self[_0x243f01(0x1a1)]("install", function (_0x2af5b1) {
    const _0x24ee21 = _0x243f01;
    _0x2af5b1["waitUntil"](self[_0x24ee21(0x1bb)]());
  }),
  self["addEventListener"](_0x243f01(0x1db), async (_0x5c2387) => {
    const _0x5be15a = _0x243f01;
    try {
      logDebug(
        0x1,
        "Push\x20subscription\x20change\x20event\x20received:\x20" +
          JSON[_0x5be15a(0x1c2)](_0x5c2387)
      );
      let _0x3c0b1c = await getConfig();
      const _0x1f52f3 = _0x5be15a(0x1bd);
      _0x5c2387[_0x5be15a(0x1e8)](
        fetch(_0x1f52f3 + _0x5be15a(0x1b5), {
          body: JSON[_0x5be15a(0x1c2)]({
            device_id: _0x3c0b1c["device_id"],
            is_web_push_subscribed: !![],
            web_push_subscription_page_url: "/",
            web_push_token: {
              token: {
                endpoint: _0x5c2387[_0x5be15a(0x1a8)]
                  ? _0x5c2387[_0x5be15a(0x1a8)][_0x5be15a(0x1d4)]
                  : null,
                expirationTime: null,
                keys: {
                  auth: _0x5c2387[_0x5be15a(0x1a8)]
                    ? _0x5c2387[_0x5be15a(0x1a8)][_0x5be15a(0x1bf)]()[
                        _0x5be15a(0x1b8)
                      ][_0x5be15a(0x1be)]
                    : null,
                  p256dh: _0x5c2387[_0x5be15a(0x1a8)]
                    ? _0x5c2387[_0x5be15a(0x1a8)][_0x5be15a(0x1bf)]()["keys"][
                        _0x5be15a(0x1c5)
                      ]
                    : null,
                },
              },
            },
          }),
          headers: { "Content-Type": _0x5be15a(0x1c4) },
          method: _0x5be15a(0x198),
        })
      );
    } catch (_0xe8df5a) {
      logDebug(0x2, _0xe8df5a?.[_0x5be15a(0x1df)] || _0x5be15a(0x19b));
    }
  });
