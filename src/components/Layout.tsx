import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 10px',
    height: '100vh',
  },
  gridContainer: {
    height: '100%',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const cls = useStyles();

  return (
    <Box className={cls.container}>
      <Grid container className={cls.gridContainer}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
