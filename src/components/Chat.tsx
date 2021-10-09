import React from 'react';
import Users from './Users';
import Grid from '@material-ui/core/Grid';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton, InputBase, makeStyles, Theme } from '@material-ui/core';
import User from './User';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '15px 0px 50px 20px',
    height: '100%',
  },
  messagesContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chatInput: {},
  comments: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Chat: React.FC = () => {
  const cls = useStyles();
  return (
    <Grid container spacing={0} className={cls.container}>
      <Grid item xs={8} className={cls.messagesContainer}>
        <div>
          <User
            name="vlad"
            message="Отправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщение"
          />
          <User
            name="vlad"
            message="Отправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщениеОтправить сообщение"
          />
        </div>

        <div className={cls.chatInput}>
          <InputBase placeholder="Отправить сообщение" />
          <IconButton>
            <SendRoundedIcon color="secondary" />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={4} className={cls.comments}>
        <Users />
      </Grid>
    </Grid>
  );
};

export default Chat;
