import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, } from '@mui/x-data-grid';
import supabase from '../service/superbase';
import columns from './AdministratorModel'

async function fetchRows(start, end) {
  let { data, error } = await supabase
  .from('Administrator')
  .select()

  console.log(data, error)

  return []
}



const defaultRow = [
  { id: '', first_name: '', last_name: '', email_address: '', phone_number: '', copy_of_license: '', home_address: '' },
]

export default function AdministratorPanel() {

  const [rows, setRows] = React.useState(defaultRow);

  React.useEffect(() => {
    fetchRows(0, 9).then(data => setRows(rows => [...data, ...rows,]))
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}