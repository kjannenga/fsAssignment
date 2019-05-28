var fs = require('fs');

// challenge1

fs.readFile("./challenge1/info.txt", "utf8", (err, info) => {
    if (err){ throw err;
    }else{
        console.log(info)
    }
    
});

// challenge2

let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
names = names + '\nKrystine\nAndrew\nAnthony\nBrad\nClarance\nKatie\nMarie\nRaffi\nRyan\nSeth\nTom\nAlejandro\nBrian\nDaniel\nShawn\nShirley'
fs.writeFileSync('./challenge2/info.txt', names)


//challenge3

fs.renameSync("./challenge3/binfo.txt", "./challenge3/info.txt", (err, info) => {
    if (err) {
        throw err;
    } else {
        console.log(info)
    }

});

//challenge4



fs.mkdir('./challenge4/copyfolder', (err) => {

        fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt')
        console.log('source.txt was copied to destination.txt');
    
})

//challenge5


fs.readFile('./challenge5/info.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/-/g, ' ');

    fs.writeFile('./challenge5/info.txt', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});


//challenge 6

// Display all files that end with ".txt".Don 't hard code the file names!

var path = require('path');
var dirPath = path.resolve("./challenge6"); 
var filesList;
fs.readdir(dirPath, function (err, files) {
    filesList = files.filter(function (e) {
        return path.extname(e).toLowerCase() === '.txt'
    });
    console.log(filesList);
});