import React from 'react'
import './CatalogWrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    width: 240,
    marginLeft: 3,
  },
});

function valuetext(value) {
  return `${value}$`;
}


const CatalogWrap = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <div className='Wrapper'>
      <div className='wrapper-container'>
         <div className='above'>
             <p>Choose Category</p>
            <span> <FontAwesomeIcon icon={faSortDown}/> </span>
         </div>
         <div className='under'>
          <p>Choose Category</p>
         <span> <FontAwesomeIcon icon={faSortDown}/> </span>
         </div>
      </div>

      <div className='Container'>
       <div>Ship From</div> 
       <div>Ship To</div>  
       <div>Select Supplier</div> 
      </div>

      <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>


    </div>
  )
}

export default CatalogWrap
