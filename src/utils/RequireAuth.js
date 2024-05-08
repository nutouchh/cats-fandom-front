// import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { push } from "react-router-redux/lib/actions";
// import SpaceCat from "../components/SpaceCat";
//
// export default function requireAuth(Component) {
//     class AuthenticatedComponent extends React.Component {
//         constructor(props) {
//             super(props);
//             console.log("AuthenticatedComponent constructor");
//             this.checkAuth();
//         }
//
//         componentDidUpdate(prevProps, prevState) {
//             console.log("AuthenticatedComponent componentDidUpdate");
//             this.checkAuth();
//         }
//
//         checkAuth() {
//             console.log("AuthenticatedComponent checkAuth");
//             if (!this.props.isAuthenticated) {
//                 console.log("User is not authenticated. Redirecting to login page.");
//                 const redirectAfterLogin = this.props.location.pathname;
//                 this.props.dispatch(push(`/login?next=${redirectAfterLogin}`));
//             }
//         }
//
//         render() {
//             console.log("AuthenticatedComponent render");
//             return (
//                 <div>
//                     {this.props.isAuthenticated === true ? (
//                         <Component {...this.props} />
//                     ) : null}
//                 </div>
//             );
//         }
//     }
//     AuthenticatedComponent.propTypes = {
//         isAuthenticated: PropTypes.bool.isRequired,
//         location: PropTypes.shape({
//             pathname: PropTypes.string.isRequired
//         }).isRequired,
//         dispatch: PropTypes.func.isRequired
//     };
//
//     const mapStateToProps = state => {
//         return {
//             isAuthenticated: state.auth.isAuthenticated,
//             token: state.auth.token
//         };
//     };
//
//     return connect(mapStateToProps)(AuthenticatedComponent);
// }



//
// import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { push } from "react-router-redux/lib/actions";
// import { withRouter } from "react-router-dom"; // Импортируем withRouter
//
// export default function requireAuth(Component) {
//     class AuthenticatedComponent extends React.Component {
//         constructor(props) {
//             super(props);
//             console.log("AuthenticatedComponent constructor");
//             this.checkAuth();
//         }
//
//         componentDidUpdate(prevProps, prevState) {
//             console.log("AuthenticatedComponent componentDidUpdate");
//             this.checkAuth();
//         }
//
//         checkAuth() {
//             console.log("AuthenticatedComponent checkAuth");
//             if (!this.props.isAuthenticated) {
//                 console.log("User is not authenticated. Redirecting to login page.");
//                 const redirectAfterLogin = this.props.location.pathname;
//                 this.props.dispatch(push(`/login?next=${redirectAfterLogin}`));
//             }
//         }
//
//         render() {
//             console.log("AuthenticatedComponent render");
//             return (
//                 <div>
//                     {this.props.isAuthenticated === true ? (
//                         <Component {...this.props} />
//                     ) : null}
//                 </div>
//             );
//         }
//     }
//     AuthenticatedComponent.propTypes = {
//         isAuthenticated: PropTypes.bool.isRequired,
//         location: PropTypes.shape({
//             pathname: PropTypes.string.isRequired
//         }).isRequired,
//         dispatch: PropTypes.func.isRequired
//     };
//
//     const mapStateToProps = state => {
//         return {
//             isAuthenticated: state.auth.isAuthenticated,
//             token: state.auth.token
//         };
//     };
//
//     // Оборачиваем компонент withRouter, чтобы передать location в пропсы
//     return withRouter(connect(mapStateToProps)(AuthenticatedComponent));
// }



// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { push } from "react-router-redux/lib/actions";
// import { useLocation } from "react-router-dom";
//
// export default function requireAuth(Component) {
//     const AuthenticatedComponent = ({isAuthenticated, dispatch, children}) => {
//         const location = useLocation();
//
//         useEffect(() => {
//             console.log("AuthenticatedComponent checkAuth");
//             if (!isAuthenticated) {
//                 console.log("User is not authenticated. Redirecting to login page.");
//                 const redirectAfterLogin = location.pathname;
//                 dispatch(push(`/login?next=${redirectAfterLogin}`));
//             }
//         }, [isAuthenticated, location, dispatch]);
//
//         console.log("AuthenticatedComponent render");
//         return (
//             <div>
//                 {isAuthenticated === true ? children : null}
//             </div>
//         );
//     };
//
//     AuthenticatedComponent.propTypes = {
//         isAuthenticated: PropTypes.bool.isRequired,
//         dispatch: PropTypes.func.isRequired,
//         children: PropTypes.node.isRequired
//     };
//
//     const mapStateToProps = state => {
//         return {
//             isAuthenticated: state.auth.isAuthenticated,
//             token: state.auth.token
//         };
//     };
//
//     return connect(mapStateToProps)(AuthenticatedComponent);
// }
//
//
//



