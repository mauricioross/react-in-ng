import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import {FifButtonProps, FifButton} from '@palta-ui/components';
// import {Button} from '@fif/palta-ui-react';
export interface IMyComponentProps {
}

export const CustomReactComp: FunctionComponent<FifButtonProps> = (props: FifButtonProps) => {
    const {variant} = props;

  return (
    <div>
       <FifButton label='Texto'></FifButton>
    </div>
  );
};
