import { Router } from "express";

import { CreateArticleController } from "./controllers/article/CreateArticleController";
import { DeleteArticleController } from "./controllers/article/DeleteArticleController";
import { FindArticleByIDController } from "./controllers/article/FindArticleByIDController";
import { ListArticlesController } from "./controllers/article/ListArticlesController";
import { UpdateArticleController } from "./controllers/article/UpdateArticleController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";
import { CreateTagController } from "./controllers/tag/CreateTagController";
import { DeleteTagController } from "./controllers/tag/DeleteTagController";
import { ListTagsController } from "./controllers/tag/ListTagsController";
import { UpdateTagController } from "./controllers/tag/UpdateTagController";
import { CreateUserController } from "./controllers/user/CreateUserController";

const routes = Router();

routes.post('/users', new CreateUserController().handle);

// categories
routes.post('/categories', new CreateCategoryController().handle);
routes.put('/categories/:id', new UpdateCategoryController().handle);
routes.get('/categories', new ListCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);

// tags
routes.post('/tags', new CreateTagController().handle);
routes.put('/tags/:id', new UpdateTagController().handle);
routes.get('/tags', new ListTagsController().handle);
routes.delete('/tags/:id', new DeleteTagController().handle);

// articles
routes.post('/articles', new CreateArticleController().handle);
routes.put('/articles/:id', new UpdateArticleController().handle);
routes.get('/articles', new ListArticlesController().handle);
routes.get('/articles/:id', new FindArticleByIDController().handle);
routes.delete('/articles/:id', new DeleteArticleController().handle);

export default routes;
