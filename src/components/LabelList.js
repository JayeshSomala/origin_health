import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LabelIcon from '@mui/icons-material/Label';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function LabelList({ labels }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav">
                {labels && labels.map((label) => (
                    <ListItem key={label.id}>
                        <ListItemIcon>
                            <LabelIcon />
                        </ListItemIcon>
                        <ListItemText primary={label.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

LabelList.propTypes = {
    labels: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default LabelList;
