document.querySelector('button').addEventListener('click', getNames)
async function getNames(){
    let rapper = document.querySelector('input').value
    const res = await fetch(`/api/${rapper}`)
    const data = await res.json()
    document.querySelector('h2').innerText = data['name']
    console.log(data)
}