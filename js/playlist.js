const playlist = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    cover: "assets/covers/queen.jpg",
    audio: "assets/music/queen.mp3"
  },
  {
    id: 2,
    title: "Billie Jean",
    artist: "Michael Jackson",
    cover: "assets/covers/billie-jean.jpg",
    audio: "assets/music/billie-jean.mp3"
  }
];
playlist.forEach(createDisc);