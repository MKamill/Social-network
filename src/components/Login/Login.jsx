import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../Utils/Validators/validators';
import { Input } from '../common/FormControls/FormControls';
import { login } from '../../redux/auth-reducer'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'email'} name={'email'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder={'password'} name={'password'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={"checkbox"} name={'rememberMe'} component={Input} /> remember me
    </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(Login);
