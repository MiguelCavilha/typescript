function sum(a: number, b: number) {
    return a + b;
}
sum(5, 10);

const movies = [
    { title: 'Duna', duration: 155 },
    { title: 'Matrix', duration: 116 }
]

movies.forEach(movie => console.log(movie.title.toUpperCase()));