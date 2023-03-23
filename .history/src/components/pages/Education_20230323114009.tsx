import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Section from '../Section';

export default function EducationComponent() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Section id={"Education"}
    headTitle={"Education"}
    title={"Education"}
    >

    <div data-aos="fade-up" data-aos-duration="1000" className='px-6 py-6'>
      <Accordion style={{
        background:"#00628B",
        color:"white"
      }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "white"
          }}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography> */}
          <Typography sx={{ color: 'white', textTransform:"uppercase" }}>Bachelor in Business of Hospitality Management-2022 AD</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography>
          Institution/ college : Mid valley Int’l college
          </Typography>
          <Typography>
          University/ Board :HELP University Malaysia
          </Typography>

          <Typography>
          Division :Internship completed
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion   style={{
        background:"#00628B",
        color:"white"
      }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "white"
          }}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography> */}
          <Typography sx={{ color: 'white', textTransform:"uppercase"  }}>
          HIGN SCHOOL SECONDADRY EDUCATION-2017 AD
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
           
        <Typography>
          Institution/ college : Milestone int’l college
          </Typography>
          <Typography>
          University/ Board : Higher Secondary Education Board (HSEB), Nepal
          </Typography>

          <Typography>
          Division : First
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion   style={{
        background:"#00628B",
        color:"white"
      }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "white"
          }}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography 
         sx={{ color: 'white', textTransform:"uppercase" }}
          >
             School leaving certificate {"(SLC)"} - 2015 AD
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
           
           <Typography>
             Institution/ college : Sainik awahiya mahavidhalaya
             </Typography>
             <Typography>
             University/ Board : Nepal
             </Typography>
   
             <Typography>
             Division : First
             </Typography>
         
        </AccordionDetails>
      </Accordion>
          {/* 
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
          <Typography >HIGN SCHOOL SECONDADRY EDUCATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
            </Section>
  );
}