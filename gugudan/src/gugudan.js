var nums = [2, 3, 4, 6, 7, 8, 9]
var nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var css_container = {
    display: 'flex',
    padding: 20
}

var css_column = {
    width: '150px'
}



var test =

    <div style={css_container}>
        {nums.map((num) => <div key={num} style={css_column}>
            {nums2.map((num2) => <div style={{color: num%2===0?'black':'blue'}}>{num}x{num2}={num * num2}</div>)}
        </div>)}
    </div>;

export { test };
