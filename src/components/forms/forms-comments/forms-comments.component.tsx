import React from 'react';
import { InputDefault } from '../../inputs/input-default/input-default.component';
import { IFormsComments } from './forms-comments.model';
import './forms-comments.scss';

export const FormComments = ({ className = '', user }: IFormsComments) => {
	return (
		<form className="form-comments">
			<InputDefault value={user.name} id="user-name" write disabled />
		</form>
	);
};
