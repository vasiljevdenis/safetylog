import { AlertColor } from "@mui/material";
import { makeAutoObservable } from "mobx";

const authStatus = localStorage.getItem('isAuth') ? true : false;

class appState {

  snackOpen: boolean = false;
  snackSeverity: AlertColor = 'success';
  snackText: string = '';
  isAuth: boolean = authStatus;
  isProfile: boolean = false;
  language: string = 'English';

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

  changeLang(l: string) {
    this.language = l;
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
  get appLang() {
    return this.language;
  }

}

export default new appState();
