//MEMBER PICTURES
import alex_li from "../resources/images/alexli.png";
import alfredo from "../resources/images/alfredo.png";
import ariel from "../resources/images/ariel.png";
import grace_tan from "../resources/images/gracetan.png";
import jackson from "../resources/images/jackson.png";
import jeff_sward from "../resources/images/JeffSward.png";
import jiajun from "../resources/images/Jiajun.png";
import max_zhang from "../resources/images/maxZhang.png";
import navin_ramsaroop from "../resources/images/navin.png";
import rohan_rai from "../resources/images/rohanrai.png";
import venky from "../resources/images/venky.png";
import xiaoyu_yan from "../resources/images/xiyan.png";
import akshat_vora from "../resources/images/akshatvora.jpg";
import zach_lee from "../resources/images/zachlee.png";
import sol_puente from "../resources/images/solpuente.jpg";
// import william_wang from '../resources/images/william_wang';
// import chris_westersund from '../resources/chris_westersund.png';

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
    name: "Alexander Li",
    biography:
      "Alex Li is currently a junior studying electrical and computer engineering and computer science. In addition to being an undergraduate researcher, he has been involved with the Cornell Rocketry Team and the Cornell Undergraduate Asia Business Society. In past summers, he has worked in software development for Lockheed Martin and Blackstone. In his free time he enjoys photography, traveling, and playing spikeball. With EERL, Alex has been involved in projects related to woodsmoke pollution monitoring, aerosol data analysis, and IoT system prototyping.",
    picture: alex_li
  },
  {
    name: "Rohan Rai",
    biography:
      "I am a Junior in Cornell's Electrical Engineering program. I started working at EERL over the past summer while simultaneously working on CONSRV, an Ithaca startup. In addition to EERL, I'm a part of Engineering World Health on campus where I'm doing device design alongside the opioid addiction researchers at the NIH. My professional interests include embedded operating systems and filter design. My current projects for EERL include server management and network configuration.",
    picture: rohan_rai
  },
  {
    name: "Navin Ramsaroop",
    biography:
      "Navin Ramsaroop is a Sophomore in the College of Engineering studying Computer Science and minoring in Business. Currently, he is working on the website for EERL and the backend for the energy monitoring IoT project. Outside the lab, he takes part in Engineering World Health, Engineering Learning Initiatives, and Engineering Ambassadors. He enjoys full-stack development, from frontend to backend framework design.",
    picture: navin_ramsaroop
  },
  {
    name: "Jackson Siff",
    biography:
      "Jackson Siff is a undergraduate researcher studying mechanical engineering. His work for EERL includes modeling solar resources as well as developing the power system and structure for the autonomous woodsmoke alert system. Additionally, he serves on the executive board for Cornell Outing Club, is the sustainability chair at his fraternity, and is involved in club wrestling. In the future, he would like to work in grid management, renewable energy, or electrification.",
    picture: jackson
  },
  {
    name: "Grace Tan",
    biography:
      "Grace Tan is an electrical computer engineering major with a minor in computer science.  At EERL, she is working on projects based on IoT energy and environment sensing, specifically streaming data from an Ecobee smart thermostat.  In addition to being an undergraduate researcher at EERL, Grace is the Junior Corporate Director of the Society of Women Engineers as well as a part of the corporate team for the Institute of Electrical and Electronics Engineers.  She is also an active member of Asian American InterVarsity and loves to play piano in her free time.",
    picture: grace_tan
  },
  {
    name: "Xi Yan",
    biography:
      "I am an undergraduate researcher studying electrical and computer engineering. I worked in EERL during 2018 summer where I worked on polling readings from an electric meter and sending that data to the The Things Network. Outside of the lab, I play flute for the Big Red Marching Band and teach as an AEW facilitator. My current projects for EERL include developing our own low cost electric meter and upgrading the current IoT metering box.",
    picture: xiaoyu_yan
  },
  {
    name: "William Wang",
    biography:
      "William Wang is currently a sophomore studying computer science in the College of Arts & Sciences. As an undergraduate researcher at EERL, he is working on projects involving IoT and using environment data streamed from smart thermostats. In addition to researching at EERL, William is involved in the service fraternity Alpha Phi Omega, ACSU, and is a teaching assistant for INFO/CS 1300. His professional interests include full-stack web and software development."
  },
  {
    name: "Chris Westersund",
    biography:
      "Chris Westersund is an undergraduate researcher and Engagement Team Lead with EERL. He is a senior studying Chemical and Biomolecular Engineering with a focus on renewable energy and sustainable practices. In addition to his work with the EERL, he is the president of the Cornell Swing Dance Club, and plays trombone in the Cornell University Wind Symphony. His current project with the EERL is managing community engagement work with Cornell Cooperative Extension offices throughout New York State."
  },
  {
    name: "Manhal Bouarada",
    biography:
      "Manhal Bouarada is an undergraduate researcher majoring in Electrical and Computer Engineering and minoring in Computer Science. His interests include embedded software engineering, communications and machine learning. His current projects for EERL include designing and implementing an IoT-based energy monitoring system."
  }
];

