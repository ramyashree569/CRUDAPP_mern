import  React,{useEffect,useState} from "react";
import { TextField ,withStyles, Button} from "@material-ui/core";
import useForm from './useform'
import {connect} from 'react-redux';
import  * as actions from "../actions/PostMessage"
import ButterToast,{Cinnamon} from "butter-toast";
import { AssignmentTurnedIn} from "@material-ui/icons";

const initialFieldValues = {
    title:'',
    message:''
}

const styles=theme=>({
    root:{
        '& .MuiTextField-root':{
            margin:theme.spacing(1),
        },
    },
    form:{
        display:'flex',
        flexwrap:'wrap',
        justifyContent:'center'
    },
    postBtn:{
        width:"50%"
    }
})

const PostMessageForm=({classes,...props})=>{
    useEffect(()=>{
    if(props.currentId!=0){
        setValues({
            ...props.postMessageList.find(x => x._id==props.currentId)
        })
    }
    },[props.currentId])
    const validate = () =>{
         let temp ={...errors}
         temp.title=values.title?"":"This field is required."
         temp.message=values.message?"":"This field is required."
         setErrors({
             ...temp
         })
         return Object.values(temp).every(x=> x=="")
    }

    var {
        values,
        errors,
        setErrors,
        setValues,
        handleInputChange
    }=useForm(initialFieldValues)

    const handleSubmit = e =>{
        e.preventDefault()
        const onSuccess=()=>{
            ButterToast.raise({
                content:<Cinnamon.Crisp title="Post Box"
                content="Submitted successfully"
                scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                icon={<AssignmentTurnedIn/>}/>
            })
        }
        if (validate()){
            if(props.currentId==0){
            props.createPostMessage(values,onSuccess)
            }else{
                props.updatePostMessage(props.currentId,values,onSuccess)
            }
        }
        
        console.log(values)
    }
    
    return(
        <form autocomplete="off" noValidate className={`${classes.root}`}
        onSubmit={handleSubmit}>
            <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={values.title}
            onChange={handleInputChange}
            {...(errors.title && {error:true,helperText:errors.title})}
            ></TextField>
            <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={values.message}
            multiline
            rows={4}
            onChange={handleInputChange}
            {...(errors.message && {error:true,helperText:errors.message})}
            ></TextField>
            <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.postBtn}
            >Submit</Button>
        </form>
    );
}

const mapStateToProps=state=>({
    postMessageList :state.postMessage.list
})

const mapActionToProps={
    createPostMessage: actions.create,
    updatePostMessage: actions.update,

}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(PostMessageForm));

