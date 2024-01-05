import { AlertColor } from "@mui/material";
import { makeAutoObservable } from "mobx";

const authStatus = localStorage.getItem('isAuth') ? true : false;

class appState {

  snackOpen: boolean = false;
  snackSeverity: AlertColor = 'success';
  snackText: string = '';
  isAuth: boolean = authStatus;
  isProfile: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  openSnackbar(severity: AlertColor, text: string) {
    this.snackSeverity = severity;
    this.snackText = text;
    this.snackOpen = true;
  }

  closeSnackbar() {
    this.snackOpen = false;
  }

  logInOut() {
    this.isAuth = !this.isAuth;
  }

  toggleProfile(s: boolean) {
    this.isProfile = s;
  }

  get snackbarOpen() {
    return this.snackOpen;
  }
  get snackbarSeverity() {
    return this.snackSeverity;
  }
  get snackbarText() {
    return this.snackText;
  }
  get isAuthenticated() {
    return this.isAuth;
  }
  get isProfileStatus() {
    return this.isProfile;
  }

}

export default new appState();