export const MEMBERS_POST_DOCS = [
  {
    name: "Shaojiun Zhang",
    biography:
      "Dr. Shaojun Zhang joined EERL in 2017, after working with Ford Motor Company for two years. He received his PhD degree in Environmental Engineering from Tsinghua University. Shaojun was a visiting PhD student to EERL"
  }
];

export const MEMBERS_PHD = [
  {
    name: "Jiajun Gu",
    biography:
      "Coming from Shanghai, China, Jiajun is currently a Ph.D. student working at EERL with major in Mechanical Engineering. Before that, she got her bachelor’s degree in Civil Engineering from Shanghai Jiao Tong University. She has a background in modern machine learning techniques, probability and statistics, fluid mechanics and dynamics, and structural engineering. Her current research is focused on the source term estimation and spatial variation prediction for atmospheric dispersion, i.e., detecting air pollutant source magnitudes and/or locations using observations of air pollutant concentrations and knowledge of meteorological fields, and resolve the spatial variations of air pollutants in a large area once the sources are estimated. In her spare time, she likes to go hiking with family and friends, and she is also good at playing the piano and chess, swimming, cross-stitching, and cooking Chinese food.",
    picture: jiajun
  },

  {
    name: "Alfredo Rodriguez",
    biography:
      "Alfredo is a first year PhD student studying mechanical engineering. He received a BE magna cum laude in mechanical engineering from the City College of New York (2018). His past work includes the study of self-assembly kinetics in nanomaterials for improving solar cell efficiency at Brookhaven National Lab as well as a project called Hacking for Energy through PowerbridgeNY focused on remote energy monitoring of residential DERs/DRs to reduce energy costs for participants in NYC. Alfredo's EERL work focuses on applications of IoT for energy and the environment including a solar-powered woodsmoke warning system for air-quality monitoring.",
    picture: alfredo
  },
  {
    name: "Jeffrey Sward",
    biography:
      "Jeff earned his BS in Mechanical Engineering from the University of New Mexico in 2016. Currently, he works to assess electricity system and air quality impacts associated with implementing New York's Clean Energy Standard (50 by '30). Specifically, his interests include locational and temporal impacts of solar photovoltaic resources -- both distributed and utility scale -- on peak energy demand and electricity system flexibility requirements during high electricity demand days as well as how air quality may be improved during these episodes resulting through reduced dispatch of 'peaker' power plants. He also serves as the President for the Cornell Energy Systems Club and on the board for the Advancing Science in Policy Club.",
    picture: jeff_sward
  },
  {
    name: "Zach Lee",
    picture: zach_lee,
    biography:
      "Zach joined EERL in 2018 after receiving a Bachelor's in Mechanical Engineering from Auburn University. Zach's research interests involve optimization and control of energy systems. He is currently working on smart heat pump systems with a goal of making electric heating economically favorable over natural gas."
  },
  {
    name: "Bo Yang",
    biography:
      "Bo joined EERL in 2009 as a visiting scholar, and returned in 2013 as a PhD candidate.  With his expertise in computational fluid dynamics (CFD), Bo has been developing the CTAG model to simulate the evolution of different types of exhaust plumes, including on-road vehicles, large coal-fired power plants, small natural gas combustion turbines, diesel backup generators and biomass CHPs. Bo is applying computational techniques to improve emission parameterizations of building (infrastructure) downwash impact on the local air quality.  The long-term goal is to mitigate the air pollution for the near-source residential communities."
  }
];

