try {
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
  const Second_Try_Lyrics = require(`songlyrics`).default;
  const First_Try_Lyrics = require("genius-lyrics");
  const Third_Try_Lyrics = require(`music-lyrics`);
  const GeniusClient = new First_Try_Lyrics.Client();
  console.clear();
  const Song = "Sayonara";
  // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
  (async () => {
    try {
      try {
        console.log(`πGenius-Lyricsπ    β¬‘==========================β¬‘`);
        const searches = await GeniusClient.songs.search(Song);
        const GeniusSong = searches[0];
        const Geniuslyrics = await GeniusSong.lyrics();
        console.log(
          `${GeniusSong.raw.title}
${GeniusSong.raw.url}
${GeniusSong.raw.song_art_image_thumbnail_url}
${Geniuslyrics}`
        );
      } catch (e) {
        try {
          console.log(`πMusic-Lyricsπ    β¬‘==========================β¬‘`);
          const lyricssong = await Second_Try_Lyrics(Song);
          console.log(
            `${lyricssong.source.name}
${lyricssong.source.link}
${lyricssong.lyrics}`
          );
        } catch (e) {
          try {
          } catch (e) {
            console.log(`πSong-Lyricsπ    β¬‘==========================β¬‘`);
            const lyric = await Third_Try_Lyrics.search(Song);
            console.log(lyric);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  })();
} catch (βΞ±Π²ΡΡΡΟΡ) {
  console.log(βΞ±Π²ΡΡΡΟΡ);
}
