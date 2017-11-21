import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.location.pathname
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formType) => { dispatch(formType) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
