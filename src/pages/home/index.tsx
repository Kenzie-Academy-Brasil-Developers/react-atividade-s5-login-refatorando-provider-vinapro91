import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Authcontext } from "../../Provider/Auth/index";
import { useHistory } from "react-router";
interface userData {
  email: string;
  password: string;
}
export const Home = () => {
  const { singIn, logout } = useContext(Authcontext);
  const formSchema = yup.object().shape({
    email: yup.string().required("Nome Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });
  const { register, handleSubmit } = useForm<userData>({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const onSubmitFunction = (data: userData) => {
    singIn(data);
    history.push("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <input placeholder="email" {...register("email")} />
      <input type="password" placeholder="senha" {...register("password")} />
      <button type="submit">Enviar</button>
    </form>
  );
};
