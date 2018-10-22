//MEMBER PICTURES
import alex_li from '../resources/images/alexli.png';
import alfredo from '../resources/images/alfredo.png';
import ariel from '../resources/images/ariel.png';
import cayla_hamann from '../resources/images/caylahamann.png';
import grace_tan from '../resources/images/gracetan.png';
import jackson from '../resources/images/jackson.png';
import jeff_sward from '../resources/images/JeffSward.png';
import jaijun from '../resources/images/Jiajun.png';
import max_zhang from '../resources/images/maxZhang.png';
import navin_ramsaroop from '../resources/images/navin.png';
import rohan_rai from '../resources/images/rohanrai.png';
import venky from '../resources/images/venky.png';
import xiaoyu_yan from '../resources/images/xiyan.png';
//END MEMBER PICTURES

/*
Purpose: Create an array of objects where each object represents information
needed for a member on the team.

Each object has the form:

{
name: 'Navin Ramsaroop' ,    //FIRST AND LAST NAME
biography: 'Navin Ramsaroop is a Sophomore in the College of Engineering studying
            Computer Science and minoring in Business. Currently, he is working
            on the website for EERL and the backend for the energy monitoring
            IoT project. Outside the lab, he takes part in Engineering World Health,
            Engineering Learning Initiatives, and Engineering Ambassadors.
            He enjoys full-stack development, from frontend to backend framework design.',
picture: navin_ramsaroop,  //Look at the imports above (within the MEMBER_PICTURE comments)
}

IF THERE IS NO PICTURE ABOVE: leave out picture from the object! For example:
{
name: 'hello',
biography: 'world'
}
*/
export const MEMBERS_UNDERGRADUATES = [
  {
    name: 'Navin Ramsaroop',
    biography:
      'Navin Ramsaroop is a Sophomore in the College of Engineering studying Computer Science and minoring in Business. Currently, he is working on the website for EERL and the backend for the energy monitoring IoT project. Outside the lab, he takes part in Engineering World Health, Engineering Learning Initiatives, and Engineering Ambassadors. He enjoys full-stack development, from frontend to backend framework design.',
    picture: navin_ramsaroop
  }
];

export const MEMBERS_POST_DOCS = [];

export const MEMBERS_PHD = [];

export const MEMBERS_MASTERS = [];

export const MEMBERS_PRINCIPLE_INVESTIGATORS = [
  {
    name: 'Max Zhang',
    biography:
      'Dr. Zhang joined the Cornell MAE faculty in 2006. Prior to that, he was a research scientist at the Air Quality Research Center, University of California at Davis. Before that he was a visiting scientist to USEPA National Exposure Research Laboratory in 2000 and 2002. Dr. Zhang teaches Engineering Thermodynamics, Future Energy Systems, and Air Quality classes through the Sibley School.',
    picture: max_zhang
  }
];
