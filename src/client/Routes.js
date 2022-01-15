import ChatManagerComponent from "./chat/ChatManagerComponent";
import MessengerComponent from "./chat/MessengerComponent";
import ProfileComponent from "./profile/ProfileComponent";
import ChangePasswordComponent from "./profile/ChangePasswordComponent";
import LayoutComponent from "./layouts/LayoutComponent";
import LogInComponent from "./auth/LogInComponent";
import RegisterComponent from "./auth/RegisterComponent";

const routes =
  {
    path: '',
    children: [
      {
        path: 'chat',
        component: ChatManagerComponent,
        default: true,
        children: [
          {
            path: ':id',
            component: MessengerComponent,
          },
        ]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'password',
            component: ChangePasswordComponent,
          },
        ]
      },
      {
        path: 'auth',
        component: LayoutComponent,
        children: [
          {
            path: 'login',
            component: LogInComponent,
          },
          {
            path: 'register',
            component: RegisterComponent
          },
        ]
      }
    ],
  };

export default routes;
