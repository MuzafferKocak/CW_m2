import { useEffect, useState } from "react";
// import useAxios from "../services/useAxios"
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";
import BasicModal from "../components/firmsModal";




// export const getFirms = async () => {
//   try {
//     const { data } = axiosToken("/firms")
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const Firms = () => {
  // const { axiosToken } = useAxios()
  // const { getFirms, getSales } = useStockRequest()
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFirmId, setSelectedFirmId] = useState(null);
;

  const handleOpenModal = (firmId) => {
    setIsModalOpen(true);
    setSelectedFirmId(firmId);
  };

  const handleCloseModal = ()=> {
    setIsModalOpen(false)
  }

  useEffect(() => {
    // getFirms()
    // getSales()
    // getStock("sales")
    getStock("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Firms
      </Typography>

      <Button variant="contained" onClick={handleOpenModal}>New Firm</Button>

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} openModal={handleOpenModal} />
          </Grid>
        ))}
      </Grid>
      <BasicModal open={isModalOpen} handleClose={handleCloseModal} selectedFirmId={selectedFirmId} />
    </div>
  );
};

export default Firms;
