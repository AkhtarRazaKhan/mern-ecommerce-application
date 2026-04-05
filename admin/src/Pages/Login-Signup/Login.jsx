
import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [form, setForm] = useState({ email: "", password: "", remember: false, name: "" });
  const [loadingSocial, setLoadingSocial] = useState(""); // "google" or "facebook"

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login Data:" : "Signup Data:", form);
    alert(isLogin ? "Login Success (dummy) 🚀" : "Signup Success (dummy) 🚀");
  };

  const handleSocialLogin = (provider) => {
    setLoadingSocial(provider);
    // simulate async social login
    setTimeout(() => {
      alert(`${provider} login success (dummy) 🚀`);
      setLoadingSocial("");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg">
        {/* Login/Signup Tabs */}
        <div className="flex mb-6 border-b-2 border-gray-200">
          <button
            className={`flex-1 py-3 font-semibold text-center rounded-t-lg ${
              isLogin ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-3 font-semibold text-center rounded-t-lg ${
              !isLogin ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {isLogin ? "Sign in with your credentials." : "Sign up to get started."}
        </p>

      

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 mb-6">
            {/* Name field for signup */}
            {!isLogin && (
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            )}

            {/* Email */}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            {/* Password */}
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          {/* Remember & Forgot (only login) */}
          {isLogin && (
            <div className="flex items-center justify-between mb-6">
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Remember Me"
              />
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="!bg-blue-600 hover:!bg-blue-700 !py-3 !text-lg !rounded-lg"
          >
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </Button>
        </form>
      </div>
    </div>
  );
}



