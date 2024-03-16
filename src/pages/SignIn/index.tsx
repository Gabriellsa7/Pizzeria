import { Link } from "react-router-dom";
import * as S from "./styles";
// import { string, z } from "zod";

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
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
// import { supabase } from "../../services/supabase";

// type FormData = {
//   email: string;
//   password: string;
// };

// type stateType = {
//   loading: boolean;
//   disable: boolean;
//   error: undefined;
//   email: string;
//   password: string;
// };

export default function SignIn() {
  const theme = useTheme();

  // const [emailFocused, setEmailFocused] = useState(false);
  // const [passwordFocused, setPasswordFocused] = useState(false);

  // const handleEmailFocus = () => {
  //   setEmailFocused(true);
  // };

  // const handlePasswordFocus = () => {
  //   setPasswordFocused(true);
  // };

  // const handleEmailChange = () => {
  //   setEmailFocused(false);
  // };

  // const handlePasswordChange = () => {
  //   setPasswordFocused(false);
  // };

  // const schema = z
  //   .object({
  //     email: string().email(),
  //     password: string().min(5).max(20),
  //   })
  //   .transform((fields) => ({
  //     password: fields.password.toLocaleUpperCase(),
  //   }));

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: zodResolver(schema),
  // });

  // const submitData = (data: FormData) => {
  //   console.log("IT WORKED", data);
  // };

  // const state: stateType = {
  //   loading: false,
  //   disable: false,
  //   error: undefined,
  //   email: "boruto@gmail.com",
  //   password: "boruto",
  // };

  // const signup = async () => {
  //   try {
  //     let { data, error } = await supabase.auth.signUp({
  //       email: state.email,
  //       password: state.password,
  //     });

  //     if (error) {
  //       throw error;
  //     }
  //   } catch (error) {
  //     console.error("Error signing up:", error.message);
  //     // Trate o erro de acordo com as necessidades da sua aplicação
  //   }
  // };

  // const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // console.log(formData);

  // function handleChange(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  // async function handleSubmit2(e) {
  //   e.preventDefault();

  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email: formData.email,
  //       password: formData.password,
  //     });

  //     if (error) throw error;
  //     console.log(data);
  //     setToken(data);
  //     navigate("/homepage");

  //     //   alert('Check your email for verification link')
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  return (
    <S.Container>
      <LeftSection>
        <img src={logo2} alt="Logo Pizzeria" />
      </LeftSection>
      <RightSection>
        <S.TopText>
          <Link to="/register">
            <Text
              as="p"
              fontSize="default"
              color={theme.color.secondary.contrastTextPrimary}
            >
              Register
            </Text>
          </Link>
        </S.TopText>
        <Text
          as="h1"
          color={theme.color.secondary.contrastTextPrimary}
          fontSize="xx"
          fontWeight="bold"
        >
          Make Your Login Now
        </Text>
        <S.InputsContainer>
          <S.Form /*onSubmit={handleSubmit2}*/>
            <Input
              label="Email"
              type="text"
              placeHolder="Email"
              // {...register("email")}
              // onChange={handleChange}
              // onFocus={handleEmailFocus}
            />
            {/* {errors.email && emailFocused && (
              <S.SpanRequired>enter the email</S.SpanRequired>
            )} */}
            <Input
              label="Password"
              type="password"
              placeHolder="Password"
              // {...register("password")}
              // onChange={handleChange}
              // onFocus={handlePasswordFocus}
            />
            {/* {errors.password && !passwordFocused && (
              <S.SpanRequired>enter the Password</S.SpanRequired>
            )} */}
            <Link to="/home">
              <Button /*onCLick={signup}*/ className="button" type="submit">
                Login
              </Button>
            </Link>
          </S.Form>
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
            or Login with
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
