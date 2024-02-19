const addbutton = document.getElementById('add')
addbutton.onclick(()=>{
    const musicname = document.createElement('label')
    const artistname = document.createElement('label')
    
    musicname.innerHTML='曲名<input type="text" name="musicname" />'
    artistname.innerHTML='作曲者<input type="te/xt" name="artistname" />'

    addbutton.before([musicname,artistname])
})