export const MEMBERS_MASTERS = [
  {
    name: "Ariel Seminet",
    biography:
      "Ariel Seminet is pursuing an M.Eng in mechanical engineering with a focus in energy and sustainability. He received a BS cum laude in mechanical engineering from the University of California Irvine (UCI). In the past he has interned at Total and was the operation lead for the Advanced Energy Communities project under the Advanced Power & Energy Program at UCI. He is currently part of the engagement team on the IoT project. In his spare time, he enjoys playing the piano and is an avid scuba diver.",
    picture: ariel
  },
  {
    name: "Venktesh Katkar",
    picture: venky,
    biography:
      "Hello dear visitor, thank you for stopping by! I am Venktesh and I doing MS in Chemical Engineering with focus on sustainable energy systems. I did my bachelor's in chemical engineering from National Institute of Technology, Nagpur, India in 2016. Here at EERL, I am working to develop a model in order to analyze the land use impacts of anticipated growth in installed solar capacity in New York State. This model once completed, could be used to inform the policy making related to sustainable energy in NYS. Apart from my research I am highly interested in behavioral stuff such as social psychology and decision making, basically anything related to people! Please do not hesitate to shoot me an email if you have any questions or just to connect!"
  },
  {
    name: "Sol Puente",
    picture: sol_puente,
    biography:
      "Sol is a Mechanical Engineering M.Eng. international student, concentrated in the study of energy systems. She earned an undergraduate degree in Environmental Engineering from the Pontifical Catholic University of Buenos Aires (2013) and a graduate degree in Oil & Gas Production from Buenos Aires Technological Institute (2016).  She has six years of experience working in the energy industry in Argentina and has participated in several projects to improve environmental performance, mainly in oil & gas and thermoelectric power plants. She is currently working in the EERL on a project about utility-scale offshore wind deployment in New York State. Her future goal is to participate in the transition towards greater sustainability in the energy field through the integration of all energy sources."
  },
  {
    name: "Akshat Vora",
    picture: akshat_vora,
    biography:
      "Akshat Vora is an M.Eng student in Computer Science. As a member of the EERL, he is working on a project to predict the deployment of solar farms in agricultural New York."
  },
  {
    name: "Yuzhe Sheng",
    biography:
      "Yuzhe Sheng is currently an M.S. student in EERL. He graduated from the University of California, Los Angeles with a BS summa cum laude in mechanical engineering in 2016. Yuzhe is working on the machine learning model design and algorithm development for the energy disaggregation task. His research interests include statistical inference, machine learning, probabilistic reasoning, and algorithm design."
  }
];

export const MEMBERS_PRINCIPLE_INVESTIGATORS = [
  {
    name: "Max Zhang",
    biography:
      "Dr. Zhang joined the Cornell MAE faculty in 2006. Prior to that, he was a research scientist at the Air Quality Research Center, University of California at Davis. Before that he was a visiting scientist to USEPA National Exposure Research Laboratory in 2000 and 2002. Dr. Zhang teaches Engineering Thermodynamics, Future Energy Systems, and Air Quality classes through the Sibley School.",
    picture: max_zhang
  }
];
