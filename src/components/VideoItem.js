import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper elevation = {0.9} style={{ display: "flex", alignItems: "center", cursor: "pointer", height : "100px"}} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "20px", height : "100%", width : "40%" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="caption">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}
