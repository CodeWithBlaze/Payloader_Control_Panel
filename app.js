function getValue(element){
    return document.getElementById(element).value;
}
function upload(){
    
    const input1 = getValue('credentials1')
    const input2 = getValue('credentials2')
    const input3 = getValue('credentials3')

    const name = getValue('name')
    const description = getValue('description')
    const url = getValue('url')

    axios.post('http://localhost:3000/api/auth/payload',{
        box1:input1,
        box2:input2,
        box3:input3,
        name,
        description,
        url
    }).then((res)=>{
        alert("Data Added Successfully")
    }).catch((err)=>alert("Data Addition Failed"))
}