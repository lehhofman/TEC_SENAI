const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const playlists = document.querySelectorAll('#playlist');
const coverImage = document.getElementById('coverImage');
let currentSongIndex = 0;
let currentPlaylistIndex = 0;

function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C10 5.56 9.44 5 8.75 5"/>
          </svg>
      `;
    } else {
      audioPlayer.pause();
      playPauseButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
        </svg>
      `;
    }
  }
  

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % playlists[currentPlaylistIndex].querySelectorAll('.song-item').length;
  loadSong();
}

function playPrev() {
  currentSongIndex = (currentSongIndex - 1 + playlists[currentPlaylistIndex].querySelectorAll('.song-item').length) % playlists[currentPlaylistIndex].querySelectorAll('.song-item').length;
  loadSong();
}

function loadSong() {
  const playlist = playlists[currentPlaylistIndex];
  const songItem = playlist.querySelectorAll('.song-item')[currentSongIndex];
  const songSrc = songItem.dataset.src;
  const coverSrc = songItem.querySelector('img').getAttribute('src');
  audioPlayer.src = songSrc;
  coverImage.src = coverSrc;
  audioPlayer.play();
}

playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

playlists.forEach((playlist, index) => {
  playlist.addEventListener('click', (event) => {
    const clickedIndex = Array.from(playlist.querySelectorAll('.song-item')).indexOf(event.target.closest('li'));
    if (clickedIndex !== -1) {
      currentPlaylistIndex = index;
      currentSongIndex = clickedIndex;
      loadSong();
    }
  });
});

loadSong();
