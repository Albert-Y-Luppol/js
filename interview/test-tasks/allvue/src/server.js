import {db} from './db';
import { Server } from './models';

export const server = new Server(db);

