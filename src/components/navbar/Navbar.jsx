//Importing Material UI Components
import { Paper, Grid } from '@mui/material';
import logo from '../../assets/logo.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
  <Grid container sx={{flexDirection: 'row'}}>
    <Paper sx={{height: '18vh',
                top: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent'}}
                className="navbar-paper">
            <Grid item>
                    <img src={logo} style={{width: '10vw'}} />
            </Grid>

            <Grid item>
                    <ul>
                        <li>
                            <a className='nav'><h2>Rent</h2></a>
                        </li>

                        <li>
                            <a className='nav'><h2>Buy</h2></a>
                        </li>

                        <li>
                            <a className='nav'><h2>Sell</h2></a>
                        </li>
                        <li>
                            <a className='nav'><h2>Manage Property</h2></a>
                        </li>
                        <li>
                            <a className='nav'><h2>Resources</h2></a>
                        </li>
                    </ul>
            </Grid>
            
            <Grid item >
              <button style={{marginRight: '2vw', background: '#f8f7fd',borderColor: '#a1a4aa' , borderRadius: '10px', height: '4vh', width: '8vw', color: '#b8b3ff'}}>Login</button>
              <button style={{background: '#7065ef', border: 'none', borderRadius: '10px', height: '4vh', width: '10vw', color: '#f8f7fd'}}>Sign Up</button>
            </Grid>
      </Paper>
  </Grid>
  );
}
