import { IBackendErrors } from 'src/app/shared/types/backend-errors.interface';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
