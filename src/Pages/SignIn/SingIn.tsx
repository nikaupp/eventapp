import React, { useContext, useState } from 'react';
import * as routes from '../../Constants/Routes_MODIF';
import { Formik, Form, FormikActions } from 'formik';
import { TextField } from '../../Components/TextInput/Textinput';
import { TextAreaField } from '../../Components/TextArea/TextArea';
import { LoginWrapper } from './LoginWrapper';
import { useDocumentTitle } from '../../Data/useDocumentTitle';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { Button } from '../../Components/Button/Button';
import { IconButton } from '../../Components/Button/IconButton';
import Icons from '../../Components/Icons/icons';
import { auth } from '../../Firebase/index';
import { TextFieldBase } from '../../Components/TextInput/TextinputBase';
import Notify from '../../Utils/Notification';
import * as Yup from 'yup';

export const SignInPage = () => {
	useDocumentTitle('Kirjaudu sisään');
	const { isDarkTheme, toggleTheme, authorization } = useContext(AppContext);

	const handleSignIn = (values: form, actions: FormikActions<form>) =>
		auth
			.signInWithEmailAndPassword(values.email, values.password)
			.then((authe: any) => {
				// history.push(routes.LANDING);
				// console.log(authe);
				// Notify.success('Successfully signed in');
			})
			.catch((error) => {
				console.exception(error);
				actions.resetForm();
				Notify.error(error.message);
			});

	return (
		<LoginWrapper>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSignIn}
				validationSchema={validationSchema}
			>
				<section className="loginbox">
					<Form>
						<h2 className="loginbox__heading">
							<span className="loginbox__heading__text">MumuApp</span>
						</h2>
						<span className="loginbox__ingress">
							Sovelluksen käyttö vaatii sisäänkirjautumisen
						</span>

						<div className="loginbox__inputs">
							<TextFieldBase
								name="email"
								className="loginbox__inputs__input"
								placeholder="Käyttäjä"
							></TextFieldBase>
							<TextFieldBase
								name="password"
								className="loginbox__inputs__input"
								placeholder="Salasana"
								type="password"
							></TextFieldBase>
						</div>

						<div className="loginbox__buttonfooter">
							<Button
								text="Kirjaudu sisään"
								className="loginbox__buttonfooter__btn"
								icon={Icons.arrowRight}
								type="submit"
							></Button>
							<Link to={routes.signUp.path} className="loginbox__buttonfooter__linkbtn">
								Luo uusi tili
							</Link>
						</div>

						<IconButton
							size="large"
							icon={isDarkTheme ? Icons.moon : Icons.sun}
							className="loginbox__nightmode"
							onClick={toggleTheme}
						></IconButton>
					</Form>
				</section>
			</Formik>
		</LoginWrapper>
	);
};

type form = typeof initialValues;

const initialValues = {
	email: '',
	password: ''
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required(),
	password: Yup.string().required()
});