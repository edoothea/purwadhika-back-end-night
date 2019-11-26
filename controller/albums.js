const shortid = require ('shortid')

let albums = {}

albums.getAll = function (req, res){
    const result = req.db.get ('albums').value()
    console.log ('RESULT', JSON.stringify(result))
    res.send(result)
}

albums.handleUpload = function (req,res, next){
    req.body.image = ''

    if (req.files && req.files.image){
        let photo = req.files.image
        let photoName = photo.name
        photo.mv('./public/'+ photoName, function (err){
            if (err){
                console.log ('Err upload file', err.message)
            }else {
                req.body.image = '/public/' + photoName
            }
            next()
        })
    }else{
        next()
    }
}

albums.insert = function (req, res){
    const data = {
        id: shortid.generate(),
        title: req.body.title,
        artist: req.body.artist,
        url: req.body.url,
        image: req.body.image,
    }

    const result = req.db
    .get ('albums')
    .push(data)
    .write ()
if (result){
    console.log ('RESULT', JSON.stringify(result))
    res.send(data)
}else {
    res.status(500).send ('General Error')
    }
}

albums.delete = function (req,res){
    const result = req.db
        .get('albums')
        .remove({id: req.params.id})
        .write()

    if (result){
        console.log('RESULT', JSON.stringify(result[0]))
        res.send(result[0])
    }else {
        res.status(500).send('General Error')
    }
}

module.exports = albums