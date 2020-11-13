// action creator
export const selectSong = (song) => {
  // return an action
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
