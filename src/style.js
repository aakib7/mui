import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
    container:{
        // backgroundColor: "red",
        // marginTop:"23px",
        // backgroundColor:theme.pallete.background.paper,
        // padding:theme.spacing(8,0,6),    
    },
    icon:{
        marginRight:"20px",

    },
    buttons:{
        marginTop:"40px",
    },
    cardGrid:{
        padding:"20px 0",

    },
    card:{
        height:"100%",
        display:"flex",
        flexDirection:"column",
    },
    cardMedia:{
        paddingTop:"56.25%" // aspect ratio of 16:9
    },
    cardContent:{
        flexGrow:"1",
    },
    footer:{
        backgroundColor:"blue",
        marginTop:"50px",
        padding:"20px 0"
    }

}));

export default useStyles;