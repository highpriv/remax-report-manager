"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "../../components/index";

const LoginView: React.FC = () => {
  const router = useRouter();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginDisabled, setLoginDisabled] = useState(true);

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (!loginForm.email) {
      setEmailError("Email zorunludur.");
      return;
    }

    if (!loginForm.password) {
      setPasswordError("Şifre zorunludur.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (loginForm.email && !emailRegex.test(loginForm.email)) {
      setEmailError("Geçersiz email formatı.");
      return;
    }

    if (!emailError && !passwordError) {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    if (loginForm.email && loginForm.password) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [loginForm.email, loginForm.password]);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-2xl font-bold uppercase border-l-4 border-secondary pl-2 
          
        "
        >
          Re/Max Gayrimenkul
        </h1>

        <span className="uppercase text-xl font-semibold mt-6">Giriş Yap</span>
        <span className="mt-2 text-light text-sm">
          Hesabınıza erişmek için giriş yapın
        </span>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <div className="">
          {emailError ? (
            <span className="text-sm text-error italic">{emailError}</span>
          ) : (
            <span className="text-sm text-light">Email</span>
          )}
          <TextField
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            size="small"
            placeholder="Email adresinizi girin"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="">
          {passwordError ? (
            <span className="text-sm text-error italic">{passwordError}</span>
          ) : (
            <span className="text-sm text-light">Şifre</span>
          )}

          <TextField
            value={loginForm.password}
            type="password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            size="small"
            placeholder="Şifrenizi girin"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="">
          <button
            className={`bg-primary w-full p-2 rounded-md uppercase text-white text-sm ${
              loginDisabled ? "bg-disabled cursor" : ""
            }`}
            onClick={handleLogin}
            disabled={loginDisabled}
          >
            Giriş Yap
          </button>
        </div>
        <span className="text-sm text-light text-center">
          Şifrenizi mi unuttunuz?
          <a href="#" className="text-primary ml-1 text-link underline">
            Şifreni Sıfırla
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginView;