//
//
//
//
//
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { push } from "react-router-redux/lib/actions";
// import {useLocation, useNavigate} from "react-router-dom";
//
// export default function requireAuth(Component) {
//     const AuthenticatedComponent = ({ isAuthenticated, dispatch }) => {
//         const location = useLocation();
//         const navigate = useNavigate();
//
//         useEffect(() => {
//             console.log("AuthenticatedComponent checkAuth");
//             if (!isAuthenticated) {
//                 console.log("User is not authenticated. Redirecting to login page.");
//                 const redirectAfterLogin = location.pathname;
//                 console.log({redirectAfterLogin});
//                 dispatch(navigate(`/login?next=${redirectAfterLogin}`
//                 ));
//             }
//         }, [isAuthenticated, location, dispatch]);
//
//         console.log("AuthenticatedComponent render");
//         return (
//             <div>
//                 <Component /> {/* Передача вложенного компонента */}
//             </div>
//         );
//     };
//
//     AuthenticatedComponent.propTypes = {
//         isAuthenticated: PropTypes.bool.isRequired,
//         dispatch: PropTypes.func.isRequired
//     };
//
//     const mapStateToProps = state => {
//         return {
//             isAuthenticated: state.auth.isAuthenticated,
//             token: state.auth.token
//         };
//     };
//
//     return connect(mapStateToProps)(AuthenticatedComponent);
// }












// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
//
// export default function requireAuth(Component) {
//     const AuthenticatedComponent = ({ isAuthenticated }) => {
//         const location = useLocation();
//         const navigate = useNavigate();
//
//         useEffect(() => {
//             console.log("AuthenticatedComponent checkAuth");
//             if (!isAuthenticated) {
//                 console.log("User is not authenticated. Redirecting to login page.");
//                 const redirectAfterLogin = location.pathname;
//                 navigate(`/login?next=${redirectAfterLogin}`);
//             }
//         }, [isAuthenticated, location, navigate]);
//
//         console.log("AuthenticatedComponent render");
//         return (
//             <div>
//                 <Component /> {/* Передача вложенного компонента */}
//             </div>
//         );
//     };
//
//     AuthenticatedComponent.propTypes = {
//         isAuthenticated: PropTypes.bool.isRequired
//     };
//
//     return AuthenticatedComponent;
// }

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {push} from "react-router-redux/lib/actions";
import {useLocation} from "react-router-dom";
import {connect} from "react-redux";

// export default function requireAuth(Component) {
//     const AuthenticatedComponent = ({ isAuthenticated }) => {
//         const location = useLocation();
//         const navigate = useNavigate();
//
//         useEffect(() => {
//             console.log("AuthenticatedComponent checkAuth");
//             if (!isAuthenticated) {
//                 console.log("User is not authenticated. Redirecting to login page.");
//                 const redirectAfterLogin = location.pathname;
//                 navigate(`/login?next=${redirectAfterLogin}`);
//             }
//         }, [isAuthenticated, location, navigate]);
//
//         console.log("AuthenticatedComponent render");
//         return isAuthenticated ? <Component /> : null;
//     };
//
//     AuthenticatedComponent.propTypes = {
//         isAuthenticated: PropTypes.bool.isRequired
//     };
//
//     return AuthenticatedComponent;
// }


export default function requireAuth(Component) {


    // const navigate = useNavigate();
    class AuthenticatedComponent extends React.Component {

        constructor(props) {
            super(props);
            this.checkAuth();
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const location = useLocation();
        }
        componentDidUpdate(prevProps, prevState) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                const redirectAfterLogin = this.props.location.pathname;
                this.props.dispatch(push(`/login?next=${redirectAfterLogin}`));
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true ? (
                        <Component {...this.props} />
                    ) : null}
                </div>
            );
        }
    }
    AuthenticatedComponent.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired
        }).isRequired,
        dispatch: PropTypes.func.isRequired
    };

    const mapStateToProps = state => {
        return {
            isAuthenticated: state.auth.isAuthenticated,
            token: state.auth.token
        };
    };

    return connect(mapStateToProps)(AuthenticatedComponent);
}
