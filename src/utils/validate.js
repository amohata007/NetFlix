export const checkValidData = (email, password, name, isSignIn) => {
  let checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  let passwordCheck =
    /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/.test(password);

  if (!isSignIn) {
    let nameCheck = name?.length > 4;
    if (!nameCheck) return "Name should be at least 4 characters.";
  }
  if (!checkEmail) return "Email Id is not valid";
  if (!passwordCheck) return "Password is not valid";

  return null;
};
