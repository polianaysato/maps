import { Link } from "react-router-dom"
import React from "react"
import { styled } from '@mui/system';
import { makeStyles } from '@material-ui/core'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };

const Tab = styled(TabUnstyled)`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 13px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  width: fit-content;
  padding: 5px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: #000;
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 13px;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;


const TabsList = styled(TabsListUnstyled)`
  width: fit-content;
  background-color: #0000001a;
  border-radius: 5px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  boxShadow: 'rgb(0, 0, 0, 0.2) 0px 3px 1px -2px, rgb(0, 0, 0, 0.14) 0px 2px 2px 0px, rgb(0, 0, 0, 0.12) 0px 1px 5px 0px';
`;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '320px',
    margin: 'auto',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    top: 10,
    zIndex: 1000,
  }
}))

export const Tabs = () => {
  const classes = useStyles()


  return (
    <>
        <TabsUnstyled defaultValue='States' className={classes.container}>
            <TabsList>
              <Link to="/maps/choropleth">
                  <Tab value='States'>States</Tab>
              </Link>
              <Link to="/">
                  <Tab value='Metros'>Metros</Tab>
              </Link>
              <Link to="/maps/cluster">
                  <Tab value='Zips'>Zips</Tab>
              </Link>
            </TabsList>
        </TabsUnstyled>
    </>
  )
}




