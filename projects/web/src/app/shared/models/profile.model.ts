import { Project } from './project.model';

export interface Profile {
  id?: string;
  email: string;
  displayName: string;
  photoURL: string;
  phoneNumber: string;
  projects?: Project[];
}
