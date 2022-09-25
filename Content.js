var dogeImgs = [
    "https://s3.cointelegraph.com/storage/uploads/view/bad02e8b57a64d349aa5eec318298b4b.png",
    "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvp9PbNjNUzm2oQAyNreK0IDeO6BSLK3yOkA&usqp=CAU",
    "https://lh3.googleusercontent.com/cSDJBnDhFmK5cFvzpkzBKU6jqwAfuEAyJ3ytchoaEYNRPlUHQ42PseUhd0aDPqQzq-1AHNLRk1y2hKX5H97E-fChbsJMOxLCA7kJpfOE8F0xGuhxemzLN9Et5FsNDRkDPFrgppmU",
    "https://pbs.twimg.com/media/EZgY2AOUYAM2O1S.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlIQiLfZy-DSMBZOu-2k1vgmme4Y92pkzeM5Gex6DAeHxW1lV-R3pKlIWAfFN6N52O30&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbxU534vHN-qg2HGMOYEYkOXMLg3-6s5kLJVmeQRsBv-ChF5kcAckc8K4nT0BBy3HW7g&usqp=CAU",
    "https://i.pinimg.com/originals/38/db/4e/38db4e608ae8807d25e2d56a8f4b079f.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFW9AThthMjLIWo2afgyokh0sy2YbGg0MG3vzcKFvRl2Ecgj1PoPaOXlY-XGlWvGfWacw&usqp=CAU",
    "https://i.pinimg.com/originals/1a/7c/7d/1a7c7dca668c5dd9d6c92fbbceada2aa.jpg"
];

var images = document.getElementsByTagName('img');

for(let i=0 ; i< images.length ; i++){

    let imageIndex = Math.floor(Math.random()* dogeImgs.length-1);
    images[i].src = dogeImgs[imageIndex];
}
document.onchange = ()=>{
    var images = document.getElementsByTagName('img');

    for(let i=0 ; i< images.length ; i++){
    
        let imageIndex = Math.floor(Math.random()* dogeImgs.length-1);
        images[i].src = dogeImgs[imageIndex];
    }
}

