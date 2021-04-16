function pVal(symbol){
    var val = document.getElementById('v1').value + symbol;
    if(symbol == 'C')
    {
        var len = val.length;
        var val = val.substring(0, len-2);
    }
    if(symbol == 'A')
    {
        val = '';
    }
    document.getElementById('v1').value = val;
}

function calculator(){
    var exp = document.getElementById('v1').value;
    var res = eval(exp);
    document.getElementById('v1').value = res;
}