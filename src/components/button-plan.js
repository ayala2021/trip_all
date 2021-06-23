import { Button, Card, CardActionArea, CardHeader } from '@material-ui/core';
import React, { useEffect } from 'react';
import Plan from './plan'
import { Route } from 'react-router';
import { BrowserRouter, Link, Redirect, Switch, useHistory } from 'react-router-dom';

const ButtonPlan = () => {
    const history = useHistory();

    return <div>
        <Card className="root">
            <CardHeader
                title="Welcome to TripAll"
            />
            <div class="image"></div>
            <CardActionArea>
                <BrowserRouter>
                    <Button ></Button>
                    <Button color="primary" variant="contained" className="btn" onClick={() => { history.push(`/plan`) }}>לתכנון הטיול שלי</Button>
                </BrowserRouter>
            </CardActionArea>

            <br /><br />
            <Button variant="contained" className="btn">יעדים מומלצים</Button>
            <Button variant="contained" className="btn">מטיילים משתפים</Button>
        </Card>
    </div>
}
export default ButtonPlan