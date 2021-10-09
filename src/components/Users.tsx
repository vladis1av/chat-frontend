import { Typography } from '@material-ui/core';
import React from 'react';
import User from './User';

const Users = () => {
  return (
    <div>
      <Typography>Список Пользователей</Typography>
      <User name="vlad" />
      <User name="vlad" />
      <User name="vlad" />
      <User name="vlad" />
      <User name="vlad" />
    </div>
  );
};

export default Users;
