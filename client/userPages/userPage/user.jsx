import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './user.css';

const UserPage = (props) => {
  const body = {
    session_id: Cookies.get('session_id')
  };
  const navigate = useNavigate();
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    fetch('/api/checkSession', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data[0]) {
          return navigate('/SignUp');
        }
        setUser(data[0]);
      })
      .catch(e => console.log('err: ', e));
  }, []);

  const removeSession = () => {
    const body = {
      session_id: user.user_name
    };
    Cookies.remove('session_id');
    fetch('/api/removeSession', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/');
        location.reload();
      })
      .catch(e => console.log('err: ', e));
  };


  if (!user) {
    return <>Loading..</>
  }
  return (<div className='userMainDiv'>
          <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                          <div className="card-block text-center text-white">
                              <h6 className="welcome">Welcome, {user.user_name}</h6>
                          </div>
                      </div>
                      <div className="col-sm-8">
                          <div className="card-block">
                              <div className="row">
                                  <div className="col-sm-6">
                                      <p className="m-b-10 f-w-600">Name</p>
                                      <h6 className="text-muted f-w-400">{user.first_name} {user.last_name}</h6>
                                  </div>
                                  <div className="col-sm-6">
                                      <p className="m-b-10 f-w-600">Username</p>
                                      <h6 className="text-muted f-w-400">{user.user_name}</h6>
                                  </div>
                                  <div className="col-sm-6">
                                      <p className="m-b-10 f-w-600">Password</p>
                                      {/* <h6 className="text-muted f-w-400">********</h6> */}
                                      <input type="password" readOnly value="*dsad**"/>
                                  </div>
                              </div>
                              </div>
                              <p className="m-b-10 f-w-600">Recycling Progress</p>
                              <div className="userProgressBar" style={{width: '400px'}}>
                                <div className="userProgress" style={{width: `${user.recycle_progress}40%`}}></div>
                                <br/>
                          </div>
                              <span className='logout-button' onClick={removeSession}>Logout</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>);
};

export default UserPage;