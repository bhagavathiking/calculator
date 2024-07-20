var output=document.getElementById("output")
function view(num)
{
    output.value+=num
}
function calculate()
{
    try{
        output.value=eval(output.value)
    }
    catch(err)
    {
        alert("invaild value ")
    }
}
function empty()
{
    output.value=""
}
function del()
{
    output.value=output.value.slice(0,-1)
}
