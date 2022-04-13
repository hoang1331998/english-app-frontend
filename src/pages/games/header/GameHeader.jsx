import React from "react";
import "./style.scss";
import logoHVX from "../../../assets/logo/hvx-logo.png";
import { LoginOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { ROUTER_CONST } from "../../../config/paramsConst/RouterConst";

const GameHeader = () => {
  const history = useHistory();

  const onBack = () => {
    Swal.fire({
      title: "Are you sure you want to exit?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        history.push(ROUTER_CONST.home);
      }
    });
  };
  return (
    <div className="hvx-gameHeader">
      <div className="container">
        <div className="row justifySpaceBetween">
          <div className="hvx-headerContent-left">
            <img className="hvx-logo" src={logoHVX} alt="logoHVX" />
            <div className="text-logo">
              <h1> HaLinh-English</h1>
            </div>
          </div>
          <div className="hvx-headerContent-right center">
            <span>
              Your ID: <b>8121283</b>
            </span>
            <div className="hvx-btnBack ml-5" onClick={onBack}>
              <span>
                Back
                <LoginOutlined className="ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
