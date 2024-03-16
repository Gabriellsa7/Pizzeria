import { Link } from "react-router-dom";
import * as S from "./styles";

import {
  Button,
  Icons,
  Input,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  arrowIcon,
  logo2,
} from "./mocks";
import { LeftSection, RightSection } from "../../components/Section";
import { Text } from "../../components/Text";
import { useTheme } from "styled-components";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { supabase } from "../../services/supabase";

export default function SignIn() {
  const theme = useTheme();

  // const navigate = useNavigate();

  // const user = undefined;

  // const [currentScreen, setCurrentScreen] = useState(0);
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  // });

  // const handleChangeValues = (event) => {
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  // const handleFormRegisterSubmit = async (e) => {
  //   e.preventDefault();

  //   if (values.password !== values.passwordConfirm)
  //     toast.error("As senhas não coincidem");
  //   if (values.password.length < 6)
  //     toast.error("A senha deve ter pelo menos 6 caracters");

  //   const { user, error } = await supabase.auth.signUp({
  //     email: values.email,
  //     password: values.password,
  //   });

  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  // };

  // const handleFormLoginSubmit = async (e) => {
  //   e.preventDefault();

  //   const {user, error} = await supabase.auth.signInWithPassword({
  //       email: "",
  //       password: "",
  //   })
  // };

  // const handleSignOut = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <S.Container>
      <LeftSection>
        <img src={logo2} alt="Logo Pizzeria" />
      </LeftSection>
      <RightSection>
        <S.TopText>
          <Link to="/login">
            <Text
              as="p"
              fontSize="default"
              color={theme.color.secondary.contrastTextPrimary}
            >
              Login
            </Text>
          </Link>
        </S.TopText>
        <Text
          as="h1"
          color={theme.color.secondary.contrastTextPrimary}
          fontSize="xx"
          fontWeight="bold"
        >
          Welcome to
          <strong> Boruto Pizzaria</strong>
        </Text>
        <S.InputsContainer>
          {/* {!user && currentScreen === 1 && <>{navigate("/home")}</>}
          {!user && currentScreen === 0 && ( */}
          <S.Form /*onSubmit={handleFormRegisterSubmit}*/>
            <Input
              required
              label="Email"
              name="email"
              type="email"
              placeHolder="Email"
              // onChange={handleChangeValues}
              // value={values.email}
            />
            <Input
              required
              label="Password"
              name="password"
              type="password"
              placeHolder="Password"
              // onChange={handleChangeValues}
              // value={values.password}
            />
            <Input
              required
              label="Repeat your Password"
              name="passwordConfirm"
              type="password"
              placeHolder="Repeat your Password"
              // onChange={handleChangeValues}
              // value={values.passwordConfirm}
            />
            <Link to="/home">
              <Button className="button" type="submit">
                Register
              </Button>
            </Link>
          </S.Form>
          {/* )} */}
        </S.InputsContainer>
        <S.ContainerIcons>
          <Text as="span">
            <img src={arrowIcon} alt="Icon Arrow" />
          </Text>
          <Text
            as="p"
            fontSize="lg"
            color={theme.color.secondary.contrastTextPrimary}
          >
            Create an account on
          </Text>
          <Icons>
            <FaFacebook size="2.5rem" />
            <FaInstagram size="2.5rem" />
            <FaGoogle size="2.5rem" />
          </Icons>
        </S.ContainerIcons>
      </RightSection>
    </S.Container>
  );
}
