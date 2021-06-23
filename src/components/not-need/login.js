import { Button, List, ListItem, TextField } from '@material-ui/core'
import React from 'react'

const Login = (props) => {

    return <div>
        <List style={{ marginLeft: '30%' }}>
            <ListItem>
                <TextField
                    id="outlined-textarea"
                    label="Name"
                    placeholder="enter your user name"
                    multiline
                    variant="outlined"
                />
            </ListItem>
            <ListItem>
                <TextField
                    id="outlined-textarea"
                    label="First Name"
                    placeholder="enter your name"
                    multiline
                    variant="outlined"
                />
            </ListItem>
            <ListItem>
                <TextField
                    id="outlined-textarea"
                    label="Last Name"
                    placeholder="enter your name"
                    multiline
                    variant="outlined"
                />
            </ListItem>
            <ListItem>
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    placeholder="enter your name"
                    multiline
                    variant="outlined"
                />
            </ListItem>
            <ListItem>
                <TextField
                    id="outlined-textarea"
                    label="Password"
                    placeholder="enter your name"
                    multiline
                    variant="outlined"
                />
            </ListItem>
            <ListItem>
                <Button variant="contained" color="primary" href="#contained-buttons">Sign Up</Button>
            </ListItem>
        </List>
    </div>
}

export default Login