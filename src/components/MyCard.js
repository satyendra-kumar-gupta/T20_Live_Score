import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import getMatches, { getMatcheDetails } from "../api/Api";
const MyCard = ({ match }) => {

    const [detail, setDetail] = useState({});

    const [open, setOpen] = useState(false);
    const handleClick = (id) => {
        //alert(id);
        getMatcheDetails(id)
            .then(data => {
                console.log("Match data", data)
                setDetail(data);
                handleOpen();
            })
            .catch((error) => console.log("Error", error));
    }
    const getMatchCard = () => (
        <div>
            <Card style={{ background : match.matchStarted ? "#e2e2e2":"", marginTop: 15 }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>

                        <Grid item>
                            <img style={{ width: 85 }} src={require("../img/vs.png")} alt="" />
                        </Grid>

                        <Grid item>
                            <Typography variant="h5">{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" >
                        <Button onClick={() => {
                            handleClick(match["unique_id"])
                        }} item variant="outlined" color="primary">
                            Show Details 
                    </Button>

                        <Button style={{ marginLeft: 10 }} item variant="outlined" color="primary">
                            Starting Time  {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
const handleClose=()=>{
 setOpen(false);
}

const handleOpen=()=>{
setOpen(true);
}
    const getDialog = () => (
        <Dialog 
        open={open} 
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"> {"Match Detail..."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.start}</Typography>
                    <Typography>
                        Match :
                        <span style={{fontStyle:"italic", fontWeight:"bold"}}>
                            {" "}
                             {detail.matchStarted ? "Started" : "Still not Started"}
                             </span>
                    </Typography>
                    <Typography>
                        Score : 
                        <span style={{fontStyle:"italic", fontWeight:"bold"}}>
                            {" "}
                             {detail.score}
                             </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                Close
                </Button>
            </DialogActions>

        </Dialog>
    )
    return (
        <Fragment>
        {getMatchCard()}
        {getDialog()}
        </Fragment>
    )

};
export default MyCard;