import { Link } from 'react-router-dom';
import { useState , useContext } from 'react';

//MUI
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Box from '@mui/material/Box';

//Styles
import styles from '../Styles/UserAvatar.module.css'

//Photo
import profileImg from '../assets/images/profilePic.jpg'

//Context
import { DarkModeContext } from '../context/DarkModeProvider';



export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const {darkMode} = useContext(DarkModeContext)

    const textColor = darkMode ? 'whitesmoke' : '#000'
    const textColorSoft = darkMode ? 'silver' : '#555';

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
                <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 0 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                <Avatar sx={{ width: 40, height: 40 , bgcolor: deepPurple[500] }}><img src={profileImg} className={styles.profileImg} alt="Profile Image" /></Avatar>
                </IconButton>
            </Tooltip>
            </Box>
            <Menu className='avatarMenu'
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                backgroundColor : darkMode ? '#333' : '#f6f3f3',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 35,
                    height: 35,
                    ml: -0.5,
                    mr: 1,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    // bgcolor: 'background.paper',
                    backgroundColor : darkMode ? '#333' : '#f6f3f3',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
            <MenuItem onClick={handleClose}>
                <Avatar sx={{ width: 35, height: 35 , bgcolor: deepPurple[500] }}>A</Avatar> <span style={{ color: textColor }}>Profile</span>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Avatar sx={{ width: 35, height: 35 , bgcolor: deepOrange[500] }} /> <span style={{ color: textColor }}>My account</span>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd style={{color : textColorSoft}} fontSize="small" />
                </ListItemIcon>
                <span style={{ color: textColor }}>Add another account</span>
            </MenuItem>
            <Link to='/settings' className={styles.link}>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings style={{color : textColorSoft}} fontSize="small" />
                    </ListItemIcon>
                    <span style={{ color: textColor }}>Settings</span>
                </MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout style={{color : textColorSoft}} fontSize="small" />
                </ListItemIcon>
                <span style={{ color: textColor }}>Logout</span>
            </MenuItem>
            </Menu>
        </>
    );
}