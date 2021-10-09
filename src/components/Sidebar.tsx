import React from 'react';
import {
  Button,
  Container,
  List,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    padding: 0,
  },
  btnCreateRoom: {
    marginLeft: 'auto',
  },
  listItem: {
    backgroundColor: '#242734',
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
  },
}));

const Sidebar: React.FC = () => {
  const cls = useStyles();
  return (
    <Container className={cls.container}>
      <List>
        <ListItem className={cls.listItem} style={{ height: '70px' }}>
          <Typography>Комнаты</Typography>
          <Button className={cls.btnCreateRoom}>
            <AddCircleIcon />
          </Button>
        </ListItem>
        <ListItem button className={cls.listItem}>
          <Typography variant="body1">Название комнаты</Typography>
        </ListItem>
      </List>
    </Container>
  );
};

export default Sidebar;
