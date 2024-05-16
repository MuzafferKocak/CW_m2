import { useEffect, useState } from "react"
import useStockRequest from "../services/useStockRequest"
import { Button, Container } from "@mui/material"
import SalesModal from "../components/SalesModal"
import SalesTable from "../components/SalesTable"
import TableSkeleton, {
  // ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages"
import { useSelector } from "react-redux"

const Sales = () => {
  const { getStock } = useStockRequest()
  const { sales, loading } = useSelector((state) => state.stock)

  const [open, setOpen] = useState(false)

  const initialState = { brandId: "", productId: "", quantity: "", price: "" }
  const [info, setInfo] = useState(initialState)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo(initialState)
  }

  useEffect(() => {
    getStock("products")
    getStock("sales")
    getStock("brands")
  }, []) // eslint-disable-line

  return (
    <Container maxWidth="xl">
      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>

      {loading && <TableSkeleton />}
      {!loading && !sales?.length && <NoDataMessage />}

      {!loading && sales?.length > 0 && (
        <SalesTable setInfo={setInfo} handleOpen={handleOpen} />
      )}

      <SalesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </Container>
  )
}

export default Sales