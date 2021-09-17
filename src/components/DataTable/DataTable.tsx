import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; 
import { CarForm } from '../../components/CarForm'; 

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 110 },
    { 
      field: 'year', 
      headerName: 'Year', 
      width: 150, 
      editable: true,
    },
    { 
      field: 'car_make', 
      headerName: 'Make', 
      width: 150 
    },
    {
      field: 'car_model',
      headerName: 'Model',
      width: 110,
    },
    { 
      field: 'color', 
      headerName: 'Color', 
      width: 150, 
    },
    { 
      field: 'name', 
      headerName: 'Name', 
      width: 150 
    },
    {
      field: 'horsepower',
      headerName: 'Horsepower',
      width: 110,
    },
    { 
      field: 'top_speed', 
      headerName: 'Top Speed', 
      width: 150, 
      editable: true,
    },
    { 
      field: 'modifications', 
      headerName: 'Modifications', 
      width: 150 
    },
  ];
  
  export const DataTable =  () => {
  
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      server_calls.delete(`${gridData[0]}`)
      getData()
    }
  
    console.log(gridData) // a list of id's from checked rows
  
      return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>Cars in Garage</h2>
            <DataGrid 
              rows={carData} 
              columns={columns} 
              pageSize={5} 
              checkboxSelection 
              onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
              {...carData}  
            />
  
          <Button onClick={handleOpen}>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
            {/*Dialog Pop Up begin */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update A Car</DialogTitle>
            <DialogContent>
              <DialogContentText>Car id: {gridData[0]}</DialogContentText>
                <CarForm id={`${gridData[0]}`}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
          </div>
        );
  }