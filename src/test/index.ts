import User from "../databases/mongoose/model/user.model";

const main = async () => {
  //   User.create({
  //     email: "facu@hotmail.com",
  //     password: "asdasdasd",
  //     name: "facu",
  //   });
  User.findOne({ email: "facu@hotmail.com" }).then((user) => {
    console.log(user);
  });
};

export default main;
