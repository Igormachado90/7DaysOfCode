const moviesContainer = document.querySelector('.movies')

const movies = [
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Batman',
        rating: 9.2,
        year: 2022,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: true
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        title: 'Avengers',
        rating: 9.2,
        year: 2019,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: false
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
        title: 'Doctor Strange',
        rating: 9.2,
        year: 2022,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: true
    },
]

window.onload = () => {
    movies.forEach(movie => renderMovie(movie))
}

function renderMovie(movie){
    
    const { title, image, rating, year, description, isFavorited } = movie

    const movieElement = document.createElement('section')
    movieElement.classList.add('movie')
    moviesContainer.appendChild(movieElement)

    const movieInformations = document.createElement('div')
    movieInformations.classList.add('movie-informations')
    movieElement.appendChild(movieInformations)

    const movieImageContainer = document.createElement('div')
    movieImageContainer.classList.add('movie-imagem')
    const movieImagem = document.createElement('img')
    movieImagem.src = image
    movieImagem.alt = `${title} Poster`
    movieImageContainer.appendChild(movieImagem)
    movieInformations.appendChild(movieImageContainer)

    const movieTextoContainer = document.createElement('div')
    movieTextoContainer.classList.add('movie-text')
    const movieTitulo = document.createElement('span')
    movieTitulo.textContent = `${title} (${year})`
    movieTextoContainer.appendChild(movieTitulo)
    movieInformations.appendChild(movieTextoContainer)

    const informations = document.createElement('div')
    informations.classList.add('iconsEtexto')
    movieTextoContainer.appendChild(informations)

    const ratingContainer = document.createElement('div')
    ratingContainer.classList.add('icon')
    const starImage = document.createElement('img')
    starImage.src = '/Giovannar Moeller/images/Star.png'
    starImage.alt = 'Star'
    const movieRate = document.createElement('p')
    // movieRate.classList.add('movie-rate')
    movieRate.textContent = rating
    ratingContainer.appendChild(starImage)
    ratingContainer.appendChild(movieRate)
    informations.appendChild(ratingContainer)

    const FAVORITAR = document.createElement('div')
    FAVORITAR.classList.add('favorite')
    const favoriteImage = document.createElement('img')
    // favoriteImage.classList.add('favorite')
    favoriteImage.src = isFavorited ? '/Giovannar Moeller/images/heart-fill.svg' : '/Giovannar Moeller/images/heart.svg'
    favoriteImage.alt = 'Heart'
    const favoriteText = document.createElement('p')
//     // favoriteText.classList.add('movie-favorite')
    favoriteText.textContent = 'Favoritar'
    FAVORITAR.appendChild(favoriteImage)
    FAVORITAR.appendChild(favoriteText)
    informations.appendChild(FAVORITAR)

    const movieDescriptionContainer = document.createElement('div')
    movieDescriptionContainer.classList.add('quadro_paragrafo')
    const movieDescription = document.createElement('p')
    movieDescription.classList.add('paragarfo')
    movieDescription.textContent = description
    movieDescriptionContainer.appendChild(movieDescription)  
    movieElement.appendChild(movieInformations)
    movieElement.appendChild(movieDescriptionContainer)
}