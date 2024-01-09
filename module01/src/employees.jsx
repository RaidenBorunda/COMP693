let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tyres'
let raiden = 'Raiden Borunda'
let patrick = 'Patrick Star'
let homer = 'Homer Simpson'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{aaron}</li>
        <li>{raiden}</li>
        <li>{patrick}</li>
        <li>{homer}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))    