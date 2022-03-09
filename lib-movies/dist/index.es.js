import React, { useState, useEffect } from 'react';
export { default as ReactFromModule } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".btn-search{background-color:#000;border-radius:3px;color:#f5f5f5;font-size:medium;height:auto;padding:6px}";
styleInject(css_248z$2);

function SearchButton(_ref) {
  var handleSearch = _ref.handleSearch;
      _ref.props;
      var label = _ref.label;
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleSearch,
    className: "btn-search"
  }, label);
}

var css_248z$1 = ".head{background-color:#000;color:#f5f5f5;font-size:large;font-weight:900;height:54px}.flex-list{align-items:center;display:flex;height:30px;justify-content:space-between;list-style:none;padding-top:13px;text-decoration:none}";
styleInject(css_248z$1);

function Header(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "flex-list"
  }, /*#__PURE__*/React.createElement("li", null, "Movie Data Base Search"))));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var css_248z = ".card{align-items:center;background-color:#4b4b4b;border:3px solid #ff565a;border-radius:15px;color:#f5f5f5;display:flex;height:auto;justify-content:space-around;padding:15px;position:relative;transition:transform .5s}.poster{width:100%}.hidden{display:none}.info{position:relative}.container{margin:15px auto auto;width:70%}.card:hover{transform:scale(1.2);z-index:1}.linkimdb{color:#008488;text-decoration:none}.lingimdb :hover{color:#008488;cursor:pointer}.linkimdb :active,.linkimdb :visited{color:#008488}";
styleInject(css_248z);

function Card(_ref) {
  var obj = _ref.obj;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      cc = _useState2[0],
      setCc = _useState2[1];

  function handleClick() {
    console.log(cc);
    setCc(function (val) {
      return val ? false : true;
    });
    console.log("insde");
    console.log(cc);
  }

  useEffect(function () {}, []);

  function convertType(input) {
    if (input == "movie") {
      return "Movie";
    } else if (input == "series") {
      return "Series";
    } else {
      return input;
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: cc ? " card" : " upside card",
    onMouseEnter: handleClick,
    onMouseLeave: handleClick
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "poster",
    src: obj.Poster
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: cc ? " info" : "info "
  }, /*#__PURE__*/React.createElement("h1", null, obj.Title), /*#__PURE__*/React.createElement("h3", null), /*#__PURE__*/React.createElement("h3", null, "Type: ", convertType(obj.Type)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Year: ", obj.Year, " "), /*#__PURE__*/React.createElement("a", {
    className: "linkimdb",
    href: "https://www.imdb.com/title/".concat(obj.imdbID)
  }, "Link to IMDB"))))));
}

export { Card, Header, SearchButton };
