import { FaFacebook, FaGoogle } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import PropTypes from "prop-types";
const SocialLogin = ({ navigate, from }) => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn().then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        if (user?.email) {
          const userInfo = {
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
            type: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            navigate(from ? from : "/");
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-evenly my-6 ">
      <button
        onClick={handleGoogleSignIn}
        className="btn text-[#4285F4] bg-white font-bold "
      >
        <FaGoogle />
        Google
      </button>
      <button className="btn text-[#3b5998] bg-white font-bold">
        <FaFacebook />
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;

SocialLogin.propTypes = {
  navigate: PropTypes.func,
  from: PropTypes.string,
};
