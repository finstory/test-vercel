import { IRouter, Router, Request, Response } from "express";
import { IUser } from "../../database/mongo/model/User.model";
import { isLoggedIn } from "../../middleware/isLoggedIn";
import { logoutGet } from "../../controller/auth/auth.controller";

const router: IRouter = Router();

router.get("/protected", isLoggedIn, (req: Request, res: Response) => {
  const user = req.user as IUser; // Hacemos una conversiÃ³n de tipo

  if (
    !user ||
    !user.photos ||
    !user.photos.length ||
    !user.emails ||
    !user.emails.length ||
    !user.provider
  )
    res.status(400).send("User profile is incomplete.");
  //  else  res.status(200).json(user);
  else {
    res.cookie("user", user); // Guarda el usuario en las cookies
    res.redirect("http://localhost:3000/");
  }

  // res.send(`
  //     <img width=80 src="${user.photos[0].value}" />
  //     <h1>Hello ${user.displayName}</h1>
  //     <h4>Your email: ${user.emails[0].value}</h4>
  //     <h4>Your provider: ${user.provider}</h4>
  //     <a href="/logout">Logout</a>
  //   `);
});

export { router as protectedRouter };
