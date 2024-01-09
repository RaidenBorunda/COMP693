let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let aaron = 'Aaron D. Tyres';
let raiden = 'Raiden Borunda';
let patrick = 'Patrick Star';
let homer = 'Homer Simpson';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron), /*#__PURE__*/React.createElement("li", null, raiden), /*#__PURE__*/React.createElement("li", null, patrick), /*#__PURE__*/React.createElement("li", null, homer));
ReactDOM.render(element, document.getElementById('content'));