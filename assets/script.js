const hamburger = document.querySelector('#hamburger-mobile');
const nav_list = document.querySelector('.nav_list');

hamburger.addEventListener('click', () => {
    if (nav_list.classList.contains('hidden')) {
        nav_list.classList.remove('hidden');
    } else {
        nav_list.classList.add('hidden');
    }
})

const picture = document.querySelectorAll('.picture');

picture.forEach(picture => {
    picture.addEventListener('click', () => {
        // delete innerHTML
        let db_panda = [
            'https://generatorfun.com/code/uploads/Random-Panda-image-5.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-4.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-3.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-2.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-1.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-9.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-8.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-7.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-6.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-10.jpg',
            'https://generatorfun.com/code/uploads/Random-Panda-image-11.jpg'
        ];

        let random_panda = db_panda[Math.floor(Math.random() * db_panda.length)];
        picture.innerHTML = `<img src="${random_panda}" alt="panda"> <caption>
        👆 Click Me! 👆
    </caption>`;
    })
})

const uniqueFacts = document.querySelector('#unique-fact');
console.log(uniqueFacts);

const uniqueFactsList = [
    'Hewan tertua yang masih berhubungan dengan panda berumur 11 juta tahun.',
    'Panda adalah hewan yang memiliki kulit yang berwarna putih dan berbulu yang berbentuk kotak.',
    'Sudah bisa makan makanan padat sejak umur 3 bulan',
    'Panda memiliki kaki yang panjang dan lebar.',
    'Punya sistem pencernaan karnivora',
    'Menjadi simbol persahabatan dan perdamaian',
    'Mereka dapat tumbuh hingga berbobot 150kg'
]

for (let i = 0; i < uniqueFactsList.length; i++) {
    uniqueFacts.innerHTML += `<li>${uniqueFactsList[i]}</li>`;
}