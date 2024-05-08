import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Firms = () => {
  const { getFirms } = useStockRequest();
  const data = useSelector((item) => item.firms.firms);

  console.log(data);

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <>
<Typography textAlign="center" padding="10px" margin="15px">FIRMS</Typography>
<Button sx={{
  color:"white",
  backgroundColor: "gray",
  padding: "10px",
  marginBottom: "20px"
}}>NEW FIRM</Button>
<Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2.5rem",
        

      }}
    >
    
      {data?.map((firm) => (
        <Card
          key={firm.name}
          sx={{
            maxWidth: 365,
            height:"380px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {firm.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" margin="10px">
              {firm.address}
            </Typography>
          <CardMedia
            sx={{ height: 140, objectFit: "contain", maxHeight: "140px" }}
            image={firm.image}
            component="img"
          />
          <CardContent>
            
            <Typography textAlign="center" margin="10px">{firm.phone}</Typography>
          </CardContent>
          <CardActions >
            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
    </>
    
    
  );
};

export default Firms;
