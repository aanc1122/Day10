function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Beyonce",
      title: "Dangerously in Love",
      release_year: 2003,
      formats: {
        1: "CD",
        2: "Album",
        3: "Playlist",
      },
    },
  };
  return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;
