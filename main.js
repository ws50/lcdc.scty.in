(function(modules) { // webpackBootstrap
 	// The module cache
 	var installedModules = {};

 	// The require function
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}

 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// define getter function for harmony exports
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	// define __esModule on exports
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	// create a fake namespace object
 	// mode & 1: value is a module id, require it
 	// mode & 2: merge all properties of value into the ns
 	// mode & 4: return value when already ns object
 	// mode & 8|1: behave like require
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};

 	// getDefaultExport function for compatibility with non-harmony modules
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	// Object.prototype.hasOwnProperty.call
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	// __webpack_public_path__
 	__webpack_require__.p = "";


 	// Load entry module and return exports
 	return __webpack_require__(__webpack_require__.s = 0);
 })

 ({

"./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
(function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles.scss */ "./src/styles.scss");
    /* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _src_terminal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/terminal.js */ "./src/terminal.js");
    
    var banner = "";
    
    // Help text
    var helpText = "Available commands:\nls - Lists files\ncls - Clears display\nhelp - Lists commands\ncat <file> - Displays file\ncd <dir> - Enters directory";
    var helloText = "Hello visitor, we are Los Caballeros de Calcutta. See more in ABOUT.";

    // Contact texts
    /*var contactInfo = {
      email: '@gmail.com',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    };
    var contactList = Object.keys(contactInfo).reduce(function (result, key) {
      return result.concat(["".concat(key, " - ").concat(contactInfo[key])]);
    }, []).join('\n');
    var contactText = "\nCreated by Anders Evenrud\n\n".concat(contactList, "\n\nUse ex. 'contact twitter' to open the links.\n");
    var openContact = function openContact(key) {
      return window.open(key === 'email' ? "mailto:".concat(contactInfo[key]) : contactInfo[key]);
    };*/
    
    // File browser
    var browser = function ()
    {
        var current = '/';
        var tree = [
        {
            location: '/',
            filename: 'members1',
            type: 'directory'
        },
        {
          location: '/',
          filename: 'members2',
          type: 'directory'
        },
        {
            location: '/',
            filename: 'ABOUT',
            type: 'file',
            content: 'We are Los Caballeros de Calcutta.\
            \nEstablished - 2016, Kolkata, India.\
            \nMembership is strictly invite-only.'
        },
        {
            location: '/members1',
            filename: 'SOUMYADEEP',
            type: 'file',
            content:
             'Name            : Soumyadeep Pal\
            \nMember          : Since 2016\
            \nInterest        : IT Engineer, Management Consultant\
            \nEducation       : Jadavpur University, IIM Calcutta\
            \nDistinctions    : NTSE, KVPY, University Gold Medal\
            \nOrganizations   : Red Cross, Rotaract, E**, P**, A**\
            \nReference       : IN-900-001'
        },
        {
            location: '/members1',
            filename: 'PRANEEL',
            type: 'file',
            content:
             'Name            : Praneel Bhattacharya\
            \nMember          : Since 2016\
            \nInterest        : Chemical Engineer, Researcher\
            \nEducation       : HIT Kolkata, IIT Guwahati\
            \nDistinctions    : Prof A N Meldrum Award, Institute Topper\
            \nOrganizations   : A**, IIChE, AIChE\
            \nReference       : IN-900-002'
        },
        {
            location: '/members1',
            filename: 'VINAYAK',
            type: 'file',
            content:
             'Name            : Vinayak Jaiswal\
            \nMember          : Since 2016\
            \nInterest        : Marketing, Business Analytics\
            \nEducation       : SXC Kolkata\
            \nDistinctions    : Ankur Puraskar for Excellence in Hindi\
            \nOrganizations   : I**, M**, P**\
            \nReference       : IN-900-003'
        },
        {
            location: '/members1',
            filename: 'BODHISATWA',
            type: 'file',
            content:
             'Name            : Bodhisatwa Bhattacharya\
            \nMember          : Since 2016\
            \nInterest        : Institutional Trader\
            \nEducation       : BIT Mesra, IIT Madras\
            \nDistinctions    : SAT India Top Performer Award\
            \nOrganizations   : SINP, S**, IASc, S**, P**, F**\
            \nReference       : IN-900-004'
        },
        {
            location: '/members1',
            filename: 'ARYA',
            type: 'file',
            content:
             'Name            : Arya Chakravarty\
            \nMember          : Since 2016\
            \nInterest        : Auditing, Mergers & Acquisitions\
            \nEducation       : SXC Kolkata, ICAI\
            \nDistinctions    : Chartered Accountant\
            \nOrganizations   : D**\
            \nReference       : IN-900-005'
        },
        {
            location: '/members1',
            filename: 'SUPRATIM',
            type: 'file',
            content:
             'Name            : Supratim Mukherjee\
            \nMember          : Since 2017\
            \nInterest        : IT Engineer\
            \nEducation       : Jadavpur University\
            \nDistinctions    : ***\
            \nOrganizations   : ***\
            \nReference       : IN-900-006'
        },
        {
            location: '/members1',
            filename: 'RISHAV',
            type: 'file',
            content:
             'Name            : Rishav Dutta\
            \nMember          : Since 2017\
            \nInterest        : Electronics Engineer\
            \nEducation       : IEM Kolkata\
            \nDistinctions    : ***\
            \nOrganizations   : ***\
            \nReference       : IN-900-007'
        },
        {
            location: '/members1',
            filename: 'ZUBIN',
            type: 'file',
            content:
             'Name            : Zubin Pandit\
            \nMember          : Since 2018\
            \nInterest        : CS Engineer\
            \nEducation       : VIT Bhopal\
            \nDistinctions    : ***\
            \nOrganizations   : ***\
            \nReference       : IN-900-008'
        },
        {
            location: '/members1',
            filename: 'BISWARUP',
            type: 'file',
            content:
             'Name            : Biswarup Roy\
            \nMember          : Since 2018\
            \nInterest        : CS Engineer\
            \nEducation       : SNU Kolkata\
            \nDistinctions    : ***\
            \nOrganizations   : ***\
            \nReference       : IN-900-009'
        },
        {
            location: '/members1',
            filename: 'ADITYA',
            type: 'file',
            content:
             'Name            : Aditya Mitra\
            \nMember          : Since 2018\
            \nInterest        : CS Engineer, Cybersecurity Specialist\
            \nEducation       : VIT-AP University\
            \nDistinctions    : SIH National Winner\
            \nOrganizations   : F**, I**, D**, D**\
            \nReference       : IN-900-010'
        },
        {
            location: '/members1',
            filename: 'STHITADHI',
            type: 'file',
            content:
             'Name            : Sthitadhi Maitra\
            \nMember          : Since 2019\
            \nInterest        : Petroleum Engineer, ML Specialist\
            \nEducation       : IIPE Visakhapatnam\
            \nDistinctions    : ***\
            \nOrganizations   : L**, ONGC, Q**\
            \nReference       : IN-900-011'
        },
        {
            location: '/members1',
            filename: 'DEEPRO',
            type: 'file',
            content:
             'Name            : Deepro Nath\
            \nMember          : Since 2020\
            \nInterest        : Software Engineer\
            \nEducation       : IIT BHU\
            \nDistinctions    : NTSE, KVPY, INSPIRE\
            \nOrganizations   : C**\
            \nReference       : IN-900-012'
        },
        {
            location: '/members1',
            filename: 'SANKALP',
            type: 'file',
            content:
             'Name            : Sankalp Mishra\
            \nMember          : Since 2020\
            \nInterest        : Biotech Engineer\
            \nEducation       : NIT Durgapur\
            \nDistinctions    : ***\
            \nOrganizations   : ***\
            \nReference       : IN-900-013'
        },
        {
            location: '/members1',
            filename: 'ARGHYA',
            type: 'file',
            content:
             'Name            : Arghya Bhattacharya\
            \nMember          : Since 2021\
            \nInterest        : CS Engineer\
            \nEducation       : UEM Kolkata\
            \nDistinctions    : ***\
            \nOrganizations   : ***\
            \nReference       : IN-900-014'
        },
        {
            location: '/members1',
            filename: 'KUNAL',
            type: 'file',
            content:
             'Name            : Kunal Pramanick\
            \nMember          : Since 2022\
            \nInterest        : IT Engineer\
            \nEducation       : Jadavpur University\
            \nDistinctions    : ***\
            \nOrganizations   : T**\
            \nReference       : IN-900-015'
        },
        {
            location: '/members1',
            filename: 'MANAS',
            type: 'file',
            content:
             'Name            : Manas Pratim Biswas\
            \nMember          : Since 2022\
            \nInterest        : IT Engineer, AI/ML Specialist\
            \nEducation       : Jadavpur University\
            \nDistinctions    : GSoC Contributor\
            \nOrganizations   : CU, A**, DRDO, R**, Carnegie, CERN\
            \nReference       : IN-900-016'
        },
        {
            location: '/members1',
            filename: 'ANUMOY',
            type: 'file',
            content:
             'Name            : Anumoy Nandy\
            \nMember          : Since 2022\
            \nInterest        : IT Engineer\
            \nEducation       : Jadavpur University\
            \nDistinctions    : ***\
            \nOrganizations   : R**, C**, O**\
            \nReference       : IN-900-017'
        },
        {
            location: '/members1',
            filename: 'SAYAN',
            type: 'file',
            content:
             'Name            : Sayan Maji\
            \nMember          : Since 2022\
            \nInterest        : IT Engineer, Business Analytics\
            \nEducation       : Jadavpur University\
            \nDistinctions    : NTSE, JBNSTS\
            \nOrganizations   : P**, Z**\
            \nReference       : IN-900-018'
        },
        {
            location: '/members1',
            filename: 'ARIJIT',
            type: 'file',
            content:
             'Name            : Arijit Das\
            \nMember          : Since 2023\
            \nInterest        : Chemical Engineer\
            \nEducation       : IIT Patna\
            \nDistinctions    : ***\
            \nOrganizations   : NSS, A**, ONGC, IITR\
            \nReference       : IN-900-019'
        },
        {
            location: '/members1',
            filename: 'SHAGNIK',
            type: 'file',
            content:
             'Name            : Shagnik Das\
            \nMember          : Since 2023\
            \nInterest        : Mechanical Engineer\
            \nEducation       : BIT Mesra\
            \nDistinctions    : ***\
            \nOrganizations   : NSS, SAIL, K***\
            \nReference       : IN-900-020'
        },
        {
            location: '/members1',
            filename: 'SOUMYA',
            type: 'file',
            content:
             'Name            : Soumya Roychowdhury\
            \nMember          : Since 2024\
            \nInterest        : Production Engineer, Business Analytics\
            \nEducation       : Jadavpur University\
            \nDistinctions    : University Gold Medal, MITACS\
            \nOrganizations   : T**, IITKGP, Athabasca, Z**\
            \nReference       : IN-900-021'
        },
        {
            location: '/members1',
            filename: 'ABHROJYOTI',
            type: 'file',
            content:
             'Name            : Abhrojyoti Sen\
            \nMember          : Since 2024\
            \nInterest        : Electronics Engineer, Management Consultant\
            \nEducation       : Jadavpur University, IIM Ahmedabad\
            \nDistinctions    : ***\
            \nOrganizations   : T**, E**\
            \nReference       : IN-900-022'
        },
        {
            location: '/members1',
            filename: 'MRIDUL',
            type: 'file',
            content:
             'Name            : Mridul Agarwal\
            \nMember          : Since 2024\
            \nInterest        : IT Engineer, Consultant\
            \nEducation       : Jadavpur University, IIM Calcutta\
            \nDistinctions    : IIMC Placement Representative\
            \nOrganizations   : E**, A**\
            \nReference       : IN-900-023'
        },
        {
            location: '/members1',
            filename: 'ABHISHEK',
            type: 'file',
            content:
             'Name            : Abhishek Pathak\
            \nMember          : Since 2024\
            \nInterest        : Production Engineer\
            \nEducation       : Jadavpur University\
            \nDistinctions    : Siemens Scholar, HULT Prize Winner\
            \nOrganizations   : IIITDMJ, IITBHU, S**, B**, A**, S**, B**\
            \nReference       : IN-900-024'
        },
        {
            location: '/members1',
            filename: 'SHAYAMBHU',
            type: 'file',
            content:
             'Name            : Shayambhu Chaudhuri\
            \nMember          : Since 2024\
            \nInterest        : IT Engineer\
            \nEducation       : Jadavpur University\
            \nDistinctions    : ICPC International Ranker\
            \nOrganizations   : A**, S**\
            \nReference       : IN-900-025'
        },
        {
            location: '/members2',
            filename: 'NEELAK',
            type: 'file',
            content:
             'Name            : Neelak Dasgupta\
            \nMember          : Since 2025\
            \nInterest        : Marketing\
            \nEducation       : SRMIST Chennai\
            \nDistinctions    : ***\
            \nOrganizations   : D**\
            \nReference       : IN-900-026'
        },
        {
            location: '/members2',
            filename: 'ANURAJ',
            type: 'file',
            content:
             'Name            : Anuraj Chatterjee\
            \nMember          : Since 2025\
            \nInterest        : Mathematician\
            \nEducation       : IACS, IIT Madras\
            \nDistinctions    : ***\
            \nOrganizations   : IMSC, T**\
            \nReference       : IN-900-027'
        },
        {
            location: '/members2',
            filename: 'KRISH',
            type: 'file',
            content:
             'Name            : Krish Kushwaha\
            \nMember          : Since 2025\
            \nInterest        : Auditing\
            \nEducation       : SCMS Pune, IIM Calcutta\
            \nDistinctions    : ***\
            \nOrganizations   : H**, C**\
            \nReference       : IN-900-028'
        },
        {
            location: '/members2',
            filename: 'RANABIR',
            type: 'file',
            content:
             'Name            : Ranabir Basu\
            \nMember          : Since 2025\
            \nInterest        : Investment Banker\
            \nEducation       : IIT Kharagpur, IIM Calcutta\
            \nDistinctions    : CFA IRC National Winner\
            \nOrganizations   : IIMB, S**, V**, D**, A**, B**\
            \nReference       : IN-900-029'
        },
        {
            location: '/members2',
            filename: 'AYAN',
            type: 'file',
            content:
             'Name            : Ayan Kundu\
            \nMember          : Since 2025\
            \nInterest        : Historian, Researcher\
            \nEducation       : Calcutta University, Jadavpur University\
            \nDistinctions    : PhD Scholar\
            \nOrganizations   : British Library, CRPCH\
            \nReference       : IN-900-030'
        },
        {
            location: '/members2',
            filename: 'SOURYA',
            type: 'file',
            content:
             'Name            : Sourya Basu\
            \nMember          : Since 2025\
            \nInterest        : Automotive Journalist\
            \nEducation       : GSV Vadodara, Coventry University\
            \nDistinctions    : ***\
            \nOrganizations   : Indian Railways, RDSO\
            \nReference       : IN-900-031'
        }
    ];
      var fix = function fix(str) {
        return str.trim().replace(/\/+/g, '/') || '/';
      };
      var setCurrent = function setCurrent(dir) {
        if (typeof dir !== 'undefined') {
          if (dir == '..') {
            var parts = current.split('/');
            parts.pop();
            current = fix(parts.join('/'));
          } else {
            var found = tree.filter(function (iter) {
              return iter.location === current;
            }).find(function (iter) {
              return iter.filename === fix(dir);
            });
            if (found) {
              current = fix(current + '/' + dir);
            } else {
              return "Directory '".concat(dir, "' not found in '").concat(current, "'");
            }
          }
          return "Entered '".concat(current, "'");
        }
        return current;
      };
      var ls = function ls() {
        var found = tree.filter(function (iter) {
          return iter.location === current;
        });
        var fileCount = found.filter(function (iter) {
          return iter.type === 'file';
        }).length;
        var directoryCount = found.filter(function (iter) {
          return iter.type === 'directory';
        }).length;
        var status = "".concat(fileCount, " file(s), ").concat(directoryCount, " dir(s)");
        var maxlen = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(found.map(function (iter) {
          return iter.filename;
        }).map(function (n) {
          return n.length;
        })));
        var list = found.map(function (iter) {
          return "".concat(iter.filename.padEnd(maxlen + 1, ' '), " <").concat(iter.type, ">");
        }).join('\n');
        return "".concat(list, "");
        //return "".concat(list, "\n\n").concat(status, " in ").concat(current);
      };
      var cat = function cat(filename) {
        var found = tree.filter(function (iter) {
          return iter.location === current;
        });
        var foundFile = found.find(function (iter) {
          return iter.filename === filename;
        });
        if (foundFile) {
          return foundFile.content;
        }
        return "File '".concat(filename, "' not found in '").concat(current, "'");
      };
      return {
        cwd: function cwd() {
          return setCurrent();
        },
        cd: function  (dir) {
          return setCurrent(fix(dir));
        },
        cat: cat,
        ls: ls
      };
    }();
    
    ///////////////////////////////////////////////////////////////////////////////
    // MAIN
    ///////////////////////////////////////////////////////////////////////////////
    
    var load = function load() {
      var t = Object(_src_terminal_js__WEBPACK_IMPORTED_MODULE_2__["terminal"])({
        prompt: function prompt() {
          return "$ ".concat(browser.cwd(), " > ");
        },
        banner: banner,
        commands: {
          help: function help() {
            return helpText;
          },
          hello: function hello() {
            return helloText;
          },
          cwd: function cwd() {
            return browser.cwd();
          },
          cd: function cd(dir) {
            return browser.cd(dir);
          },
          ls: function ls() {
            return browser.ls();
          },
          cat: function cat(file) {
            return browser.cat(file);
          },
          cls: function cls() {
            return t.cls();
            /*t.cls();
            t.silent = true;
            return '';*/
          }/*,
          contact: function contact(key) {
            if (key in contactInfo) {
              openContact(key);
              return "Opening ".concat(key, " - ").concat(contactInfo[key]);
            }
            return contactText;
          }*/
        }
      });
    };
    document.addEventListener('DOMContentLoaded', load);
    
    /***/ }),
    
    /***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    /***/ }),
    
    /***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return arrayLikeToArray(arr);
    }
    module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    /***/ }),
    
    /***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    /***/ }),
    
    /***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    /***/ }),
    
    /***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
    var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
    var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
    var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
    function _toConsumableArray(arr) {
      return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }
    module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    /***/ }),
    
    /***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
      \***************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
    }
    module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    
    /***/ }),
    
    /***/ "./src/styles.scss":
    /*!*************************!*\
      !*** ./src/styles.scss ***!
      \*************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // extracted by mini-css-extract-plugin
    
    /***/ }),
    
    /***/ "./src/terminal.js":
    /*!*************************!*\
      !*** ./src/terminal.js ***!
      \*************************/
    /*! exports provided: terminal */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terminal", function() { return terminal; });
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
    
    

    
    // Creates initial options
    var createOptions = function createOptions(opts) {
      return Object.assign({}, {
        banner: 'Hello World',
        prompt: function prompt() {
          return '$ > ';
        },
        tickrate: 1000 / 60,
        buflen: 8,
        commands: {}
      }, opts || {});
    };
    
    // Creates our textarea element
    var createElement = function createElement(root) {
      var el = document.createElement('textarea');
      el.contentEditable = true;
      el.spellcheck = false;
      el.value = '';
      root.appendChild(el);
      return el;
    };
    
    // Keys that must be ignored
    
    // Sets text selection range
    var setSelectionRange = function setSelectionRange(input) {
      var length = input.value.length;
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(length, length);
      } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', length);
        range.moveStart('character', length);
        range.select();
      }
    };
    
    // Gets the font size of an element
    var getFontSize = function getFontSize(element) {
      return parseInt(window.getComputedStyle(element).getPropertyValue('font-size'), 10);
    };
    
    // Creates the rendering loop
    var renderer = function renderer(tickrate, onrender) {
      var lastTick = 0;
      var tick = function tick(time) {
        var now = performance.now();
        var delta = now - lastTick;
        if (delta > tickrate) {
          lastTick = now - delta % tickrate;
          onrender();
        }
        window.requestAnimationFrame(tick);
      };
      return tick;
    };
    
    // Pronts buffer onto the textarea
    var printer = function printer($element, buflen) {
      return function (buffer) {
        if (buffer.length > 0) {
          var len = Math.min(buflen, buffer.length);
          var val = buffer.splice(0, len);
          $element.value += val.join('');
          setSelectionRange($element);
          $element.scrollTop = $element.scrollHeight;
          return true;
        }
        return false;
      };
    };
    
    // Parses input
    var parser = function parser(onparsed) {
      return function (str) {
        if (str.length) {
          var args = str.split(' ').map(function (s) {
            return s.trim();
          });
          var cmd = args.splice(0, 1)[0];
          console.debug(cmd, args);
          onparsed.apply(void 0, [cmd].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)));
        }
      };
    };
    
    // Command executor
    var executor = function executor(commands) {
      return function (cmd) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return function (cb) {
          try {
            commands[cmd] ? cb(commands[cmd].apply(commands, args) + '\n') : cb("Error.\n");
            //commands[cmd] ? cb(commands[cmd].apply(commands, args) + '\n') : cb("No such command '".concat(cmd, "'\n"));
          } catch (e) {
            console.warn(e);
            cb("Error.\n");
            //cb("Exception: ".concat(e, "\n"));
          }
        };
      };
    };
    
    // Handle keyboard events
    var keyboard = function keyboard(parse) {
      var input = [];
      var keys = {
        8: 'backspace',
        13: 'enter'
      };
      var ignoreKey = function ignoreKey(code) {
        return code >= 33 && code <= 40;
      };
      var key = function key(ev) {
        return keys[ev.which || ev.keyCode];
      };
      return {
        keypress: function keypress(ev) {
          if (key(ev) === 'enter') {
            var str = input.join('').trim();
            parse(str);
            input = [];
          } else if (key(ev) !== 'backspace') {
            input.push(String.fromCharCode(ev.which || ev.keyCode));
          }
        },
        keydown: function keydown(ev) {
          if (key(ev) === 'backspace') {
            if (input.length > 0) {
              input.pop();
            } else {
              ev.preventDefault();
            }
          } else if (ignoreKey(ev.keyCode)) {
            ev.preventDefault();
          }
        }
      };
    };
    
    // Creates the terminal
    var terminal = function terminal(opts) {
      var buffer = []; // What will be output to display
      var busy = false; // If we cannot type at the moment
    
      var _createOptions = createOptions(opts),
        prompt = _createOptions.prompt,
        banner = _createOptions.banner,
        commands = _createOptions.commands,
        buflen = _createOptions.buflen,
        tickrate = _createOptions.tickrate;
      var $root = document.querySelector('#terminal');
      var $element = createElement($root);
      var fontSize = getFontSize($element);
      var width = $element.offsetWidth;
      var cwidth = Math.round(width / fontSize * 1.9); // FIXME: Should be calculated via canvas
    
      var output = function output(_output, center) {

        /*var lines = _output.split(/\n/).filter(Boolean); // filters out empty lines
        if (center) {
            lines = lines.map(function (line) {
            return line.length > 0 ? line.padStart(line.length + (cwidth / 2 - line.length / 2), ' ') : line;
            });
        }
        var append = lines.length > 0 ? lines.join('\n') + '\n' + prompt() : prompt();  
        buffer = buffer.concat(append.split(''));*/

        var lines = _output.split(/\n/);
        if (center) {
          lines = lines.map(function (line) {
            return line.length > 0 ? line.padStart(line.length + (cwidth / 2 - line.length / 2), ' ') : line;
          });
        }
        var append = lines.join('\n') + '\n' + prompt();
        //var append = lines.length > 0 ? lines.join('\n') + '\n' + prompt() : prompt();
        buffer = buffer.concat(append.split(''));

      };
      var print = printer($element, buflen);
      var execute = executor(commands);
      var onrender = function onrender() {
        return busy = print(buffer);
      };
      var onparsed = function onparsed(cmd) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        if (cmd === 'cls') {
            /*cls();
            requestAnimationFrame(() => {
            output('', false);
            });
            return;*/
            /*cls();
            output(prompt(), false);
            return;*/
            cls();
            output('', false);
            return;
        }

        return execute.apply(void 0, [cmd].concat(args))(output);
      };
      var render = renderer(tickrate, onrender);
      var parse = parser(onparsed);
      var focus = function focus() {
        return setTimeout(function () {
          return $element.focus();
        }, 1);
      };
      var kbd = keyboard(parse);
      var cls = function cls() {
        return $element.value = '';
        /*$element.value = '';   
        buffer = [];           
        setSelectionRange($element);*/
      };
      var input = function input(ev) {
        return busy ? ev.preventDefault() : kbd[ev.type](ev);
      };
      $element.addEventListener('focus', function () {
        return setSelectionRange($element);
      });
      $element.addEventListener('blur', focus);
      $element.addEventListener('keypress', input);
      $element.addEventListener('keydown', input);
      window.addEventListener('focus', focus);
      $root.addEventListener('click', focus);
      $root.appendChild($element);
      render();
      output(banner, true);
      focus();
      return {
        focus: focus,
        parse: parse,
        cls: cls,
        print: output
      };
    };
    
    /***/ }),
    
    /***/ 0:
    /*!************************!*\
      !*** multi ./index.js ***!
      \************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = __webpack_require__(/*! /Users/---/Projects/retro-css-shell-demo/index.js */"./index.js");
    
    
    /***/ })
    
    /******/ });
