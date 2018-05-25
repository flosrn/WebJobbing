import { Profile } from '../profile/profile.interface';

export interface Message {
    user: Profile;
    date: Date;
    lastMessage: string; 
}
