import { useEffect } from "react";
import {getControls, useControls, Wizard, Step } from "react-decision-tree-flow";
import ReactDOM from 'react-dom/client';



const Tree = {  

    gender: ['female', 'male'],
    isSmoke: ['smoke', 'not_smoke'],

    female: ['obst_history'],
    male: ['prost_cancer'],

    obst_history: ['breast_cancer'],
    breast_cancer: ['isSmoke'],
    prost_cancer: ['isSmoke'],
    smoke:['end'],
    not_smoke: ['smoke', 'end'],
    end: []
} 


const WizardInternals = () => {
    const { step, destinations } = useControls();
    console.log(Object.entries(destinations))

    useEffect( () => {
        console.log('I can do things with '.concat(step))
        console.log(Object.entries(destinations))
        console.log(destinations);
  
      }, [step])

      

      return (
        <>
          
        
        
          {
             Object.entries(destinations).map(([stepName, goToStep]) => {
               return (
                 <button key={stepName} onClick={goToStep}>
                   Go to {stepName}
                 </button>
               );
             })
           }

        </> 
      );
};


{/* <Step name="gender">
            <span> Hello From gender</span>
          </Step>
          <Step name="isSmoke">
            <span> Hello From isSmoke</span>
          </Step>
          <Step name="female">
            <span> Hello From female</span>
          </Step>
          <Step name="male">
            <span> Hello From male</span>
          </Step>
          <Step name="smoke">
            <span> Hello From smoke</span>
          </Step>
          <Step name="not_smoke">
            <span> Hello From not smoke</span>
          </Step> */}

const MyWizard = () => {
    return (
        <Wizard tree={Tree} first="gender">
            <WizardInternals />
        
        </Wizard>
    );
  };

export {Tree, WizardInternals, MyWizard};
// function Decision_tree (){

    // const tree = {

    //     gender: ['female', 'male'],
    //     isSmoke: ['smoke', 'not_smoke'],

    //     female: ['obst_history'],
    //     male: ['prost_cancer'],

    //     obst_history: ['breast_cancer'],
    //     breast_cancer: ['isSmoke'],
    //     prost_cancer: ['isSmoke'],
    //     smoke:['end'],
    //     not_smoke: ['smoke', 'end'],
    //     end: []
    // } 

    // const treeNum = {

    //     gender: [1, 2],
    //     isSmoke: [31, 32],

    //     female: [11],
    //     male: [21],

    //     obst_history: [12],
    //     breast_cancer: [3],
    //     prost_cancer: [3],
    //     smoke:[4],
    //     not_smoke: [31, 4],
    //     end: []
    // }

//     return ( 
//         <Wizard tree={tree} first="gender">

//             <Step name="gender">
//                 <div>
//                     your Gender:
//                     <br />
//                     <Controls>
//                         {({ destinations: {female, male} }) => (
//                             <div>
//                                 <button onClick={female}>Famale</button>
//                                 <button onClick={male}>Male</button> 
//                             </div>
//                             )}
//                     </Controls>
//                 </div>
//             </Step>

            
//             <Step name="female">
//                 <div>
//                 I am a female
//                 <br />
//                 <Controls>
//                     {({ destinations: { obst_history } }) => (
//                         <button onClick={obst_history}>Obstetric history</button>
//                     )}
//                 </Controls>
//                 </div>
//             </Step>
     
            
//             <Step name="male">
//                 <div>
//                     I am a male
//                     <br />
//                     <Controls>
//                         {({ destinations: { prost_cancer } }) => (
//                             <button onClick={prost_cancer}>Prostate cancer background</button>
//                         )}

//                     </Controls>
//                 </div>

//             </Step>


//             <Step name="obst_history">
//                 <div>
//                     Questions about the <b>obstetric history</b>
//                     <br />
//                     <Controls>
//                         {({ destinations: { breast_cancer } }) => (
//                             <button onClick={breast_cancer}>next</button>)}
//                     </Controls>
//                 </div>
//             </Step>


//             <Step name="breast_cancer">
//                 <div>
//                     Questions about the <b>breast cancer background</b>
//                     <br />
//                     <Controls>
//                     {({ destinations: { isSmoke } }) => (

//                      <button onClick={isSmoke}>next</button>)}
//                     </Controls>
//                 </div>
//             </Step>


//             <Step name="prost_cancer">
//                 <div>
//                     Questions about the <b>prostate cancer background</b>
//                     <br />
//                     <Controls>
//                         {({ destinations: { isSmoke } }) => (

//                         <button onClick={isSmoke}>next</button>)}
//                     </Controls>
//                 </div>
//             </Step>


//             <Step name="isSmoke">
//                 <div>
//                     Are you a smoker today?                   
//                     <br />
//                     <Controls>
//                     {({ destinations: { smoke, not_smoke } }) => (
//                         <div>
//                             <button onClick={smoke}>Yes</button>
//                             <button onClick={not_smoke}> No</button>
//                         </div>
//                     )}
//                     </Controls>
//                 </div>
//             </Step>


//             <Step name="smoke">
//                 <div>
//                     calculate the smoke hours                    
//                     <br />
//                     <Controls>
//                     {({ destinations: {end} }) => (
//                         <button onClick={end}>End</button>
//                     )}
//                     </Controls>
//                 </div>
//             </Step>



//             <Step name="not_smoke">
//                 <div>
//                     Have you smoked in the past?
//                     <br />
//                     <Controls>
//                     {({ destinations: { smoke, end } }) => (
//                     <div>
//                         <button onClick={smoke}>Yes</button>
//                         <button onClick={end}>No</button>
//                     </div>
//                     )}
//                     </Controls>
                    
//                 </div>
//             </Step>


//             <Step name="end">
//                 <div>
//                     Thank you for your cooperation
//                     And complete health!!!
//                     <br />
//                 </div>
//             </Step>
//         </Wizard>

//     );
  
//   }
  
//   export default Decision_tree;