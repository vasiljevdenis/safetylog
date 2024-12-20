import { AlertColor } from "@mui/material";
import { makeAutoObservable } from "mobx";

const authStatus = localStorage.getItem('isAuth') ? true : false;

class appState {

  snackOpen: boolean = false;
  snackSeverity: AlertColor = 'success';
  snackText: string = '';
  isAuth: boolean = authStatus;
  headerShow: boolean = true;
  footerShow: boolean = true;
  language: string = 'English';
  siteInduction: boolean = false;
  passInduction: boolean = false;

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

  toggleHeader(s: boolean) {
    this.headerShow = s;
  }
  toggleFooter(s: boolean) {
    this.footerShow = s;
  }

  changeLang(l: string) {
    this.language = l;
  }
  changeSiteInd(s: boolean) {
    this.siteInduction = s;
  }
  changePassInd(s: boolean) {
    this.passInduction = s;
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
  get headerShowStatus() {
    return this.headerShow;
  }
  get footerShowStatus() {
    return this.footerShow;
  }
  get appLang() {
    return this.language;
  }
  get siteInd() {
    return this.siteInduction;
  }
  get passInd() {
    return this.passInduction;
  }

}

export default new appState();
