import React from "react";

import Typography from "@mui/material/Typography";
// or
//! named import yöntemi development asamasinda bundle size'i artirdigi icin yavaslamaya sebeb olabilir
// import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack, Button } from "@mui/material";

const TypoButtons = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          p: 2,
          mt: 3,
        }}
      >
        <Typography variant="h1" component="h3">
          Deneme
        </Typography>
        <Typography variant="body1" color="violet">
          bu bir elementir
        </Typography>
        <Typography variant="body2" color="#dc143c">
          bu bir elementir
        </Typography>
        <Typography variant="subtitle1" color="primary">
          bu bir elementir
        </Typography>
        <Typography variant="subtitle2" color="secondary" mt={2}>
          bu bir elementir
        </Typography>
        <Typography variant="button" color="error" mt={2} flexWrap={"wrap"}>
          bu bir elementir
        </Typography>
      </Box>
      <Typography variant="h2" align="center" color="turquoise" mt={4}>
        BUTTONS
      </Typography>

      <Stack direction={"row"} mt={3} gap={2} justifyContent={"center"}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" color="error">Outlined</Button>
        <Button variant="contained" color="warning">Outlined</Button>
        <Button variant="contained" sx={{color:"black", backgroundColor: "#bede", ":hover": {backgroundColor:"#3ac798ed"}}} color="warning">Outlined</Button>
      </Stack>
    </div>
  );
};

export default TypoButtons;
