export type AppScreen = "welcome" | "auth" | "dataset" | "createSolution" | "solution" | "solutionRequest";

export interface IFormState {
  isBusy: boolean;
  appScreen: AppScreen;
  isInitCalled: boolean;
  authStatus: "OK" | "NO" | "ERROR";
  errorMessage: string;
  message: string;
}

export const formInitialState: IFormState = {
  isBusy: false,
  appScreen: "solution",
  isInitCalled: false,
  authStatus: "NO",
  errorMessage: "",
  message: "",
};

export interface IAppData {
  test: string;
}

export const appDataInitialState: IAppData = {
  test: "",
};
