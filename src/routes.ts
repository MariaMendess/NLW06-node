import { Router } from 'express';
import { CreateUserController } from './controlles/CreateUserController';
import { CreateTagController } from "./controlles/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controlles/AuthenticateUserController"
import { CreateComplimentController } from './controlles/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserReceiveComplimentsController } from './controlles/ListUserReceiveComplimentsController';
import { ListUserSenderComplimentsController } from './controlles/ListUserSenderComplimentsController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/sender", ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get("/users/compliments/receiver",ensureAuthenticated, listUserReceiveComplimentsController.handle);

export { router };