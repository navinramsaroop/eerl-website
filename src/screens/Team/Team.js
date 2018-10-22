import React from 'react';
import {
  MEMBERS_UNDERGRADUATES,
  MEMBERS_PHD,
  MEMBERS_POST_DOCS,
  MEMBERS_PRINCIPLE_INVESTIGATORS,
  MEMBERS_MASTERS
} from '../../resources/members';

import './Team.css';
import 'tachyons';

import TeamCard from '../../components/TeamComponents/TeamCard';

export default class TeamPage extends React.Component {
  render() {
    const undergradComp = MEMBERS_UNDERGRADUATES.map((member, index) => (
      <TeamCard
        card={member.picture != null}
        name={member.name}
        image={member.picture}
        bio={member.biography}
      />
    ));

    const masterComp = MEMBERS_MASTERS.map((member, index) => {
      return (
        <TeamCard
          card={member.picture != null}
          name={member.name}
          image={member.picture}
          bio={member.biography}
        />
      );
    });

    const phdComp = MEMBERS_PHD.map((member, index) => {
      return (
        <TeamCard
          card={member.picture != null}
          name={member.name}
          image={member.picture}
          bio={member.biography}
        />
      );
    });

    const postDocComp = MEMBERS_POST_DOCS.map((member, index) => {
      return (
        <TeamCard
          card={member.picture != null}
          name={member.name}
          image={member.picture}
          bio={member.biography}
        />
      );
    });

    const prinpInvComp = MEMBERS_PRINCIPLE_INVESTIGATORS.map(
      (member, index) => {
        return (
          <TeamCard
            card={member.picture != null}
            name={member.name}
            image={member.picture}
            bio={member.biography}
          />
        );
      }
    );

    return (
      <div>
        <div className="jumbo-header-team">
          <h1>THE TEAM</h1>
        </div>
        <h2>PRINCIPAL INVESTIGATOR</h2>
        <div className="flex flex-wrap justify-center">{prinpInvComp}</div>
        <h2>POST-DOC</h2>
        <div className="flex flex-wrap justify-center">{postDocComp}</div>
        <h2>PHD</h2>
        <div className="flex flex-wrap justify-center">{phdComp}</div>
        <h2>MASTERS</h2>
        <div className="flex flex-wrap justify-center">{masterComp}</div>
        <h2>UNDERGRADUATES</h2>
        <div className="flex flex-wrap justify-center">{undergradComp}</div>
      </div>
    );
  }
}

