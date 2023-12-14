const gallery=[]
const image={}
const $dataColor=document.querySelector('.date-picker')
console.log ($dataColor)
$dataColor.addEventListener('click', function () {
    console.log (document.querySelector('.search').value)
    fetchData(document.querySelector('.search').value)
}
)

async function fetchData (date) {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=6D3lRGcC7TLDn0Aq3oSU88FbMv0cnIoPxEVVCIoR&date='+date)
    const json = await response.json()
    document.getElementById('img').src =json.url
    console.log (document.getElementById('img'))
    document.querySelector('.title').textContent =json.title
    document.querySelector('.description').textContent =json.explanation
    image =json
}

document.getElementById('Add').addEventListener('click', function ()
{
gallery.push({title:image.title})
})