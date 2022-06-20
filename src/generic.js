import { useControls, Wizard, Step } from "react-decision-tree-flow";

import {useState, useEffect } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Tree  = {

    gender: ['female', 'male'],

    female: ['obst_history', 'breast_cancer'],
    male: ['prost_cancer'],

    obst_history:[],
    breast_cancer:[],
    prost_cancer: []
}       


const StepsDetails = { 
    'gender': {
        name: 'gender',
        type_of_input: 'radio_button',
        question: 'Your Gender:', 
        options: ['female', 'male']
    },

    
    'female': {
        name: 'female',
        type_of_input: 'button',
        question: 'women diseases:',
        options: ['obst_history']
    },

    
    'male':{
        name: 'male',
        type_of_input: 'button',
        question: 'Men diseases:',
        options: ['prost_cancer']
    },
    
    'obst_history':{
        name: 'obst_history',
        type_of_input: '',
        question: "Fill in your answers",
        options:[]
    },

    'breast_cancer':{
        name: 'breast_cancer',
        type_of_input: '',
        question: "Fill in your answers",
        options:[]
    },

    'prost_cancer':{
        name: 'prost_cancer',
        type_of_input: '',
        question: "Fill in your answers",
        options:[]
    }

};

const Generic = () => {

    const { step, destinations } = useControls();
    const [value, setValue] = useState();


    useEffect( () => {
        console.log(step);

        }, [step])


    // const handleChange = (event) => {
    //         setValue(event.target.value);
    //         console.log(value);
    //     };
    
    // const handleClick = () => {};





// A function that handles the type of the input

    const InputType = () => {

        console.log(StepsDetails[step].type_of_input);
        switch (StepsDetails[step].type_of_input)
        {

            case 'button':
                return(
                    <>
                        {
                            Object.entries(destinations).map(([stepName, goToStep]) => {
                            return (
                                <button key={stepName} onClick={goToStep}>
                                    {stepName}
                                </button>
                            );})

                        }
                    </>);

            case 'radio_button':
                return(
                    <>
                        {
                            Object.entries(destinations).map(([stepName, goToStep]) => {
                            return(
                                <>
                                    <RadioGroup 
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        // defaultValue={StepsDetails[step].options[0]}
                                        name="radio-buttons-group"
                                        value={value}
                                        onChange={goToStep}>
                
                        
                                        <FormControlLabel 
                                            key={stepName}
                                            value={stepName}
                                            control={<Radio/>}
                                            label={stepName} />

                                    </RadioGroup>

                                </>

                            );})

                        }

                
                                {/* // <button key={StepsDetails[step].name}  onClick={goToStep}>
                                //     Next
                                // </button> */}
                    </>);          
                        
            default: return(
                <p>There is no type_of_input</p>
            );
        }
    }








    return(
        <>
        
            <Step name={StepsDetails[step].name}>

                <span>{StepsDetails[step].name}</span><br/>
                <span>{StepsDetails[step].question}</span>
                <br/>
                {InputType()}
                
            </Step> 
             
        </>
    );


};


const MyWizard = () => {
    return (
        <Wizard tree={Tree} first="gender">
            <Generic />
        
        </Wizard>
    );
};

    

export {Tree, StepsDetails, MyWizard, Generic};