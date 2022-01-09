// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/data.json":[function(require,module,exports) {
module.exports = [{
  "name": "Mercury",
  "overview": {
    "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
  },
  "structure": {
    "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
  },
  "geology": {
    "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
  },
  "rotation": "58.6 Days",
  "revolution": "87.97 Days",
  "radius": "2,439.7 KM",
  "temperature": "430°c",
  "images": {
    "planet": "./assets/planet-mercury.svg",
    "internal": "./assets/planet-mercury-internal.svg",
    "geology": "./assets/geology-mercury.png"
  }
}, {
  "name": "Venus",
  "overview": {
    "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    "source": "https://en.wikipedia.org/wiki/Venus"
  },
  "structure": {
    "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
  },
  "geology": {
    "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
  },
  "rotation": "243 Days",
  "revolution": "224.7 Days",
  "radius": "6,051.8 KM",
  "temperature": "471°c",
  "images": {
    "planet": "./assets/planet-venus.svg",
    "internal": "./assets/planet-venus-internal.svg",
    "geology": "./assets/geology-venus.png"
  }
}, {
  "name": "Earth",
  "overview": {
    "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    "source": "https://en.wikipedia.org/wiki/Earth"
  },
  "structure": {
    "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
  },
  "geology": {
    "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    "source": "https://en.wikipedia.org/wiki/Earth#Surface"
  },
  "rotation": "0.99 Days",
  "revolution": "365.26 Days",
  "radius": "6,371 KM",
  "temperature": "16°c",
  "images": {
    "planet": "./assets/planet-earth.svg",
    "internal": "./assets/planet-earth-internal.svg",
    "geology": "./assets/geology-earth.png"
  }
}, {
  "name": "Mars",
  "overview": {
    "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
    "source": "https://en.wikipedia.org/wiki/Mars"
  },
  "structure": {
    "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
  },
  "geology": {
    "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
  },
  "rotation": "1.03 Days",
  "revolution": "1.88 Years",
  "radius": "3,389.5 KM",
  "temperature": "-28°c",
  "images": {
    "planet": "./assets/planet-mars.svg",
    "internal": "./assets/planet-mars-internal.svg",
    "geology": "./assets/geology-mars.png"
  }
}, {
  "name": "Jupiter",
  "overview": {
    "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    "source": "https://en.wikipedia.org/wiki/Jupiter"
  },
  "structure": {
    "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
  },
  "geology": {
    "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
  },
  "rotation": "9.93 Hours",
  "revolution": "11.86 Years",
  "radius": "69,911 KM",
  "temperature": "-108°c",
  "images": {
    "planet": "./assets/planet-jupiter.svg",
    "internal": "./assets/planet-jupiter-internal.svg",
    "geology": "./assets/geology-jupiter.png"
  }
}, {
  "name": "Saturn",
  "overview": {
    "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    "source": "https://en.wikipedia.org/wiki/Saturn"
  },
  "structure": {
    "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
  },
  "geology": {
    "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
    "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
  },
  "rotation": "10.8 Hours",
  "revolution": "29.46 Years",
  "radius": "58,232 KM",
  "temperature": "-138°c",
  "images": {
    "planet": "./assets/planet-saturn.svg",
    "internal": "./assets/planet-saturn-internal.svg",
    "geology": "./assets/geology-saturn.png"
  }
}, {
  "name": "Uranus",
  "overview": {
    "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    "source": "https://en.wikipedia.org/wiki/Uranus"
  },
  "structure": {
    "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
  },
  "geology": {
    "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
  },
  "rotation": "17.2 Hours",
  "revolution": "84 Years",
  "radius": "25,362 KM",
  "temperature": "-195°c",
  "images": {
    "planet": "./assets/planet-uranus.svg",
    "internal": "./assets/planet-uranus-internal.svg",
    "geology": "./assets/geology-uranus.png"
  }
}, {
  "name": "Neptune",
  "overview": {
    "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    "source": "https://en.wikipedia.org/wiki/Neptune"
  },
  "structure": {
    "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
  },
  "geology": {
    "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
  },
  "rotation": "16.08 Hours",
  "revolution": "164.79 Years",
  "radius": "24,622 KM",
  "temperature": "-201°c",
  "images": {
    "planet": "./assets/planet-neptune.svg",
    "internal": "./assets/planet-neptune-internal.svg",
    "geology": "./assets/geology-neptune.png"
  }
}];
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mobile menu
var menuButton = document.getElementById("menu-toggle-button"); // use the DOM to access the hamburger button

function hamburger() {
  // declare all variables
  var menu = document.getElementById("menu"); // use the DOM to access the navigation menu

  if (menu.style.display !== 'block') {
    // if the menu is hidden, then display it
    menu.style.display = 'block';
    menu.classList.add('fade-in'); // add a fade effect when menu appears on screen

    menuButton.style.color = '#838391'; // change color to show menu is open
  } else {
    menu.style.display = 'none'; // if the menu is open, hide it again

    menuButton.style.color = '#FFFFFF'; // change color to show menu is closed
  }
}

menuButton.addEventListener("click", hamburger); // mobile planet structure navigation

var planetOverviewBtn, planetStructureBtn, planetSurfaceBtn, planetContentContainer, planetSrc; // declare all buttons, containers, and links

planetOverviewBtn = document.getElementById("planet-overview-button");
planetStructureBtn = document.getElementById("planet-internal-structure-button");
planetSurfaceBtn = document.getElementById("planet-surface-geology-button");
planetContentContainer = document.getElementById("planet-content-container");
planetSrc = document.getElementById("planet-source");
var body = document.body;

function getPlanetDataByType(dataType) {
  var currentPlanet = body.dataset.planet; // check body to see what data is being displayed

  var match = _data.default.find(function (planet) {
    return planet.name === currentPlanet;
  });

  if (dataType === "overview") {
    planetContentContainer.innerHTML = match.overview.content;
    planetSrc.href = match.overview.source;
    toggleActive(planetOverviewBtn);
  } else if (dataType === "structure") {
    planetContentContainer.innerHTML = match.structure.content;
    planetSrc.href = match.structure.source;
  } else if (dataType === "geology") {
    planetContentContainer.innerHTML = match.geology.content;
    planetSrc.href = match.geology.source;
  }
}

planetOverviewBtn.addEventListener("click", getPlanetDataByType.bind(void 0, 'overview'));
planetStructureBtn.addEventListener("click", getPlanetDataByType.bind(void 0, 'structure'));
planetSurfaceBtn.addEventListener("click", getPlanetDataByType.bind(void 0, 'geology'));
},{"./data.json":"js/data.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53123" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map