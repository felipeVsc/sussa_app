import { Professional } from "../../../../modules/professionals/entities/Professional";

type TLastScreen = 'About' | 'Home';
export interface IChatScreenRouteParams {
  params: {
    chat: Object;
    lastScreen: TLastScreen;
  }
}