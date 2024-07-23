/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Tab,
  Tabs,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const projects = [
  {
    name: 'Telex',
    description:
      "Managed the development of a developers' communication tool to streamline task allocation and progress tracking for interns.",
    role: 'Product Manager',
    contributions:
      'Defined product requirements, created user stories, and coordinated with development team to ensure timely delivery.',
    technologies: ['Linear', 'Figma', 'React', 'Node.js'],
    link: 'https://docs.google.com/document/d/1SHoLdN7y2oMvpHydZ929PETHYR_EYaxEvHg3kpcEIR0/edit',
  },
  {
    name: 'Remote Bingo',
    description:
      'Managed the preliminary stages of the creation of an engaging and interactive bingo platform for remote teams to enhance team bonding and collaboration.',
    role: 'Product Manager',
    contributions:
      'Led the product vision and strategy, conducted market research and defined key features.',
    technologies: ['JavaScript', 'Node.js', 'React', 'AWS'],
    link: 'https://drive.google.com/file/d/1a7KpiSqM38mje_wD-i2wb8SeyC_tvM-T/view?usp=sharing',
  },
];

const skills = [
  'Product Strategy',
  'Agile Methodologies',
  'User Research',
  'Data Analysis',
  'Wireframing & Prototyping',
  'A/B Testing',
  'Stakeholder Management',
  'Technical Writing',
  'Project Management',
  'Cross-functional Collaboration',
];

const PMPortfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0: // Home
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Dimojiaku Obinna Anthony
            </Typography>
            <Typography variant="h6" gutterBottom>
              Innovative Product Manager | HNG Internship Alumnus | HNG 11
              Intern
            </Typography>
            <Typography variant="body1" paragraph>
              As a product manager with a passion for creating user-centric
              solutions, I bring a unique blend of technical knowledge and
              business acumen to every project. My experience in the HNG
              Internship has honed my skills in agile methodologies,
              cross-functional team leadership, and data-driven decision making.
            </Typography>
            <Typography variant="body1" paragraph>
              During my time at HNG Internship 11, I have been a member of the
              Telex team. Telex is a developers' communication tool. It is a
              tool for IT professionals such as DevOps, Product Managers,
              Project Managers, Software Engineers, and Security teams, who need
              to get real-time notifications per deliverables and achieve
              efficient communication with teammates and their deployed
              solutions. It is a product management/monitoring tool that
              significantly improved team productivity. I collaborated with
              designers, developers, and stakeholders to ensure the tool met
              both user needs and product owner's objectives.
            </Typography>
          </Box>
        );
      case 1: // Projects
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
            {projects.map((project, index) => (
              <Card key={index} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {project.description}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Role:</strong> {project.role}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Contributions:</strong> {project.contributions}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Technologies:</strong>{' '}
                    {project.technologies.join(', ')}
                  </Typography>
                  <Button
                    href={project.link}
                    target="_blank"
                    variant="contained"
                    color="primary"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        );
      case 2: // Skills
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))}
            </Box>
          </Box>
        );
      case 3: // Growth
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Professional Growth
            </Typography>
            <Typography variant="body1" paragraph>
              Through my experience at HNG Internship, I've gained invaluable
              insights into product development lifecycle, stakeholder
              management, and the importance of data-driven decision making.
              I've learned to:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Effectively communicate product vision across diverse teams" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prioritize features based on user needs and business impact" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Implement agile methodologies to improve team efficiency" />
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              Moving forward, I plan to further enhance my skills in:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Advanced data analytics and machine learning applications in product development" />
              </ListItem>
              <ListItem>
                <ListItemText primary="UX research methodologies to gain deeper user insights" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Product strategy in emerging technologies like AR/VR" />
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              I'm committed to continuous learning and staying updated with the
              latest industry trends. I'm excited to apply these skills and
              knowledge in future projects and contribute to innovative product
              solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              Learn more about the HNG Internship program:
            </Typography>
            <List>
              <ListItem>
                <Button href="https://hng.tech" target="_blank" color="primary">
                  HNG Tech
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  href="https://hng.tech/internship"
                  target="_blank"
                  color="primary"
                >
                  HNG Internship
                </Button>
              </ListItem>
            </List>
          </Box>
        );
      case 4: // Contact
        return (
          <Box>
            <Typography variant="h4" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" paragraph>
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </Typography>
            <List>
              <ListItem>
                <EmailIcon sx={{ mr: 2 }} />
                <Typography>dhymyantt1@gmail.com</Typography>
              </ListItem>
              <ListItem>
                <LinkedInIcon sx={{ mr: 2 }} />
                <Button
                  href="https://www.linkedin.com/in/dimojiaku-anthony/"
                  target="_blank"
                  color="primary"
                >
                  LinkedIn
                </Button>
              </ListItem>
              <ListItem>
                <GitHubIcon sx={{ mr: 2 }} />
                <Button
                  href="https://github.com/DimTony"
                  target="_blank"
                  color="primary"
                >
                  GitHub
                </Button>
              </ListItem>
            </List>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Dimojiaku Obinna Anthony (Slack ID: @TonyDim) - Product Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Home" />
          <Tab label="Projects" />
          <Tab label="Skills" />
          <Tab label="Growth" />
          <Tab label="Contact" />
        </Tabs>
        <Box sx={{ mt: 4 }}>{renderContent()}</Box>
      </Container>
    </ThemeProvider>
  );
};

export default PMPortfolio;
