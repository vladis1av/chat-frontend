import { Avatar, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

interface UserProps {
  name: string;
  message?: string;
  smallAvatar?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  user: {
    width: '100%',
    marginBottom: 20,
  },
  userInfo: { display: 'flex', alignItems: 'center' },
  username: {
    marginLeft: 10,
  },
  message: {
    paddingLeft: 50,
  },
}));

const User: React.FC<UserProps> = ({ name, message, smallAvatar }) => {
  const cls = useStyles();
  return (
    <div className={cls.user}>
      <div className={cls.userInfo}>
        <Avatar>
          <PersonOutlineOutlinedIcon />
        </Avatar>
        <Typography className={cls.username}>{name}</Typography>
      </div>
      <div>
        {message ? (
          <Typography className={cls.message}>{message}</Typography>
        ) : null}
      </div>
    </div>
  );
};

export default User;
