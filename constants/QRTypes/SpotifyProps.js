import React from "react";
import { calcWidth } from "../../helper/res";
import { Entypo } from "@expo/vector-icons";

const SpotifyProps = {
  icon: <Entypo name="spotify" size={calcWidth(10)} color="#1DB954" />,
  componentProps: {
    fields: [
      {
        name: "artistName",
        placeholder: "Artist Name",
        type: "text",
        icon: <Entypo name="user" size={calcWidth(8)} color="black" />,
      },
      {
        name: "songName",
        placeholder: "Song Name",
        type: "text",
        icon: <Entypo name="music" size={calcWidth(8)} color="black" />,
      },
    ],
    generateQRContent: ({ artistName, songName }) => {
      if (artistName && songName) {
        return `https://open.spotify.com/artist/${encodeURIComponent(artistName)}/track/${encodeURIComponent(songName)}`;
      } else {
        return "";
      }
    },
  },
};

export default SpotifyProps;
