import { Checkbox, IconButton, List, ListItem, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import { addLayout, getAllLayouts, getCurrentLayout, getModel } from '../Redux/flexLayoutSlice';


const AddWidget = () => {


    // const currentLayout = useSelector(getCurrentLayout);
    const allLayouts = useSelector(getAllLayouts);
    const currentLayout = useSelector(getCurrentLayout);
    const items = [
        {
            type: "tabset",
            weight: 50,
            children: [
                {
                    type: "tab",
                    name: "Summary",
                    component: "summary",
                }
            ]
        },
        {
            type: "tabset",
            weight: 50,
            children: [
                {
                    type: "tab",
                    name: "Holdings Statement",
                    component: "holdings-statement",
                }
            ]
        },
        {
            type: "tabset",
            weight: 50,
            children: [
                {
                    type: "tab",
                    name: "Metric Impact Detail",
                    component: "mis-detail",
                }
            ]
        },
    ];

    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        console.log(value);
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        console.log(currentIndex)
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        console.log(checked)
    }

    const handleAdd = (event, item) => {
        console.log(event);

        if (checked.length > 0) {

            dispatch(
                addLayout({
                    children: checked
                })
            );
        }
        else {
            dispatch(
                addLayout({
                    children: [item]
                })
            );
        }
    }




    const [layout, setLayout] = useState(currentLayout);
    const handleLayout = (event) => {
        const val = event.target.value;
        setLayout(val);

    }


    return (
        <div>

            {/* <Select

                value={layout}
                label="Layout"
                onChange={handleLayout}
            >
                {
                    allLayouts.map((item, index) => (
                        <MenuItem key={index} value={item.layout}>{item.name}</MenuItem>
                    ))

                }


            </Select> */}
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}
                        secondaryAction={
                            <IconButton onClick={event => handleAdd(event, item)}>
                                < AddBoxIcon />
                            </IconButton>
                        }
                    >
                        <ListItemIcon>
                            <Checkbox
                                onClick={handleToggle(item)}
                                checked={checked.indexOf(item) !== -1}
                                tabIndex={-1}
                            // inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.children[0].name} />
                    </ListItem>
                ))}
            </List>
        </div>

    );
}

export default AddWidget