/*
<div className="flex flex-wrap justify-center">
  <TeamCard
    card
    name={'MAX ZHANG'}
    image={maxZhang}
    bio={
      'Dr. Zhang joined the Cornell MAE faculty in 2006. Prior to that, he was a research scientist at the Air Quality Research Center, University of California at Davis. Before that he was a visiting scientist to USEPA National Exposure Research Laboratory in 2000 and 2002. Dr. Zhang teaches Engineering Thermodynamics, Future Energy Systems, and Air Quality classes through the Sibley School.'
    }
  />
</div>
<h2>POST-DOC</h2>
<div className="flex flex-wrap justify-center">
  <TeamCard
    name={'SHAOJUN ZHANG'}
    bio={
      'Dr. Shaojun Zhang joined EERL in 2017, after working with Ford Motor Company for two years. He received his PhD degree in Environmental Engineering from Tsinghua University.  Shaojun was a visiting PhD  student to EERL'
    }
  />
</div>
<h2>PHD</h2>
<div className="flex flex-wrap justify-center">
  <TeamCard
    card
    name={'JEFFREY SWARD'}
    image={jeffSward}
    bio={
      "Jeff earned his BS in Mechanical Engineering from the University of New Mexico in 2016. Currently, he works to assess electricity system and air quality impacts associated with implementing New York's Clean Energy Standard (50 by '30). Specifically, his interests include locational and temporal impacts of solar photovoltaic resources -- both distributed and utility scale -- on peak energy demand and electricity system flexibility requirements during high electricity demand days as well as how air quality may be improved during these episodes resulting through reduced dispatch of 'peaker' power plants. He also serves as the President for the Cornell Energy Systems Club and on the board for the Advancing Science in Policy Club."
    }
  />
  <TeamCard
    card
    name={'JIAJUN GU'}
    image={jiajun}
    bio={
      'Coming from Shanghai, China, Jiajun is currently a Ph.D. student working at EERL with major in Mechanical Engineering. Before that, she got her bachelor’s degree in Civil Engineering from Shanghai Jiao Tong University. She has a background in modern machine learning techniques, probability and statistics, fluid mechanics and dynamics, and structural engineering. Her current research is focused on the source term estimation and spatial variation prediction for atmospheric dispersion, i.e., detecting air pollutant source magnitudes and/or locations using observations of air pollutant concentrations and knowledge of meteorological fields, and resolve the spatial variations of air pollutants in a large area once the sources are estimated. In her spare time, she likes to go hiking with family and friends, and she is also good at playing the piano and chess, swimming, cross-stitching, and cooking Chinese food. '
    }
  />
  <TeamCard
    card
    name={'ALFREDO RODRIGUEZ'}
    image={alfredo}
    bio={
      "Alfredo is a first year PhD student studying mechanical engineering. He received a BE magna cum laude in mechanical engineering from the City College of New York (2018). His past work includes the study of self-assembly kinetics in nanomaterials for improving solar cell efficiency at Brookhaven National Lab as well as a project called Hacking for Energy through PowerbridgeNY focused on remote energy monitoring of residential DERs/DRs to reduce energy costs for participants in NYC. Alfredo's EERL work focuses on applications of IoT for energy and the environment including a solar-powered woodsmoke warning system for air-quality monitoring."
    }
  />
</div>
<div className="flex flex-wrap justify-center">
  <TeamCard
    name={'BO YANG'}
    bio={
      'Bo joined EERL in 2009 as a visiting scholar, and returned in 2013 as a PhD candidate.  With his expertise in computational fluid dynamics (CFD), Bo has been developing the CTAG model to simulate the evolution of different types of exhaust plumes, including on-road vehicles, large coal-fired power plants, small natural gas combustion turbines, diesel backup generators and biomass CHPs. Bo is applying computational techniques to improve emission parameterizations of building (infrastructure) downwash impact on the local air quality.  The long-term goal is to mitigate the air pollution for the near-source residential communities.'
    }
  />
  <TeamCard
    name={'KEVIN KIRCHER'}
    bio={
      'Kevin received an MEng in engineering physics from Cornell (2009) while working at EERL and a BS magna cum laude in applied math and physics from UW-Milwaukee (2008). After graduating with MEng, Kevin interned at the Bangalore headquarters of Infosys, and was a member of the building technologies group at Lawrence Berkeley National Lab. Kevin is working on estimation and control algorithms for stochastic systems, with applications at the edge of the power grid and building systems. He is currently developing a microgrid powered by micro-hydro and solar energy.'
    }
  />

  <TeamCard
    name={'KHALED HASHAD'}
    bio={
      'Khaled joined EERL in 2016 after receiving his B.S. degree in Mechanical Engineering at University of Connecticut. His current project is to design transportation green infrastructure to mitigate near-road air pollution.'
    }
  />
  <TeamCard
    name={'LIYAN CAO'}
    bio={
      'Danyang joined EERL in 2017 as a visiting PhD student from Xi’an Jiaotong University, and is working on energy systems modeling.'
    }
  />
</div>
<h2>MASTERS</h2>
<div className="flex flex-wrap justify-center">
  <TeamCard
    card
    image={venky}
    name={'VENKTESH KATKAR'}
    bio={
      "Hello dear visitor, thank you for stopping by! I am Venktesh and I doing MS in Chemical Engineering with focus on sustainable energy systems. I did my bachelor's in chemical engineering from National Institute of Technology, Nagpur, India in 2016. Here at EERL, I am working to develop a model in order to analyze the land use impacts of anticipated growth in installed solar capacity in New York State. This model once completed, could be used to inform the policy making related to sustainable energy in NYS. Apart from my research I am highly interested in behavioral stuff such as social psychology and decision making, basically anything related to people! Please do not hesitate to shoot me an email if you have any questions or just to connect! "
    }
  />
  <TeamCard
    card
    image={ariel}
    name={'ARIEL SEMINET'}
    bio={
      'Ariel Seminet is pursuing an M.Eng in mechanical engineering with a focus in energy and sustainability. He received a BS cum laude in mechanical engineering from the University of California Irvine (UCI). In the past he has interned at Total and was the operation lead for the Advanced Energy Communities project under the Advanced Power & Energy Program at UCI. He is currently part of the engagement team on the IoT project. In his spare time, he enjoys playing the piano and is an avid scuba diver.'
    }
  />
</div>
<div className="flex flex-wrap justify-center">
  <TeamCard
    name={'KARTIKAY GUPTA'}
    bio={
      'Kartikay joined EERL in 2016 as a Mechanical Engineering MENG student, and is currently a M.S. candidate working on energy systems optimization.'
    }
  />
  <TeamCard
    name={'MAROUA JABOURI'}
    bio={
      'Maroua joined EERL in 2017 as a Mechanical Engineering MENG researcher, and is working on regional electrification of the heating sector.'
    }
  />
</div>
<h2>UNDERGRADUATES</h2>
<div className="flex flex-wrap justify-center">
  <TeamCard
    card
    image={alexli}
    bio={
      'Alex Li is currently a junior studying electrical and computer engineering and computer science. In addition to being an undergraduate researcher, he has been involved with the Cornell Rocketry Team and the Cornell Undergraduate Asia Business Society. In past summers, he has worked in software development for Lockheed Martin and Blackstone. In his free time he enjoys photography, traveling, and playing spikeball. With EERL, Alex has been involved in projects related to woodsmoke pollution monitoring, aerosol data analysis, and IoT system prototyping.'
    }
    name={'ALEXANDER LI'}
  />
  <TeamCard
    card
    image={rohanrai}
    bio={
      "I am a Junior in Cornell's Electrical Engineering program. I started working at EERL over the past summer while simultaneously working on CONSRV, an Ithaca startup. In addition to EERL, I'm a part of Engineering World Health on campus where I'm doing device design alongside the opioid addiction researchers at the NIH. My professional interests include embedded operating systems and filter design. My current projects for EERL include server management and network configuration."
    }
    name={'ROHAN RAI'}
  />
  <TeamCard
    card
    image={gracetan}
    bio={
      'Grace Tan is an electrical computer engineering major with a minor in computer science.  At EERL, she is working on projects based on IoT energy and environment sensing, specifically streaming data from an Ecobee smart thermostat.  In addition to being an undergraduate researcher at EERL, Grace is the Junior Corporate Director of the Society of Women Engineers as well as a part of the corporate team for the Institute of Electrical and Electronics Engineers.  She is also an active member of Asian American InterVarsity and loves to play piano in her free time.'
    }
    name={'GRACE TAN'}
  />
  <TeamCard
    card
    image={navin}
    bio={
      'Navin Ramsaroop is a Sophomore in the College of Engineering studying Computer Science and minoring in Business. Currently, he is working on the website for EERL and the backend for the energy monitoring IoT project. Outside the lab, he takes part in Engineering World Health, Engineering Learning Initiatives, and Engineering Ambassadors. He enjoys full-stack development, from frontend to backend framework design. '
    }
    name={'NAVIN RAMSAROOP'}
  />
  <TeamCard
    card
    image={cayla}
    bio={
      'Cayla Hamann is an undergraduate researcher studying computer and information science. In addition to her work at EERL, she is on Cornell Data Science, a campus tour guide, and the webmaster for the Cornell Outing Club. Her professional interests include interactive design and software development. In past summers, she has worked for Argonne National Lab on IoT sensing projects and for IBM as a software developer. Her current projects for EERL include web application building for IoT energy and environmental sensing.'
    }
    name={'CAYLA HAMANN'}
  />
  <TeamCard
    card
    image={xiyan}
    bio={
      'I am an undergraduate researcher studying electrical and computer engineering. I worked in EERL during 2018 summer where I worked on polling readings from an electric meter and sending that data to the The Things Network. Outside of the lab, I play flute for the Big Red Marching Band and teach as an AEW facilitator. My current projects for EERL include developing our own low cost electric meter and upgrading the current IoT metering box.'
    }
    name={'XI YAN'}
  />
  <TeamCard
    card
    image={jackson}
    bio={
      'Jackson Siff is a undergraduate researcher studying mechanical engineering. His work for EERL includes modeling solar resources as well as developing the power system and structure for the autonomous woodsmoke alert system. Additionally, he serves on the executive board for Cornell Outing Club, is the sustainability chair at his fraternity, and is involved in club wrestling. In the future, he would like to work in grid management, renewable energy, or electrification.'
    }
    name={'JACKSON SIFF'}
  />
</div>
<div className="flex flex-wrap justify-center">
  <TeamCard
    name={'MANHAL BOUARADA'}
    bio={
      'Manhal Bouarada is an undergraduate researcher majoring in Electrical and Computer Engineering and minoring in Computer Science. His interests include embedded software engineering, communications and machine learning. His current projects for EERL include designing and implementing an IoT-based energy monitoring system. '
    }
  />
</div>
</div>
*/
