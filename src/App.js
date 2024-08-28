import './App.css';
import DataTable from 'react-data-table-component';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

function App() {

    // Instance/ VM ID - I1,I2,I3
    // VM Name - nodebox
    // Type - micro, mini, large
    // User
    // Status - running, stopped, terminated

    const conditionalStyles = [{
        when: row => row.status === 'Running',
        style: {
            color: 'purple'
        }
    }]

    const columns = [
        { name: 'Instance / VM ID', selector: row => row.vmid },
        { name: 'VM Name', selector: row => row.vmname },
        { name: 'Type', selector: row => row.type },
        { name: 'Username', selector: row => row.username },
        { name: 'Status', selector: row => row.status }
    ];

    const data = [
        { vmid: 'I1', vmname: 'I1NAME', type: 'micro', username: 'User1', status: 'Running' },
        { vmid: 'I2', vmname: 'I2NAME', type: 'mini', username: 'User2', status: 'Running' }
    ];

    function onStart() {

    }

    function onStop() {

    }

    function launchVM() {

    }

    useEffect(() => {

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ marginVertical: 10, textAlign: 'left', paddingLeft: 10 }}>{'Some Heading'}</h1>
                <div className="buttonHeader">
                    <Button onClick={onStart} variant={'contained'} color={'success'}>{'Start'}</Button>
                    <Button onClick={onStop} variant={'contained'} color={'error'}>{'Stop'}</Button>
                    <Button onClick={launchVM} variant={'contained'}>{'Launch VM'}</Button>
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination={data.length > 10 ? true : false}
                    selectableRows
                    onSelectedRowsChange={(item) => console.log('send request', item)}
                    conditionalRowStyles={conditionalStyles}
                    responsive
                    striped
                    highlightOnHover
                />
            </header>
        </div>
    );
}

export default App;
