
const axiospost = ()=>{
    let dataobj={
        data:document.getElementById('input1').value,
        name:document.getElementById("input2").value,
        content:document.getElementById("input3").value, 
        id:document.getElementById("id").value
    }
    axios.post('http://localhost:8888/api',dataobj)
}
document.getElementById("btn2").addEventListener('click',axiospost)


const axiosdelete = ()=>{
  let name = document.getElementById('delete1').value
     
  axios.delete(`http://localhost:8888/api/${name}`)
}
document.getElementById("deletebtn").addEventListener('click',axiosdelete)

const axiosgetdata = ()=>{
    axios.get('http://localhost:8888/api')
  .then(function (response) {
    // handle success
    console.log(response);
    document.getElementById("dbdata").innerHTML = JSON.stringify(response.data)
  })
  
}
document.getElementById("getdata").addEventListener('click',axiosgetdata)
