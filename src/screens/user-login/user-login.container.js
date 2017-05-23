import { connect } from 'react-redux';
import userLoginComponent from './user-login.component';

import { asyncUserLogin, asyncUserLogout, cleanUserErrors, visitorLogin } from '../../actions/user-actions';
import { Actions, ActionConst } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    sendingData: state.user.sendingData,
    errors: state.user.errors,
    email: state.user.email,
    password: state.user.password,
    isVisitor: state.user.isVisitor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin(userData) {
      const callback = (loggedUser) => {
        Actions.Home({type: ActionConst.REPLACE});
      }

      dispatch(asyncUserLogin(userData, callback));
      dispatch(visitorLogin(false));
    },

    userLogout() {
      dispatch(asyncUserLogout());
      dispatch(visitorLogin(false));
    },

    cleanUserErrors(){
      dispatch(cleanUserErrors());
    },

    enterAsVisitor(){
      dispatch(visitorLogin(true));
      Actions.Home({type: ActionConst.REPLACE});
    }
  }
}

const userLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(userLoginComponent)

export default userLoginContainer;
