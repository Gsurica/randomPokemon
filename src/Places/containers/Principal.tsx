import { FC } from 'react';

import { Contents } from '../components/Contents'

export const Principal: FC = () => {
  return (
    <Contents title="Feito por: " names={["Priscila,", " Gabriel,", " Guilherme,", " Michel"]} />
  )
}